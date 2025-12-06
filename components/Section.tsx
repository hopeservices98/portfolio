
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 whitespace-nowrap">
          {title}
        </h2>
        <div className="h-px bg-slate-700 w-full max-w-[200px] md:max-w-[300px]"></div>
      </div>
      {children}
    </motion.section>
  );
};
