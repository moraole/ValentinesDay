import React from 'react';
import { AnimatedHeart } from '../AnimatedHeart';
import { SparkleGroup } from '../Sparkle';
import { Heart, Star, Camera, Coffee, Music, Plane } from 'lucide-react';

export const Slide3FavoriteMemories = ({ onNext }) => {
  const memories = [
    { icon: Coffee, title: "Our First Date", description: "The butterflies, the laughter, the beginning..." },
    { icon: Camera, title: "Adventures Together", description: "Every moment with you is a photo-worthy memory" },
    { icon: Music, title: "Our Song", description: "The melody that reminds me of us" },
    { icon: Plane, title: "Trips & Dreams", description: "Exploring the world by your side" },
  ];
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      <SparkleGroup count={6} />
      
      {/* Floating decorative hearts */}
      <div className="absolute top-16 right-1/4 opacity-30 animate-float">
        <Heart className="w-8 h-8 text-valentine-rose fill-valentine-rose" />
      </div>
      <div className="absolute bottom-32 left-1/4 opacity-25 animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="w-6 h-6 text-valentine-blush fill-valentine-blush" />
      </div>
      
      {/* Content */}
      <div className="max-w-4xl w-full animate-fade-up">
        {/* Slide number */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 bg-valentine-blush/50 rounded-full text-sm text-valentine-deep font-medium">
            Chapter 2
          </span>
        </div>
        
        <h2 className="font-script text-4xl sm:text-5xl text-valentine-deep text-center mb-4">
          Our Favorite Memories
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Every moment spent with you becomes a cherished memory I hold close to my heart
        </p>
        
        {/* Memory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {memories.map((memory, index) => (
            <div 
              key={index}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-valentine hover:shadow-heart transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-valentine-blush/50 flex items-center justify-center group-hover:bg-valentine-rose/30 transition-colors">
                  <memory.icon className="w-6 h-6 text-valentine-deep" />
                </div>
                <div>
                  <h3 className="font-elegant text-lg text-foreground mb-1">{memory.title}</h3>
                  <p className="text-sm text-muted-foreground">{memory.description}</p>
                  <p className="text-xs text-valentine-rose/70 mt-2 italic">
                    [Add your personal memory here]
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Special memory highlight */}
        <div className="bg-gradient-to-r from-valentine-cream via-valentine-blush/30 to-valentine-cream rounded-3xl p-8 text-center mb-12">
          <Star className="w-8 h-8 text-valentine-gold mx-auto mb-4" />
          <h3 className="font-script text-2xl text-valentine-deep mb-3">Our Most Special Memory</h3>
          <p className="text-muted-foreground italic max-w-md mx-auto">
            [Write about that one unforgettable moment that means everything to both of you]
          </p>
        </div>
      </div>
      
      {/* Navigation Heart */}
      <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
        <AnimatedHeart size="lg" onClick={onNext} />
      </div>
    </div>
  );
};

export default Slide3FavoriteMemories;
