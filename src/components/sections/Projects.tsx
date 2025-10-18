'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeSlides, setActiveSlides] = useState<{ [key: number]: number }>({});

  const nextSlide = (projectIndex: number, totalImages: number) => {
    setActiveSlides(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages
    }));
  };

  const prevSlide = (projectIndex: number, totalImages: number) => {
    setActiveSlides(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };
  const projects = [
    {
      title: 'Barrierefreies Badezimmer',
      description: 'Kompletter Umbau eines Badezimmers mit bodengleicher Dusche und Haltegriffen.',
      images: ['/20250929_0854_Luxuriöses Badezimmerdesign_simple_compose_01k6a3ybtjetss2bt0gq57prg3 (1) (1).webp'],
      category: 'Barrierefreies Bad'
    },
    {
      title: 'Moderne Badgestaltung',
      description: 'Elegante Fliesenarbeiten mit minimalistischen Griffen und modernem Design.',
      images: ['/Beispielbild-Bad.webp', '/Bad-neu-3.webp', '/Bad-neu.webp', '/Beispielbild-Bad-2.webp'],
      category: 'Fliesenarbeiten'
    },
    {
      title: 'Seniorengerechtes Bad',
      description: 'Barrierefreie Komplettlösung für mehr Sicherheit und Komfort im Alter.',
      images: ['/20250929_1107_Barrierefreies Badezimmerdesign_remix_01k6abgsq0ezv930dvr6gdh36k.webp'],
      category: 'Barrierefreies Bad'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Beispielprojekte
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Werfen Sie einen Blick auf einige unserer erfolgreich abgeschlossenen Projekte 
            und lassen Sie sich von unserer Arbeit inspirieren.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const currentSlide = activeSlides[index] || 0;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {project.images.length === 1 ? (
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative h-64 w-full group">
                    {/* Slideshow */}
                    <Image
                      src={project.images[currentSlide]}
                      alt={`${project.title} ${currentSlide + 1}`}
                      fill
                      className="object-cover transition-opacity duration-500"
                    />
                    
                    {/* Navigation Buttons */}
                    <button
                      onClick={() => prevSlide(index, project.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Vorheriges Bild"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={() => nextSlide(index, project.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Nächstes Bild"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => setActiveSlides(prev => ({ ...prev, [index]: imgIndex }))}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentSlide === imgIndex 
                              ? 'bg-white w-6' 
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Zu Bild ${imgIndex + 1} wechseln`}
                        />
                      ))}
                    </div>
                    
                    {/* Image Counter */}
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {currentSlide + 1} / {project.images.length}
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

