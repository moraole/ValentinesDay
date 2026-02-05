import React from 'react';

export const Sparkle = ({ className = '', size = 'md', delay = 0 }) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };
  
  return (
    <div 
      className={`${sizeClasses[size]} animate-sparkle ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path 
          d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" 
          fill="hsl(40, 80%, 65%)"
        />
      </svg>
    </div>
  );
};

export const SparkleGroup = ({ count = 5, className = '' }) => {
  const positions = [
    { top: '10%', left: '15%' },
    { top: '20%', right: '20%' },
    { top: '70%', left: '10%' },
    { top: '60%', right: '15%' },
    { top: '40%', left: '5%' },
    { top: '80%', right: '25%' },
    { top: '30%', right: '5%' },
    { top: '50%', left: '20%' }
  ];
  
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {positions.slice(0, count).map((pos, i) => (
        <div key={i} className="absolute" style={pos}>
          <Sparkle 
            size={['sm', 'md', 'lg'][i % 3]} 
            delay={i * 0.4}
          />
        </div>
      ))}
    </div>
  );
};

export default Sparkle;
