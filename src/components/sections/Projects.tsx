'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

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
  const [edgeProgress, setEdgeProgress] = useState({ top: 0, bottom: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation<HTMLDivElement>();

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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setEdgeProgress({ top: 1, bottom: 1 });
      return;
    }

    let frame = 0;
    const clamp = (value: number) => Math.max(0, Math.min(1, value));
    const updateEdges = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const top = clamp((viewport - rect.top) / (viewport * 0.36));
      const bottom = clamp((viewport - rect.bottom + viewport * 0.3) / (viewport * 0.28));
      setEdgeProgress({ top, bottom });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateEdges);
    };

    updateEdges();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
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
      ref={sectionRef}
      style={
        {
          '--project-top': edgeProgress.top,
          '--project-bottom': edgeProgress.bottom,
        } as CSSProperties
      }
      className="relative mt-[-3rem] translate-y-[calc(72px*(1-var(--project-top)))] transform-gpu overflow-hidden rounded-t-[3rem] bg-ink pb-28 pt-28 text-white shadow-[0_calc(-34px*var(--project-top))_80px_rgba(23,32,36,calc(0.24*var(--project-top)))] will-change-transform sm:mt-[-4rem] sm:translate-y-[calc(96px*(1-var(--project-top)))] sm:rounded-t-[4rem] sm:pb-36 sm:pt-36"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 rounded-t-[3rem] bg-[linear-gradient(180deg,rgba(255,255,255,calc(0.08*var(--project-top))),rgba(255,255,255,0))] sm:h-14 sm:rounded-t-[4rem]" />
      <div className="section-shell relative z-10">
        <div
          ref={headerRef}
          className={`mb-10 transition-all duration-700 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="max-w-6xl">
            <p className="eyebrow !text-mint">Projekte</p>
            <h2 id="projekte-title" className="section-title mt-4 !text-white">
              Vorher gedacht. Nachher leicht nutzbar.
            </h2>
          </div>
        </div>

        <div
          ref={galleryRef}
          className={`transition-all duration-700 ${
            galleryVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
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
