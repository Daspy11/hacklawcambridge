from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import extractor

app = FastAPI()


async def check_file(in_file: UploadFile):
    # Process the file and return the result
    return extractor.test_a_doc(in_file.filename)


@app.post("/process-file/")
async def process_file(file: UploadFile = File(...)):
    result = check_file(file)
    return JSONResponse(content=result)
