import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageSliderProps {
  images: string[];
  alt: string;
  autoSlideInterval?: number;
  className?: string;
}

const ImageSlider = ({ 
  images, 
  alt, 
  autoSlideInterval = 5000, 
  className 
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, images.length, autoSlideInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after user interaction
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  if (images.length === 0) {
    return (
      <div className={cn("w-full h-48 bg-muted rounded-lg flex items-center justify-center", className)}>
        <span className="text-muted-foreground">No images available</span>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={cn("relative w-full h-48 overflow-hidden rounded-lg", className)}>
        <img
          src={images[0]}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={cn("relative w-full h-48 overflow-hidden rounded-lg group", className)}>
      {/* Main Image */}
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
          loading="lazy"
        />
        
        {/* Gradient Overlay for better button visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 border-border/50"
        onClick={goToPrevious}
      >
        <ChevronLeft size={16} />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 border-border/50"
        onClick={goToNext}
      >
        <ChevronRight size={16} />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentIndex === index
                ? "bg-white shadow-md scale-110"
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      {isAutoPlaying && images.length > 1 && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title="Auto-sliding" />
        </div>
      )}

      {/* Image Counter */}
      <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageSlider;