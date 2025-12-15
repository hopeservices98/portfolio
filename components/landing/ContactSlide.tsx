import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Section } from '../../types/landing';

interface ContactSlideProps {
  scrollToSection: (section: Section | string) => void;
}

const ContactSlide: React.FC<ContactSlideProps> = ({ scrollToSection }) => {
  return (
    <section id="contact-slide" className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-teal-500/5 to-transparent blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Prêt à <span className="text-teal-400">Collaborer</span> ?
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:rak.angelo98@gmail.com"
            className="inline-block px-8 py-4 border border-teal-400 text-teal-400 font-bold rounded-lg hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_40px_rgba(45,212,191,0.4)]"
          >
            ENVOYER UN EMAIL
          </motion.a>
          
          <div className="mt-16 flex justify-center gap-8">
            <motion.a 
              whileHover={{ scale: 1.1, color: '#2dd4bf' }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/angelorak98" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, color: '#2dd4bf' }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/angelo-rakotonirina-5240b518a/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, color: '#2dd4bf' }}
              whileTap={{ scale: 0.9 }}
              href="mailto:rak.angelo98@gmail.com" 
              className="text-gray-400 transition-colors"
            >
              <Mail className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>
      {/* Background Ambience - Simplified */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1.2, 1],
          opacity: [0, 0.3, 0.15],
        }}
        transition={{ 
          duration: 2, 
          times: [0, 0.6, 1],
          ease: "easeOut"
        }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[100px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"
      >
        <motion.div
           animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
          ease: "easeOut",
          delay: 0.2
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none -translate-x-1/4 translate-y-1/4"
      >
         <motion.div
           animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="w-full h-full"
        />
      </motion.div>
    </section>
  );
};

export default ContactSlide;