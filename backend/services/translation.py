from openai import AsyncOpenAI
import os
from dotenv import load_dotenv
load_dotenv()
class Translator:
    """service to do text translation"""
    def __init__(self) -> None:
        """initialize dependencies like openai"""
        self.client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY")) 
        self.model = "gpt-4o-mini"
        self.messages = [
                    {
                        "role":"system",
                        "content":"you are a language translator who can perfectly understand all languages, and your job is to translate the given text to the provided language, provide the translated text only, no explanation or nothing"
                    }
                ]
    
    async def translate(self, query:str,  target_language:str)->str:
        """translate the given query to the target language"""

        self.messages.append({
        "role":"user",
        "content":f"text:{query}, translate_to:{target_language}"
        })
        response = await self.client.chat.completions.create(
            model=self.model,
            messages=self.messages
        )
        return response.choices[0].message.content
    
