import { Award, CheckCircle, Globe2 } from 'lucide-react';

const facts = [
  { icon: Award, value: '20+', label: 'Jahre Erfahrung, Meisterbetrieb seit 2003' },
  { icon: CheckCircle, value: '150+', label: 'abgeschlossene Projekte' },
  { icon: Globe2, value: 'Regional', label: 'in Berlin & Brandenburg' },
];

const About = () => {


  return (
    <section
      id="ueber-uns"
      aria-labelledby="ueber-uns-title"
      className="bg-paper py-20 sm:py-28"
    >
      <div className="section-shell">
        <div className="max-w-5xl">
          <p className="eyebrow">Über BBS</p>
          <h2 id="ueber-uns-title" className="section-title mt-4">Handwerk für mehr Bewegungsfreiheit.</h2>
          <p className="body-copy mt-6">
            BBS ist ein Meisterbetrieb aus Schöneiche bei Berlin, spezialisiert auf barrierefreie Badumbauten,
            Badsanierung und Fliesenarbeiten. Seit 2003 planen wir Lösungen mit Blick auf Sicherheit, Komfort und
            saubere Ausführung – in ganz Berlin und Brandenburg.
          </p>
          <p className="body-copy mt-4">
            Ob präventive Sanierung, kompletter Umbau oder Wasserschaden: Sie sprechen direkt
            mit einem Betrieb, der die Baustelle kennt und Verantwortung übernimmt.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="surface rounded-3xl p-5">
                  <Icon className="mb-5 h-6 w-6 text-brand" aria-hidden="true" />
                  <div className="text-3xl font-black text-ink">{fact.value}</div>
                  <p className="mt-2 text-sm font-bold leading-5 text-ink/80">{fact.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
