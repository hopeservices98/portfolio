import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HighlightTech } from './HighlightTech';
import type { Experience, Formation } from '../types';

interface ExperienceCardProps {
  item: Experience | Formation;
  index: number;
}

const isExperience = (item: Experience | Formation): item is Experience => {
    return 'role' in item;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, index }) => {
  const title = isExperience(item) ? item.role : item.degree;
  const subtitle = isExperience(item) ? item.company : item.school;
  const date = isExperience(item) ? item.period : item.year;
  const description = isExperience(item) ? item.description : item.specialization;
  
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10; // Max rotation 10deg
    const rotateYValue = ((x - centerX) / centerX) * 10; // Max rotation 10deg

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, rotateX: -90 }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group [perspective:1000px]"
    >
        <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-900 group-hover:border-teal-500 text-slate-500 group-hover:text-teal-500 transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-xl">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </div>
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d"
            }}
            className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 transition-all duration-300 group-hover:border-teal-500/50 group-hover:bg-slate-800 group-hover:shadow-2xl hover:z-10 relative"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 [transform:translateZ(20px)]">
                <h4 className="text-lg font-bold text-slate-100">{title}</h4>
                <time className="font-mono text-xs text-teal-400 bg-teal-500/10 px-2 py-1 rounded border border-teal-500/20 w-fit">{date}</time>
            </div>
            <p className="text-sm font-semibold text-teal-400/80 mb-3 [transform:translateZ(15px)] uppercase tracking-wide">{subtitle}</p>
            <div className="text-slate-400 leading-relaxed [transform:translateZ(10px)] space-y-2">
                {description.split('\n').map((line, i) => {
                    const parts = line.split(':');
                    if (parts.length > 1 && line.includes(':')) {
                        return (
                            <p key={i}>
                                <strong className="text-slate-200">{parts[0]}:</strong>
                                <HighlightTech text={parts.slice(1).join(':')} />
                            </p>
                        );
                    }
                    return <p key={i}><HighlightTech text={line} /></p>;
                })}
            </div>
        </motion.div>
    </motion.div>
  );
};
