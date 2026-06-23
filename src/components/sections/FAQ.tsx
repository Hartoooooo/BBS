'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Hammer } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const faqs = [
  {
    question: 'Welche Fliesenarbeiten bieten Sie an?',
    answer: 'Wand- und Bodenfliesen, Naturstein, großformatige Fliesen und saubere Anschlüsse für Bad, Küche und Wohnräume.',
  },
  {
    question: 'Führen Sie komplette barrierefreie Badumbauten durch?',
    answer: 'Ja. Von Planung bis Fertigstellung: bodengleiche Dusche, rutschfeste Fliesen, Haltegriffe und schwellenlose Übergänge.',
  },
  {
    question: 'Was umfasst Ihre Wasserschadensanierung?',
    answer: 'Leckortung, Trocknung, Schimmelprävention und Reparatur.',
  },
  {
    question: 'Welche Bodenbeläge verlegen Sie?',
    answer: 'Fliesen, Naturstein, Parkett, Laminat, Vinyl und PVC. Materialauswahl und Verlegung kommen aus einer Hand.',
  },
  {
    question: 'Was beinhaltet Ihr Trockenbau-Service?',
    answer: 'Trennwände, abgehängte Decken, Dachausbauten, Raumteilungen, Dämmung, Spachtelung und Oberflächenbearbeitung.',
  },
  {
    question: 'Welche Förderungen gibt es für barrierefreie Umbauten?',
    answer: 'Je nach Situation kommen KfW-Kredite, Pflegekassenzuschüsse und regionale Förderungen infrage. Wir beraten passend zum Vorhaben.',
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState(0);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div
        ref={ref}
        className={`section-shell grid gap-10 transition-all duration-700 lg:grid-cols-[0.8fr_1.2fr] ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-4">Kurz klären. Dann sauber planen.</h2>
          <p className="body-copy mt-6">
            Häufige Fragen zu Fliesenarbeiten, barrierefreiem Badumbau, Trockenbau und Sanierung.
          </p>
          <Link
            href="/anfrage"
            className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#d63d32] px-7 py-4 font-black text-white shadow-[0_18px_44px_rgba(214,61,50,0.24)]"
          >
            <Hammer className="h-5 w-5" />
            Anfrage starten
          </Link>
        </div>

        <div className="grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;
            return (
              <article key={faq.question} className="surface overflow-hidden rounded-3xl">
                <button
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  className="flex min-h-20 w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-7"
                >
                  <span className="text-lg font-black leading-tight text-[#172024]">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 flex-none text-[#d63d32] transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-base leading-7 text-[#172024]/70 sm:px-7">{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
