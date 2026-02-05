import React from 'react';
import { CuteDog } from '../CuteDog';
import { CuteCat } from '../CuteCat';
import { AnimatedHeart } from '../AnimatedHeart';
import { SparkleGroup } from '../Sparkle';

export const Slide1Welcome = ({ onNext }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      {/* Background decorations */}
      <SparkleGroup count={8} />
      
      {/* Decorative hearts in corners */}
      <div className="absolute top-8 left-8 opacity-30">
        <svg className="w-12 h-12 text-valentine-rose" viewBox="0 0 32 29.6" fill="currentColor">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg>
      </div>
      <div className="absolute top-8 right-8 opacity-30">
        <svg className="w-8 h-8 text-valentine-blush" viewBox="0 0 32 29.6" fill="currentColor">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-12 opacity-20">
        <svg className="w-10 h-10 text-valentine-peach" viewBox="0 0 32 29.6" fill="currentColor">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg>
      </div>
      <div className="absolute bottom-32 right-16 opacity-25">
        <svg className="w-6 h-6 text-valentine-rose" viewBox="0 0 32 29.6" fill="currentColor">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg>
      </div>
      
      {/* Main Title */}
      <div className="text-center mb-8 animate-fade-up">
        <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-valentine-deep mb-4">
          Happy Valentine's Day
        </h1>
        <p className="font-elegant text-xl sm:text-2xl text-valentine-rose italic">
          A Love Story
        </p>
      </div>
      
      {/* Characters Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
        {/* Dog - Erick */}
        <div className="flex flex-col items-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="font-script text-3xl sm:text-4xl text-foreground mb-4">Erick</span>
          <div className="animate-gentle-float">
            <CuteDog />
          </div>
        </div>
        
        {/* Heart in the middle */}
        <div className="animate-fade-up my-4 sm:my-0" style={{ animationDelay: '0.4s' }}>
          <AnimatedHeart size="hero" onClick={onNext} />
        </div>
        
        {/* Cat - Lei */}
        <div className="flex flex-col items-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <span className="font-script text-3xl sm:text-4xl text-foreground mb-4">Lei</span>
          <div className="animate-gentle-float" style={{ animationDelay: '0.5s' }}>
            <CuteCat />
          </div>
        </div>
      </div>
      
      {/* Subtitle */}
      <p className="text-center text-muted-foreground text-sm sm:text-base mt-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
        Click the heart to begin our story...
      </p>
    </div>
  );
};

export default Slide1Welcome;
