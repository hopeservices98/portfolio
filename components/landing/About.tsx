import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-teal-400 font-mono text-xl">02 //</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">À PROPOS</h2>
            <div className="h-[1px] flex-grow bg-gray-800"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                Bonjour ! Je suis Angelo, un développeur passionné et data analyst. Mon parcours combine une expertise technique en analyse de données avec une créativité en développement web.
              </p>
              <p>
                Je me spécialise dans les écosystèmes <span className="text-teal-400">Python & React</span>. J'aime faire le pont entre les données et des interfaces utilisateur engageantes — en créant des applications full-stack à la fois fonctionnelles et immersives.
              </p>
              <p>
                De l'automatisation des pipelines de données à la création d'expériences web 3D interactives, j'explore l'intersection entre la Data, l'IA et l'Ingénierie Frontend.
              </p>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-6 rounded-lg relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-xl font-bold mb-4 relative z-10 text-white">Arsenal Technique</h3>
                <ul className="space-y-2 relative z-10">
                  {skills.slice(0, 10).map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                      <span className="text-teal-400">▹</span> {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;