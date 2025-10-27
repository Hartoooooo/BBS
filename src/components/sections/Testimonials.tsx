
'use client';

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>();

  type Testimonial = {
    text: string;
    author: string;
    location: string;
    sourceUrl: string;
  };

  const testimonials: Testimonial[] = [
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
    },
    {
      text: "Richtig gute Arbeit! Die Jungs waren pünktlich, haben ordentlich gearbeitet und das Ergebnis kann sich echt sehen lassen. So wünscht man sich das!",
      author: "Luc S.",
      location: "Neuenhagen",
      sourceUrl: "https://maps.app.goo.gl/H5Vvn7cMA8UXGQAF9"
    },
    {
      text: "Vom ersten Kontakt bis zur Fertigstellung einfach super! Saubere Arbeit, ein sehr kompetentes und sympathisches Team. Jederzeit wieder!",
      author: "Louis H.",
      location: "Schöneiche",
      sourceUrl: "https://maps.app.goo.gl/H5Vvn7cMA8UXGQAF9"
    },
    {
      text: "Unser Bad ist wunderschön geworden – genau so, wie wir es uns vorgestellt haben. Danke für eure Geduld und den tollen Einsatz.",
      author: "Luca F.",
      location: "Berlin",
      sourceUrl: "https://maps.app.goo.gl/H5Vvn7cMA8UXGQAF9"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const nextTestimonial = () => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gray-50">
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
            <span className="ml-2 text-gray-600">5,0 (5)</span>
            <a
              href="https://maps.app.goo.gl/H5Vvn7cMA8UXGQAF9"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              <GoogleIcon />
              <span className="md:hidden">Bewerten</span>
              <span className="hidden md:inline">Bewerten Sie uns</span>
            </a>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div 
          ref={carouselRef}
          className={`relative max-w-4xl mx-auto transition-all duration-1200 ease-out delay-200 ${
            carouselVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <Quote className="w-12 h-12 text-red-500 mb-4" />
            
            <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
              {testimonials[currentTestimonial].text}
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
                  href={testimonials[currentTestimonial].sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 underline mt-1 inline-block"
                >
                  {testimonials[currentTestimonial].sourceUrl.includes('fliesenleger.net') 
                    ? 'von Fliesenleger.net' 
                    : 'von Google'}
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
                  index === currentTestimonial ? 'bg-red-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1200 ease-out delay-400 ${
            statsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
            <div className="text-gray-600">Schneller und regionaler Service</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">22+</div>
            <div className="text-gray-600">Jahre Erfahrung</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">150+</div>
            <div className="text-gray-600">erfolgreich abgeschlossene Projekte</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
