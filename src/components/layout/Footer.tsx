import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Hammer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/LOGO.webp" 
                alt="BBS Logo" 
                width={40}
                height={40}
                className="h-10 w-auto mr-3"
              />
              <div className="text-sm">
                <div className="font-semibold text-white">Björn Hartmann</div>
                <div className="text-gray-400 text-xs">BBS - Barrierefreies Bauen und Sanieren</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Ihr kompetenter Partner für barrierefreies Bauen und Sanieren in Berlin & Brandenburg
            </p>
            <Link href="/anfrage" className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
              <Hammer className="w-4 h-4" />
              Kostenfreie Anfrage
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Dienstleistungen
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Öffnungszeiten
            </h3>
            <div className="space-y-2 text-gray-400">
              <div>
                <div className="font-medium">Montag - Donnerstag</div>
                <div>8.00-17.00 Uhr</div>
              </div>
              <div>
                <div className="font-medium">Freitags</div>
                <div>8.00-15.00 Uhr</div>
              </div>
              <div>
                <div className="font-medium">Samstags</div>
                <div>Ausschließlich Notfälle</div>
              </div>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <div>
                  <div>Erreichbar unter:</div>
                  <a href="tel:+493092371277" className="text-white hover:text-blue-400 transition-colors duration-200">
                    +49 (0) 30 923 712 77
                  </a>
                </div>
              </div>
              
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <div>
                  <a href="mailto:service@b-b-s.berlin" className="text-white hover:text-blue-400 transition-colors duration-200">
                    service@b-b-s.berlin
                  </a>
                </div>
              </div>
              
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Unser Standort</div>
                  <div>Petershagener Straße 27</div>
                  <div>15566 Schöneiche bei Berlin</div>
                  <div>Deutschland</div>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=BBS+Barrierefreies+Bauen+und+Sanieren+Petershagener+Straße+27+15566+Schöneiche+bei+Berlin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm mt-1 inline-block"
                  >
                    📍 Auf Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              <div>© 2025 BBS Björn Hartmann Barrierefreies Bauen und Sanieren</div>
              <div className="mt-1">
                Umsetzung von{' '}
                <span className="text-gray-400">
                  Neoklar<sup className="text-[10px]">TM</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
