import { 
  Home, 
  Shield, 
  Clock, 
  Hammer, 
  Bath,
  ArrowUp,
  DoorOpen 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Bath className="w-12 h-12 text-blue-600" />,
      title: 'Barrierefreie Badumbauten',
      description: 'Komplette Badumbauten für mehr Sicherheit und Komfort – bodengleiche Duschen, Haltegriffe und mehr.',
    },
    {
      icon: <ArrowUp className="w-12 h-12 text-blue-600" />,
      title: 'Treppenlifte & Rampen',
      description: 'Installation von Treppenliften und Rampen für barrierefreien Zugang zu allen Bereichen.',
    },
    {
      icon: <DoorOpen className="w-12 h-12 text-blue-600" />,
      title: 'Türverbreiterungen',
      description: 'Verbreiterung von Türöffnungen für Rollstuhlfahrer und bessere Zugänglichkeit.',
    },
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: 'Komplette Wohnungsanpassung',
      description: 'Ganzheitliche Anpassung Ihrer Wohnung an Ihre individuellen Bedürfnisse.',
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Fördermöglichkeiten',
      description: 'Zuschüsse und Förderprogramme für barrierefreie Umbauten optimal nutzen.',
    },
    {
      icon: <Hammer className="w-12 h-12 text-blue-600" />,
      title: 'Küche',
      description: 'Barrierefreie Küchenanpassungen für mehr Komfort und Sicherheit.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fliesenleger Schöneiche | Bad Umbau Berlin Brandenburg | Barrierefreies Bauen Charlottenburg
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unsere Dienstleistungen umfassen unter anderem folgende Leistungen. Falls Ihre gewünschte 
            Serviceleistung nicht direkt aufgeführt ist, zögern Sie nicht, uns zu kontaktieren. 
            Wir beraten Sie gerne und finden die passende Lösung für Ihr Anliegen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
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
