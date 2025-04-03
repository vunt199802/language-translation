import uvicorn
from fastapi import FastAPI
from api.routers import translation_api

app = FastAPI()

app.include_router(translation_api.router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
