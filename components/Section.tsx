
import React, { useEffect, useState } from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 whitespace-nowrap">
          {title}
        </h2>
        <div className="h-px bg-slate-700 w-full max-w-[200px] md:max-w-[300px]"></div>
      </div>
      {children}
    </section>
  );
};
