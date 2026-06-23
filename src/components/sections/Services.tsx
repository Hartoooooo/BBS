'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Bath, Building, Droplet, Layers, Shield, TreePine } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const services = [
  {
    icon: Bath,
    title: 'Barrierefreies Bad',
    description: 'Bodengleiche Duschen, rutschfeste Fliesen, Haltegriffe und schwellenlose Übergänge.',
    image: '/20250929_1107_Barrierefreies Badezimmerdesign_remix_01k6abgsq0ezv930dvr6gdh36k.webp',
  },
  {
    icon: Building,
    title: 'Trockenbau',
    description: 'Wände, Decken und Raumteilungen sauber geplant und schnell umgesetzt.',
    image: '/Trockenbau.png',
  },
  {
    icon: TreePine,
    title: 'Holz & Bautenschutz',
    description: 'Schutz für Holzkonstruktionen und Bausubstanz mit dauerhafter Wirkung.',
    image: '/Holzschutz.webp',
  },
  {
    icon: Shield,
    title: 'Bauwerksabdichtung',
    description: 'Fachgerechte Abdichtung gegen Feuchtigkeit, Wasser und Folgeschäden.',
    image: '/bauwerksabdichtung-abdichtung.png',
  },
  {
    icon: Layers,
    title: 'Bodenbelagsarbeiten',
    description: 'Fliesen, Parkett, Laminat und weitere Beläge mit sauberem Anschlussbild.',
    image: '/bodenbelagsarbeiten-fliesen.png',
  },
  {
    icon: Droplet,
    title: 'Wasserschadensanierung',
    description: 'Trocknung, Reparatur und Wiederherstellung nach Wasserschäden.',
    image: '/wasserschadensanierung-trocknung.png',
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>();

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
    <section id="services" className="page-pattern py-20 sm:py-28">
      <div className="section-shell">
        <div
          ref={headerRef}
          className={`mb-10 transition-all duration-700 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="max-w-6xl">
            <p className="eyebrow">Leistungen</p>
            <h2 className="section-title mt-4 lg:whitespace-nowrap">
              Umbau, der im Alltag funktioniert.
            </h2>
          </div>
        </div>

        <div
          ref={servicesRef}
          className={`transition-all duration-700 ${
            servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div ref={scrollContainerRef} className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-5 scrollbar-hide md:hidden">
            {services.map((service) => {
              return (
                <article key={service.title} className="surface threshold-line w-[84vw] flex-none snap-center snap-always overflow-hidden rounded-3xl">
                  <div className="relative h-44">
                    <Image src={service.image} alt={service.title} fill className="object-cover" sizes="84vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#172024]/70 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-black text-[#172024]">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#172024]/70">{service.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="flex justify-center gap-2 md:hidden">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all ${activeIndex === index ? 'w-10 bg-[#d63d32]' : 'w-2 bg-[#172024]/25'}`}
                aria-label={`Zu Leistung ${index + 1}`}
              />
            ))}
          </div>

          <div className="hidden grid-cols-3 gap-4 md:grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isWide = index % 4 === 0 || index % 4 === 3;
              return (
                <article
                  key={service.title}
                  className={`group surface threshold-line relative min-h-[260px] overflow-hidden rounded-[1.75rem] ${
                    isWide ? 'col-span-2' : ''
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes={isWide ? '(min-width: 768px) 760px, 84vw' : '(min-width: 768px) 380px, 84vw'}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,32,36,0.05),rgba(23,32,36,0.82))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="mb-4 inline-flex rounded-2xl bg-white/16 p-2.5 backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-black leading-none">{service.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/78">{service.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
