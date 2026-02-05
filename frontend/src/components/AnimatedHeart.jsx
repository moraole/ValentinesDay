import React, { useState } from 'react';

export const AnimatedHeart = ({ onClick, size = 'md', clickable = true, className = '' }) => {
  const [isClicked, setIsClicked] = useState(false);
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
    hero: 'w-40 h-40 sm:w-48 sm:h-48'
  };
  
  const handleClick = () => {
    if (!clickable) return;
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    if (onClick) onClick();
  };
  
  return (
    <div 
      className={`relative ${sizeClasses[size]} ${clickable ? 'cursor-pointer' : ''} ${className}`}
      onClick={handleClick}
    >
      {/* Heart SVG */}
      <svg 
        viewBox="0 0 32 29.6" 
        className={`w-full h-full transition-transform duration-300 ${
          isClicked ? 'scale-90' : ''
        } ${clickable ? 'animate-heartbeat hover:scale-110' : ''}`}
        style={{
          filter: 'drop-shadow(0 4px 12px hsl(350 70% 60% / 0.4))'
        }}
      >
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(350, 80%, 70%)" />
            <stop offset="50%" stopColor="hsl(350, 75%, 60%)" />
            <stop offset="100%" stopColor="hsl(0, 70%, 55%)" />
          </linearGradient>
        </defs>
        <path 
          d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          fill="url(#heartGradient)"
        />
        {/* Shine effect */}
        <ellipse cx="10" cy="8" rx="3" ry="4" fill="hsl(350, 90%, 85%)" opacity="0.5" />
      </svg>
      
      {/* Click hint text */}
      {clickable && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs sm:text-sm text-valentine-deep/70 font-medium animate-pulse">
            Click me! 💕
          </span>
        </div>
      )}
    </div>
  );
};

export const FloatingHeart = ({ style, delay = 0, size = 'sm' }) => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-5 h-5',
    md: 'w-8 h-8'
  };
  
  return (
    <div 
      className={`absolute ${sizeClasses[size]} animate-float-up pointer-events-none`}
      style={{
        ...style,
        animationDelay: `${delay}s`,
        opacity: 0.6
      }}
    >
      <svg viewBox="0 0 32 29.6" className="w-full h-full">
        <path 
          d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          fill="hsl(350, 70%, 75%)"
        />
      </svg>
    </div>
  );
};

export default AnimatedHeart;
