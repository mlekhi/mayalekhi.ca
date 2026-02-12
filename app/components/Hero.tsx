'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  name?: string;
  description?: string;
}

export default function Hero({ name = "maya lekhi", description = "product engineer + community builder + investor" }: HeroProps) {
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
        <motion.h1
          key={name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white"
        >
          {name.includes('▲') ? (
            <>
              <span className="inline-block whitespace-nowrap">maya</span>{' '}
              <span className="inline-block whitespace-nowrap">lekhi</span>{' '}
              <span className="inline-block whitespace-nowrap">▲</span>
            </>
          ) : (
            <>
              <span className="inline-block whitespace-nowrap">maya</span>{' '}
              <span className="inline-block whitespace-nowrap">lekhi</span>
            </>
          )}
        </motion.h1>
      </div>

      <motion.div 
        key={description}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 space-y-4"
      >
        <p className="text-lg md:text-xl text-gray-300">
          {description}
        </p>
      </motion.div>
    </motion.section>
  );
} 