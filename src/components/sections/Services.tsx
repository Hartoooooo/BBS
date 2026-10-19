import BentoGrid, { type BentoItem } from '@/components/ui/bento-grid';
import { images } from '@/content/images';

const items: BentoItem[] = [
  {
    title: 'Barrierefreies Bad',
    description: 'Badumbau nach DIN 18040-2: bodengleiche Dusche, Haltegriffe, rutschhemmende Fliesen und mehr Bewegungsfläche.',
    href: '/barrierefreies-bad',
    image: images.barrierefreiesBad.src,
    imageAlt: images.barrierefreiesBad.alt,
    wide: true,
  },
  {
    title: 'Badewanne zur Dusche',
    description: 'Wanne raus, bodengleiche Dusche rein – meist in wenigen Arbeitstagen.',
    href: '/badewanne-zur-dusche',
    image: images.badNeu.src,
    imageAlt: images.badNeu.alt,
  },
  {
    title: 'Barrierefreier Umbau',
    description: 'Türen verbreitern, Schwellen entfernen, Wohnung anpassen.',
    href: '/barrierefreier-umbau',
    image: images.trockenbau.src,
    imageAlt: images.trockenbau.alt,
  },
  {
    title: 'Badsanierung',
    description: 'Komplettsanierung aus einer Hand – vom Rückbau bis zur letzten Fuge, auf Wunsch gleich barrierefrei.',
    href: '/badsanierung',
    image: images.badBeispiel2.src,
    imageAlt: images.badBeispiel2.alt,
    wide: true,
  },
  {
    title: 'Fliesen & Bodenbeläge',
    description: 'Wand- und Bodenfliesen, Großformat, Naturstein, Vinyl und Parkett.',
    href: '/fliesenleger',
    image: images.fliesen.src,
    imageAlt: images.fliesen.alt,
  },
  {
    title: 'Trockenbau, Abdichtung & Wasserschaden',
    description: 'Alle Gewerke rund um den Umbau – damit Sie nur einen Ansprechpartner brauchen.',
    href: '/leistungen',
    image: images.wasserschaden.src,
    imageAlt: images.wasserschaden.alt,
    wide: true,
  },
];

const Services = () => {
  return (
    <section id="leistungen" aria-labelledby="leistungen-title" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-10 max-w-4xl">
          <p className="eyebrow">Leistungen</p>
          <h2 id="leistungen-title" className="section-title mt-4">Umbau, der im Alltag funktioniert.</h2>
          <p className="body-copy mt-5">
            Unser Schwerpunkt ist das barrierefreie Bad. Weil wir auch Trockenbau, Abdichtung und Fliesen selbst beherrschen,
            bekommen Sie den kompletten Umbau aus einer Hand.
          </p>
        </div>
        <BentoGrid items={items} />
      </div>
    </section>
  );
};

export default Services;
