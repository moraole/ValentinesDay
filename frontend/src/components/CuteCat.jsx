import React from 'react';

export const CuteCat = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Cat Container */}
      <div className="relative w-32 h-44 sm:w-40 sm:h-52">
        
        {/* FLOWER CROWN - Hawaiian style! */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-30 flex items-end gap-0">
          {/* Left hibiscus */}
          <div className="relative -mr-2">
            <div className="w-6 h-6 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2.5 h-3 bg-pink-400 rounded-full" />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-2.5 bg-pink-400 rounded-full" />
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-2.5 bg-pink-400 rounded-full" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-3 bg-pink-400 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-300 rounded-full" />
            </div>
          </div>
          
          {/* Center plumeria */}
          <div className="relative z-10">
            <div className="w-8 h-8 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-white rounded-full origin-bottom rotate-0" />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-white rounded-full origin-bottom rotate-[72deg]" />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-white rounded-full origin-bottom rotate-[144deg]" />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-white rounded-full origin-bottom rotate-[216deg]" />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-white rounded-full origin-bottom rotate-[288deg]" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-300 rounded-full" />
            </div>
          </div>
          
          {/* Right hibiscus - red */}
          <div className="relative -ml-2">
            <div className="w-6 h-6 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2.5 h-3 bg-red-400 rounded-full" />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-2.5 bg-red-400 rounded-full" />
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-2.5 bg-red-400 rounded-full" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-3 bg-red-400 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-300 rounded-full" />
            </div>
          </div>
        </div>
        
        {/* Small flowers on sides */}
        <div className="absolute top-4 left-0 z-20">
          <div className="w-4 h-4 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-2 bg-orange-400 rounded-full absolute" style={{ transform: 'rotate(0deg) translateY(-3px)' }} />
              <div className="w-1.5 h-2 bg-orange-400 rounded-full absolute" style={{ transform: 'rotate(72deg) translateY(-3px)' }} />
              <div className="w-1.5 h-2 bg-orange-400 rounded-full absolute" style={{ transform: 'rotate(144deg) translateY(-3px)' }} />
              <div className="w-1.5 h-2 bg-orange-400 rounded-full absolute" style={{ transform: 'rotate(216deg) translateY(-3px)' }} />
              <div className="w-1.5 h-2 bg-orange-400 rounded-full absolute" style={{ transform: 'rotate(288deg) translateY(-3px)' }} />
              <div className="w-1.5 h-1.5 bg-yellow-200 rounded-full z-10" />
            </div>
          </div>
        </div>
        
        <div className="absolute top-4 right-0 z-20">
          <div className="w-4 h-4 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-2 bg-purple-400 rounded-full absolute" style={{ transform: 'rotate(0deg) translateY(-3px)' }} />
              <div className="w-1.5 h-2 bg-purple-400 rounded-full absolute" style={{ transform: 'rotate(72deg) translateY(-3px)' }} />
              <div className="w-1.5 h-2 bg-purple-400 rounded-full absolute" style={{ transform: 'rotate(144deg) translateY(-3px)' }} />
              <div className="w-1.5 h-2 bg-purple-400 rounded-full absolute" style={{ transform: 'rotate(216deg) translateY(-3px)' }} />
              <div className="w-1.5 h-2 bg-purple-400 rounded-full absolute" style={{ transform: 'rotate(288deg) translateY(-3px)' }} />
              <div className="w-1.5 h-1.5 bg-yellow-200 rounded-full z-10" />
            </div>
          </div>
        </div>
        
        {/* Ears - brown cat */}
        <div className="absolute top-6 left-4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[24px] border-b-[hsl(25,45%,40%)] transform -rotate-12 z-10" />
        <div className="absolute top-6 right-4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[24px] border-b-[hsl(25,45%,40%)] transform rotate-12 z-10" />
        
        {/* Inner Ears - pink */}
        <div className="absolute top-8 left-5 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-[hsl(350,60%,75%)] transform -rotate-12 z-20" />
        <div className="absolute top-8 right-5 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-[hsl(350,60%,75%)] transform rotate-12 z-20" />
        
        {/* Head - brown cat */}
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-28 h-24 bg-[hsl(25,45%,45%)] rounded-[50%] z-10">
          
          {/* Lighter face patch */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-[hsl(30,50%,65%)] rounded-[50%]" />
          
          {/* Eyes - big cute eyes */}
          <div className="absolute top-7 left-4 w-7 h-8 bg-[hsl(45,80%,70%)] rounded-full animate-blink overflow-hidden">
            {/* Pupil */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-5 bg-[hsl(0,0%,5%)] rounded-full" />
            {/* Shine */}
            <div className="absolute top-1.5 left-2 w-1.5 h-1.5 bg-[hsl(0,0%,100%)] rounded-full" />
          </div>
          <div className="absolute top-7 right-4 w-7 h-8 bg-[hsl(45,80%,70%)] rounded-full animate-blink overflow-hidden">
            {/* Pupil */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-5 bg-[hsl(0,0%,5%)] rounded-full" />
            {/* Shine */}
            <div className="absolute top-1.5 left-2 w-1.5 h-1.5 bg-[hsl(0,0%,100%)] rounded-full" />
          </div>
          
          {/* Nose - pink triangle */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[hsl(350,60%,70%)] z-20" />
          
          {/* Mouth - cute smile */}
          <div className="absolute top-[72px] left-[46px] w-3 h-2 border-l-2 border-b-2 border-[hsl(350,50%,65%)] rounded-bl-full" />
          <div className="absolute top-[72px] left-[56px] w-3 h-2 border-r-2 border-b-2 border-[hsl(350,50%,65%)] rounded-br-full" />
          
          {/* Whiskers - left */}
          <div className="absolute top-16 left-0 w-8 h-0.5 bg-[hsl(30,30%,70%)] transform -rotate-6 origin-right" />
          <div className="absolute top-[68px] left-0 w-9 h-0.5 bg-[hsl(30,30%,70%)] origin-right" />
          <div className="absolute top-[74px] left-0 w-8 h-0.5 bg-[hsl(30,30%,70%)] transform rotate-6 origin-right" />
          
          {/* Whiskers - right */}
          <div className="absolute top-16 right-0 w-8 h-0.5 bg-[hsl(30,30%,70%)] transform rotate-6 origin-left" />
          <div className="absolute top-[68px] right-0 w-9 h-0.5 bg-[hsl(30,30%,70%)] origin-left" />
          <div className="absolute top-[74px] right-0 w-8 h-0.5 bg-[hsl(30,30%,70%)] transform -rotate-6 origin-left" />
          
          {/* Cheeks (rosy blush) */}
          <div className="absolute top-14 left-1 w-3 h-2 bg-[hsl(350,50%,70%)] rounded-full opacity-50" />
          <div className="absolute top-14 right-1 w-3 h-2 bg-[hsl(350,50%,70%)] rounded-full opacity-50" />
        </div>
        
        {/* LEI / FLOWER NECKLACE */}
        <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center gap-0.5">
            <div className="w-3 h-3 bg-pink-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-300 rounded-full" />
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-orange-400 rounded-full" />
            <div className="w-3 h-3 bg-pink-400 rounded-full" />
            <div className="w-3 h-3 bg-purple-400 rounded-full" />
          </div>
        </div>
        
        {/* Body - brown */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-14 bg-[hsl(25,45%,45%)] rounded-t-[50%] rounded-b-lg z-0" />
        
        {/* Lighter tummy */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-[hsl(30,50%,65%)] rounded-t-[50%] rounded-b-lg z-0" />
        
        {/* More lei flowers on body */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex items-center gap-0.5">
            <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full" />
            <div className="w-2.5 h-2.5 bg-pink-400 rounded-full" />
            <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
            <div className="w-2.5 h-2.5 bg-orange-400 rounded-full" />
          </div>
        </div>
        
        {/* Front Paws - lighter brown */}
        <div className="absolute bottom-0 left-6 w-5 h-4 bg-[hsl(30,40%,55%)] rounded-t-lg rounded-b-full">
          {/* Toe beans */}
          <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex gap-0.5">
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
          </div>
        </div>
        <div className="absolute bottom-0 right-6 w-5 h-4 bg-[hsl(30,40%,55%)] rounded-t-lg rounded-b-full">
          {/* Toe beans */}
          <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex gap-0.5">
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
            <div className="w-1 h-1 bg-[hsl(350,50%,70%)] rounded-full" />
          </div>
        </div>
        
        {/* Tail - with flower on tip! */}
        <div className="absolute bottom-6 -left-4 w-3 h-16 bg-[hsl(25,45%,45%)] rounded-full animate-cat-tail origin-bottom transform rotate-45">
          {/* Flower on tail tip */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
            <div className="w-4 h-4 relative">
              <div className="w-1.5 h-2 bg-pink-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
              <div className="w-2 h-1.5 bg-pink-400 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2" />
              <div className="w-2 h-1.5 bg-pink-400 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2" />
              <div className="w-1.5 h-2 bg-pink-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
              <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuteCat;
