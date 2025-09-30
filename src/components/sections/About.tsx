import { Award, CheckCircle, Users, Shield } from 'lucide-react';
import Image from 'next/image';
import ImageCarousel from '@/components/ui/ImageCarousel';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Über 22 Jahre Erfahrung im Bereich barrierefreies Bauen & Sanieren',
      description: ''
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Jährlich über 150 erfolgreich abgeschlossene Projekte',
      description: ''
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Kostenloser Beratungs- & Zustandscheck für Ihr Objekt',
      description: ''
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Über uns – Ihr Partner für barrierefreies Bauen und Sanieren in Berlin & Brandenburg
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Als familiengeführtes Unternehmen mit über 22 Jahren Erfahrung im Bereich barrierefreies 
              Bauen und Sanieren sind wir Ihr kompetenter Fliesenleger und Badumbau-Experte in Schöneiche, 
              Berlin, Brandenburg, Strausberg und West-Berlin/Charlottenburg. Unser Ziel ist es, Ihnen 
              zuverlässigen Komfort, dauerhafte Barrierefreiheit und höchste Sicherheit zu bieten.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Wir setzen auf handwerkliche Präzision, maßgeschneiderte Lösungen und persönliche 
              Beratung, um Ihre Wünsche bestmöglich zu erfüllen. Vertrauen Sie auf unsere regionale 
              Expertise und unser Engagement für langlebige Qualität – für Ihr sicheres und 
              barrierefreies Zuhause.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
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

            {/* Contact Person */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Björn Hartmann</h3>
                  <p className="text-gray-600">BBS Barrierefreies Bauen und Sanieren</p>
                  <p className="text-gray-600">Ihr persönlicher Ansprechpartner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Slideshow */}
          <div className="lg:order-first">
            <ImageCarousel
              className="h-96"
              images={[
                {
                  src: '/20250929_1032_Minimalistische Badezimmergriffe_remix_01k6a9h7tqez0akr66yd2qhevw.webp',
                  alt: 'Minimalistische Badezimmergriffe - Barrierefreie Badausstattung',
                },
                {
                  src: '/20250929_1107_Barrierefreies Badezimmerdesign_remix_01k6abgsq0ezv930dvr6gdh36k.webp',
                  alt: 'Barrierefreies Badezimmerdesign – Beispielprojekt',
                },
              ]}
            />
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Einblicke in unsere Projekte
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Badumbau mit bodengleicher Dusche in Berlin',
              'Treppenlift-Installation in Brandenburg',
              'Rampenanbau für Rollstuhlfahrer in Berlin',
              'Türverbreiterung in Altbau Berlin-Mitte',
              'Haltegriff-Montage im Badezimmer',
              'Barrierefreie Küche in Berlin-Spandau',
              'Schwellenfreier Übergang zum Balkon',
              'Komplette Wohnungsanpassung in Potsdam'
            ].map((project, index) => (
              <div key={index} className="bg-gray-200 rounded-lg h-48 flex items-center justify-center p-4">
                <p className="text-gray-500 text-center text-sm">
                  {project}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
