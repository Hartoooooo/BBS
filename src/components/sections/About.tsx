'use client';

import { Award, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();
  const features = [
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: 'Über 22 Jahre Erfahrung im Bereich barrierefreies Bauen & Sanieren',
      description: ''
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-500" />,
      title: 'Über 150 erfolgreich abgeschlossene Projekte',
      description: ''
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 
            ref={headerRef}
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center transition-all duration-1200 ease-out ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="lg:hidden">Über uns</span>
            <span className="hidden lg:inline">Über uns – Ihr Partner für barrierefreies Bauen und Sanieren in Berlin & Brandenburg</span>
          </h2>
          
          <div 
            ref={contentRef}
            className={`transition-all duration-1200 ease-out delay-200 ${
              contentVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Text & Features - 100% */}
            <div className="w-full">
              <p className="text-lg text-gray-600 mb-8">
                Als familiengeführtes Unternehmen mit über 22 Jahren Erfahrung im Bereich barrierefreies 
                Bauen und Sanieren sind wir Ihr kompetenter Fliesenleger und Badumbau-Experte in Berlin & Brandenburg. 
                Unser Ziel ist es, Ihnen zuverlässigen Komfort, dauerhafte Barrierefreiheit und höchste Sicherheit zu bieten.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p className="text-gray-600 mt-1">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
