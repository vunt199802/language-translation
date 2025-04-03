from fastapi import FastAPI
from pydantic import BaseModel
from translation import translate_query

class TranslationQuery(BaseModel):
    query:str
    translation_language:str

app = FastAPI()

@app.get("/")
def root():
    return {"hello":"world"}

@app.post("/translate")
async def translate(translation_query:TranslationQuery):
    response = translate_query(translation_query.query, translation_query.translation_language)
    return response