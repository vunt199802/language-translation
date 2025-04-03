import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


messages = [
    {
        "role":"system",
        "content":"you are a language translator who can perfectly understand all languages, and your job is to translate the given text to the provided language, provide the translated text only, no explanation or nothing"
    }
]
def translate_query(query:str, translation_language:str)->str:
    messages.append({
        "role":"user",
        "content":f"text:{query}, translate_to:{translation_language}"
    })
    response = client.responses.create(
        model="gpt-4o-mini",
        input=messages
    )
    return response.output_text
