'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: '/Beispielbild-Bad.webp',
    alt: 'Barrierefreies Bad mit bodengleicher Dusche - Beispielprojekt Berlin Brandenburg',
  },
  {
    src: '/Bad-neu-3.webp',
    alt: 'Moderner Badumbau mit Fliesenarbeiten - BBS Projekt Schöneiche',
  },
  {
    src: '/Bad-neu.webp',
    alt: 'Gefliester Duschbereich mit Thermostat-Armatur nach Badsanierung',
  },
  {
    src: '/Beispielbild-Bad-2.webp',
    alt: 'Luxuriöses barrierefreies Badezimmerdesign - BBS Badumbau Berlin',
  },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const getClosestIndex = () => {
      const slides = Array.from(container.children) as HTMLElement[];
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      return slides.reduce((closestIndex, slide, slideIndex) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const closestSlide = slides[closestIndex];
        const closestCenter = closestSlide.offsetLeft + closestSlide.offsetWidth / 2;
        return Math.abs(slideCenter - containerCenter) < Math.abs(closestCenter - containerCenter) ? slideIndex : closestIndex;
      }, 0);
    };

    const handleScroll = () => setActiveIndex(getClosestIndex());

    handleScroll();
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const slide = container.children[index] as HTMLElement | undefined;
    if (!slide) return;
    const left = slide.offsetLeft - (container.clientWidth - slide.offsetWidth) / 2;
    container.scrollTo({ left, behavior: 'smooth' });
  };

  return (
    <section
      id="projekte"
      aria-labelledby="projekte-title"
      className="bg-ink py-20 text-white sm:py-28"
    >
      <div className="section-shell">
        <div className="mb-10">
          <div className="max-w-6xl">
            <p className="eyebrow !text-mint">Projekte</p>
            <h2 id="projekte-title" className="section-title mt-4 !text-white">
              Vorher gedacht. Nachher leicht nutzbar.
            </h2>
          </div>
        </div>

        <div>
          <div className="md:hidden">
            <div ref={scrollContainerRef} tabIndex={0} role="region" aria-label="Projektbilder, seitlich wischen" className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-5 scrollbar-hide">
              {images.map((image) => (
                <div
                  key={image.src}
                  className="relative h-[70svh] w-[86vw] flex-none snap-center snap-always overflow-hidden rounded-3xl bg-black"
                >
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="86vw" />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-current={activeIndex === index ? 'true' : undefined}
                  onClick={() => scrollToIndex(index)}
                  className="flex h-11 min-w-11 items-center justify-center"
                  aria-label={`Zu Bild ${index + 1}`}
                >
                  <span className={`h-2 rounded-full transition-all ${activeIndex === index ? 'w-10 bg-brand' : 'w-2 bg-white/60'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-[1fr_280px] md:gap-5">
            <div className="threshold-line relative min-h-[620px] overflow-hidden rounded-[2rem] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <Image
                src={images[currentSlide].src}
                alt={images[currentSlide].alt}
                fill
                className="object-cover transition duration-500"
                sizes="900px"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-mint" aria-live="polite">Projektbild {currentSlide + 1} von {images.length}</p>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={prevSlide} className="rounded-full bg-white/90 p-4 text-ink transition hover:bg-white" aria-label="Vorheriges Bild">
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button type="button" onClick={nextSlide} className="rounded-full bg-white/90 p-4 text-ink transition hover:bg-white" aria-label="Nächstes Bild">
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-pressed={currentSlide === index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative overflow-hidden rounded-3xl border text-left transition ${
                    currentSlide === index ? 'border-brand' : 'border-white/12 opacity-80 hover:opacity-100'
                  }`}
                  aria-label={`Bild ${index + 1} anzeigen`}
                >
                  <Image src={image.src} alt="" width={320} height={180} className="h-32 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Projects;
