from pydantic import BaseModel

class TranslationRequest(BaseModel):
    "Request model for the translation api"
    query:str
    target_language:str
