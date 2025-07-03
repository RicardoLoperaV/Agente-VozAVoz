# Agente Voz A Voz - Frontend

Modern Next.js application with dark theme for voice-to-voice conversation interface.

## 🚀 Features

- **Dark Theme**: Professional black, gray, and white color palette
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth transitions with Framer Motion
- **TypeScript**: Full type safety and better development experience
- **API Integration**: Real-time communication with backend
- **Audio Playback**: Interactive audio player with controls
- **Data Visualization**: Charts and metrics display
- **Accessibility**: ARIA roles and keyboard navigation

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
frontend-nextjs/
├── components/          # Reusable React components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── ModelForm.tsx   # Interactive form
│   └── ModelResult.tsx # Results display
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   └── index.tsx       # Home page
├── styles/             # CSS styles
│   └── globals.css     # Global styles
├── utils/              # Utility functions
│   └── api.ts          # API service
└── public/             # Static assets
```

## 🎨 Components

### Layout
Main wrapper component with header and animated content transitions.

### Header
Fixed navigation with hamburger menu, smooth animations, and accessibility features.

### Hero
Animated landing section with interactive elements and background effects.

### ModelForm
Interactive form for sending messages to the voice model with loading states and error handling.

### ModelResult
Results display with audio playback, charts, and performance metrics.

## 🔧 Configuration

### Environment Variables
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_API_TIMEOUT=10000
```

### API Integration
The application connects to the backend API for:
- `/api/chat` - Send messages and receive responses
- `/api/model/predict` - Model predictions
- Health checks and status monitoring

## 🎯 Usage

1. Start the backend server (port 8000)
2. Run the frontend development server
3. Navigate to http://localhost:3000
4. Interact with the voice model through the form
5. View results with audio playback and metrics

## 🛠️ Development

- **TypeScript**: Full type safety
- **ESLint**: Code linting and quality
- **Prettier**: Code formatting
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations