'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    const [count, setCount] = useState(0);
    const controls = useAnimationControls();
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= 99) {
            clearInterval(interval);
            return 99;
          }
          return prevCount + 1;
        });
      }, 20); // Adjust timing to complete in ~2 seconds
  
      return () => clearInterval(interval);
    }, []);
  
  
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed inset-0 z-50"
      style={{
        backgroundImage: 'url("/gradients/pink-yellow.png")',
        backgroundSize: '800px 800px',
        backgroundRepeat: 'repeat',
      }}
    >
      
      <div className="absolute bottom-8 right-8">
        <motion.h1 
          className="text-[200px] font-bold text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {count}
        </motion.h1>
      </div>
    </motion.div>
  );
} 