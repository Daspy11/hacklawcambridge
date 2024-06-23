from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import extractor
import aiofiles  # aiofiles

app = FastAPI()


async def check_file(in_file: UploadFile):
    # Process the file and return the result
    file_path = "tmp_file.docx"
    async with aiofiles.open(file_path, 'wb') as out_file:
        content = await in_file.read()  # async read
        await out_file.write(content)  # async write
    return extractor.test_a_doc(file_path)


@app.post("/process-file/")
async def process_file(file: UploadFile = File(...)):
    result = check_file(file)
    return JSONResponse(content=result)
