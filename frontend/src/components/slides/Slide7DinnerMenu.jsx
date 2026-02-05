import React from 'react';
import { SparkleGroup } from '../Sparkle';
import { Heart, Sparkles, UtensilsCrossed, Wine, Star, Sandwich, Cake } from 'lucide-react';

export const Slide7DinnerMenu = () => {
  const sushiItems = [
    { name: "Salmon Nigiri", description: "Fresh Atlantic salmon over seasoned rice", pieces: "2 pcs" },
    { name: "Tuna Sashimi", description: "Premium bluefin tuna, thinly sliced", pieces: "4 pcs" },
    { name: "Rainbow Roll", description: "California roll topped with assorted fish", pieces: "8 pcs" },
    { name: "Spicy Tuna Roll", description: "Fresh tuna with spicy mayo and tempura crunch", pieces: "6 pcs" },
    { name: "Lovers' Special Roll", description: "Chef's special creation for two 💕", pieces: "10 pcs" },
  ];
  
  const sandwiches = [
    { name: "[Sandwich Name]", description: "[Add your description here]" },
    { name: "[Sandwich Name]", description: "[Add your description here]" },
    { name: "[Sandwich Name]", description: "[Add your description here]" },
  ];
  
  const desserts = [
    { name: "Jello Shots", description: "[Add flavor/description]", icon: "🍬" },
    { name: "Brownies", description: "[Add description]", icon: "🍫" },
    { name: "Cake Pops", description: "[Add flavor/description]", icon: "🍰" },
    { name: "[Add Dessert]", description: "[Add description]", icon: "🧁" },
  ];
  
  const cocktails = [
    { 
      name: "The Suede", 
      description: "A smooth, velvety blend of vanilla vodka, white peach, and rose water",
      icon: "🥂",
      color: "from-amber-100 to-rose-100"
    },
    { 
      name: "Blu Lagoon", 
      description: "Refreshing blue curaçao with citrus notes and a splash of champagne",
      icon: "🍸",
      color: "from-blue-100 to-cyan-100"
    },
    { 
      name: "Popa's Paradise", 
      description: "Tropical passion fruit with elderflower and prosecco bubbles",
      icon: "🍹",
      color: "from-orange-100 to-pink-100"
    },
  ];
  
  return (
    <div className="relative min-h-screen flex flex-col items-center px-4 py-12 overflow-hidden">
      <SparkleGroup count={8} />
      
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(350, 70%, 70%) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, hsl(350, 70%, 70%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Menu Card */}
      <div className="max-w-3xl w-full relative z-10">
        {/* Menu Header */}
        <div className="text-center mb-8 animate-fade-up">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-valentine-rose/20 flex items-center justify-center">
              <UtensilsCrossed className="w-8 h-8 text-valentine-deep" />
            </div>
          </div>
          <h1 className="font-script text-5xl sm:text-6xl text-valentine-deep mb-2">
            Valentine's Dinner
          </h1>
          <p className="font-elegant text-lg text-muted-foreground italic">
            A Special Evening for Erick &amp; Lei
          </p>
          <div className="flex justify-center items-center gap-3 mt-4">
            <div className="h-px w-16 bg-valentine-rose/30" />
            <Heart className="w-4 h-4 text-valentine-rose fill-valentine-rose" />
            <div className="h-px w-16 bg-valentine-rose/30" />
          </div>
        </div>
        
        {/* Menu Content */}
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl shadow-heart overflow-hidden">
          {/* Sushi Section */}
          <div className="p-6 sm:p-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-4 h-4 text-valentine-gold fill-valentine-gold" />
              <h2 className="font-elegant text-2xl text-valentine-deep">Sushi Selection</h2>
              <Star className="w-4 h-4 text-valentine-gold fill-valentine-gold" />
            </div>
            
            <div className="space-y-1">
              {sushiItems.map((item, index) => (
                <div 
                  key={index}
                  className="menu-item flex items-center justify-between py-3 group"
                >
                  <div className="flex-1">
                    <h3 className="font-body font-semibold text-foreground group-hover:text-valentine-deep transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                  <span className="text-sm text-valentine-rose font-medium ml-4">{item.pieces}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-valentine-rose/30 to-transparent" />
          
          {/* Sandwiches Section */}
          <div className="p-6 sm:p-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sandwich className="w-5 h-5 text-valentine-deep" />
              <h2 className="font-elegant text-2xl text-valentine-deep">Sandwiches</h2>
              <Sandwich className="w-5 h-5 text-valentine-deep" />
            </div>
            
            <div className="space-y-1">
              {sandwiches.map((item, index) => (
                <div 
                  key={index}
                  className="menu-item flex items-center justify-between py-3 group"
                >
                  <div className="flex-1">
                    <h3 className="font-body font-semibold text-foreground group-hover:text-valentine-deep transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-valentine-rose/30 to-transparent" />
          
          {/* Desserts Section */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-transparent to-valentine-peach/20 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Cake className="w-5 h-5 text-valentine-rose" />
              <h2 className="font-elegant text-2xl text-valentine-deep">Sweet Treats</h2>
              <Cake className="w-5 h-5 text-valentine-rose" />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {desserts.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-2xl bg-card/80 border border-valentine-blush/30 hover:shadow-valentine transition-all duration-300 text-center"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-body font-semibold text-foreground mt-2 text-sm">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-valentine-rose/30 to-transparent" />
          
          {/* Cocktails Section */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-transparent to-valentine-cream/30 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Wine className="w-5 h-5 text-valentine-rose" />
              <h2 className="font-elegant text-2xl text-valentine-deep">Signature Cocktails</h2>
              <Wine className="w-5 h-5 text-valentine-rose" />
            </div>
            
            <p className="text-center text-sm text-muted-foreground mb-6 italic">
              Named after our beloved fur babies 🐾
            </p>
            
            <div className="grid gap-3">
              {cocktails.map((cocktail, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-2xl bg-gradient-to-r ${cocktail.color} border border-valentine-blush/20 hover:shadow-valentine transition-all duration-300`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{cocktail.icon}</span>
                    <div>
                      <h3 className="font-script text-lg text-valentine-deep">{cocktail.name}</h3>
                      <p className="text-sm text-foreground/80 mt-1">{cocktail.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-6 bg-valentine-deep/5 text-center">
            <p className="font-script text-2xl text-valentine-deep mb-2">
              With All My Love
            </p>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Heart 
                  key={i}
                  className="w-4 h-4 text-valentine-rose fill-valentine-rose animate-heartbeat"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Happy Valentine's Day! 💕
            </p>
          </div>
        </div>
        
        {/* Bottom message */}
        <div className="mt-8 text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-valentine-rose/20 rounded-full">
            <Sparkles className="w-4 h-4 text-valentine-deep" />
            <span className="font-elegant text-valentine-deep">Forever Yours, Erick</span>
            <Sparkles className="w-4 h-4 text-valentine-deep" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide7DinnerMenu;
