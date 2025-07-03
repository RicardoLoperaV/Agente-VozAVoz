from fastapi import FastAPI, WebSocket, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import base64
import tempfile
import whisper
from transformers import pipeline
from gtts import gTTS
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Agente Voz-a-Voz", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cargar modelos
whisper_model = whisper.load_model("base")
chat_pipeline = pipeline("text-generation", model="microsoft/DialoGPT-medium", tokenizer="microsoft/DialoGPT-medium")

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str
    audio_base64: str

@app.get("/")
async def root():
    return {"message": "Agente Voz-a-Voz API"}

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    try:
        # Generar respuesta con Transformers
        prompt = f"Responde en español de manera conversacional: {request.message}"
        response = chat_pipeline(prompt, max_length=100, num_return_sequences=1)
        text_response = response[0]['generated_text'].replace(prompt, "").strip()
        
        if not text_response:
            text_response = "Lo siento, no pude generar una respuesta adecuada."
        
        # Convertir texto a audio con gTTS
        tts = gTTS(text=text_response, lang='es')
        
        with tempfile.NamedTemporaryFile(delete=False, suffix=".mp3") as tmp_file:
            tts.save(tmp_file.name)
            with open(tmp_file.name, "rb") as audio_file:
                audio_content = audio_file.read()
            os.unlink(tmp_file.name)
        
        audio_base64 = base64.b64encode(audio_content).decode()
        
        return ChatResponse(response=text_response, audio_base64=audio_base64)
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.websocket("/api/stream")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    
    try:
        while True:
            data = await websocket.receive_bytes()
            
            # Guardar audio temporalmente para Whisper
            with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as tmp_file:
                tmp_file.write(data)
                tmp_file.flush()
                
                # Transcribir con Whisper
                result = whisper_model.transcribe(tmp_file.name, language="es")
                transcript = result["text"].strip()
                
                os.unlink(tmp_file.name)
                
                if transcript:
                    await websocket.send_json({"transcript": transcript})
                        
    except Exception as e:
        await websocket.send_json({"error": str(e)})
        await websocket.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)