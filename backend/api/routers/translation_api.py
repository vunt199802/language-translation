from fastapi import APIRouter
from pydantic import BaseModel
from translation import translate_query
router = APIRouter()

class TranslationQuery(BaseModel):
    query:str
    translation_language:str

@router.get("/")
def root():
    return {"hello":"world"}

@router.post("/translate")
async def translate(translation_query:TranslationQuery):
    response = translate_query(translation_query.query, translation_query.translation_language)
    return response