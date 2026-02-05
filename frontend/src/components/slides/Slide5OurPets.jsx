import React from 'react';
import { AnimatedHeart } from '../AnimatedHeart';
import { SparkleGroup } from '../Sparkle';
import { Heart, ImageIcon } from 'lucide-react';

export const Slide5OurPets = ({ onNext }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      <SparkleGroup count={6} />
      
      {/* Paw print decorations */}
      <div className="absolute top-20 left-1/4 opacity-10 text-6xl">🐾</div>
      <div className="absolute bottom-32 right-1/4 opacity-10 text-5xl">🐾</div>
      
      {/* Content */}
      <div className="max-w-4xl w-full relative z-10">
        {/* Slide number */}
        <div className="flex justify-center mb-6 animate-fade-up">
          <span className="px-4 py-1 bg-valentine-blush/50 rounded-full text-sm text-valentine-deep font-medium">
            Chapter 4
          </span>
        </div>
        
        <h2 className="font-script text-4xl sm:text-5xl text-valentine-deep text-center mb-4 animate-fade-up">
          These little guys love you too!!!
        </h2>
        
        {/* Single description for all pets */}
        <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Suede, Blu, and Popa!! 🐾
        </p>
        
        {/* Image Placeholders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {/* Suede - lighter dog with green jacket */}
          <div 
            className="bg-card/80 backdrop-blur-sm rounded-3xl p-4 shadow-valentine hover:shadow-heart transition-all duration-300 hover:-translate-y-2 animate-fade-up group"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="aspect-square w-full rounded-2xl overflow-hidden">
              <img 
                src="https://customer-assets.emergentagent.com/job_pawsome-valentines/artifacts/k8ylowd8_IMG_0343.jpeg" 
                alt="Suede"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <p className="text-center text-sm text-valentine-deep font-medium mt-2">Suede</p>
          </div>
          
          {/* Blu - darker dog on the beach */}
          <div 
            className="bg-card/80 backdrop-blur-sm rounded-3xl p-4 shadow-valentine hover:shadow-heart transition-all duration-300 hover:-translate-y-2 animate-fade-up group"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="aspect-square w-full rounded-2xl overflow-hidden">
              <img 
                src="https://customer-assets.emergentagent.com/job_pawsome-valentines/artifacts/5lv92hh2_IMG_0344.jpeg" 
                alt="Blu"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <p className="text-center text-sm text-valentine-deep font-medium mt-2">Blu</p>
          </div>
          
          {/* Popa - with actual photo */}
          <div 
            className="bg-card/80 backdrop-blur-sm rounded-3xl p-4 shadow-valentine hover:shadow-heart transition-all duration-300 hover:-translate-y-2 animate-fade-up group"
            style={{ animationDelay: '0.45s' }}
          >
            <div className="aspect-square w-full rounded-2xl overflow-hidden">
              <img 
                src="https://customer-assets.emergentagent.com/job_pawsome-valentines/artifacts/gs0xqxp5_IMG_0345.jpeg" 
                alt="Popa"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <p className="text-center text-sm text-valentine-deep font-medium mt-2">Popa</p>
          </div>
        </div>
        
        {/* Family message */}
        <div className="bg-gradient-to-r from-valentine-cream via-valentine-blush/30 to-valentine-cream rounded-3xl p-6 text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex justify-center gap-2 mb-3">
            <Heart className="w-4 h-4 text-valentine-rose fill-valentine-rose" />
            <Heart className="w-4 h-4 text-valentine-rose fill-valentine-rose" />
            <Heart className="w-4 h-4 text-valentine-rose fill-valentine-rose" />
          </div>
          <p className="font-elegant text-valentine-deep">
            Our little family 💕
          </p>
        </div>
      </div>
      
      {/* Navigation Heart */}
      <div className="mt-10 animate-fade-up" style={{ animationDelay: '0.7s' }}>
        <AnimatedHeart size="lg" onClick={onNext} />
      </div>
    </div>
  );
};

export default Slide5OurPets;
