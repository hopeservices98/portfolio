import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      setTimeout(() => setIsSolved(true), 300); // Add a small delay for the animation
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="p-6 text-slate-200 text-sm md:text-base font-medium leading-relaxed"
          >
            {fullText}
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
                    className={`absolute text-xs font-bold text-teal-400 bg-slate-900/80 px-1.5 py-0.5 rounded pointer-events-none shadow-sm border border-teal-500/30
                      ${(pieceIndex + 1) >= 7 ? 'bottom-1 left-1' : (pieceIndex + 1) === 6 ? 'top-1 right-1' : 'top-1 left-1'}
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