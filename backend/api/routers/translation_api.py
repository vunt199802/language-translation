from fastapi import APIRouter
from fastapi import Depends
from models.api_models import TranslationRequest
from services.translation import Translator
from services.setup import get_translator
router = APIRouter()

@router.get("/")
def root():
    return {"hello":"world"}

@router.post("/translate")
async def translate(translation_query:TranslationRequest, translation_service:Translator=Depends(get_translator)):
    response = translation_service.translate(translation_query.query, translation_query.target_language)
    return {"original_query":translation_query.query, "translated_query":response}