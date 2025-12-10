import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, Variants } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Globe } from 'lucide-react';
import { Section } from '../../types/landing';
import { skills } from '../../constants';

interface HeroProps {
  scrollToSection: (section: Section | string) => void; // Update type to accept string for custom portfolio ID
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Enhanced Parallax Effects
  const yText = useTransform(scrollY, [0, 300], [0, 100]);
  const yVisual = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse Interaction Physics (3D Tilt)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xPct = (clientX / innerWidth) - 0.5;
    const yPct = (clientY / innerHeight) - 0.5;
    x.set(xPct * 20); // Tilt amount
    y.set(yPct * 20);
  };

  // Entrance Sequence Variants
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.0
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
    // Scroll to the main portfolio content (we'll add an ID to it)
    scrollToSection('main-portfolio');
  };

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden [perspective:1000px]"
      onMouseMove={handleMouseMove}
    >
      {/* Background Ambience - Intro Expansion */}
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
        {/* Continuous breathing animation after intro */}
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

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
        
        {/* Text Content */}
        <motion.div 
          style={{ y: yText, opacity }}
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
            
            {/* Contact Me Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                borderColor: '#2dd4bf',
                backgroundPosition: ["0% 50%", "100% 50%"]
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                backgroundPosition: { duration: 1.5, repeat: Infinity, ease: "linear" },
                scale: { type: "spring", stiffness: 400, damping: 10 }
              }}
              onClick={() => scrollToSection('contact')}
              style={{
                backgroundSize: "200% auto",
                backgroundImage: "linear-gradient(90deg, rgba(5,5,5,0.5), rgba(45,212,191,0.2), rgba(5,5,5,0.5))"
              }}
              className="px-8 py-4 border-2 border-gray-700 text-white rounded-lg backdrop-blur-sm"
            >
              ME CONTACTER
            </motion.button>
          </motion.div>

          {/* Tech Stack Mini-List */}
          <motion.div
            variants={textItemVariants}
            className="pt-8 border-t border-gray-800/50 flex flex-wrap gap-6 text-gray-500"
          >
            {[
              { icon: Code2, label: "FULL STACK" },
              { icon: Globe, label: "CREATIVE" },
              { icon: Cpu, label: "REACT/NEXT" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -2, color: '#2dd4bf' }}
                className="flex items-center gap-2 cursor-default transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-mono">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual 3D Side */}
        <motion.div
          style={{ 
            y: yVisual, 
            rotateX: mouseYSpring, 
            rotateY: mouseXSpring 
          }}
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
                  scale: [0, 1, 1.05, 1], // Entrance scale up
                  rotate: ring % 2 === 0 ? 360 : -360,
                }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.2 + ring * 0.1 },
                  scale: { duration: 1.5, delay: 0.2 + ring * 0.1, ease: "backOut" },
                  rotate: { duration: 20 + ring * 5, repeat: Infinity, ease: "linear", delay: 1.5 } // Spin starts after entrance
                }}
              />
            ))}

            {/* Floating Code Card */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotateZ: [-2, 2, -2]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} // Float delay
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
                   <p className="pl-4 text-green-400">'{skills[0]}', '{skills[1]}',</p>
                   <p className="pl-4 text-green-400">'{skills[2]}', '{skills[12]}'</p>
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

       {/* Scroll Indicator */}
       <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2.5, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 2.5 }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group"
        onClick={enterPortfolio}
      >
        <span className="text-[10px] tracking-[0.3em] font-mono text-gray-500 group-hover:text-teal-400 transition-colors uppercase">Découvrir</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-teal-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
      </motion.div>
    </section>
  );
};

export default Hero;