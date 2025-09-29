import { Phone, Shield } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Luxusbad2.png"
            alt="Luxusbad2 Premium Badezimmer"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-8">
        <div className="text-center">
          {/* Haupttitel */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            BBS Björn Hartmann Barrierefreies Bauen und Sanieren –{' '}
            <span className="text-blue-600">
              Ihr Partner für barrierefreies Wohnen in Berlin & Brandenburg
            </span>
          </h1>
          
          {/* Untertitel */}
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-4xl mx-auto">
            Mit über 15 Jahren Erfahrung sind wir Ihr Ansprechpartner in Berlin und Brandenburg, 
            wenn es um barrierefreies Bauen und Sanieren geht. Unser Service sorgt für optimalen 
            Komfort, höchste Sicherheit und nachhaltigen Wohnkomfort in Ihrem Zuhause.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Ob präventive Sanierung oder kompletter Umbau – wir bieten maßgeschneiderte 
            Lösungen für Privat- und Gewerbekunden.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg">
              Kostenfreie Anfrage
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg">
              Kostenfreier Beratungscheck Ihres Objektes
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
