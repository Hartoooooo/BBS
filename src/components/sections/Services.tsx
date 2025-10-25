'use client';

import { 
  Bath, 
  Building, 
  TreePine, 
  Shield,
  Package,
  Droplet 
} from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>();
  const services = [
    {
      icon: <Bath className="w-12 h-12 text-red-500" />,
      title: 'Barrierefreies Bad',
      description: 'Komplette Badumbauten für mehr Sicherheit und Komfort – bodengleiche Duschen, Haltegriffe und barrierefreie Lösungen.',
    },
    {
      icon: <Building className="w-12 h-12 text-red-500" />,
      title: 'Trockenbau',
      description: 'Professionelle Trockenbauarbeiten für Wände, Decken und Raumteilungen – schnell und sauber umgesetzt.',
    },
    {
      icon: <TreePine className="w-12 h-12 text-red-500" />,
      title: 'Holz & Bautenschutz',
      description: 'Schutz und Pflege von Holzkonstruktionen sowie umfassende Bautenschutzmaßnahmen für langlebige Bausubstanz.',
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Bauwerksabdichtung',
      description: 'Fachgerechte Abdichtung von Gebäuden gegen Feuchtigkeit und Wasser für dauerhaften Schutz.',
    },
    {
      icon: <Package className="w-12 h-12 text-red-500" />,
      title: 'Bodenbelagsarbeiten',
      description: 'Verlegung von Fliesen, Parkett, Laminat und anderen Bodenbelägen mit höchster Präzision.',
    },
    {
      icon: <Droplet className="w-12 h-12 text-red-500" />,
      title: 'Wasserschadensanierung',
      description: 'Schnelle und professionelle Sanierung von Wasserschäden – Trocknung, Reparatur und Wiederherstellung.',
    },
  ];

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
            Fliesenleger Berlin & Brandenburg | Bad Umbau Berlin & Brandenburg | Barrierefreies Bauen Berlin & Brandenburg
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
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1200 ease-out delay-200 ${
            servicesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Entfernt: Notdienst/Schnelle Hilfe */}
      </div>
    </section>
  );
};

export default Services;
