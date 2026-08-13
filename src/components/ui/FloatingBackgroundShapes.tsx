import React from 'react';
import { motion } from 'framer-motion';

export const FloatingBackgroundShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Medium Ambient Teal Circle (Top-Right) */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-12 right-12 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-teal-400/25 blur-[0.5px] hidden md:block"
      />

      {/* 2. Small Ambient Emerald Circle (Bottom-Left) */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-16 left-12 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/25 blur-[0.5px] hidden md:block"
      />
    </div>
  );
};