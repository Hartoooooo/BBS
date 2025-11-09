'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
  intervalMs?: number;
  className?: string;
};

export default function ImageCarousel({ images, intervalMs = 4000, className = '' }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  useEffect(() => {
    if (images.length <= 1) return;
    // Pause auto-play during touch interaction
    if (isTransitioning) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs, isTransitioning]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && current < images.length - 1) {
      setIsTransitioning(true);
      setCurrent(current + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
    if (isRightSwipe && current > 0) {
      setIsTransitioning(true);
      setCurrent(current - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  if (images.length === 0) return null;

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg ${className}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {images.map((img, index) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-transform duration-500 ease-out ${
              index === current 
                ? 'translate-x-0 opacity-100' 
                : index < current 
                  ? '-translate-x-full opacity-0' 
                  : 'translate-x-full opacity-0'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" priority={index === 0} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}


