import React, { useMemo } from 'react';
import { FloatingHeart } from './AnimatedHeart';

export const FloatingHearts = ({ count = 15 }) => {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 8,
      size: ['xs', 'sm', 'md'][Math.floor(Math.random() * 3)],
      duration: 6 + Math.random() * 4
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
