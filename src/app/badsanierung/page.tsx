import Link from 'next/link';
import TopicPage from '@/components/templates/TopicPage';
import { Callout, ProcessSection } from '@/components/templates/blocks';
import { buildMetadata } from '@/lib/seo';
import { images } from '@/content/images';
import { badLinks, leistungLinks } from '@/content/site';
import type { Faq } from '@/lib/schema';

const path = '/badsanierung';

export const metadata = buildMetadata({
  title: 'Badsanierung Berlin & Brandenburg – Komplettsanierung vom Meisterbetrieb | BBS',
  description:
    'Bad sanieren lassen in Berlin und Brandenburg: Komplettsanierung aus einer Hand – Rückbau, Installation, Abdichtung, Fliesen. Auf Wunsch gleich barrierefrei. Kostenlose Beratung vor Ort.',
  path,
  image: images.badBeispiel2.src,
});

const faqs: Faq[] = [
  {
    question: 'Wie lange dauert eine Bad-Komplettsanierung?',
    answer:
      'Je nach Größe und Bausubstanz meist zwei bis drei Wochen. Den genauen Zeitplan inklusive Trocknungszeiten erhalten Sie mit dem Angebot.',
  },
  {
    question: 'Lohnt es sich, das Bad gleich barrierefrei zu sanieren?',
    answer:
      'Ja. Wenn das Bad ohnehin komplett erneuert wird, entstehen für eine bodengleiche Dusche, verstärkte Wände für spätere Griffe und eine breitere Tür kaum Zusatzaufwand. Später nachzurüsten ist deutlich aufwendiger.',
  },
  {
    question: 'Koordinieren Sie auch Sanitär und Elektro?',
    answer:
      'Ja. Sie haben einen Ansprechpartner. Wir übernehmen Rückbau, Trockenbau, Abdichtung und Fliesen selbst und koordinieren die Arbeiten von Installateur und Elektriker im Zeitplan.',
  },
  {
    question: 'Kann ich das Bad während der Sanierung nutzen?',
    answer:
      'Bei einer Komplettsanierung in der Regel nicht. Gibt es kein zweites Bad, besprechen wir vorab Übergangslösungen und planen die Bauzeit so kompakt wie möglich.',
  },
];

export default function BadsanierungPage() {
  return (
    <TopicPage
      path={path}
      crumbs={[{ name: 'Badsanierung', path }]}
      eyebrow="Bad sanieren"
      title="Badsanierung in Berlin & Brandenburg – alles aus einer Hand"
      intro={
        <p>
          Undichte Fugen, alte Fliesen, eine Wanne, die keiner mehr nutzt: Wir sanieren Ihr Bad komplett – vom Rückbau bis zur
          letzten Silikonfuge. Auf Wunsch gleich barrierefrei, damit Sie lange etwas davon haben.
        </p>
      }
      image={images.badBeispiel2}
      highlights={['Komplettsanierung aus einer Hand', 'Abdichtung nach Norm', 'Fester Zeitplan', 'Auf Wunsch barrierefrei']}
      service={{
        name: 'Badsanierung',
        description: 'Komplette Badsanierung und Teilsanierung inklusive Rückbau, Abdichtung und Fliesenarbeiten in Berlin und Brandenburg.',
      }}
      faqs={faqs}
      related={[badLinks[0], badLinks[1], leistungLinks[2]]}
    >
      <h2>Komplettsanierung oder Teilsanierung?</h2>
      <p>
        Nicht jedes Bad muss bis auf den Rohbau zurückgebaut werden. Bei einer <strong>Teilsanierung</strong> tauschen wir zum
        Beispiel nur die Wanne gegen eine Dusche, erneuern die Fliesen oder die Sanitärobjekte. Bei einer{' '}
        <strong>Komplettsanierung</strong> wird alles erneuert – inklusive Leitungen, Abdichtung und Bodenaufbau. Welche Variante
        sinnvoll ist, hängt vom Zustand hinter den Fliesen ab. Das beurteilen wir ehrlich beim Vor-Ort-Termin.
      </p>

      <h2>Unsere Leistungen bei der Badsanierung</h2>
      <ul>
        <li>Rückbau und fachgerechte Entsorgung</li>
        <li>Trockenbau: Vorwandinstallationen, Ablagen, Nischen, Verkleidungen</li>
        <li>Estrich- und Gefällearbeiten, auch für bodengleiche Duschen</li>
        <li>Verbundabdichtung in Dusche und Spritzwasserbereichen</li>
        <li>
          <Link href="/fliesenleger">Fliesenarbeiten</Link> an Wand und Boden, inklusive Großformat und Naturstein
        </li>
        <li>Koordination von Sanitär- und Elektroinstallation</li>
        <li>Montage von Duschwand, Spiegel, Accessoires und Griffen</li>
      </ul>

      <Callout title="Gleich an morgen denken">
        Bei einer Badsanierung kostet es kaum Mehraufwand, die Weichen für später zu stellen: bodengleiche Dusche,
        Wandverstärkungen für Griffe und eine breitere Tür. Mehr dazu auf unserer Seite{' '}
        <Link href="/barrierefreies-bad">Barrierefreies Bad</Link>.
      </Callout>

      <h2>Badsanierung im Altbau und Plattenbau</h2>
      <p>
        In Berlin und im Umland treffen wir auf sehr unterschiedliche Bäder. Im <strong>Gründerzeit-Altbau</strong> mit
        Holzbalkendecke sind Aufbauhöhen und Lasten begrenzt. Im <strong>Plattenbau</strong> stehen oft Badzellen aus Beton oder
        Kunststoff, die wir zurückbauen oder ertüchtigen. Im <strong>Einfamilienhaus</strong> lassen sich Grundrisse häufig
        großzügiger verändern. Wir planen passend zum Gebäude, nicht nach Schema F.
      </p>

      <ProcessSection title="So läuft Ihre Badsanierung ab" />

      <h2>Kosten der Badsanierung</h2>
      <p>
        Die Kosten hängen vom Umfang, der Bausubstanz, der Lage der Leitungen und der gewählten Ausstattung ab. Nach der
        kostenlosen Besichtigung erhalten Sie ein transparentes Angebot mit allen Positionen. Wird das Bad barrierefrei
        umgebaut, kann ein Teil über die <Link href="/foerderung">Pflegekasse oder die KfW</Link> gefördert werden.
      </p>
    </TopicPage>
  );
}
