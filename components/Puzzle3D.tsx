import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Puzzle3DProps {
  onSolved: () => void;
}

const PythonLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-16 h-16">
    <path fill="#3776AB" d="M126.916 71.271c0-10.68 9.15-19.563 20.286-19.563 11.133 0 20.283 8.883 20.283 19.563 0 10.683-9.15 19.563-20.283 19.563-11.136 0-20.286-8.88-20.286-19.563zM128 0C57.308 0 0 57.308 0 128c0 70.692 57.308 128 128 128 70.692 0 128-57.308 128-128S198.692 0 128 0zm0 244.364c-64.158 0-116.364-52.206-116.364-116.364S63.842 11.636 128 11.636 244.364 63.842 244.364 128 192.158 244.364 128 244.364z"/>
    <path fill="#3776AB" d="M127.476 173.955c10.935 0 19.806-8.871 19.806-19.806 0-10.938-8.871-19.809-19.806-19.809-10.935 0-19.806 8.871-19.806 19.809 0 10.935 8.871 19.806 19.806 19.806z"/>
    <path fill="#FFD43B" d="M127.476 154.149c0-10.938 8.871-19.809 19.806-19.809 10.935 0 19.806 8.871 19.806 19.809 0 10.935-8.871 19.806-19.806 19.806-10.935 0-19.806-8.871-19.806-19.806z"/>
    <path fill="#3776AB" d="M128 256c70.692 0 128-57.308 128-128S198.692 0 128 0C57.308 0 0 57.308 0 128c0 70.692 57.308 128 128 128zm0-244.364c64.158 0 116.364 52.206 116.364 116.364S192.158 244.364 128 244.364 11.636 192.158 11.636 128 63.842 11.636 128 11.636z"/>
    <path fill="#306998" d="M128.5 46.5c-17.5 0-32.5 2.5-32.5 15.5v21h32v6h-42c-21 0-32 12-32 32v12h16v-12c0-8 6-12 16-12h42c17.5 0 32.5-2.5 32.5-15.5v-21h-32v-6h42c21 0 32-12 32-32v-12h-16v12c0 8-6 12-16 12h-42z"/>
    <path fill="#FFD43B" d="M127.5 209.5c17.5 0 32.5-2.5 32.5-15.5v-21h-32v-6h42c21 0 32-12 32-32v-12h-16v12c0 8-6 12-16 12h-42c-17.5 0-32.5 2.5-32.5 15.5v21h32v6h-42c-21 0-32 12-32 32v12h16v-12c0-8 6-12 16-12h42z"/>
  </svg>
);

const JSLogo = () => (
  <div className="w-16 h-16 bg-[#F7DF1E] flex items-end justify-end p-1">
    <span className="text-black font-bold text-2xl">JS</span>
  </div>
);

const PHPLogo = () => (
  <div className="w-16 h-16 bg-[#777BB4] flex items-center justify-center rounded-full">
    <span className="text-white font-bold text-xl">PHP</span>
  </div>
);

const LinuxLogo = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <span className="text-4xl">🐧</span>
  </div>
);

export const Puzzle3D: React.FC<Puzzle3DProps> = ({ onSolved }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isSolved, setIsSolved] = useState(false);
  const targetRotation = { x: 0, y: 0 }; // Face avant (Python)
  const tolerance = 20; // Tolérance en degrés

  useEffect(() => {
    // Initial random rotation (not close to 0,0)
    let startX = Math.random() * 360;
    let startY = Math.random() * 360;
    
    // Ensure we don't start solved
    if (Math.abs(startX) < tolerance) startX += 90;
    if (Math.abs(startY) < tolerance) startY += 90;

    setRotation({ x: startX, y: startY });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isSolved) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Convert mouse position to rotation
    // Sensitivity factor adjusted for better control
    const rotateX = ((y / rect.height) - 0.5) * -360; 
    const rotateY = ((x / rect.width) - 0.5) * 360;

    setRotation({ x: rotateX, y: rotateY });

  };

  const handlePythonClick = () => {
    // Check if Python face is roughly facing forward
    // We need to normalize angles to be within -180 to 180 range for easier checking
    // But since we accumulate rotation, we can just check modulo 360
    
    const normalizedX = rotation.x % 360;
    const normalizedY = rotation.y % 360;
    
    // Check if close to 0 (or 360, or -360)
    const isXAligned = Math.abs(normalizedX) < tolerance || Math.abs(normalizedX - 360) < tolerance || Math.abs(normalizedX + 360) < tolerance;
    const isYAligned = Math.abs(normalizedY) < tolerance || Math.abs(normalizedY - 360) < tolerance || Math.abs(normalizedY + 360) < tolerance;

    if (isXAligned && isYAligned) {
      setIsSolved(true);
      onSolved();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-teal-400 text-sm font-bold animate-pulse text-center">
        {isSolved ? "Accès autorisé ! Bienvenue." : "Trouvez le logo de mon langage préféré (Python) et cliquez dessus"}
      </p>
      
      <div
        className="w-32 h-32 relative [perspective:1000px] cursor-move"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="w-full h-full relative [transform-style:preserve-3d]"
          animate={{
            rotateX: isSolved ? 0 : rotation.x,
            rotateY: isSolved ? 0 : rotation.y
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        >
          {/* Front Face (Python - Target) */}
          <div
            className="absolute inset-0 bg-slate-800/90 border-2 border-teal-500 flex items-center justify-center [transform:translateZ(64px)] cursor-pointer hover:bg-slate-700/90 transition-colors"
            onClick={handlePythonClick}
          >
            <PythonLogo />
          </div>
          
          {/* Back Face (JS) */}
          <div className="absolute inset-0 bg-slate-800/90 border-2 border-slate-600 flex items-center justify-center [transform:rotateY(180deg)translateZ(64px)]">
            <JSLogo />
          </div>

          {/* Right Face (PHP) */}
          <div className="absolute inset-0 bg-slate-800/90 border-2 border-slate-600 flex items-center justify-center [transform:rotateY(90deg)translateZ(64px)]">
             <PHPLogo />
          </div>

          {/* Left Face (Linux) */}
          <div className="absolute inset-0 bg-slate-800/90 border-2 border-slate-600 flex items-center justify-center [transform:rotateY(-90deg)translateZ(64px)]">
             <LinuxLogo />
          </div>

          {/* Top Face (Lock) */}
          <div className="absolute inset-0 bg-slate-800/90 border-2 border-slate-600 flex items-center justify-center [transform:rotateX(90deg)translateZ(64px)]">
             <span className="text-2xl">🔒</span>
          </div>

          {/* Bottom Face (Lock) */}
          <div className="absolute inset-0 bg-slate-800/90 border-2 border-slate-600 flex items-center justify-center [transform:rotateX(-90deg)translateZ(64px)]">
             <span className="text-2xl">🔒</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};