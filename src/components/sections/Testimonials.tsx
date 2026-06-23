'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const testimonials = [
  {
    text: 'Wir haben schon mehrere Sachen machen lassen, ist jedes Mal super geworden. Tolle Arbeit! Jederzeit wieder!',
    author: 'D. S.',
    location: 'N.A.',
    sourceUrl: 'https://maps.app.goo.gl/H5Vvn7cMA8UXGQAF9',
  },
  {
    text: 'Ich habe mein Bad von BBS umbauen lassen, weil mir die Sicherheit im Alltag wichtig ist. Ebenerdige Dusche, rutschfeste Fliesen und schwellenlose Übergänge wurden sauber, zuverlässig und termingerecht eingebaut.',
    author: 'Herr E. V.',
    location: 'Berlin Spandau',
    sourceUrl: 'https://www.fliesenleger.net/berlin/bjoern-hartmann---bbs-barrierefreies-bauen-und-sanieren-aULrY0#bewertungen',
  },
  {
    text: 'Unser Badezimmer wurde komplett barrierefrei umgebaut. Dusche abgesenkt, Fliesenarbeiten sehr sauber ausgeführt und alle Übergänge ohne Kanten gestaltet.',
    author: 'Frau W. E.',
    location: 'Berlin Charlottenburg',
    sourceUrl: 'https://www.fliesenleger.net/berlin/bjoern-hartmann---bbs-barrierefreies-bauen-und-sanieren-aULrY0#bewertungen',
  },
  {
    text: 'Richtig gute Arbeit! Die Jungs waren pünktlich, haben ordentlich gearbeitet und das Ergebnis kann sich echt sehen lassen.',
    author: 'Luc S.',
    location: 'Neuenhagen',
    sourceUrl: 'https://maps.app.goo.gl/H5Vvn7cMA8UXGQAF9',
  },
  {
    text: 'Vom ersten Kontakt bis zur Fertigstellung einfach super! Saubere Arbeit, ein sehr kompetentes und sympathisches Team.',
    author: 'Louis H.',
    location: 'Schöneiche',
    sourceUrl: 'https://maps.app.goo.gl/H5Vvn7cMA8UXGQAF9',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [canToggle, setCanToggle] = useState(false);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const next = () => {
    setIsExpanded(false);
    setCurrent((value) => (value + 1) % testimonials.length);
  };
  const prev = () => {
    setIsExpanded(false);
    setCurrent((value) => (value - 1 + testimonials.length) % testimonials.length);
  };
  const active = testimonials[current];

  useEffect(() => {
    const measureQuote = () => {
      const quote = quoteRef.current;
      if (!quote) return;
      setCanToggle(quote.scrollHeight > quote.clientHeight + 1);
    };

    measureQuote();
    window.addEventListener('resize', measureQuote);
    return () => window.removeEventListener('resize', measureQuote);
  }, [current]);

  return (
    <section id="reviews" className="bg-[#172024] py-20 sm:py-28">
      <div
        ref={ref}
        className={`section-shell transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="eyebrow text-[#d8ebe6]">Bewertungen</p>
            <h2 className="section-title mt-4 !text-white">
              Vertrauen,
              <span className="block">das man nachliest.</span>
            </h2>
          </div>
          <div className="surface rounded-3xl p-4 lg:w-64">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-[#d63d32] text-[#d63d32]" />
              ))}
              <span className="ml-1 text-lg font-black text-[#172024]">5,0</span>
            </div>
            <a
              href="https://share.google/1o8Gsmu8uAAyrGKVm"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-xs font-black text-[#d63d32] underline-offset-4 hover:underline"
            >
              Bewertung auf Google schreiben
            </a>
          </div>
        </div>

        <div>
          <article className="surface threshold-line rounded-[2rem] p-5 sm:p-7">
            <Quote className="mb-4 h-8 w-8 text-[#d63d32] sm:mb-5 sm:h-10 sm:w-10" />
            <blockquote
              ref={quoteRef}
              className={`min-h-[3.1rem] text-xl font-black leading-tight text-[#172024] sm:min-h-[4.5rem] sm:text-3xl lg:max-w-5xl ${
                isExpanded ? '' : 'overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]'
              }`}
            >
              {active.text}
            </blockquote>
            <div className="mt-3 min-h-8">
              {(canToggle || isExpanded) && (
                <button
                  type="button"
                  onClick={() => setIsExpanded((value) => !value)}
                  className="inline-flex text-sm font-black text-[#d63d32] underline-offset-4 hover:underline"
                >
                  {isExpanded ? 'Weniger anzeigen' : 'Mehr anzeigen'}
                </button>
              )}
            </div>
            <div className="mt-5 flex flex-col gap-3 border-t border-[#172024]/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-black text-[#172024]">{active.author}</p>
                <p className="text-sm font-bold text-[#6f8f9a]">
                  Ort: {active.location}
                  <a href={active.sourceUrl} target="_blank" rel="noopener noreferrer" className="ml-3 font-black text-[#d63d32]">
                    Quelle öffnen
                  </a>
                </p>
              </div>
              <div className="flex gap-2 sm:w-44">
                <button onClick={prev} className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#172024] text-white transition hover:bg-[#d63d32]" aria-label="Vorherige Bewertung">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={next} className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#172024] text-white transition hover:bg-[#d63d32]" aria-label="Nächste Bewertung">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
