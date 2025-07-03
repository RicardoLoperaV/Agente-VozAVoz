import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, Download, Copy, Check } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ModelResultProps {
  result: {
    response: string;
    audio_base64?: string;
    processing_time?: number;
    confidence?: number;
  } | null;
}

// Component to display model results with audio playback and visualizations
const ModelResult: React.FC<ModelResultProps> = ({ result }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Mock data for visualization
  const chartData = result ? [
    { name: 'Confianza', value: result.confidence || 85 },
    { name: 'Tiempo (ms)', value: result.processing_time || 1200 },
    { name: 'Calidad', value: 92 },
  ] : [];

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleCopy = async () => {
    if (result?.response) {
      await navigator.clipboard.writeText(result.response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (result?.audio_base64) {
      const link = document.createElement('a');
      link.href = `data:audio/mp3;base64,${result.audio_base64}`;
      link.download = 'respuesta_audio.mp3';
      link.click();
    }
  };

  if (!result) return null;

  return (
    <section id="results" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Resultados del Modelo
          </h2>
          <p className="text-gray-300 text-lg">
            Respuesta generada y métricas de rendimiento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Response */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Respuesta de Texto</h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCopy}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Copiar respuesta"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </motion.button>
            </div>
            <div className="bg-dark-700 rounded-lg p-4 border border-dark-600">
              <p className="text-gray-300 leading-relaxed">{result.response}</p>
            </div>
          </motion.div>

          {/* Audio Player */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Audio Generado</h3>
            {result.audio_base64 ? (
              <div className="space-y-4">
                <audio
                  ref={audioRef}
                  src={`data:audio/mp3;base64,${result.audio_base64}`}
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                />
                
                {/* Audio Controls */}
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePlayPause}
                    className="flex items-center justify-center w-12 h-12 bg-white text-dark-900 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label={isPlaying ? "Pausar" : "Reproducir"}
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </motion.button>
                  
                  <div className="flex-1 flex items-center space-x-2">
                    <Volume2 className="text-gray-400" size={20} />
                    <div className="flex-1 h-2 bg-dark-600 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: isPlaying ? "100%" : "0%" }}
                        transition={{ duration: 3, ease: "linear" }}
                      />
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleDownload}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Descargar audio"
                  >
                    <Download size={20} />
                  </motion.button>
                </div>
              </div>
            ) : (
              <p className="text-gray-400">No hay audio disponible</p>
            )}
          </motion.div>
        </div>

        {/* Metrics Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="card mt-8"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Métricas de Rendimiento</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F3F4F6'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  dot={{ fill: '#FFFFFF', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#FFFFFF', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Processing Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          <div className="card text-center">
            <div className="text-3xl font-bold text-white mb-2">
              {result.processing_time || 1200}ms
            </div>
            <div className="text-gray-400">Tiempo de Procesamiento</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-white mb-2">
              {result.confidence || 85}%
            </div>
            <div className="text-gray-400">Confianza</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-white mb-2">
              92%
            </div>
            <div className="text-gray-400">Calidad de Audio</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelResult;