import json
import boto3  # pip install boto3
import os
import docx  # pip install python-docx
import re
# pip install pandas
from io import StringIO
from contextlib import redirect_stdout

# what even is security
os.environ["AWS_DEFAULT_REGION"] = "us-west-2"
os.environ[
    "AWS_SECRET_ACCESS_KEY"] = "9otySYUgx3cexCe+APAOmD6AH9x1mWw4F1hSuecZ"
os.environ[
    "AWS_SESSION_TOKEN"] = "IQoJb3JpZ2luX2VjEOL//////////wEaCXVzLWVhc3QtMSJGMEQCIE4oTrIsv8JRMqKmjwKlb1UrmDuFWlfvlfPOkXdz7T7ZAiAdlLyFy8jsfxbaSYznrZn5PDYbuuZTqbM/56hhcC6DlCqiAgiL//////////8BEAEaDDkwNTAxMDQ1NzUwMCIMHNCV76Wdg1vpYYRvKvYBtAEmYqq4A6LxFTY2Wc8PILC8p8ysjWqJ5rEs3tuPI3CfTVMLFexGmMtDagQZSecUxwzGnFkjzZ6dfpWAt/0qCIGFdBQMkODaC2goaVJ1CJb9LWiuErpSIeDkG5mj5GNkWoXvAjZ6T/NgHpVfAOXFI9J25T1Up4WFKVhNiZv+4jL1CAzvSv4JGnPM/nyl61lnd3YftQ6n7mqCZ/ZgMkW+Y/seBQXw+EuRwr0IU7x5tx5YwaysBgfiwZCr7a9IhiGyu2Cf6nADUUR+LO4bZEiIzME3ywEGWvonlwrS8BFIqC22SOu7GN/dgiN6I5KoJuyvEp4tppeJMMnX37MGOp4BkxWGqrUfO7BIK40i8d2mZ5aio/DFxQrIkhB3eJyE8A0XYlvaXcLDEDb4J53XvzcC3Mzu0Wbwn6IL39j6i0EiH9KFb2aQOkKuu7rln83eAjZUeO1M7Pd7wV5gIq3OQBnbP0xz57h3Bia+amOvyP4LRdvjvrzH/iM+KWtBSQEshQcioeeuINh0Kyw6noid6ypVbzMIXtcidFCeZXtAzzg="

session = boto3.Session()

bedrock = session.client(
    service_name='bedrock-runtime')  #creates a Bedrock client


def read_file(path):
    doc = docx.Document(path)
    return "\n\n".join([paragraph.text for paragraph in doc.paragraphs])


def get_conditions(doc_path):
    doctext = read_file(doc_path)
    prompt = """
    You are a tool for extracting conditions from legal contract. You are given the text of the contract and need to return the list of all clauses that need to be enforced, structured as a JSON file.
    You are specifically extracting the following items: delivery date, delivery amount, amount, goods, payment date, commencement date, delivery product, recycled content, max CO2 exhausts, supplier name.
    Each extracted condition should be an entry in a json dictionary.
    """
    input_text = f'Human: {prompt}\nFile contents:\n{doctext}\n\nAnswer in JSON format.\nAssistant: {{ '

    bedrock_model_id = "meta.llama3-70b-instruct-v1:0"

    body = json.dumps({
        "prompt": input_text,
        "temperature": 0,
    })  #build the request payload

    response = bedrock.invoke_model(
        body=body,
        modelId=bedrock_model_id,
        accept='application/json',
        contentType='application/json')  #send the payload to Bedrock

    response_body = json.loads(
        response.get('body').read())  # read the response

    output_text = response_body['generation']
    # Does it load?
    try:
        parsed_response = json.loads('{' + output_text)
    except Exception as e:
        raise ValueError(
            f"LLM returned an invalid JSON. On the real product we would implement validation and retries. {e}"
        )
    #print(json.dumps(parsed_response, indent=4))
    return parsed_response


def test_condition(condition):
    # Below description can be automatically generated for databases, but here we keep it simple for the demo.
    prompt = f"""
    You are a code-generating tool for verifying whether a codition holds in a database. 
    You are given the table of company transactions called 'transactions.csv' which contains columns transaction_date, transaction_amount, supplier. 
    You are given the table of company deliveries called 'deliveries.csv' which contains columns delivery_date, delivery_amount, supplier, co2_exhausts, delivery_content. 
    Given the data in the database, you are trying to verify whether the condition "{condition}" is true or false. 
    Return a Python program that checks whether the condition {condition} is correct or not. The program should write the result into variable "result". 
    The value of result should be 1 if the condition is correct, 0 if it is incorrect, and 2 if the answer cannot be determined. 
    """
    program_prefix = ('import pandas as pd\n'
                      'deliveries_df = pd.read_csv("deliveries.csv")\n'
                      'transactions_df = pd.read_csv("transactions.csv")\n')
    input_text = (
        f'Human: {prompt}\nWrite the program in Python using Pandas library.\n'
        f'Assistant:\n{program_prefix}')

    bedrock_model_id = "meta.llama3-70b-instruct-v1:0"

    body = json.dumps({
        "prompt": input_text,
        "temperature": 0,
    })  #build the request payload

    response = bedrock.invoke_model(
        body=body,
        modelId=bedrock_model_id,
        accept='application/json',
        contentType='application/json')  #send the payload to Bedrock
    response_body = json.loads(
        response.get('body').read())  # read the response
    output_text = response_body['generation']
    actual_program = program_prefix + output_text
    # the moment of truth: execution
    result = 2
    try:
        f = StringIO()
        with redirect_stdout(f):
            exec(actual_program)
        s = f.getvalue()
        result = int(re.findall("\d+", s)[0])
    except Exception as e:
        print(f"exception {e}")
        result = 2
    if result == 1:
        return "Green"
    elif result == 0:
        return "Red"
    else:
        return "Could not determine"


if __name__ == "__main__":
    # For testing purposes
    path = 'contract.docx'
    conditions = get_conditions(path)
    for condition, field in conditions.items():
        result = test_condition(str(condition) + ": " + str(field))
        print(f'Condition: {condition}: {field}\n{result}')
