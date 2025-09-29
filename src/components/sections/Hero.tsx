import Image from 'next/image';
import Link from 'next/link';
import { Hammer, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bathroom.png"
            alt="Luxuriöses Badezimmerdesign – Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
        
        <div className="relative w-full z-10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-xl max-w-6xl animate-scale-in">
            <div className="text-left">
              {/* Haupttitel */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                <span className="text-gray-900">Ihr Partner für </span>
                <span className="text-blue-600">barrierefreies</span>
                <span className="text-gray-900"> Wohnen in </span>
                <span className="text-blue-600">Berlin & Brandenburg</span>
              </h1>
              
              {/* Untertitel */}
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                Mit über 22 Jahren Erfahrung sind wir Ihr Fliesenleger und Badumbau-Experte in Schöneiche, 
                Berlin, Brandenburg, Strausberg und West-Berlin/Charlottenburg. Spezialisiert auf 
                barrierefreies Bauen und Sanieren, Bad Sanierung Berlin und Bad Umbau Brandenburg.
              </p>

              <p className="text-base md:text-lg text-gray-600 mb-8">
                Ob präventive Sanierung oder kompletter Umbau – wir bieten maßgeschneiderte 
                Lösungen für Privat- und Gewerbekunden.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link href="/anfrage" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                  <Hammer className="w-6 h-6" />
                  <span>Kostenfreie Anfrage</span>
                </Link>
                <Link href="#contact" className="bg-red-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>Kontakt aufnehmen</span>
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;