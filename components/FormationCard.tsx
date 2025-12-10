import React from 'react';
import { motion } from 'framer-motion';
import type { Formation } from '../types';

interface FormationCardProps {
  formation: Formation;
  index: number;
}

export const FormationCard: React.FC<FormationCardProps> = ({ formation, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      </div>

      <div className="relative z-10">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-teal-300 bg-teal-500/10 rounded-full border border-teal-500/20">
          {formation.year}
        </span>
        
        <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors">
          {formation.degree}
        </h4>
        
        <div className="flex items-center gap-2 mb-4 text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z"></path>
          </svg>
          <span className="font-medium">{formation.school}</span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-4">
          {formation.specialization}
        </p>
      </div>
    </motion.div>
  );
};