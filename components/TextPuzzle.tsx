import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TextPuzzleProps {
  fullText: string;
}

// Définition des pièces du puzzle (positions et formes simplifiées pour l'exemple)
// Dans une vraie implémentation complexe, on utiliserait des SVG paths dynamiques
const PIECES_COUNT = 9; // 3x3 grid
const GRID_SIZE = 3;

export const TextPuzzle: React.FC<TextPuzzleProps> = ({ fullText }) => {
  const [pieces, setPieces] = useState<number[]>([]);
  const [isSolved, setIsSolved] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);

  useEffect(() => {
    // Initialiser les pièces mélangées
    const initialPieces = Array.from({ length: PIECES_COUNT }, (_, i) => i);
    const shuffled = [...initialPieces].sort(() => Math.random() - 0.5);
    setPieces(shuffled);
  }, []);

  useEffect(() => {
    // Vérifier si résolu
    const isCorrect = pieces.every((val, index) => val === index);
    if (isCorrect && pieces.length > 0) {
      setIsSolved(true);
    }
  }, [pieces]);

  const handlePieceClick = (index: number) => {
    if (isSolved) return;

    if (selectedPiece === null) {
      setSelectedPiece(index);
    } else {
      // Échanger les pièces
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
        <div
          className="grid grid-cols-3 gap-0.5 bg-slate-900 p-0.5"
          style={{
            aspectRatio: '3/1.5', // Ratio plus compact
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
                  ${isSolved ? 'cursor-default' : 'hover:opacity-90'}
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
                
                {!isSolved && (
                  <>
                    <div className="absolute inset-0 border border-slate-600/30 pointer-events-none" />
                    <div
                      className={`absolute text-xs font-bold text-teal-400 bg-slate-900/80 px-1.5 py-0.5 rounded pointer-events-none shadow-sm border border-teal-500/30
                        ${(pieceIndex + 1) >= 7 ? 'bottom-1 left-1' : (pieceIndex + 1) === 6 ? 'top-1 right-1' : 'top-1 left-1'}
                      `}
                    >
                      {pieceIndex + 1}
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {isSolved && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm rounded-lg"
          >
            <div className="text-center p-6 bg-slate-800 border border-teal-500 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-teal-400 mb-2">Bravo ! 🎉</h3>
              <p className="text-slate-300 mb-4">Vous avez reconstitué ma description.</p>
              <button 
                onClick={() => setIsSolved(false)} // Optionnel : permettre de revoir le texte sans le flou
                className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-full font-semibold transition-colors"
              >
                Voir le texte clair
              </button>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Le texte en clair est déjà affiché dans le puzzle résolu, pas besoin de le dupliquer */}
    </div>
  );
};