'use client';

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Ich habe mein Bad von BBS – Barrierefreies Bauen und Sanieren umbauen lassen, weil mir die Sicherheit im Alltag wichtig ist. Die Firma hat eine ebenerdige Dusche, rutschfeste Fliesen und schwellenlose Übergänge eingebaut. Alles wurde sauber, zuverlässig und termingerecht erledigt. Jetzt fühle ich mich wieder sicher in meinem eigenen Zuhause und freue mich über ein schönes, modernes Bad. Vielen Dank an das Team BBS.",
      author: "Herr E. V.",
      location: "Berlin Spandau",
      sourceUrl: "https://www.fliesenleger.net/berlin/bjoern-hartmann---bbs-barrierefreies-bauen-und-sanieren-aULrY0#bewertungen"
    },
    {
      text: "Unser Badezimmer wurde komplett barrierefrei umgebaut. Die Dusche wurde abgesenkt, die Fliesenarbeiten sehr sauber ausgeführt und alle Übergänge ohne Kanten gestaltet. Auch Waschbecken und Toilette wurden angepasst. Alles lief zuverlässig und termingerecht – wir sind mit dem Ergebnis sehr zufrieden.",
      author: "Frau W. E.",
      location: "Berlin Charlottenburg",
      sourceUrl: "https://www.fliesenleger.net/berlin/bjoern-hartmann---bbs-barrierefreies-bauen-und-sanieren-aULrY0#bewertungen"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Was unsere Kunden sagen
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">5,0 von 5 aus 2 Bewertungen</span>
            <a
              href="https://www.fliesenleger.net/berlin/bjoern-hartmann---bbs-barrierefreies-bauen-und-sanieren-aULrY0#bewertungen"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-blue-600 hover:text-blue-700 underline"
            >
              Alle Bewertungen ansehen
            </a>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <Quote className="w-12 h-12 text-blue-600 mb-4" />
            
            <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div className="flex items-center">
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-gray-600">
                  Ort: {testimonials[currentTestimonial].location}
                </div>
                <a
                  href={(testimonials[currentTestimonial] as any).sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 underline mt-1 inline-block"
                >
                  von Fliesenleger.net
                </a>
              </div>
            </div>

          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Schneller und regionaler Service</div>
            <p className="text-sm text-gray-500 mt-2">
              Als lokaler Dienstleister für Berlin und Brandenburg sind wir zeitnah bei Ihnen vor Ort – auch im Notfall rund um die Uhr.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Jahre Erfahrung</div>
            <p className="text-sm text-gray-500 mt-2">
              Langjährige Expertise in barrierefreiem Bauen und Sanieren – zuverlässig und professionell.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">erfolgreiche Projekte pro Jahr</div>
            <p className="text-sm text-gray-500 mt-2">
              Mit jährlich über 150 erfolgreich abgeschlossenen Projekten in Berlin und Brandenburg sind wir Ihr erfahrener Partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
