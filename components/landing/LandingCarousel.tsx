import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '../../types/landing';

interface LandingCarouselProps {
  slides: React.ReactNode[];
  scrollToSection: (section: Section | string) => void;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    y: '10%',
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    y: '-10%',
    opacity: 0,
    scale: 0.8,
  }),
};

const LandingCarousel: React.FC<LandingCarouselProps> = ({ slides, scrollToSection }) => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setPage((prevPage) => {
      const newPage = prevPage + newDirection;
      if (newPage < 0) return slides.length - 1;
      if (newPage >= slides.length) return 0;
      return newPage;
    });
  };

  const currentSlideIndex = page % slides.length;

  // Optional: Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 10000); // Change slide every 10 seconds
    return () => clearInterval(timer);
  }, [page, slides.length]);

  // Scroll-based navigation
  useEffect(() => {
    let isWheeling = false;
    const handleWheel = (e: WheelEvent) => {
      if (!isWheeling) {
        isWheeling = true;
        if (e.deltaY > 0) {
          paginate(1);
        } else if (e.deltaY < 0) {
          paginate(-1);
        }
        setTimeout(() => {
          isWheeling = false;
        }, 1000); // 1 second delay between scrolls
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [paginate]);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlideIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
          }}
          className="absolute w-full h-full flex items-center justify-center"
        >
          {slides[currentSlideIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <motion.button
        className="absolute left-4 z-20 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
        onClick={() => paginate(-1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      <motion.button
        className="absolute right-4 z-20 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
        onClick={() => paginate(1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 z-20 flex gap-2">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentSlideIndex ? 'bg-teal-400' : 'bg-white/30'}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setDirection(index > currentSlideIndex ? 1 : -1);
              setPage(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingCarousel;