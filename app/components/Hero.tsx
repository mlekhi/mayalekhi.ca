'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const name = "maya lekhi";
  
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group flex flex-col justify-center pt-24 md:pt-0"
    >
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm text-gray-300 mb-8 font-mono uppercase"
      >
        ⚲ san francisco, ca
      </motion.p>

      <div className="overflow-hidden leading-[1.2] py-1">
        {name.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIndex) => {
              const globalIndex = name.indexOf(word) + charIndex;
              return (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.2 + (globalIndex * 0.03),
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight inline-block text-white"
                >
                  {char}
                </motion.span>
              );
            })}
            {wordIndex < name.split(' ').length - 1 && (
              <span className="inline-block text-6xl md:text-7xl lg:text-8xl">&nbsp;</span>
            )}
          </span>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 space-y-4"
      >
        <p className="text-lg md:text-xl text-gray-300">
          product engineer + community builder + investor
        </p>
      </motion.div>
    </motion.section>
  );
} 