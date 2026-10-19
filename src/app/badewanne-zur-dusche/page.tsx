import Link from 'next/link';
import TopicPage from '@/components/templates/TopicPage';
import { Callout, ProcessSection } from '@/components/templates/blocks';
import { buildMetadata } from '@/lib/seo';
import { images } from '@/content/images';
import { badLinks, leistungLinks } from '@/content/site';
import type { Faq } from '@/lib/schema';

const path = '/badewanne-zur-dusche';

export const metadata = buildMetadata({
  title: 'Badewanne zur Dusche umbauen in Berlin – bodengleich & sicher | BBS',
  description:
    'Wanne raus, Dusche rein: BBS baut Ihre Badewanne zur bodengleichen Dusche um – sauber, schnell und förderfähig. Meisterbetrieb für Berlin & Brandenburg. Jetzt kostenlos beraten lassen.',
  path,
  image: images.badNeu.src,
});

const faqs: Faq[] = [
  {
    question: 'Wie lange dauert der Umbau von der Badewanne zur Dusche?',
    answer:
      'Wenn nur der Wannenbereich umgebaut wird, sind es meist wenige Arbeitstage – inklusive Abdichtung, Fliesen und Trocknungszeiten. Das restliche Bad bleibt in dieser Zeit weitgehend nutzbar.',
  },
  {
    question: 'Muss das ganze Bad neu gefliest werden?',
    answer:
      'Nein. In vielen Fällen fliesen wir nur den ehemaligen Wannenbereich neu. Passende Fliesen sind bei älteren Bädern allerdings selten zu bekommen. Dann empfehlen wir bewusst kontrastierende Fliesen im Duschbereich – das sieht gewollt aus und hilft sogar bei der Orientierung.',
  },
  {
    question: 'Wird der Umbau von der Pflegekasse bezuschusst?',
    answer:
      'Ja, wenn ein Pflegegrad vorliegt. Der Umbau der Wanne zur bodengleichen Dusche gilt als wohnumfeldverbessernde Maßnahme, für die die Pflegekasse bis zu 4.180 € zahlt. Der Antrag muss vor dem Umbau gestellt werden.',
  },
  {
    question: 'Ist eine bodengleiche Dusche bei mir überhaupt möglich?',
    answer:
      'Fast immer. Entscheidend ist, ob der Abfluss tief genug liegt. Wenn nicht, arbeiten wir mit besonders flachen Abläufen, einem leicht erhöhten Duschbereich mit minimaler Kante oder einer kleinen Pumpe. Das prüfen wir beim Vor-Ort-Termin.',
  },
  {
    question: 'Was ist mit dem Platz, an dem früher die Wanne stand?',
    answer:
      'Eine Dusche braucht oft weniger Platz als eine Wanne. Den gewonnenen Raum nutzen wir für eine größere Bewegungsfläche, einen Klappsitz, eine Ablagenische oder Stauraum.',
  },
];

