from flask import Flask, request, jsonify
import extractor

app = Flask(__name__)


def my_method(file):
    return extractor.test_a_doc(file.filename)


@app.route('/process-file/', methods=['POST'])
def process_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    result = my_method(file)
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)
