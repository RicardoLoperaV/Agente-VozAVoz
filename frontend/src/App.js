import React, { useState, useRef } from 'react';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const mediaRecorderRef = useRef(null);
  const websocketRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const ws = new WebSocket(`${API_URL.replace('http', 'ws')}/api/stream`);
      websocketRef.current = ws;

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.transcript) {
          setTranscript(data.transcript);
          handleChatResponse(data.transcript);
        }
      };

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0 && ws.readyState === WebSocket.OPEN) {
          ws.send(event.data);
        }
      };

      mediaRecorder.start(1000);
      setIsRecording(true);
    } catch (error) {
      console.error('Error al iniciar grabación:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
    if (websocketRef.current) {
      websocketRef.current.close();
    }
    setIsRecording(false);
  };

  const handleChatResponse = async (message) => {
    setIsProcessing(true);
    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      
      const data = await response.json();
      setResponse(data.response);
      
      // Reproducir audio
      const audio = new Audio(`data:audio/mp3;base64,${data.audio_base64}`);
      audio.play();
    } catch (error) {
      console.error('Error en chat:', error);
    }
    setIsProcessing(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎤 Agente Voz-a-Voz</h1>
        
        <div className="controls">
          <button 
            className={`record-btn ${isRecording ? 'recording' : ''}`}
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isProcessing}
          >
            {isRecording ? '🔴 Detener' : '🎤 Presiona para hablar'}
          </button>
        </div>

        {isRecording && (
          <div className="status">
            <p>🎧 Escuchando...</p>
          </div>
        )}

        {isProcessing && (
          <div className="status">
            <p>🤖 Respuesta del agente...</p>
          </div>
        )}

        {transcript && (
          <div className="transcript">
            <h3>Tu mensaje:</h3>
            <p>{transcript}</p>
          </div>
        )}

        {response && (
          <div className="response">
            <h3>Respuesta del agente:</h3>
            <p>{response}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;