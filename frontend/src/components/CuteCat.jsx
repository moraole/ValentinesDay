import React from 'react';

export const CuteCat = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Cat Container - fixed size */}
      <div className="relative w-28 h-36 sm:w-36 sm:h-44">
        
        {/* HEAD - Main anchor for everything */}
        <div className="absolute top-8 sm:top-10 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 h-20 sm:h-24 bg-[hsl(25,45%,45%)] rounded-[50%] z-10">
          
          {/* EARS - Attached to head, lowered */}
          <div className="absolute -top-1 sm:-top-2 left-1 sm:left-2">
            <div className="w-0 h-0 border-l-[10px] sm:border-l-[12px] border-l-transparent border-r-[10px] sm:border-r-[12px] border-r-transparent border-b-[18px] sm:border-b-[22px] border-b-[hsl(25,45%,40%)] transform -rotate-6" />
            {/* Inner ear */}
            <div className="absolute top-[6px] sm:top-[8px] left-[4px] sm:left-[5px] w-0 h-0 border-l-[6px] sm:border-l-[7px] border-l-transparent border-r-[6px] sm:border-r-[7px] border-r-transparent border-b-[10px] sm:border-b-[12px] border-b-[hsl(350,60%,75%)] transform -rotate-6" />
          </div>
          <div className="absolute -top-1 sm:-top-2 right-1 sm:right-2">
            <div className="w-0 h-0 border-l-[10px] sm:border-l-[12px] border-l-transparent border-r-[10px] sm:border-r-[12px] border-r-transparent border-b-[18px] sm:border-b-[22px] border-b-[hsl(25,45%,40%)] transform rotate-6" />
            {/* Inner ear */}
            <div className="absolute top-[6px] sm:top-[8px] right-[4px] sm:right-[5px] w-0 h-0 border-l-[6px] sm:border-l-[7px] border-l-transparent border-r-[6px] sm:border-r-[7px] border-r-transparent border-b-[10px] sm:border-b-[12px] border-b-[hsl(350,60%,75%)] transform rotate-6" />
          </div>
          
          {/* FLOWER CROWN - On top of head between ears, lowered */}
          <div className="absolute -top-3 sm:-top-200 left-1/2 transform -translate-x-1/2 z-30 flex items-end">
            {/* Left hibiscus - pink */}
            <div className="relative w-4 h-4 sm:w-5 sm:h-5 -mr-0.5">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-2 sm:w-2 sm:h-2.5 bg-pink-400 rounded-full" />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-1.5 sm:w-2.5 sm:h-2 bg-pink-400 rounded-full" />
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-1.5 sm:w-2.5 sm:h-2 bg-pink-400 rounded-full" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-2 sm:w-2 sm:h-2.5 bg-pink-400 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-300 rounded-full" />
            </div>
            
            {/* Center plumeria - white (bigger) */}
            <div className="relative w-5 h-5 sm:w-7 sm:h-7 z-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-2.5 sm:w-2 sm:h-3 bg-white rounded-full" />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2.5 h-1.5 sm:w-3 sm:h-2 bg-white rounded-full" />
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2.5 h-1.5 sm:w-3 sm:h-2 bg-white rounded-full" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-2.5 sm:w-2 sm:h-3 bg-white rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-300 rounded-full" />
            </div>
            
            {/* Right hibiscus - red */}
            <div className="relative w-4 h-4 sm:w-5 sm:h-5 -ml-0.5">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-2 sm:w-2 sm:h-2.5 bg-red-400 rounded-full" />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-1.5 sm:w-2.5 sm:h-2 bg-red-400 rounded-full" />
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-1.5 sm:w-2.5 sm:h-2 bg-red-400 rounded-full" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-2 sm:w-2 sm:h-2.5 bg-red-400 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-300 rounded-full" />
            </div>
          </div>
          
          {/* Small side flowers - on ears, lowered */}
          <div className="absolute top-1 sm:top-10 -left-1 sm:-left-0 z-20 w-3 h-3 sm:w-4 sm:h-4">
            <div className="w-1 h-1.5 bg-orange-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
            <div className="w-1.5 h-1 bg-orange-400 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2" />
            <div className="w-1.5 h-1 bg-orange-400 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2" />
            <div className="w-1 h-1.5 bg-orange-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
            <div className="w-1 h-1 bg-yellow-200 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="absolute top-1 sm:top-10 -right-1 sm:-right-0 z-20 w-3 h-3 sm:w-4 sm:h-4">
            <div className="w-1 h-1.5 bg-purple-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
            <div className="w-1.5 h-1 bg-purple-400 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2" />
            <div className="w-1.5 h-1 bg-purple-400 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2" />
            <div className="w-1 h-1.5 bg-purple-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
            <div className="w-1 h-1 bg-yellow-200 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          {/* Lighter face patch */}
          <div className="absolute top-5 sm:top-6 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-12 sm:h-14 bg-[hsl(30,50%,65%)] rounded-[50%]" />
          
          {/* Eyes */}
          <div className="absolute top-5 sm:top-6 left-3 sm:left-4 w-5 h-5 sm:w-6 sm:h-7 bg-[hsl(45,80%,70%)] rounded-full animate-blink overflow-hidden">
            <div className="absolute top-1 sm:top-1.5 left-1/2 transform -translate-x-1/2 w-1.5 sm:w-2 h-3 sm:h-4 bg-[hsl(0,0%,5%)] rounded-full" />
            <div className="absolute top-0.5 sm:top-1 left-1 sm:left-1.5 w-1 h-1 bg-white rounded-full" />
          </div>
          <div className="absolute top-5 sm:top-6 right-3 sm:right-4 w-5 h-5 sm:w-6 sm:h-7 bg-[hsl(45,80%,70%)] rounded-full animate-blink overflow-hidden">
            <div className="absolute top-1 sm:top-1.5 left-1/2 transform -translate-x-1/2 w-1.5 sm:w-2 h-3 sm:h-4 bg-[hsl(0,0%,5%)] rounded-full" />
            <div className="absolute top-0.5 sm:top-1 left-1 sm:left-1.5 w-1 h-1 bg-white rounded-full" />
          </div>
          
          {/* Nose */}
          <div className="absolute top-11 sm:top-14 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-0 h-0 border-l-[4px] sm:border-l-[5px] border-l-transparent border-r-[4px] sm:border-r-[5px] border-r-transparent border-t-[5px] sm:border-t-[7px] border-t-[hsl(350,60%,70%)]" />
          </div>
          
          {/* Mouth */}
          <div className="absolute top-[52px] sm:top-[62px] left-[40px] sm:left-[48px] w-2 h-1.5 sm:w-2.5 sm:h-2 border-l-[1.5px] sm:border-l-2 border-b-[1.5px] sm:border-b-2 border-[hsl(350,50%,65%)] rounded-bl-full" />
          <div className="absolute top-[52px] sm:top-[62px] left-[48px] sm:left-[58px] w-2 h-1.5 sm:w-2.5 sm:h-2 border-r-[1.5px] sm:border-r-2 border-b-[1.5px] sm:border-b-2 border-[hsl(350,50%,65%)] rounded-br-full" />
          
          {/* Whiskers */}
          <div className="absolute top-11 sm:top-14 -left-4 sm:-left-9 w-5 sm:w-7 h-[1px] bg-[hsl(30,30%,70%)] transform -rotate-6" />
          <div className="absolute top-[48px] sm:top-[60px] -left-5 sm:-left-7 w-6 sm:w-8 h-[1px] bg-[hsl(30,30%,70%)]" />
          <div className="absolute top-[52px] sm:top-[66px] -left-4 sm:-left-6 w-5 sm:w-7 h-[1px] bg-[hsl(30,30%,70%)] transform rotate-6" />
          
          <div className="absolute top-11 sm:top-14 -right-9 sm:-right-60 w-5 sm:w-7 h-[1px] bg-[hsl(30,30%,70%)] transform rotate-6" />
          <div className="absolute top-[48px] sm:top-[60px] -right-90 sm:-right-7 w-6 sm:w-8 h-[1px] bg-[hsl(30,30%,70%)]" />
          <div className="absolute top-[52px] sm:top-[66px] -right-4 sm:-right-6 w-5 sm:w-7 h-[1px] bg-[hsl(30,30%,70%)] transform -rotate-6" />
          
          {/* Cheeks */}
          <div className="absolute top-9 sm:top-11 left-0.5 sm:left-1 w-2 sm:w-3 h-1.5 sm:h-2 bg-[hsl(350,50%,70%)] rounded-full opacity-50" />
          <div className="absolute top-9 sm:top-11 right-0.5 sm:right-1 w-2 sm:w-3 h-1.5 sm:h-2 bg-[hsl(350,50%,70%)] rounded-full opacity-50" />
        </div>
        
        {/* LEI NECKLACE - below head */}
        <div className="absolute top-[105px] sm:top-[130px] left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center gap-0.5">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-pink-400 rounded-full" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-300 rounded-full" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-400 rounded-full" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-orange-400 rounded-full" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-pink-400 rounded-full" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-purple-400 rounded-full" />
          </div>
        </div>
        
        {/* Body */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-10 sm:h-12 bg-[hsl(25,45%,45%)] rounded-t-[50%] rounded-b-lg z-5" />
        
        {/* Lighter tummy */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 sm:w-16 h-7 sm:h-9 bg-[hsl(30,50%,65%)] rounded-t-[50%] rounded-b-lg z-5" />
        
        {/* Second lei row */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex items-center gap-0.5">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-300 rounded-full" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full" />
          </div>
        </div>
        
        {/* Front Paws */}
        <div className="absolute bottom-0 left-4 sm:left-5 w-4 sm:w-5 h-3 sm:h-4 bg-[hsl(30,40%,55%)] rounded-t-lg rounded-b-full">
          <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex gap-px">
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
          </div>
        </div>
        <div className="absolute bottom-0 right-4 sm:right-5 w-4 sm:w-5 h-3 sm:h-4 bg-[hsl(30,40%,55%)] rounded-t-lg rounded-b-full">
          <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex gap-px">
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
          </div>
        </div>
        
        {/* Tail with flower */}
        <div className="absolute bottom-4 sm:bottom-5 -left-542 sm:-left-50 z-5">
          <div className="w-2.5 sm:w-3 h-10 sm:h-14 bg-[hsl(25,45%,45%)] rounded-full animate-cat-tail origin-bottom transform rotate-[30deg]">
            {/* Flower on tail tip */}
            <div className="absolute -top-1 left-0 w-3 h-3">
              <div className="w-1 h-1.5 bg-pink-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
              <div className="w-1.5 h-1 bg-pink-400 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2" />
              <div className="w-1.5 h-1 bg-pink-400 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2" />
              <div className="w-1 h-1.5 bg-pink-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
              <div className="w-1 h-1 bg-yellow-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuteCat;
