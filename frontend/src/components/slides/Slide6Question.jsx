import React from 'react';
import { AnimatedHeart } from '../AnimatedHeart';
import { SparkleGroup } from '../Sparkle';
import { CuteDog } from '../CuteDog';
import { CuteCat } from '../CuteCat';
import { Heart, Sparkles } from 'lucide-react';

export const Slide6Question = ({ onNext }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      <SparkleGroup count={10} />
      
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart 
            key={i}
            className="absolute text-valentine-rose/20 fill-valentine-rose/10 animate-float"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="max-w-3xl w-full relative z-10 text-center">
        {/* Slide number */}
        <div className="flex justify-center mb-6 animate-fade-up">
          <span className="px-4 py-1 bg-valentine-rose/30 rounded-full text-sm text-valentine-deep font-medium flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            The Big Question
            <Sparkles className="w-4 h-4" />
          </span>
        </div>
        
        {/* Characters asking */}
        <div className="flex items-end justify-center gap-4 sm:gap-8 mb-8">
          <div className="animate-fade-up scale-75 sm:scale-100" style={{ animationDelay: '0.1s' }}>
            <CuteDog />
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-valentine-rose fill-valentine-rose animate-heartbeat" />
          </div>
          
          <div className="animate-fade-up scale-75 sm:scale-100" style={{ animationDelay: '0.2s' }}>
            <CuteCat />
          </div>
        </div>
        
        {/* The Question */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-heart animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="font-script text-4xl sm:text-6xl text-valentine-deep mb-6">
            Lei...
          </h2>
          
          <p className="font-elegant text-2xl sm:text-3xl text-foreground mb-8">
            Will you be my Valentine?
          </p>
          
          {/* Decorative hearts */}
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 text-valentine-rose fill-valentine-rose animate-heartbeat"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            Every moment with you is a blessing. You make my heart complete, and I can't imagine spending this special day with anyone else.
          </p>
          
          {/* Custom message area */}
          <div className="mt-8 p-6 bg-valentine-cream/50 rounded-2xl border border-valentine-blush/30">
            <p className="font-elegant text-valentine-deep italic">
              [Add your personal message here - tell Lei why they're so special to you!]
            </p>
          </div>
        </div>
        
        {/* Continue hint */}
        <p className="text-sm text-muted-foreground mt-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          Click the heart to see your special Valentine's dinner! 💕
        </p>
      </div>
      
      {/* Navigation Heart */}
      <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.7s' }}>
        <AnimatedHeart size="xl" onClick={onNext} />
      </div>
    </div>
  );
};

export default Slide6Question;
