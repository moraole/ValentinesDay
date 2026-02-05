import React from 'react';

export const CuteCat = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Cat Container - fixed size for consistency */}
      <div className="relative w-28 h-40 sm:w-36 sm:h-48">
        
        {/* FLOWER CROWN - positioned relative to head */}
        <div className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 z-30 flex items-end">
          {/* Left hibiscus - pink */}
          <div className="relative w-5 h-5 sm:w-6 sm:h-6 -mr-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2.5 sm:w-2.5 sm:h-3 bg-pink-400 rounded-full" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2.5 h-2 sm:w-3 sm:h-2.5 bg-pink-400 rounded-full" />
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2.5 h-2 sm:w-3 sm:h-2.5 bg-pink-400 rounded-full" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2.5 sm:w-2.5 sm:h-3 bg-pink-400 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-300 rounded-full" />
          </div>
          
          {/* Center plumeria - white */}
          <div className="relative w-6 h-6 sm:w-8 sm:h-8 z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -top-2.5 sm:-top-3 left-1/2 transform -translate-x-1/2 w-2 h-3 sm:w-3 sm:h-4 bg-white rounded-full" />
                <div className="absolute -top-1 sm:-top-1 -right-2 sm:-right-2.5 w-2 h-3 sm:w-3 sm:h-4 bg-white rounded-full rotate-[72deg]" />
                <div className="absolute top-1 sm:top-1.5 -right-1.5 sm:-right-2 w-2 h-3 sm:w-3 sm:h-4 bg-white rounded-full rotate-[144deg]" />
                <div className="absolute top-1 sm:top-1.5 -left-1.5 sm:-left-2 w-2 h-3 sm:w-3 sm:h-4 bg-white rounded-full rotate-[216deg]" />
                <div className="absolute -top-1 sm:-top-1 -left-2 sm:-left-2.5 w-2 h-3 sm:w-3 sm:h-4 bg-white rounded-full rotate-[288deg]" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-300 rounded-full" />
              </div>
            </div>
          </div>
          
          {/* Right hibiscus - red */}
          <div className="relative w-5 h-5 sm:w-6 sm:h-6 -ml-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2.5 sm:w-2.5 sm:h-3 bg-red-400 rounded-full" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2.5 h-2 sm:w-3 sm:h-2.5 bg-red-400 rounded-full" />
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2.5 h-2 sm:w-3 sm:h-2.5 bg-red-400 rounded-full" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2.5 sm:w-2.5 sm:h-3 bg-red-400 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-300 rounded-full" />
          </div>
        </div>
        
        {/* Small side flowers */}
        <div className="absolute top-6 sm:top-8 left-0 z-20 w-3 h-3 sm:w-4 sm:h-4">
          <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-orange-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
          <div className="w-1.5 h-1 sm:w-2 sm:h-1.5 bg-orange-400 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2" />
          <div className="w-1.5 h-1 sm:w-2 sm:h-1.5 bg-orange-400 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2" />
          <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-orange-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-200 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="absolute top-6 sm:top-8 right-0 z-20 w-3 h-3 sm:w-4 sm:h-4">
          <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-purple-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
          <div className="w-1.5 h-1 sm:w-2 sm:h-1.5 bg-purple-400 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2" />
          <div className="w-1.5 h-1 sm:w-2 sm:h-1.5 bg-purple-400 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2" />
          <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-purple-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-200 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        {/* Ears - brown cat */}
        <div className="absolute top-8 sm:top-10 left-3 sm:left-4 z-10">
          <div className="w-0 h-0 border-l-[10px] sm:border-l-[12px] border-l-transparent border-r-[10px] sm:border-r-[12px] border-r-transparent border-b-[20px] sm:border-b-[24px] border-b-[hsl(25,45%,40%)] transform -rotate-12" />
        </div>
        <div className="absolute top-8 sm:top-10 right-3 sm:right-4 z-10">
          <div className="w-0 h-0 border-l-[10px] sm:border-l-[12px] border-l-transparent border-r-[10px] sm:border-r-[12px] border-r-transparent border-b-[20px] sm:border-b-[24px] border-b-[hsl(25,45%,40%)] transform rotate-12" />
        </div>
        
        {/* Inner Ears - pink */}
        <div className="absolute top-10 sm:top-12 left-4 sm:left-5 z-20">
          <div className="w-0 h-0 border-l-[6px] sm:border-l-[8px] border-l-transparent border-r-[6px] sm:border-r-[8px] border-r-transparent border-b-[12px] sm:border-b-[16px] border-b-[hsl(350,60%,75%)] transform -rotate-12" />
        </div>
        <div className="absolute top-10 sm:top-12 right-4 sm:right-5 z-20">
          <div className="w-0 h-0 border-l-[6px] sm:border-l-[8px] border-l-transparent border-r-[6px] sm:border-r-[8px] border-r-transparent border-b-[12px] sm:border-b-[16px] border-b-[hsl(350,60%,75%)] transform rotate-12" />
        </div>
        
        {/* Head - brown cat */}
        <div className="absolute top-14 sm:top-16 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 h-20 sm:h-24 bg-[hsl(25,45%,45%)] rounded-[50%] z-10">
          
          {/* Lighter face patch */}
          <div className="absolute top-5 sm:top-6 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-12 sm:h-16 bg-[hsl(30,50%,65%)] rounded-[50%]" />
          
          {/* Eyes - big cute eyes */}
          <div className="absolute top-5 sm:top-7 left-3 sm:left-4 w-5 h-6 sm:w-7 sm:h-8 bg-[hsl(45,80%,70%)] rounded-full animate-blink overflow-hidden">
            <div className="absolute top-1.5 sm:top-2 left-1/2 transform -translate-x-1/2 w-1.5 sm:w-2 h-3.5 sm:h-5 bg-[hsl(0,0%,5%)] rounded-full" />
            <div className="absolute top-1 sm:top-1.5 left-1.5 sm:left-2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full" />
          </div>
          <div className="absolute top-5 sm:top-7 right-3 sm:right-4 w-5 h-6 sm:w-7 sm:h-8 bg-[hsl(45,80%,70%)] rounded-full animate-blink overflow-hidden">
            <div className="absolute top-1.5 sm:top-2 left-1/2 transform -translate-x-1/2 w-1.5 sm:w-2 h-3.5 sm:h-5 bg-[hsl(0,0%,5%)] rounded-full" />
            <div className="absolute top-1 sm:top-1.5 left-1.5 sm:left-2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full" />
          </div>
          
          {/* Nose - pink triangle */}
          <div className="absolute top-12 sm:top-16 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-0 h-0 border-l-[5px] sm:border-l-[6px] border-l-transparent border-r-[5px] sm:border-r-[6px] border-r-transparent border-t-[6px] sm:border-t-[8px] border-t-[hsl(350,60%,70%)]" />
          </div>
          
          {/* Mouth */}
          <div className="absolute top-[52px] sm:top-[68px] left-[38px] sm:left-[46px] w-2 h-1.5 sm:w-3 sm:h-2 border-l-2 border-b-2 border-[hsl(350,50%,65%)] rounded-bl-full" />
          <div className="absolute top-[52px] sm:top-[68px] left-[48px] sm:left-[58px] w-2 h-1.5 sm:w-3 sm:h-2 border-r-2 border-b-2 border-[hsl(350,50%,65%)] rounded-br-full" />
          
          {/* Whiskers - left */}
          <div className="absolute top-12 sm:top-16 left-0 w-6 sm:w-8 h-0.5 bg-[hsl(30,30%,70%)] transform -rotate-6 origin-right" />
          <div className="absolute top-[52px] sm:top-[68px] left-0 w-7 sm:w-9 h-0.5 bg-[hsl(30,30%,70%)] origin-right" />
          <div className="absolute top-[58px] sm:top-[74px] left-0 w-6 sm:w-8 h-0.5 bg-[hsl(30,30%,70%)] transform rotate-6 origin-right" />
          
          {/* Whiskers - right */}
          <div className="absolute top-12 sm:top-16 right-0 w-6 sm:w-8 h-0.5 bg-[hsl(30,30%,70%)] transform rotate-6 origin-left" />
          <div className="absolute top-[52px] sm:top-[68px] right-0 w-7 sm:w-9 h-0.5 bg-[hsl(30,30%,70%)] origin-left" />
          <div className="absolute top-[58px] sm:top-[74px] right-0 w-6 sm:w-8 h-0.5 bg-[hsl(30,30%,70%)] transform -rotate-6 origin-left" />
          
          {/* Cheeks (rosy blush) */}
          <div className="absolute top-10 sm:top-14 left-0.5 sm:left-1 w-2.5 sm:w-3 h-1.5 sm:h-2 bg-[hsl(350,50%,70%)] rounded-full opacity-50" />
          <div className="absolute top-10 sm:top-14 right-0.5 sm:right-1 w-2.5 sm:w-3 h-1.5 sm:h-2 bg-[hsl(350,50%,70%)] rounded-full opacity-50" />
        </div>
        
        {/* LEI NECKLACE - around neck */}
        <div className="absolute top-[120px] sm:top-[148px] left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center gap-0.5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-pink-400 rounded-full" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-300 rounded-full" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-400 rounded-full" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-pink-400 rounded-full" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-400 rounded-full" />
          </div>
        </div>
        
        {/* Body - brown */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-11 sm:h-14 bg-[hsl(25,45%,45%)] rounded-t-[50%] rounded-b-lg z-5" />
        
        {/* Lighter tummy */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 sm:w-16 h-8 sm:h-10 bg-[hsl(30,50%,65%)] rounded-t-[50%] rounded-b-lg z-5" />
        
        {/* Second row of lei on body */}
        <div className="absolute bottom-4 sm:bottom-5 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex items-center gap-0.5">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-300 rounded-full" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-pink-400 rounded-full" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-400 rounded-full" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-orange-400 rounded-full" />
          </div>
        </div>
        
        {/* Front Paws */}
        <div className="absolute bottom-0 left-4 sm:left-6 w-4 sm:w-5 h-3 sm:h-4 bg-[hsl(30,40%,55%)] rounded-t-lg rounded-b-full">
          <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex gap-0.5">
            <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[hsl(350,50%,70%)] rounded-full" />
          </div>
        </div>
        <div className="absolute bottom-0 right-4 sm:right-6 w-4 sm:w-5 h-3 sm:h-4 bg-[hsl(30,40%,55%)] rounded-t-lg rounded-b-full">
          <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex gap-0.5">
            <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[hsl(350,50%,70%)] rounded-full" />
          </div>
        </div>
        
        {/* Tail with flower */}
        <div className="absolute bottom-5 sm:bottom-6 -left-2 sm:-left-3 z-5">
          <div className="w-2.5 sm:w-3 h-12 sm:h-16 bg-[hsl(25,45%,45%)] rounded-full animate-cat-tail origin-bottom transform rotate-45">
            {/* Flower on tail */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4">
              <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-pink-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
              <div className="w-1.5 h-1 sm:w-2 sm:h-1.5 bg-pink-400 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2" />
              <div className="w-1.5 h-1 sm:w-2 sm:h-1.5 bg-pink-400 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2" />
              <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-pink-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuteCat;
