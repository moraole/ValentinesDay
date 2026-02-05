import React, { useState, useCallback } from "react";
import "@/App.css";
import { FloatingHearts } from "./components/FloatingHearts";
import { Slide1Welcome } from "./components/slides/Slide1Welcome";
import { Slide2HowWeMet } from "./components/slides/Slide2HowWeMet";
import { Slide3FavoriteMemories } from "./components/slides/Slide3FavoriteMemories";
import { Slide4WhyILoveYou } from "./components/slides/Slide4WhyILoveYou";
import { Slide5OurPets } from "./components/slides/Slide5OurPets";
import { Slide6Question } from "./components/slides/Slide6Question";
import { Slide7DinnerMenu } from "./components/slides/Slide7DinnerMenu";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    Slide1Welcome,
    Slide2HowWeMet,
    Slide3FavoriteMemories,
    Slide4WhyILoveYou,
    Slide5OurPets,
    Slide6Question,
    Slide7DinnerMenu
  ];
  
  const goToNextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setIsTransitioning(false);
      }, 400);
    }
  }, [currentSlide, slides.length, isTransitioning]);
  
  const CurrentSlideComponent = slides[currentSlide];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(350,80%,97%)] via-[hsl(350,60%,96%)] to-[hsl(30,50%,96%)] overflow-hidden relative">
      {/* Floating Hearts Background */}
      <FloatingHearts count={12} />
      
      {/* Progress indicator */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full shadow-valentine">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning && index <= currentSlide) {
                  setCurrentSlide(index);
                }
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-valentine-rose scale-125' 
                  : index < currentSlide 
                    ? 'bg-valentine-blush hover:bg-valentine-rose/70 cursor-pointer' 
                    : 'bg-valentine-cream'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={index > currentSlide}
            />
          ))}
        </div>
      </div>
      
      {/* Slide Content */}
      <div 
        className={`transition-opacity duration-400 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <CurrentSlideComponent onNext={goToNextSlide} />
      </div>
      
      {/* Navigation hint for non-last slides */}
      {currentSlide < slides.length - 1 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
          <p className="text-xs text-valentine-deep/50 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full">
            {currentSlide === 0 ? 'Click the heart to start' : `Slide ${currentSlide + 1} of ${slides.length}`}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
