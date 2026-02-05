import React from 'react';

export const CuteDog = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Dog Container - fixed size for consistency */}
      <div className="relative w-28 h-40 sm:w-36 sm:h-48">
        
        {/* SOMBRERO - positioned relative to head */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 z-30">
          {/* Sombrero top (dome) */}
          <div className="relative flex flex-col items-center">
            {/* Main dome */}
            <div className="w-14 sm:w-16 h-8 sm:h-10 bg-gradient-to-b from-amber-400 to-amber-500 rounded-t-full border-2 border-amber-600">
              {/* Dome decoration - zigzag pattern */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-0.5 sm:gap-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rotate-45" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rotate-45" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rotate-45" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rotate-45" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rotate-45" />
              </div>
            </div>
            {/* Sombrero brim */}
            <div className="w-24 sm:w-28 h-3 sm:h-4 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full border-2 border-amber-600 shadow-md -mt-0.5">
              {/* Brim decoration dots */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-3">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-500 rounded-full" />
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full" />
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-500 rounded-full" />
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Ears */}
        <div className="absolute top-10 sm:top-12 left-1 sm:left-2 w-6 h-10 sm:w-7 sm:h-12 bg-[hsl(30,40%,45%)] rounded-t-full rounded-b-[40%] transform -rotate-12 z-0" />
        <div className="absolute top-10 sm:top-12 right-1 sm:right-2 w-6 h-10 sm:w-7 sm:h-12 bg-[hsl(30,40%,45%)] rounded-t-full rounded-b-[40%] transform rotate-12 z-0" />
        
        {/* Inner Ears */}
        <div className="absolute top-11 sm:top-13 left-2 sm:left-3 w-4 h-7 sm:w-5 sm:h-9 bg-[hsl(20,50%,70%)] rounded-t-full rounded-b-[40%] transform -rotate-12 z-0" />
        <div className="absolute top-11 sm:top-13 right-2 sm:right-3 w-4 h-7 sm:w-5 sm:h-9 bg-[hsl(20,50%,70%)] rounded-t-full rounded-b-[40%] transform rotate-12 z-0" />
        
        {/* Head */}
        <div className="absolute top-14 sm:top-16 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 h-20 sm:h-24 bg-[hsl(35,50%,65%)] rounded-[50%] z-10">
          
          {/* Face markings - cream patch */}
          <div className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 w-14 sm:w-16 h-12 sm:h-14 bg-[hsl(40,60%,85%)] rounded-[50%]" />
          
          {/* Eyes */}
          <div className="absolute top-4 sm:top-6 left-3 sm:left-5 w-5 h-6 sm:w-6 sm:h-7 bg-white rounded-full animate-blink">
            <div className="absolute top-1 left-1 w-3 h-4 sm:w-4 sm:h-5 bg-[hsl(30,30%,20%)] rounded-full">
              <div className="absolute top-0.5 left-0.5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full" />
            </div>
          </div>
          <div className="absolute top-4 sm:top-6 right-3 sm:right-5 w-5 h-6 sm:w-6 sm:h-7 bg-white rounded-full animate-blink">
            <div className="absolute top-1 left-1 w-3 h-4 sm:w-4 sm:h-5 bg-[hsl(30,30%,20%)] rounded-full">
              <div className="absolute top-0.5 left-0.5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full" />
            </div>
          </div>
          
          {/* Eyebrows */}
          <div className="absolute top-2 sm:top-3 left-3 sm:left-4 w-4 sm:w-5 h-1 sm:h-1.5 bg-[hsl(30,40%,40%)] rounded-full transform -rotate-6" />
          <div className="absolute top-2 sm:top-3 right-3 sm:right-4 w-4 sm:w-5 h-1 sm:h-1.5 bg-[hsl(30,40%,40%)] rounded-full transform rotate-6" />
          
          {/* Nose */}
          <div className="absolute top-11 sm:top-14 left-1/2 transform -translate-x-1/2 w-4 sm:w-5 h-3 sm:h-4 bg-[hsl(20,20%,20%)] rounded-[40%] z-20">
            <div className="absolute top-0.5 left-0.5 w-1 h-0.5 sm:w-1.5 sm:h-1 bg-[hsl(20,10%,35%)] rounded-full" />
          </div>
          
          {/* Tiny Mustache */}
          <div className="absolute top-14 sm:top-[68px] left-1/2 transform -translate-x-1/2 flex gap-0.5">
            <div className="w-3 sm:w-4 h-1 sm:h-1.5 bg-[hsl(30,30%,25%)] rounded-l-full transform -rotate-6" />
            <div className="w-3 sm:w-4 h-1 sm:h-1.5 bg-[hsl(30,30%,25%)] rounded-r-full transform rotate-6" />
          </div>
          
          {/* Mouth */}
          <div className="absolute top-[52px] sm:top-[64px] left-[38px] sm:left-[46px] w-2 h-2 sm:w-3 sm:h-3 border-l-2 border-b-2 border-[hsl(30,30%,30%)] rounded-bl-full" />
          <div className="absolute top-[52px] sm:top-[64px] left-[48px] sm:left-[58px] w-2 h-2 sm:w-3 sm:h-3 border-r-2 border-b-2 border-[hsl(30,30%,30%)] rounded-br-full" />
          
          {/* Tongue */}
          <div className="absolute top-[56px] sm:top-[68px] left-1/2 transform -translate-x-1/2 w-2 sm:w-3 h-3 sm:h-4 bg-[hsl(350,70%,70%)] rounded-b-full" />
          
          {/* Cheeks (blush) */}
          <div className="absolute top-9 sm:top-12 left-0.5 sm:left-1 w-3 sm:w-4 h-2 sm:h-3 bg-[hsl(350,60%,80%)] rounded-full opacity-60" />
          <div className="absolute top-9 sm:top-12 right-0.5 sm:right-1 w-3 sm:w-4 h-2 sm:h-3 bg-[hsl(350,60%,80%)] rounded-full opacity-60" />
        </div>
        
        {/* Body */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-10 sm:h-12 bg-[hsl(35,50%,65%)] rounded-t-[50%] rounded-b-lg z-5" />
        
        {/* Serape collar */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-2.5 sm:h-3 z-10 overflow-hidden rounded-sm">
          <div className="w-full h-full flex">
            <div className="flex-1 bg-red-500" />
            <div className="flex-1 bg-amber-400" />
            <div className="flex-1 bg-green-500" />
            <div className="flex-1 bg-amber-400" />
            <div className="flex-1 bg-red-500" />
          </div>
        </div>
        
        {/* Front Paws */}
        <div className="absolute bottom-0 left-4 sm:left-6 w-4 sm:w-5 h-3 sm:h-4 bg-[hsl(40,60%,85%)] rounded-t-lg rounded-b-full" />
        <div className="absolute bottom-0 right-4 sm:right-6 w-4 sm:w-5 h-3 sm:h-4 bg-[hsl(40,60%,85%)] rounded-t-lg rounded-b-full" />
        
        {/* Tail */}
        <div className="absolute bottom-2 -right-1 sm:-right-2 w-3 sm:w-4 h-8 sm:h-10 bg-[hsl(35,50%,65%)] rounded-full animate-tail-wag origin-bottom" />
      </div>
    </div>
  );
};

export default CuteDog;
