from services.translation import Translator
from functools import lru_cache

@lru_cache()
def get_translator()->Translator:
    return Translator()