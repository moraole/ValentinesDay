import React from 'react';

export const CuteDog = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Dog Container */}
      <div className="relative w-32 h-44 sm:w-40 sm:h-52">
        
        {/* SOMBRERO */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
          {/* Sombrero top (dome) */}
          <div className="relative">
            {/* Main dome */}
            <div className="w-16 h-10 bg-gradient-to-b from-amber-400 to-amber-500 rounded-t-full mx-auto border-2 border-amber-600" />
            {/* Dome decoration - zigzag pattern */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-3 flex justify-center items-center">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-500 rotate-45" />
                <div className="w-2 h-2 bg-green-500 rotate-45" />
                <div className="w-2 h-2 bg-red-500 rotate-45" />
                <div className="w-2 h-2 bg-green-500 rotate-45" />
                <div className="w-2 h-2 bg-red-500 rotate-45" />
              </div>
            </div>
          </div>
          {/* Sombrero brim */}
          <div className="w-28 h-4 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full -mt-1 border-2 border-amber-600 shadow-lg" />
          {/* Brim decoration */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 flex justify-between px-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
          </div>
        </div>
        
        {/* Ears */}
        <div className="absolute top-8 left-2 w-8 h-14 bg-[hsl(30,40%,45%)] rounded-t-full rounded-b-[40%] transform -rotate-12 z-0" />
        <div className="absolute top-8 right-2 w-8 h-14 bg-[hsl(30,40%,45%)] rounded-t-full rounded-b-[40%] transform rotate-12 z-0" />
        
        {/* Inner Ears */}
        <div className="absolute top-9 left-3.5 w-5 h-10 bg-[hsl(20,50%,70%)] rounded-t-full rounded-b-[40%] transform -rotate-12 z-0" />
        <div className="absolute top-9 right-3.5 w-5 h-10 bg-[hsl(20,50%,70%)] rounded-t-full rounded-b-[40%] transform rotate-12 z-0" />
        
        {/* Head */}
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-28 h-24 bg-[hsl(35,50%,65%)] rounded-[50%] z-10">
          
          {/* Face markings - cream patch */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-14 bg-[hsl(40,60%,85%)] rounded-[50%]" />
          
          {/* Eyes */}
          <div className="absolute top-6 left-5 w-6 h-7 bg-[hsl(0,0%,100%)] rounded-full animate-blink">
            <div className="absolute top-1 left-1 w-4 h-5 bg-[hsl(30,30%,20%)] rounded-full">
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-[hsl(0,0%,100%)] rounded-full" />
            </div>
          </div>
          <div className="absolute top-6 right-5 w-6 h-7 bg-[hsl(0,0%,100%)] rounded-full animate-blink">
            <div className="absolute top-1 left-1 w-4 h-5 bg-[hsl(30,30%,20%)] rounded-full">
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-[hsl(0,0%,100%)] rounded-full" />
            </div>
          </div>
          
          {/* Eyebrows */}
          <div className="absolute top-3 left-4 w-5 h-1.5 bg-[hsl(30,40%,40%)] rounded-full transform -rotate-6" />
          <div className="absolute top-3 right-4 w-5 h-1.5 bg-[hsl(30,40%,40%)] rounded-full transform rotate-6" />
          
          {/* Nose */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-5 h-4 bg-[hsl(20,20%,20%)] rounded-[40%] z-20">
            <div className="absolute top-0.5 left-1 w-1.5 h-1 bg-[hsl(20,10%,35%)] rounded-full" />
          </div>
          
          {/* Mouth */}
          <div className="absolute top-[72px] left-[46px] w-3 h-3 border-l-2 border-b-2 border-[hsl(30,30%,30%)] rounded-bl-full" />
          <div className="absolute top-[72px] left-[56px] w-3 h-3 border-r-2 border-b-2 border-[hsl(30,30%,30%)] rounded-br-full" />
          
          {/* Tongue - cute! */}
          <div className="absolute top-[76px] left-1/2 transform -translate-x-1/2 w-3 h-4 bg-[hsl(350,70%,70%)] rounded-b-full" />
          
          {/* Cheeks (blush) */}
          <div className="absolute top-12 left-1 w-4 h-3 bg-[hsl(350,60%,80%)] rounded-full opacity-60" />
          <div className="absolute top-12 right-1 w-4 h-3 bg-[hsl(350,60%,80%)] rounded-full opacity-60" />
        </div>
        
        {/* Tiny Mustache - Mexican style! */}
        <div className="absolute top-[94px] left-1/2 transform -translate-x-1/2 z-20 flex gap-0.5">
          <div className="w-4 h-1.5 bg-[hsl(30,30%,25%)] rounded-l-full transform -rotate-6" />
          <div className="w-4 h-1.5 bg-[hsl(30,30%,25%)] rounded-r-full transform rotate-6" />
        </div>
        
        {/* Body */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-[hsl(35,50%,65%)] rounded-t-[50%] rounded-b-lg z-0" />
        
        {/* Bandana/Serape collar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-3 z-10">
          <div className="w-full h-full flex">
            <div className="flex-1 bg-red-500" />
            <div className="flex-1 bg-amber-400" />
            <div className="flex-1 bg-green-500" />
            <div className="flex-1 bg-amber-400" />
            <div className="flex-1 bg-red-500" />
          </div>
        </div>
        
        {/* Front Paws */}
        <div className="absolute bottom-0 left-6 w-5 h-4 bg-[hsl(40,60%,85%)] rounded-t-lg rounded-b-full" />
        <div className="absolute bottom-0 right-6 w-5 h-4 bg-[hsl(40,60%,85%)] rounded-t-lg rounded-b-full" />
        
        {/* Tail */}
        <div className="absolute bottom-2 -right-2 w-4 h-10 bg-[hsl(35,50%,65%)] rounded-full animate-tail-wag origin-bottom" />
      </div>
    </div>
  );
};

export default CuteDog;