export default function BadewanneZurDuschePage() {
  return (
    <TopicPage
      path={path}
      crumbs={[
        { name: 'Barrierefreies Bad', path: '/barrierefreies-bad' },
        { name: 'Badewanne zur Dusche', path },
      ]}
      eyebrow="Wanne raus, Dusche rein"
      title="Badewanne zur Dusche umbauen – bodengleich und sicher"
      intro={
        <p>
          Der hohe Wannenrand ist im Bad die häufigste Stolperfalle. Wir ersetzen Ihre Badewanne durch eine bodengleiche Dusche:
          ohne Schwelle, mit rutschhemmenden Fliesen, Haltegriff und auf Wunsch einem Klappsitz – in ganz Berlin und
          Brandenburg.
        </p>
      }
      image={images.badNeu}
      highlights={['Meist in wenigen Arbeitstagen', 'Bodengleich oder mit Minimalkante', 'Förderfähig über die Pflegekasse', 'Abdichtung & Fliesen aus einer Hand']}
      service={{
        name: 'Umbau Badewanne zur Dusche',
        description: 'Austausch der Badewanne gegen eine bodengleiche, barrierefreie Dusche in Berlin und Brandenburg.',
      }}
      faqs={faqs}
      related={[badLinks[0], badLinks[2], leistungLinks[1]]}
    >
      <h2>Warum die Wanne einer Dusche weichen sollte</h2>
      <p>
        Mit 50 bis 60 cm ist der Wannenrand eine echte Hürde – vor allem mit nasser Haut, Gleichgewichtsproblemen oder nach
        einer Hüft-OP. Viele Stürze im Haushalt passieren genau hier. Eine <strong>bodengleiche Dusche</strong> nimmt dieses
        Risiko komplett heraus: Sie gehen einfach hinein, auf Wunsch mit Rollator oder Duschstuhl.
      </p>
      <p>Gleichzeitig gewinnt das Bad an Komfort:</p>
      <ul>
        <li>Großzügiger Duschbereich statt enger Wanne</li>
        <li>Duschen im Sitzen auf einem Klappsitz</li>
        <li>Leichter zu reinigen, weil Fugen und Kanten wegfallen</li>
        <li>Moderne Optik mit großformatigen Fliesen und Glaswand</li>
      </ul>

      <h2>Bodengleich, flach oder mit Minimalkante?</h2>
      <p>
        Die beste Lösung hängt vom Fußbodenaufbau ab. Wir unterscheiden drei Varianten:
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Variante</th>
            <th scope="col">Wann sinnvoll</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Bodengleich gefliest</strong></td>
            <td>Der Abfluss liegt tief genug. Komplett schwellenlos, ideal für Rollstuhl und Rollator.</td>
          </tr>
          <tr>
            <td><strong>Superflache Duschfläche</strong></td>
            <td>Wenig Aufbauhöhe vorhanden. Eine flache Duschfläche wird bündig oder fast bündig eingebaut.</td>
          </tr>
          <tr>
            <td><strong>Minimalkante (ca. 2 cm)</strong></td>
            <td>Altbau mit Holzbalkendecke. Für Gehende und Rollatornutzer gut machbar, nach DIN 18040-2 zulässig.</td>
          </tr>
        </tbody>
      </table>
      <Callout title="Tipp für Berliner Altbauten">
        In Häusern mit Holzbalkendecke darf nicht beliebig tief in den Boden eingegriffen werden. Hier sind Wandabläufe oder eine
        kompakte Hebeanlage oft die beste Lösung, um trotzdem ein schwellenloses Ergebnis zu erreichen.
      </Callout>

      <h2>Was wir beim Umbau erledigen</h2>
      <ol>
        <li>Schutz von Boden und Wegen, Demontage und Entsorgung der Badewanne</li>
        <li>Anpassung von Abfluss und Wasserleitungen, neue Armatur mit Thermostat</li>
        <li>Herstellung des Gefälles und Einbau des Ablaufs</li>
        <li>Verbundabdichtung nach Norm, inklusive Dichtbändern in allen Ecken</li>
        <li>Rutschhemmende Boden- und neue Wandfliesen</li>
        <li>Montage von Glaswand, Haltegriffen und Klappsitz</li>
      </ol>
      <p>
        Mehr zu den einzelnen Bausteinen eines sicheren Badezimmers lesen Sie auf unserer Seite{' '}
        <Link href="/barrierefreies-bad">Barrierefreies Bad</Link>.
      </p>

      <ProcessSection title="In fünf Schritten zur neuen Dusche" />

      <h2>Förderung für den Wannentausch</h2>
      <p>
        Der Umbau von der Wanne zur Dusche ist eine der Maßnahmen, die die Pflegekassen am häufigsten bezuschussen – bis zu{' '}
        <strong>4.180 €</strong>, wenn ein Pflegegrad vorliegt. Stellen Sie den Antrag unbedingt <strong>vor</strong> dem
        Umbau. Wir liefern Ihnen das passende Angebot und eine kurze Begründung der Maßnahme. Alles Weitere erklären wir auf der
        Seite <Link href="/foerderung">Förderung & Zuschüsse</Link>.
      </p>

      <h2>Kosten: wovon der Preis abhängt</h2>
      <p>
        Wie aufwendig der Umbau wird, hängt vor allem von der Lage des Abflusses, dem Zustand der Wände hinter der Wanne und
        Ihrer Auswahl an Fliesen und Ausstattung ab. Ein verbindliches Angebot erstellen wir nach der kostenlosen Besichtigung
        bei Ihnen zu Hause – in Berlin und im Brandenburger Umland.
      </p>
    </TopicPage>
  );
}
