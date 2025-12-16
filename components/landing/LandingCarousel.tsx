import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '../../types/landing';

// Define the structure for a slide, which now includes a background
interface LandingSlide {
  component: React.ReactNode;
  background: string;
}

interface LandingCarouselProps {
  slides: LandingSlide[];
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

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setPage((prevPage) => {
      const newPage = prevPage + newDirection;
      if (newPage < 0) return slides.length - 1;
      if (newPage >= slides.length) return 0;
      return newPage;
    });
  }, [slides.length]);

  const currentSlideIndex = page % slides.length;

  // Optional: Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [paginate]);

  // Scroll-based navigation
  useEffect(() => {
    let isWheeling = false;
    const handleWheel = (e: WheelEvent) => {
      if (isWheeling) return;
      isWheeling = true;
      
      if (e.deltaY > 50) { // Increased threshold
        paginate(1);
      } else if (e.deltaY < -50) { // Increased threshold
        paginate(-1);
      }
      
      setTimeout(() => {
        isWheeling = false;
      }, 800); // Reduced delay
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [paginate]);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Layer */}
      <AnimatePresence>
        <motion.div
          key={`bg-${currentSlideIndex}`}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ background: slides[currentSlideIndex].background }}
        />
      </AnimatePresence>

      {/* Slide Content Layer */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`content-${currentSlideIndex}`}
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
          className="absolute w-full h-full flex items-center justify-center z-10"
        >
          {slides[currentSlideIndex].component}
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