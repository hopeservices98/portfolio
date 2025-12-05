import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextPuzzle } from './TextPuzzle';

const DownloadIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  );

export const Header: React.FC = () => {
  const { scrollY } = useScroll();
  
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);
  const rotate = useTransform(scrollY, [0, 300], [0, 10]);
  const borderColor = useTransform(
    scrollY,
    [0, 300],
    ["#334155", "#2dd4bf"] // slate-700 to teal-400
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 300],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(45, 212, 191, 0.6)"]
  );

  return (
    <header className="flex flex-col md:flex-row items-start gap-10 md:gap-16 animate-fade-in-up">
      <motion.div
        style={{
            scale,
            rotate,
            borderColor,
            boxShadow,
            borderWidth: "4px",
            borderStyle: "solid"
        }}
        whileHover={{
            scale: 1.05,
            rotate: -2,
            borderColor: "#2dd4bf",
            boxShadow: "0px 0px 30px rgba(45, 212, 191, 0.4)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-2xl w-40 h-40 md:w-56 md:h-56 object-cover overflow-hidden cursor-pointer shrink-0 mx-auto md:mx-0"
      >
        <img
            src="/profil.png"
            alt="Photo de profil de Angelo RAKOTONIRINA"
            className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="flex-1 text-center md:text-left space-y-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 tracking-tight">Angelo RAKOTONIRINA</h1>
          <p className="text-xl md:text-2xl text-teal-400 font-medium mt-3">Développeur Python | Web Scraping | Analyse de Données</p>
        </div>
        
        <div className="text-lg text-slate-400 leading-relaxed max-w-3xl">
          <TextPuzzle fullText="Développeur Python expert en Web Scraping et Analyse de Données, je transforme la complexité en opportunité. Je conçois des architectures backend robustes et des systèmes d'automatisation intelligents pour propulser votre activité. Alliant maîtrise technique et vision stratégique, j'accompagne les entreprises dans la valorisation de leurs données et l'optimisation de leurs processus, livrant des solutions performantes et sur-mesure." />
        </div>

        <div className="pt-2">
          <a
            href="/cv-angelo-rakotonirina.pdf"
            download
            className="inline-flex items-center gap-3 bg-teal-500/10 text-teal-400 border border-teal-500/50 font-semibold py-3 px-8 rounded-lg hover:bg-teal-500 hover:text-slate-900 transition-all duration-300 group"
          >
            <DownloadIcon className="w-5 h-5 group-hover:animate-bounce" />
            Télécharger mon CV
          </a>
        </div>
      </div>
    </header>
  );
};