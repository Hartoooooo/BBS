import Image from 'next/image';
import Link from 'next/link';
import TopicPage from '@/components/templates/TopicPage';
import { buildMetadata } from '@/lib/seo';
import { images } from '@/content/images';
import { badLinks, leistungLinks } from '@/content/site';
import type { Faq } from '@/lib/schema';

const path = '/leistungen';

export const metadata = buildMetadata({
  title: 'Leistungen: Trockenbau, Wasserschaden, Abdichtung, Holzschutz | BBS Berlin',
  description:
    'Alle Leistungen von BBS im Überblick: barrierefreier Badumbau, Badsanierung, Fliesen, Trockenbau, Wasserschadensanierung, Bauwerksabdichtung sowie Holz- und Bautenschutz in Berlin und Brandenburg.',
  path,
  image: images.abdichtung.src,
});

const faqs: Faq[] = [
  {
    question: 'Was umfasst Ihre Wasserschadensanierung?',
    answer:
      'Ursachenklärung gemeinsam mit dem Installateur, technische Trocknung, Rückbau durchfeuchteter Bauteile, Schimmelprävention und die vollständige Wiederherstellung von Trockenbau, Estrich und Fliesen.',
  },
  {
    question: 'Was beinhaltet Ihr Trockenbau-Service?',
    answer:
      'Trennwände, Vorwandinstallationen, abgehängte Decken, Dachausbauten, Verkleidungen, Dämmung sowie Spachtel- und Oberflächenarbeiten bis zur malerfertigen Fläche.',
  },
  {
    question: 'Arbeiten Sie auch mit Versicherungen zusammen?',
    answer:
      'Bei Wasserschäden erstellen wir die Dokumentation und das Angebot so, dass Sie es bei Ihrer Versicherung einreichen können. Die Abstimmung mit der Versicherung übernehmen Sie oder Ihre Hausverwaltung.',
  },
];

const sections = [
  {
    id: 'trockenbau',
    title: 'Trockenbau',
    image: images.trockenbau,
    text: 'Mit Trockenbau lassen sich Räume schnell und sauber verändern: neue Raumaufteilungen, Vorwandinstallationen im Bad, abgehängte Decken oder der Ausbau des Dachgeschosses. Für barrierefreie Umbauten bauen wir Wandverstärkungen ein, damit Haltegriffe und Klappsitze sicher halten.',
    points: ['Trennwände und Raumteiler', 'Vorwandinstallationen und Nischen', 'Abgehängte Decken und Dachausbau', 'Dämmung, Spachtel- und Oberflächenarbeiten'],
  },
  {
    id: 'wasserschaden',
    title: 'Wasserschadensanierung',
    image: images.wasserschaden,
    text: 'Nach einem Rohrbruch oder einer undichten Dusche muss es schnell gehen. Wir trocknen die betroffenen Bauteile technisch, bauen durchfeuchtete Materialien zurück und stellen alles wieder her – oft gleich besser als vorher.',
    points: ['Technische Trocknung', 'Rückbau durchfeuchteter Bauteile', 'Schimmelprävention', 'Wiederherstellung von Estrich, Wänden und Fliesen'],
  },
  {
    id: 'abdichtung',
    title: 'Bauwerksabdichtung',
    image: images.abdichtung,
    text: 'Feuchte Keller, undichte Balkone oder Spritzwasser im Bad: Eine fachgerechte Abdichtung schützt die Bausubstanz dauerhaft. Wir dichten Nassräume, Balkone, Terrassen und erdberührte Bauteile mit geprüften Systemen ab.',
    points: ['Verbundabdichtung in Bad und Dusche', 'Balkon- und Terrassenabdichtung', 'Abdichtung gegen Bodenfeuchte', 'Sanierung von Feuchteschäden'],
  },
  {
    id: 'holzschutz',
    title: 'Holz- und Bautenschutz',
    image: images.holzschutz,
    text: 'Holzkonstruktionen und Bausubstanz brauchen Schutz vor Feuchtigkeit, Pilzen und Insekten. Wir prüfen den Zustand, beseitigen Schäden und schützen Holz und Mauerwerk mit dauerhafter Wirkung.',
    points: ['Vorbeugender Holzschutz', 'Sanierung von Holzschäden', 'Schutz von Fassaden und Mauerwerk', 'Beratung zur Bauwerkserhaltung'],
  },
];

export default function LeistungenPage() {
  return (
    <TopicPage
      path={path}
      crumbs={[{ name: 'Leistungen', path }]}
      eyebrow="Leistungen"
      title="Unsere Leistungen rund um Bauen und Sanieren"
      intro={
        <p>
          Unser Schwerpunkt ist das barrierefreie Bad. Damit wir Umbauten komplett aus einer Hand anbieten können, beherrschen
          wir auch die Gewerke drumherum – vom Trockenbau über die Abdichtung bis zur Sanierung nach einem Wasserschaden.
        </p>
      }
      image={images.abdichtung}
      faqs={faqs}
      related={[badLinks[0], leistungLinks[1], leistungLinks[2]]}
    >
      <h2>Unsere Kernleistungen</h2>
      <ul>
        {[...badLinks, ...leistungLinks.slice(0, 3)].map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link> – {link.description}
          </li>
        ))}
      </ul>

      {sections.map((section) => (
        <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
          <h2 id={`${section.id}-title`} className="mt-12 text-[clamp(1.75rem,3vw,2.4rem)] font-black leading-tight text-ink">
            {section.title}
          </h2>
          <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-3xl">
            <Image src={section.image.src} alt={section.image.alt} fill className="object-cover" sizes="(min-width: 768px) 768px, 100vw" />
          </div>
          <p className="mt-5">{section.text}</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {section.points.map((point) => (
              <li key={point} className="flex items-start gap-2 font-bold text-ink">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </TopicPage>
  );
}
