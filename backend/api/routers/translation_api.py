from fastapi import APIRouter
from models.api_models import TranslationRequest
from translation import translate_query
router = APIRouter()

@router.get("/")
def root():
    return {"hello":"world"}

@router.post("/translate")
async def translate(translation_query:TranslationRequest):
    response = translate_query(translation_query.query, translation_query.translation_language)
    return {"original_query":translation_query.query, "translated_query":response}