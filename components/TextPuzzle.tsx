import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { HighlightTech } from './HighlightTech';

interface TextPuzzleProps {
  fullText: string;
}

const PIECES_COUNT = 9;
const GRID_SIZE = 3;

export const TextPuzzle: React.FC<TextPuzzleProps> = ({ fullText }) => {
  const [pieces, setPieces] = useState<number[]>([]);
  const [isSolved, setIsSolved] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);

  useEffect(() => {
    const initialPieces = Array.from({ length: PIECES_COUNT }, (_, i) => i);
    const shuffled = [...initialPieces].sort(() => Math.random() - 0.5);
    setPieces(shuffled);
  }, []);

  useEffect(() => {
    const isCorrect = pieces.every((val, index) => val === index);
    if (isCorrect && pieces.length > 0) {
      setTimeout(() => {
        setIsSolved(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 300);
    }
  }, [pieces]);

  const handlePieceClick = (index: number) => {
    if (isSolved) return;

    if (selectedPiece === null) {
      setSelectedPiece(index);
    } else {
      const newPieces = [...pieces];
      const temp = newPieces[index];
      newPieces[index] = newPieces[selectedPiece];
      newPieces[selectedPiece] = temp;
      
      setPieces(newPieces);
      setSelectedPiece(null);
    }
  };

  return (
    <div className="mt-4 max-w-xl">
      {!isSolved && (
        <div className="mb-2">
          <p className="text-teal-400 text-xs font-bold animate-pulse">
            🧩 Puzzle : Cliquez sur deux pièces pour les échanger et lire ma description !
          </p>
        </div>
      )}

      <div className="relative bg-slate-800 p-1 rounded border border-slate-700 shadow-lg">
        {isSolved ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className="relative p-8 rounded-xl border border-teal-500/50 bg-slate-900/90 backdrop-blur-xl shadow-[0_0_30px_rgba(20,184,166,0.2)] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-blue-500/10 pointer-events-none" />
            
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-black px-4 py-2 rounded-full shadow-xl shadow-orange-500/30 transform rotate-6 border-2 border-white z-20 animate-pulse"
            >
              MISSION ACCOMPLIE ! 🚀
            </motion.div>

            <div className="relative z-0 text-slate-200 text-sm md:text-base font-medium leading-relaxed tracking-wide">
              <HighlightTech text={fullText} />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500 opacity-50" />
          </motion.div>
        ) : (
          <div
            className="grid grid-cols-3 gap-0.5 bg-slate-900 p-0.5"
            style={{
              aspectRatio: '3/1.5',
            }}
          >
            {pieces.map((pieceIndex, visualIndex) => {
              const row = Math.floor(pieceIndex / GRID_SIZE);
              const col = pieceIndex % GRID_SIZE;

              return (
                <motion.div
                  key={visualIndex}
                  layout
                  onClick={() => handlePieceClick(visualIndex)}
                  className={`
                    relative overflow-hidden cursor-pointer
                    ${selectedPiece === visualIndex ? 'ring-1 ring-teal-500 z-10' : ''}
                    hover:opacity-90
                  `}
                  style={{
                    backgroundColor: '#1e293b',
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center p-2 text-slate-200 text-sm md:text-base font-medium leading-relaxed select-none pointer-events-none"
                    style={{
                      width: '300%',
                      height: '300%',
                      transform: `translate(-${col * 33.33}%, -${row * 33.33}%)`,
                      left: 0,
                      top: 0,
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignContent: 'center',
                      textAlign: 'left'
                    }}
                  >
                    <div className="w-full h-full p-6 flex items-center">
                      {fullText}
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 border border-slate-600/30 pointer-events-none" />
                  <div
                    className={`absolute text-sm font-black text-white bg-teal-600 px-2 py-1 rounded shadow-lg border border-teal-400 z-10
                      ${(pieceIndex + 1) >= 7 ? 'bottom-2 left-2' : (pieceIndex + 1) === 6 ? 'top-2 right-2' : 'top-2 left-2'}
                    `}
                  >
                    {pieceIndex + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};