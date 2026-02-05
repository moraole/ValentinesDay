import React from 'react';
import { AnimatedHeart } from '../AnimatedHeart';
import { SparkleGroup } from '../Sparkle';
import { Heart } from 'lucide-react';

export const Slide4WhyILoveYou = ({ onNext }) => {
  const reasons = [
    "Your beautiful smile makes me so happy! Yay!",
    "You make everyone around you happy and bring happiness everywhere you go",
    "You inspire me to be better!",
    "I feel comfortable and safe when im with you",
    "You make every moment together a fun one!",
    "You're the bestest person i've ever met!",
    "You believe in me and really motivate me :)",
    "You always know how to cheer me up",
    "I like u like i like mcchicken teehee, you also like mcchicken yay",
  ];
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      <SparkleGroup count={8} />
      
      {/* Decorative large heart outline in background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Heart className="w-[80vh] h-[80vh] text-valentine-rose" strokeWidth={0.5} />
      </div>
      
      {/* Content */}
      <div className="max-w-3xl w-full relative z-10">
        {/* Slide number */}
        <div className="flex justify-center mb-6 animate-fade-up">
          <span className="px-4 py-1 bg-valentine-blush/50 rounded-full text-sm text-valentine-deep font-medium">
            Chapter 3
          </span>
        </div>
        
        <h2 className="font-script text-4xl sm:text-5xl text-valentine-deep text-center mb-4 animate-fade-up">
          Why I Love cute little lei
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Theres so many reasons why i love u teehee (meep)
        </p>
        
        {/* Reasons List */}
        <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-6 sm:p-10 shadow-valentine">
          <div className="grid gap-4">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-valentine-blush/20 transition-colors animate-fade-up group"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex-shrink-0">
                  <Heart className="w-5 h-5 text-valentine-rose fill-valentine-rose/50 group-hover:fill-valentine-rose group-hover:scale-110 transition-all" />
                </div>
                <p className="text-foreground/90 font-body">{reason}</p>
              </div>
            ))}
          </div>
          
          {/* Add your own note */}
          <div className="mt-8 pt-6 border-t border-valentine-blush/30">
            <p className="text-center text-sm text-valentine-deep/70 italic">
              And poppa and suede and blu love you too!!!! 
            </p>
          </div>
        </div>
        
        {/* Love quote */}
        <div className="mt-10 text-center animate-fade-up" style={{ animationDelay: '0.9s' }}>
          <p className="font-elegant text-lg sm:text-xl text-valentine-deep italic">
            &ldquo;meep! meep! meeeeeeep! &rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">— Erick Mora</p>
        </div>
      </div>
      
      {/* Navigation Heart */}
      <div className="mt-12 animate-fade-up" style={{ animationDelay: '1s' }}>
        <AnimatedHeart size="lg" onClick={onNext} />
      </div>
    </div>
  );
};

export default Slide4WhyILoveYou;
