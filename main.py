from fastapi import FastAPI
from google import genai
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()

@app.get("/llm/{prompt}")
async def read_root(prompt: str):

    client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

    # CAMBIO: Usamos el ID del modelo más reciente (3.1 Pro)
    response = client.models.generate_content(
        model="gemini-3.1-pro-preview", 
        contents=prompt
    )
    
    print(response.text)
    
    return {"Esta es la respuesta": response.text}