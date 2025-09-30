'use client';

import dynamic from 'next/dynamic';

// 3D-Komponente nur client-seitig laden
const StoneFliesenViewer3D = dynamic(
  () => import('@/components/ui/StoneFliesenViewer3D'),
  { ssr: false }
);

const FliesenShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Links */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Hochwertige Fliesenarbeiten für Berlin & Brandenburg
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mit über 22 Jahren Erfahrung sind wir Ihr Spezialist für professionelle 
              Fliesenverlegung in Schöneiche, Berlin, Brandenburg und Strausberg.
            </p>
            <p className="text-gray-600">
              Wir arbeiten mit hochwertigen Materialien und modernster Technik, 
              um Ihnen perfekte Ergebnisse zu garantieren. Ob Bad, Küche oder Wohnraum – 
              jede Fliese wird mit höchster Präzision verlegt.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">Präzise Verlegung von Wand- und Bodenfliesen</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">Naturstein- und Mosaikarbeiten</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">Großformat-Fliesen und moderne Designs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">Fachgerechte Abdichtung und Verfugung</span>
              </li>
            </ul>
            <div className="pt-4">
              <a
                href="/anfrage"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                Jetzt Beratung anfragen
              </a>
            </div>
          </div>

          {/* 3D-Komponente Rechts */}
          <div className="lg:pl-8">
            <StoneFliesenViewer3D 
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FliesenShowcase;
