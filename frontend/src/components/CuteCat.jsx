import React from 'react';

export const CuteCat = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Cat Container */}
      <div className="relative w-32 h-36 sm:w-40 sm:h-44">
        
        {/* Ears */}
        <div className="absolute top-0 left-4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[24px] border-b-[hsl(0,0%,15%)] transform -rotate-12 z-10" />
        <div className="absolute top-0 right-4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[24px] border-b-[hsl(0,0%,15%)] transform rotate-12 z-10" />
        
        {/* Inner Ears - pink */}
        <div className="absolute top-2 left-5 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-[hsl(350,60%,75%)] transform -rotate-12 z-20" />
        <div className="absolute top-2 right-5 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-[hsl(350,60%,75%)] transform rotate-12 z-20" />
        
        {/* Head */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-28 h-24 bg-[hsl(0,0%,15%)] rounded-[50%] z-10">
          
          {/* Eyes */}
          <div className="absolute top-7 left-4 w-7 h-8 bg-[hsl(60,70%,75%)] rounded-full animate-blink overflow-hidden">
            {/* Pupil */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-5 bg-[hsl(0,0%,5%)] rounded-full" />
            {/* Shine */}
            <div className="absolute top-1.5 left-2 w-1.5 h-1.5 bg-[hsl(0,0%,100%)] rounded-full" />
          </div>
          <div className="absolute top-7 right-4 w-7 h-8 bg-[hsl(60,70%,75%)] rounded-full animate-blink overflow-hidden">
            {/* Pupil */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-5 bg-[hsl(0,0%,5%)] rounded-full" />
            {/* Shine */}
            <div className="absolute top-1.5 left-2 w-1.5 h-1.5 bg-[hsl(0,0%,100%)] rounded-full" />
          </div>
          
          {/* Nose - pink triangle */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[hsl(350,60%,70%)] z-20" />
          
          {/* Mouth */}
          <div className="absolute top-[72px] left-[46px] w-3 h-2 border-l-2 border-b-2 border-[hsl(350,50%,65%)] rounded-bl-full" />
          <div className="absolute top-[72px] left-[56px] w-3 h-2 border-r-2 border-b-2 border-[hsl(350,50%,65%)] rounded-br-full" />
          
          {/* Whiskers - left */}
          <div className="absolute top-16 left-0 w-8 h-0.5 bg-[hsl(0,0%,60%)] transform -rotate-6 origin-right" />
          <div className="absolute top-[68px] left-0 w-9 h-0.5 bg-[hsl(0,0%,60%)] origin-right" />
          <div className="absolute top-[74px] left-0 w-8 h-0.5 bg-[hsl(0,0%,60%)] transform rotate-6 origin-right" />
          
          {/* Whiskers - right */}
          <div className="absolute top-16 right-0 w-8 h-0.5 bg-[hsl(0,0%,60%)] transform rotate-6 origin-left" />
          <div className="absolute top-[68px] right-0 w-9 h-0.5 bg-[hsl(0,0%,60%)] origin-left" />
          <div className="absolute top-[74px] right-0 w-8 h-0.5 bg-[hsl(0,0%,60%)] transform -rotate-6 origin-left" />
          
          {/* Cheeks (subtle blush) */}
          <div className="absolute top-14 left-1 w-3 h-2 bg-[hsl(350,50%,60%)] rounded-full opacity-40" />
          <div className="absolute top-14 right-1 w-3 h-2 bg-[hsl(350,50%,60%)] rounded-full opacity-40" />
        </div>
        
        {/* Body */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-[hsl(0,0%,15%)] rounded-t-[50%] rounded-b-lg z-0" />
        
        {/* Front Paws */}
        <div className="absolute bottom-0 left-6 w-5 h-4 bg-[hsl(0,0%,20%)] rounded-t-lg rounded-b-full">
          {/* Toe beans */}
          <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex gap-0.5">
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
          </div>
        </div>
        <div className="absolute bottom-0 right-6 w-5 h-4 bg-[hsl(0,0%,20%)] rounded-t-lg rounded-b-full">
          {/* Toe beans */}
          <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex gap-0.5">
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
          </div>
        </div>
        
        {/* Tail */}
        <div className="absolute bottom-4 -left-4 w-3 h-16 bg-[hsl(0,0%,15%)] rounded-full animate-cat-tail origin-bottom transform rotate-45" />
      </div>
    </div>
  );
};

export default CuteCat;
