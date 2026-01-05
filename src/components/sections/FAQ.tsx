'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Hammer } from 'lucide-react';
import Link from 'next/link';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'Welche Fliesenarbeiten bieten Sie an?',
      answer: 'Wir bieten professionelle Fliesenarbeiten für Bad, Küche und Wohnräume an. Dazu gehören Wand- und Bodenfliesen, Natursteinverlegung sowie moderne großformatige Fliesen. Unsere erfahrenen Fliesenleger arbeiten präzise und sauber.'
    },
    {
      question: 'Führen Sie komplette barrierefreie Badumbauten durch?',
      answer: 'Ja, wir führen komplette barrierefreie Badumbauten durch. Von der Planung bis zur Fertigstellung erhalten Sie alles aus einer Hand - bodengleiche Duschen, rutschfeste Fliesen, Haltegriffe und alle weiteren Anpassungen für mehr Sicherheit und Komfort.'
    },
    {
      question: 'Was umfasst Ihre Wasserschadensanierung?',
      answer: 'Bei Wasserschäden bieten wir schnelle professionelle Hilfe: Leckortung, Trocknung der betroffenen Bereiche, Schimmelprävention sowie fachgerechte Sanierung und Wiederherstellung. Wir arbeiten mit modernen Trocknungsgeräten und dokumentieren den gesamten Prozess.'
    },
    {
      question: 'Welche Bodenbeläge verlegen Sie?',
      answer: 'Wir verlegen alle gängigen Bodenbeläge: Fliesen, Naturstein, Parkett, Laminat, Vinyl und PVC. Dabei beraten wir Sie zur Auswahl des passenden Materials für Ihre Räumlichkeiten und sorgen für eine fachgerechte, präzise Verlegung.'
    },
    {
      question: 'Was beinhaltet Ihr Trockenbau-Service?',
      answer: 'Unser Trockenbau-Service umfasst den Bau von Trennwänden, abgehängten Decken, Dachausbauten und Raumteilungen. Wir arbeiten schnell, sauber und bieten auch Schall- und Wärmedämmung sowie die komplette Verspachtelung und Oberflächenbearbeitung.'
    },
    {
      question: 'Wie schützen Sie Gebäude vor Feuchtigkeit?',
      answer: 'Wir bieten professionelle Bauwerksabdichtung gegen Feuchtigkeit: Kellerabdichtung, Horizontalsperren, Vertikalabdichtungen und Balkonabdichtungen. Zusätzlich führen wir Holzschutzmaßnahmen durch, um Ihre Bausubstanz langfristig zu schützen.'
    },
    {
      question: 'Welche Förderungen gibt es für barrierefreie Umbauten?',
      answer: 'Es gibt verschiedene Fördermöglichkeiten wie zinsgünstige KfW Kredite, Pflegekassenzuschüsse (bis zu 4.180 €) und regionale Förderungen. Wir beraten Sie gerne über die für Sie passenden Fördermöglichkeiten.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Ihre Fragen unsere Antworten: BBS Barrierefreies Bauen und Sanieren
          </h2>
          <p className="text-lg text-gray-600">
            Hier finden Sie Antworten auf häufig gestellte Fragen zu unseren Dienstleistungen
          </p>
        </div>

        {/* FAQ Items */}
        <div 
          ref={faqRef}
          className={`space-y-4 transition-all duration-1200 ease-out delay-200 ${
            faqVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-red-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div 
          ref={ctaRef}
          className={`text-center mt-12 transition-all duration-1200 ease-out delay-400 ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg text-gray-600 mb-6">
            Haben Sie weitere Fragen? Kontaktieren Sie uns gerne!
          </p>
          <Link href="/anfrage" className="inline-flex items-center gap-2 bg-red-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors duration-200 shadow-lg">
            <Hammer className="w-5 h-5" />
            Kostenfreie Anfrage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
