import React from 'react';
import { AnimatedHeart } from '../AnimatedHeart';
import { SparkleGroup } from '../Sparkle';

export const Slide2HowWeMet = ({ onNext }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      <SparkleGroup count={6} />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 opacity-20">
        <div className="w-16 h-16 rounded-full bg-valentine-blush animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 right-8 opacity-20">
        <div className="w-12 h-12 rounded-full bg-valentine-peach animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Content Card */}
      <div className="max-w-2xl w-full bg-card/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-valentine animate-fade-up">
        {/* Slide number */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 bg-valentine-blush/50 rounded-full text-sm text-valentine-deep font-medium">
            Chapter 1
          </span>
        </div>
        
        <h2 className="font-script text-4xl sm:text-5xl text-valentine-deep text-center mb-8">
          How We Met
        </h2>
        
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-valentine-rose/50" />
          <svg className="w-6 h-6 text-valentine-rose" viewBox="0 0 32 29.6" fill="currentColor">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-valentine-rose/50" />
        </div>
        
        {/* Story text - placeholder for user to customize */}
        <div className="space-y-4 text-center">
          <p className="font-elegant text-lg sm:text-xl text-foreground/90 leading-relaxed">
            Little Erick one day invited little lei over...
          </p>
          <p className="text-muted-foreground leading-relaxed">
            and then he fell in love with cute little lei!!! Erick loved how kind, great and awesome little lei is! Erick is motivated and inspired by how good of a person little lei is :)
          </p>
        </div>
        
        {/* Quote decoration */}
        <div className="mt-8 p-6 bg-valentine-cream/50 rounded-2xl border border-valentine-blush/30">
          <p className="font-elegant text-valentine-deep italic text-center">
            &ldquo;Meep. I love you little Lei and I fell in love with your smile and happiness!&rdquo;
          </p>
        </div>
      </div>
      
      {/* Navigation Heart */}
      <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
        <AnimatedHeart size="lg" onClick={onNext} />
      </div>
    </div>
  );
};

export default Slide2HowWeMet;
