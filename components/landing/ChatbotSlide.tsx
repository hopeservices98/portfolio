import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';

const ChatbotSlide: React.FC = () => {
  return (
    <section id="chatbot-slide" className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative inline-block mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 border-4 border-teal-500/20 border-dashed rounded-full"
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-8 bg-slate-800/50 backdrop-blur-md rounded-full border border-teal-500/30 shadow-lg"
            >
              <Bot className="w-20 h-20 text-teal-400" />
            </motion.div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Discutez avec mon <span className="text-teal-400">Assistant IA</span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12">
            Ce chatbot est une démonstration de mes compétences en intégration d'IA. Posez-lui des questions sur mon profil !
          </p>

          <p className="text-gray-500 text-sm">
            (Cliquez sur l'icône <Bot className="inline w-4 h-4" /> en bas à droite pour commencer)
          </p>
        </motion.div>
      </div>
      {/* Background Ambience */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          opacity: [0, 0.3, 0.15],
        }}
        transition={{
          duration: 2,
          times: [0, 0.6, 1],
          ease: 'easeOut',
        }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[100px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full"
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.5, 1],
          opacity: [0, 0.2, 0.1],
        }}
        transition={{
          duration: 2.5,
          times: [0, 0.6, 1],
          ease: 'easeOut',
          delay: 0.2,
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none -translate-x-1/4 translate-y-1/4"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full"
        />
      </motion.div>
    </section>
  );
};

export default ChatbotSlide;