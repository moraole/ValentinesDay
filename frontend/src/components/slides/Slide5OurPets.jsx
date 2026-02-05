import React from 'react';
import { AnimatedHeart } from '../AnimatedHeart';
import { SparkleGroup } from '../Sparkle';
import { Heart, Sparkles } from 'lucide-react';

export const Slide5OurPets = ({ onNext }) => {
  const pets = [
    { 
      name: "Suede", 
      emoji: "🐾",
      description: "Our fluffy bundle of joy",
      personality: "Playful & Loyal"
    },
    { 
      name: "Blu", 
      emoji: "🐾",
      description: "The sweetest companion",
      personality: "Cuddly & Curious"
    },
    { 
      name: "Popa", 
      emoji: "🐾",
      description: "Our little troublemaker",
      personality: "Adventurous & Loving"
    }
  ];
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      <SparkleGroup count={6} />
      
      {/* Paw print decorations */}
      <div className="absolute top-20 left-1/4 opacity-10 text-6xl">🐾</div>
      <div className="absolute bottom-32 right-1/4 opacity-10 text-5xl">🐾</div>
      <div className="absolute top-1/3 right-12 opacity-10 text-4xl">🐾</div>
      
      {/* Content */}
      <div className="max-w-4xl w-full relative z-10">
        {/* Slide number */}
        <div className="flex justify-center mb-6 animate-fade-up">
          <span className="px-4 py-1 bg-valentine-blush/50 rounded-full text-sm text-valentine-deep font-medium">
            Chapter 4
          </span>
        </div>
        
        <h2 className="font-script text-4xl sm:text-5xl text-valentine-deep text-center mb-4 animate-fade-up">
          Our Fur Babies
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Our family wouldn't be complete without our beloved pets who bring us endless joy and love
        </p>
        
        {/* Pets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {pets.map((pet, index) => (
            <div 
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-valentine hover:shadow-heart transition-all duration-300 hover:-translate-y-2 animate-fade-up group"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              {/* Pet avatar placeholder */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-valentine-blush to-valentine-peach flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-4xl">{pet.emoji}</span>
              </div>
              
              <h3 className="font-script text-2xl text-valentine-deep mb-2">{pet.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{pet.description}</p>
              
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-valentine-cream rounded-full">
                <Sparkles className="w-3 h-3 text-valentine-gold" />
                <span className="text-xs text-valentine-deep">{pet.personality}</span>
              </div>
              
              <p className="mt-4 text-xs text-valentine-rose/70 italic">
                [Add a photo or fun fact about {pet.name}]
              </p>
            </div>
          ))}
        </div>
        
        {/* Family message */}
        <div className="bg-gradient-to-r from-valentine-cream via-valentine-blush/30 to-valentine-cream rounded-3xl p-8 text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-valentine-rose fill-valentine-rose" />
            <Heart className="w-5 h-5 text-valentine-rose fill-valentine-rose" />
            <Heart className="w-5 h-5 text-valentine-rose fill-valentine-rose" />
          </div>
          <p className="font-elegant text-lg text-valentine-deep">
            &ldquo;Together, we make the purrfect family!&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            From fur parents Erick &amp; Lei
          </p>
        </div>
      </div>
      
      {/* Navigation Heart */}
      <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.7s' }}>
        <AnimatedHeart size="lg" onClick={onNext} />
      </div>
    </div>
  );
};

export default Slide5OurPets;
