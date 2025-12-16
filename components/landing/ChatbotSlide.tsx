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
      {/* Background ambience is now handled by the LandingCarousel */}
    </section>
  );
};

export default ChatbotSlide;