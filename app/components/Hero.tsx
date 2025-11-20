'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const name = "maya lekhi";
  
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group flex flex-col justify-center"
    >
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm text-gray-300 mb-8 font-mono"
      >
        ⚲ toronto, on
      </motion.p>

      <div className="overflow-hidden leading-[1.2] py-1">
        {name.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: 0.2 + (index * 0.03),
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight inline-block text-white"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 space-y-4"
      >
        <p className="text-xl md:text-2xl text-gray-300">
          product engineer + community builder + occasional writer
        </p>
        <p className="text-base md:text-lg text-gray-400 max-w-3xl">
          building tools that feel like intuition and communities that feel like home.
        </p>
      </motion.div>
    </motion.section>
  );
} 