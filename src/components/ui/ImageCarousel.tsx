'use client';

import { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" priority={index === 0} />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full ${i === current ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}


