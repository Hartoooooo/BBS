'use client';

import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1200 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kontaktieren Sie uns
          </h2>
          <p className="text-lg text-gray-600">
            Wir sind für Sie da – rufen Sie uns an oder schreiben Sie uns eine Nachricht
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1200 ease-out delay-200 ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Kontakt-Formular */}
          <div className="lg:order-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nachricht senden
              </h3>
              
              <form 
                action="https://formsubmit.co/hartmanntimon@gmail.com" 
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="/" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-500 text-gray-900"
                      placeholder="Ihr Vorname"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-500 text-gray-900"
                      placeholder="Ihr Nachname"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-500 text-gray-900"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-500 text-gray-900"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-gray-900 [&:invalid]:text-gray-500"
                    required
                  >
                    <option value="" disabled>Bitte wählen...</option>
                    <option value="barrierefreies-bad">Barrierefreies Bad</option>
                    <option value="trockenbau">Trockenbau</option>
                    <option value="holz-bautenschutz">Holz & Bautenschutz</option>
                    <option value="bauwerksabdichtung">Bauwerksabdichtung</option>
                    <option value="bodenbelagsarbeiten">Bodenbelagsarbeiten</option>
                    <option value="wasserschadensanierung">Wasserschadensanierung</option>
                    <option value="beratung">Kostenlose Beratung</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budgetvorstellung
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-500 text-gray-900"
                    placeholder="z.B. 15.000 € oder noch unbekannt"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical placeholder-gray-500 text-gray-900"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200 shadow-lg flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>

          {/* Kontakt-Informationen */}
          <div className="lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Sprechen Sie uns an
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <p className="text-gray-600 mb-2">Rufen Sie uns direkt an:</p>
                  <a 
                    href="tel:+493092371277" 
                    className="text-red-500 hover:text-red-600 font-semibold text-lg"
                  >
                    +49 (0) 30 923 712 77
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-Mail</h4>
                  <p className="text-gray-600 mb-2">Schreiben Sie uns eine Nachricht:</p>
                  <a 
                    href="mailto:service@b-b-s.berlin" 
                    className="text-red-500 hover:text-red-600 font-semibold"
                  >
                    service@b-b-s.berlin
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Standort</h4>
                  <p className="text-gray-600">
                    Schöneiche bei Berlin
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Erreichbarkeit</h4>
                  <div className="text-gray-600 space-y-1">
                    <div>Montag - Freitag: 7.00-16.00 Uhr</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
