'use client';

import { 
  Bath, 
  Building, 
  TreePine, 
  Shield,
  Droplet,
  Layers 
} from 'lucide-react';
import Image from 'next/image';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { useState, useRef, useEffect } from 'react';

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const services = [
    {
      icon: <Bath className="w-12 h-12 text-red-500" />,
      title: 'Barrierefreies Bad',
      description: 'Komplette Badumbauten für mehr Sicherheit und Komfort – bodengleiche Duschen, Haltegriffe und barrierefreie Lösungen.',
      image: '/20250929_1107_Barrierefreies Badezimmerdesign_remix_01k6abgsq0ezv930dvr6gdh36k.webp',
    },
    {
      icon: <Building className="w-12 h-12 text-red-500" />,
      title: 'Trockenbau',
      description: 'Professionelle Trockenbauarbeiten für Wände, Decken und Raumteilungen – schnell und sauber umgesetzt.',
      image: '/Trockenbau.png',
    },
    {
      icon: <TreePine className="w-12 h-12 text-red-500" />,
      title: 'Holz & Bautenschutz',
      description: 'Schutz und Pflege von Holzkonstruktionen sowie umfassende Bautenschutzmaßnahmen für langlebige Bausubstanz.',
      image: '/Holzschutz.webp',
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Bauwerksabdichtung',
      description: 'Fachgerechte Abdichtung von Gebäuden gegen Feuchtigkeit und Wasser für dauerhaften Schutz.',
      image: '/Bauwerksabdichtung.webp',
    },
    {
      icon: <Layers className="w-12 h-12 text-red-500" />,
      title: 'Bodenbelagsarbeiten',
      description: 'Verlegung von Fliesen, Parkett, Laminat und anderen Bodenbelägen mit höchster Präzision.',
      image: '/bodenbelagsarbeiten.webp',
    },
    {
      icon: <Droplet className="w-12 h-12 text-red-500" />,
      title: 'Wasserschadensanierung',
      description: 'Schnelle und professionelle Sanierung von Wasserschäden – Trocknung, Reparatur und Wiederherstellung.',
      image: '/wasserschaden.webp',
    },
  ];

  // Scroll-Handler für aktive Karte
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

  // Funktion zum Scrollen zu einem bestimmten Index
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1200 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unser Service in Berlin & Brandenburg
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unsere Dienstleistungen umfassen unter anderem folgende Leistungen. Falls Ihre gewünschte 
            Serviceleistung nicht direkt aufgeführt ist, zögern Sie nicht, uns zu kontaktieren. 
            Wir beraten Sie gerne und finden die passende Lösung für Ihr Anliegen.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={servicesRef}
          className={`mb-16 transition-all duration-1200 ease-out delay-200 ${
            servicesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide -mx-4 px-4 snap-x snap-mandatory"
            >
              <div className="flex gap-4 pb-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 w-[calc(100vw-2rem)] flex-shrink-0 snap-center flex flex-col"
                  >
                    {service.image ? (
                      <div className="relative h-64 w-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        {/* Gradient Overlay von unten */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                        {/* Titel über dem Bild */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-semibold text-white mb-0">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 pb-0">
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                      </div>
                    )}
                    <div className={`flex-1 flex flex-col ${service.image ? 'p-6 pt-0' : 'px-6 pb-6'}`}>
                      {service.image && (
                        <p className="text-gray-600 mt-4">
                          {service.description}
                        </p>
                      )}
                      {!service.image && (
                        <p className="text-gray-600">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                {/* Leeres Element am Ende für korrekte Zentrierung der letzten Karte */}
                <div className="w-[calc((100vw-2rem)/2)] flex-shrink-0"></div>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-8 bg-red-500' 
                      : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Gehe zu Karte ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {service.image ? (
                  <div className="relative h-64 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient Overlay von unten */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    {/* Titel über dem Bild */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white mb-0">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                  </div>
                )}
                <div className={`flex-1 flex flex-col ${service.image ? 'p-6 pt-0' : 'px-6 pb-6'}`}>
                  {service.image && (
                    <p className="text-gray-600 mt-4">
                      {service.description}
                    </p>
                  )}
                  {!service.image && (
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Entfernt: Notdienst/Schnelle Hilfe */}
      </div>
    </section>
  );
};

export default Services;
