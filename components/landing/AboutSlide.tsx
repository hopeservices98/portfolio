import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../constants';

const AboutSlide: React.FC = () => {
  return (
    <section id="about-slide" className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Mon <span className="text-teal-400">Expertise</span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12">
            Développeur passionné et Data Analyst, je combine une expertise technique en données avec la créativité du développement web.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
            className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-lg relative group shadow-lg max-w-xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-6 relative z-10 text-white">Arsenal Technique</h3>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {skills.slice(0, 8).map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="px-4 py-2 bg-teal-500/10 text-teal-400 rounded-full text-sm font-mono border border-teal-500/20 shadow-md"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
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

export default AboutSlide;