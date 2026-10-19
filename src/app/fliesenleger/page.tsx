import Link from 'next/link';
import TopicPage from '@/components/templates/TopicPage';
import { Callout } from '@/components/templates/blocks';
import { buildMetadata } from '@/lib/seo';
import { images } from '@/content/images';
import { badLinks, leistungLinks } from '@/content/site';
import type { Faq } from '@/lib/schema';

const path = '/fliesenleger';

export const metadata = buildMetadata({
  title: 'Fliesenleger Berlin & Schöneiche – Fliesen & Bodenbeläge vom Meisterbetrieb | BBS',
  description:
    'Fliesenleger für Berlin und Brandenburg: Wand- und Bodenfliesen, Großformat, Naturstein, rutschhemmende Fliesen und Bodenbeläge wie Vinyl und Parkett. Meisterbetrieb aus Schöneiche.',
  path,
  image: images.fliesen.src,
});

const faqs: Faq[] = [
  {
    question: 'Welche Fliesen sind für ein barrierefreies Bad geeignet?',
    answer:
      'Im Duschbereich empfehlen wir rutschhemmende Fliesen, die für nassbelastete Barfußbereiche geprüft sind, meist in kleineren Formaten mit mehr Fugen für zusätzlichen Halt. Außerhalb der Dusche sind großformatige, matte Fliesen ideal, weil sie pflegeleicht und gut befahrbar sind.',
  },
  {
    question: 'Verlegen Sie auch großformatige Fliesen?',
    answer:
      'Ja, auch Formate wie 120 × 60 cm und größer. Großformate brauchen einen sehr ebenen Untergrund und Erfahrung bei der Verlegung – beides gehört bei uns zum Standard.',
  },
  {
    question: 'Welche Bodenbeläge verlegen Sie außer Fliesen?',
    answer:
      'Naturstein, Vinyl- und Designbeläge, Laminat, Parkett und PVC. Wir beraten Sie, welcher Belag zu Raum, Nutzung und Budget passt – auch im Hinblick auf Rutschfestigkeit und Schwellenfreiheit.',
  },
  {
    question: 'Arbeiten Sie auch in der Küche und auf Balkon oder Terrasse?',
    answer:
      'Ja. Neben Bädern fliesen wir Küchenspiegel, Flure, Wohnräume sowie Balkone und Terrassen – dort mit frostsicheren Materialien und einer fachgerechten Abdichtung.',
  },
];

export default function FliesenlegerPage() {
  return (
    <TopicPage
      path={path}
      crumbs={[{ name: 'Fliesenleger', path }]}
      eyebrow="Fliesen & Bodenbeläge"
      title="Fliesenleger für Berlin & Brandenburg"
      intro={
        <p>
          Saubere Fugen, gerade Linien, dichte Anschlüsse: Als Meisterbetrieb aus Schöneiche bei Berlin verlegen wir Fliesen und
          Bodenbeläge in Bad, Küche und Wohnräumen – mit besonderem Blick auf sichere, rutschhemmende und schwellenlose Böden.
        </p>
      }
      image={images.fliesen}
      highlights={['Wand- und Bodenfliesen', 'Großformat & Naturstein', 'Rutschhemmende Beläge', 'Vinyl, Laminat, Parkett']}
      service={{
        name: 'Fliesenarbeiten und Bodenbeläge',
        description: 'Fliesen-, Naturstein- und Bodenbelagsarbeiten für Bad, Küche und Wohnraum in Berlin und Brandenburg.',
      }}
      faqs={faqs}
      related={[leistungLinks[1], badLinks[0], leistungLinks[3]]}
    >
      <h2>Fliesenarbeiten vom Meisterbetrieb</h2>
      <p>
        Eine Fliese ist nur so gut wie der Untergrund, auf dem sie liegt. Deshalb beginnt unsere Arbeit lange vor dem
        Fliesenkleber: Untergrund prüfen, ausgleichen, abdichten. Erst dann wird verlegt. So entstehen Flächen, die über
        Jahrzehnte dicht und schön bleiben.
      </p>
      <ul>
        <li>Wand- und Bodenfliesen in Bad, Küche, Flur und Wohnraum</li>
        <li>Großformatige Fliesen und Feinsteinzeug</li>
        <li>Naturstein wie Schiefer, Granit oder Travertin</li>
        <li>Mosaik und Gefällefliesen in bodengleichen Duschen</li>
        <li>Balkone und Terrassen mit frostsicheren Materialien</li>
        <li>Reparaturen, Fugensanierung und Silikonfugen</li>
      </ul>

      <h2>Sichere Böden: rutschhemmend und schwellenlos</h2>
      <p>
        Unser Schwerpunkt ist das <Link href="/barrierefreies-bad">barrierefreie Bad</Link>. Dabei kommt es auf den Boden an:
        rutschhemmende Fliesen im Duschbereich, ein gleichmäßiges Gefälle zum Ablauf und Übergänge ohne Kanten. Diese Erfahrung
        nutzen wir auch in Fluren und Wohnräumen – etwa, wenn{' '}
        <Link href="/barrierefreier-umbau">Schwellen entfernt</Link> und Bodenhöhen angeglichen werden.
      </p>

      <Callout title="Kontraste helfen bei der Orientierung">
        Für Menschen mit eingeschränktem Sehvermögen sind farbliche Kontraste wichtig – zum Beispiel zwischen Boden und Wand
        oder rund um die Dusche. Wir berücksichtigen das bei der Fliesenauswahl.
      </Callout>

      <h2>Bodenbeläge: Vinyl, Laminat, Parkett</h2>
      <p>
        Neben Fliesen verlegen wir Designbeläge aus Vinyl, Laminat, Parkett und PVC. Für Rollstuhl- und Rollatornutzer
        empfehlen wir feste, ebene Beläge ohne hohe Teppichflor-Anteile. Vinylbeläge sind fußwarm, leise und pflegeleicht –
        eine gute Wahl für Schlafzimmer und Flur.
      </p>

      <h2>Ihr Fliesenleger in Berlin, Schöneiche und Umgebung</h2>
      <p>
        Von unserem Standort in Schöneiche bei Berlin erreichen wir schnell alle Berliner Bezirke und die Orte im Brandenburger
        Umland wie Neuenhagen, Erkner, Woltersdorf und Strausberg. Fliesenarbeiten als Teil einer{' '}
        <Link href="/badsanierung">Badsanierung</Link> übernehmen wir genauso wie einzelne Flächen.
      </p>
    </TopicPage>
  );
}
