import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Hammer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/ChatGPT Image 28. Sept. 2025, 20_07_42.png" 
                alt="BBS Logo" 
                className="h-10 w-auto mr-3"
              />
              <div className="text-sm">
                <div className="text-2xl font-bold text-blue-400">BBS</div>
                <div className="font-semibold text-white">Björn Hartmann</div>
                <div className="text-gray-400 text-xs">Barrierefreies Bauen und Sanieren</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Ihr kompetenter Partner für barrierefreies Bauen und Sanieren in Berlin & Brandenburg
            </p>
            <Link href="/anfrage" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
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
                  <a href="tel:017643973376" className="text-white hover:text-blue-400 transition-colors duration-200">
                    0176 43973376
                  </a>
                </div>
              </div>
              
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <div>
                  <a href="mailto:info@bbs-hartmann.de" className="text-white hover:text-blue-400 transition-colors duration-200">
                    info@bbs-hartmann.de
                  </a>
                </div>
              </div>
              
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Unser Standort</div>
                  <div>12205 Berlin</div>
                  <div>Deutschland</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <Link href="/datenschutz" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Datenschutz
              </Link>
              <Link href="/impressum" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Impressum
              </Link>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <div>© 2024 BBS Björn Hartmann Barrierefreies Bauen und Sanieren</div>
              <div className="mt-1">
                Konzept & Umsetzung von{' '}
                <span className="text-white">Ihr Webentwickler</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
