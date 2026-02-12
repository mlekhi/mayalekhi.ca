'use client';

import { useState, useEffect } from 'react';

export function useKonamiCode(onSuccess: () => void) {
  const [sequence, setSequence] = useState<string[]>([]);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setSequence((prev) => {
        const newSequence = [...prev, e.code].slice(-konamiCode.length);
        
        if (newSequence.length === konamiCode.length && 
            newSequence.every((key, i) => key === konamiCode[i])) {
          onSuccess();
          return [];
        }
        
        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSuccess, konamiCode]);
}

