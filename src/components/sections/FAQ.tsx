'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'Kann ich bei Ihnen einen Beratungstermin für barrierefreies Bauen buchen?',
      answer: 'Selbstverständlich. Wir bieten Ihnen eine kostenlose und unverbindliche Beratung für Ihr Haus oder Ihre Wohnung. Vereinbaren Sie einfach einen Termin und lassen Sie sich individuell beraten, welche barrierefreien Lösungen für Sie in Frage kommen.'
    },
    {
      question: 'Übernehmen Sie auch komplette Badumbauten?',
      answer: 'Ja, wir führen komplette barrierefreie Badumbauten durch. Von der Planung bis zur Fertigstellung erhalten Sie alles aus einer Hand - bodengleiche Duschen, rutschfeste Böden, Haltegriffe und alle weiteren Anpassungen für mehr Sicherheit und Komfort.'
    },
    {
      question: 'Installieren Sie auch Treppenlifte?',
      answer: 'Ja, wir verkaufen, montieren und warten Treppenlifte verschiedener Hersteller. Unsere Installationen erfolgen fachgerecht mit entsprechender Zertifizierung und regelmäßigen Wartungsprotokollen für maximale Sicherheit.'
    },
    {
      question: 'Bieten Sie auch Notdienst an?',
      answer: 'Ja, wir bieten einen 24/7-Notdienst für dringende Reparaturen und Sicherheitsprobleme. Rufen Sie uns jederzeit an, wenn Sie schnelle Hilfe benötigen.'
    },
    {
      question: 'Welche Förderungen gibt es für barrierefreie Umbauten?',
      answer: 'Es gibt verschiedene Fördermöglichkeiten wie KfW-Zuschüsse, Pflegekassenzuschüsse und regionale Förderungen. Wir beraten Sie gerne über die für Sie passenden Fördermöglichkeiten und unterstützen Sie bei der Antragsstellung.'
    },
    {
      question: 'Wie lange dauert ein typischer Badumbau?',
      answer: 'Die Dauer hängt vom Umfang der Arbeiten ab. Ein einfacher Umbau dauert meist 3-5 Tage, ein kompletter Badumbau kann 1-2 Wochen in Anspruch nehmen. Wir informieren Sie vorab über den genauen Zeitplan.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ihre Fragen unsere Antworten: BBS Barrierefreies Bauen und Sanieren
          </h2>
          <p className="text-lg text-gray-600">
            Hier finden Sie Antworten auf häufig gestellte Fragen zu unseren Dienstleistungen
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
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
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Haben Sie weitere Fragen? Kontaktieren Sie uns gerne!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg">
            Kostenfreie Anfrage
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
