from fastapi import FastAPI
from google import genai
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()


@app.get("/llm/{prompt}")
async def read_root(prompt):
    #logica sw comunicacion con el LLM
    client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

    response = client.models.generate_content(
        model="gemini-3-flash-preview", contents=prompt
    )
    print(response.text)
    
    return {"Esta es la respuesta": response.text}



