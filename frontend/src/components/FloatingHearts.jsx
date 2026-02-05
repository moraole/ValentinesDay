import React, { useMemo, useRef } from 'react';
import { FloatingHeart } from './AnimatedHeart';

// Generate seeded random numbers for consistent rendering
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const FloatingHearts = ({ count = 15 }) => {
  const seedRef = useRef(Date.now());
  
  const hearts = useMemo(() => {
    const seed = seedRef.current;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${seededRandom(seed + i * 1.1) * 100}%`,
      delay: seededRandom(seed + i * 2.2) * 8,
      size: ['xs', 'sm', 'md'][Math.floor(seededRandom(seed + i * 3.3) * 3)],
      duration: 6 + seededRandom(seed + i * 4.4) * 4
    }));
  }, [count]);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <FloatingHeart
          key={heart.id}
          style={{
            left: heart.left,
            bottom: '-50px',
            animationDuration: `${heart.duration}s`
          }}
          delay={heart.delay}
          size={heart.size}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
