'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: slideshowRef, isVisible: slideshowVisible } = useScrollAnimation<HTMLDivElement>();

  const images = [
    { 
      src: '/Beispielbild-Bad.webp', 
      alt: 'Barrierefreies Bad mit bodengleicher Dusche - Beispielprojekt Berlin Brandenburg' 
    },
    { 
      src: '/Bad-neu-3.webp', 
      alt: 'Moderner Badumbau mit Fliesenarbeiten - BBS Projekt Schöneiche' 
    },
    { 
      src: '/Bad-neu.webp', 
      alt: 'Barrierefreie Badsanierung mit Haltegriffen - Beispielprojekt Brandenburg' 
    },
    { 
      src: '/Beispielbild-Bad-2.webp', 
      alt: 'Luxuriöses barrierefreies Badezimmerdesign - BBS Badumbau Berlin' 
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Scroll-Handler für aktive Karte (Mobile)
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      
      setActiveIndex(index);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Funktion zum Scrollen zu einem bestimmten Index (Mobile)
  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-1200 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Beispielprojekte
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Werfen Sie einen Blick auf einige unserer erfolgreich abgeschlossenen Projekte 
            und lassen Sie sich von unserer Arbeit inspirieren.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide -mx-4 px-4 snap-x snap-mandatory"
            style={{ height: '400px' }}
          >
            <div className="flex gap-4 pb-4" style={{ height: '100%' }}>
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative flex-shrink-0 snap-center rounded-lg overflow-hidden shadow-lg bg-gray-200"
                  style={{ 
                    width: 'calc(100vw - 2rem)',
                    height: '100%',
                    minHeight: '400px'
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 0px"
                    priority={index === 0}
                    unoptimized={false}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-red-500' 
                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Gehe zu Bild ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Slideshow */}
        <div 
          ref={slideshowRef}
          className={`hidden md:block relative w-full h-[500px] lg:h-[600px] group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-1200 ease-out delay-200 ${
            slideshowVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Image
            src={images[currentSlide].src}
            alt={images[currentSlide].alt}
            fill
            className="object-cover transition-opacity duration-500"
          />
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, imgIndex) => (
              <button
                key={imgIndex}
                onClick={() => setCurrentSlide(imgIndex)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === imgIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Zu Bild ${imgIndex + 1} wechseln`}
              />
            ))}
          </div>
          
          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentSlide + 1} / {images.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

