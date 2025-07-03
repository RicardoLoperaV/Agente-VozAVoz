# Agente Voz A Voz

## 📋 Objetivo del Proyecto

Este proyecto tiene como meta explorar y documentar los procesos mediante los cuales se crean los agentes de conversación voz a voz. A través de la implementación práctica, se investigan las tecnologías, arquitecturas y metodologías necesarias para desarrollar sistemas de interacción vocal natural.

## 🏗️ Arquitectura

- **Backend**: FastAPI con Python
- **Frontend**: React con Web Audio API
- **IA**: Whisper + Hugging Face Transformers + gTTS
- **Despliegue**: Docker + Docker Compose

## ⚙️ Instalación y Configuración

### Prerrequisitos

1. **Software requerido**:
   - Docker y Docker Compose
   - Node.js 18+ (para desarrollo local)
   - Python 3.11+ (para desarrollo local)

### Configuración

```bash
# Copiar archivos de ejemplo (opcional)
cp frontend/.env.example frontend/.env

# Editar frontend/.env si necesitas cambiar la URL del backend
REACT_APP_API_URL=http://localhost:8000
```

**Nota**: Los modelos de IA se descargan automáticamente en el primer uso.

## 🔧 Despliegue con Docker

### Opción 1: Docker Compose (Recomendado)

```bash
# Levantar servicios
docker-compose up --build
```

**Acceso**:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Documentación API: http://localhost:8000/docs

### Opción 2: Contenedores individuales

```bash
# Backend
cd backend
docker build -t agente-voz-backend .
docker run -p 8000:8000 agente-voz-backend

# Frontend
cd frontend
docker build -t agente-voz-frontend .
docker run -p 3000:80 agente-voz-frontend
```

## 🖥️ Desarrollo Local

### Backend

```bash
cd backend

# Crear entorno virtual
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar servidor
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend

```bash
cd frontend

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

## 🔌 API Endpoints

### REST API

- `GET /` - Health check
- `POST /api/chat` - Enviar mensaje de texto y recibir respuesta con audio

### WebSocket

- `WS /api/stream` - Streaming de audio para transcripción en tiempo real

### Ejemplo de uso

```javascript
// Enviar mensaje de texto
const response = await fetch('http://localhost:8000/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'Hola, ¿cómo estás?' })
});

const data = await response.json();
console.log(data.response); // Respuesta en texto
// data.audio_base64 contiene el audio en base64
```

## ✅ Testing

```bash
# Backend
cd backend
pip install pytest
pytest

# Frontend
cd frontend
npm test
```

## 📁 Estructura del Proyecto

```
.
├── backend/
│   ├── app/
│   │   └── main.py          # FastAPI app principal
│   ├── Dockerfile
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── App.js           # Componente principal React
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   └── .env.example
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions CI/CD
├── docker-compose.yml
└── README.md
```

## ⚠️ Solución de Problemas

### Errores comunes

1. **Error de descarga de modelos**:
   - Los modelos se descargan automáticamente en el primer uso
   - Asegurar conexión a internet estable

2. **Error de CORS en el frontend**:
   - Verificar que el backend esté corriendo en el puerto correcto
   - Revisar la variable `REACT_APP_API_URL`

3. **Problemas con el micrófono**:
   - Asegurar que el navegador tenga permisos de micrófono
   - Usar HTTPS en producción (requerido para Web Audio API)

### Logs útiles

```bash
# Ver logs de Docker Compose
docker-compose logs -f

# Logs específicos del backend
docker-compose logs backend

# Logs específicos del frontend
docker-compose logs frontend
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🔗 Enlaces Útiles

- [Documentación de FastAPI](https://fastapi.tiangolo.com/)
- [OpenAI Whisper](https://github.com/openai/whisper)
- [Hugging Face Transformers](https://huggingface.co/transformers/)
- [gTTS](https://github.com/pndurette/gTTS)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
Sistema creado para conversar de manera natural mediante interacción voz a voz.
