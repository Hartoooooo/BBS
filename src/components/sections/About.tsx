'use client';

import { Award, CheckCircle, Users, Shield } from 'lucide-react';
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
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Kostenloser Beratungs- & Zustandscheck für Ihr Objekt',
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
            className={`flex flex-col lg:flex-row gap-8 items-start transition-all duration-1200 ease-out delay-200 ${
              contentVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Bild Platzhalter - 30% */}
            <div className="w-full lg:w-[30%] flex-shrink-0">
              <div className="aspect-square bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                <Users className="w-24 h-24 text-gray-500" />
              </div>
              
              {/* Björn Hartmann Text - Nur bei Mobile sichtbar, direkt unter dem Bild */}
              <div className="mt-4 lg:hidden text-center">
                <h3 className="font-bold text-gray-900 text-base mb-1">Björn Hartmann</h3>
                <p className="text-gray-700 font-medium mb-1 text-xs">BBS Barrierefreies Bauen und Sanieren</p>
                <p className="text-gray-600 text-xs">Ihr persönlicher Ansprechpartner</p>
              </div>
            </div>
            
            {/* Text & Features - 70% */}
            <div className="w-full lg:w-[70%]">
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

              {/* Björn Hartmann Text auf der rechten Seite - Nur bei Desktop sichtbar */}
              <div className="hidden lg:block">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Björn Hartmann</h3>
                <p className="text-gray-700 font-medium mb-1 text-sm">BBS Barrierefreies Bauen und Sanieren</p>
                <p className="text-gray-600 text-sm">Ihr persönlicher Ansprechpartner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
