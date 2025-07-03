import React from 'react';
import { motion } from 'framer-motion';
import { Mic, MessageCircle, Zap } from 'lucide-react';

// Animated hero section with interactive elements
const Hero: React.FC = () => {
  const features = [
    { icon: Mic, text: 'Reconocimiento de Voz' },
    { icon: MessageCircle, text: 'Conversación Natural' },
    { icon: Zap, text: 'Respuesta Instantánea' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Agente Voz A Voz
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Explora la tecnología de conversación natural mediante interacción voz a voz
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card text-center"
            >
              <feature.icon className="w-12 h-12 text-white mx-auto mb-4" />
              <p className="text-gray-300">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() => document.getElementById('model')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Probar Modelo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
            onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Resultados
          </motion.button>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-dark-700 to-dark-600 rounded-full opacity-20 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-dark-600 to-dark-500 rounded-full opacity-10 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;