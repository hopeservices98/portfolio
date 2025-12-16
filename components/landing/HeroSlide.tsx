import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Globe } from 'lucide-react';
import { Section } from '../../types/landing';

interface HeroSlideProps {
  scrollToSection: (section: Section | string) => void;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ scrollToSection }) => {
  // Entrance Sequence Variants (simplified from original Hero)
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5 // Adjust delay for carousel context
      }
    }
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  };

  const visualEntranceVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.2
      }
    }
  };

  const enterPortfolio = () => {
    scrollToSection('main-portfolio');
  };

  return (
    <section 
      id="home-slide" 
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden [perspective:1000px] w-full"
    >
      {/* Background ambience is now handled by the LandingCarousel */}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
        
        {/* Text Content */}
        <motion.div 
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={badgeVariants} className="origin-left">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/5 text-teal-400 text-xs font-mono backdrop-blur-md shadow-[0_0_15px_rgba(45,212,191,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              WELCOME
            </div>
          </motion.div>
          
          <div className="space-y-1 overflow-hidden">
            <motion.h1 variants={textItemVariants} className="text-5xl md:text-7xl font-bold leading-none tracking-tight text-white">
              ANGELO
            </motion.h1>
            <motion.h1 variants={textItemVariants} className="text-5xl md:text-7xl font-bold leading-none tracking-tight">
               <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-blue-500 inline-block"
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                PORTFOLIO
              </motion.span>
            </motion.h1>
          </div>
          
          <motion.p variants={textItemVariants} className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-teal-500/30 pl-6">
            Découvrez mon univers de <span className="text-white font-medium">Développement Full Stack & Créatif</span>.
          </motion.p>

          <motion.div variants={textItemVariants} className="flex flex-wrap gap-4 pt-4">
            {/* Enter Portfolio Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                borderColor: '#ffffff',
                backgroundPosition: ["0% 50%", "100% 50%"]
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                backgroundPosition: { duration: 1.5, repeat: Infinity, ease: "linear" },
                scale: { type: "spring", stiffness: 400, damping: 10 }
              }}
              onClick={enterPortfolio}
              style={{
                backgroundSize: "200% auto",
                backgroundImage: "linear-gradient(90deg, #2dd4bf, #00f0ff, #2dd4bf)"
              }}
              className="px-8 py-4 text-slate-900 font-bold rounded-lg border-2 border-transparent flex items-center gap-2 group shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)]"
            >
              VOIR LE PORTFOLIO
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Visual 3D Side (simplified - no mouse interaction) */}
        <motion.div
          variants={visualEntranceVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center justify-center perspective-1000"
        >
          <div className="relative w-[500px] h-[500px] flex items-center justify-center transform-style-3d">
            
            {/* Rotating Cyber Rings */}
            {[1, 2, 3].map((ring) => (
               <motion.div
                key={ring}
                className={`absolute rounded-full border ${ring % 2 === 0 ? 'border-teal-500/20 border-dashed' : 'border-blue-500/20 border-solid'}`}
                style={{ 
                  width: `${300 + ring * 60}px`, 
                  height: `${300 + ring * 60}px`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1,
                  scale: [0, 1, 1.05, 1],
                  rotate: ring % 2 === 0 ? 360 : -360,
                }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.2 + ring * 0.1 },
                  scale: { duration: 1.5, delay: 0.2 + ring * 0.1, ease: "backOut" },
                  rotate: { duration: 20 + ring * 5, repeat: Infinity, ease: "linear", delay: 1.5 }
                }}
              />
            ))}

            {/* Floating Code Card */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotateZ: [-2, 2, -2]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="relative z-10 w-72 bg-slate-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6 shadow-2xl transform-style-3d group"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               {/* Window Controls */}
               <div className="flex gap-2 mb-4">
                 <div className="w-3 h-3 rounded-full bg-red-500/80" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                 <div className="w-3 h-3 rounded-full bg-green-500/80" />
               </div>

               {/* Code Content */}
               <div className="font-mono text-xs space-y-2 relative">
                 <div className="flex text-gray-400">
                   <span className="text-blue-400 mr-2">const</span>
                   <span className="text-teal-400">portfolio</span>
                   <span className="mx-1">=</span>
                   <span>{'{'}</span>
                 </div>
                 <div className="pl-4 text-gray-300">
                   <p>url: <span className="text-green-400">'angeloportfolio.vercel.app'</span>,</p>
                   <p>status: <span className="text-green-400">'Online'</span>,</p>
                   <p>stack: [</p>
                   <p className="pl-4 text-green-400">'React', 'TypeScript',</p>
                   <p className="pl-4 text-green-400">'Framer Motion', 'TailwindCSS'</p>
                   <p>]</p>
                 </div>
                 <div className="text-gray-400">{'}'}</div>

                 {/* Typing Cursor */}
                 <motion.div 
                   animate={{ opacity: [1, 0] }}
                   transition={{ duration: 0.8, repeat: Infinity }}
                   className="absolute -bottom-1 left-2 w-2 h-4 bg-teal-400"
                 />
               </div>
            </motion.div>
            
            {/* Particles orbiting the card */}
            <motion.div
              className="absolute w-full h-full pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
               <div className="absolute top-10 left-1/2 w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_10px_#2dd4bf]" />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSlide;