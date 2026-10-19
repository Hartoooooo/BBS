import Link from 'next/link';
import TopicPage from '@/components/templates/TopicPage';
import { Callout, ProcessSection, foerderStand } from '@/components/templates/blocks';
import { buildMetadata } from '@/lib/seo';
import { images } from '@/content/images';
import { badLinks, leistungLinks, site } from '@/content/site';
import type { Faq } from '@/lib/schema';

const path = '/barrierefreies-bad';

export const metadata = buildMetadata({
  title: 'Barrierefreies Bad Berlin & Brandenburg – Badumbau vom Meisterbetrieb | BBS',
  description:
    'Barrierefreies Bad nach DIN 18040-2: bodengleiche Dusche, Haltegriffe, mehr Bewegungsfläche. BBS plant und baut seniorengerechte und rollstuhlgerechte Bäder in Berlin & Brandenburg – inkl. Förderberatung.',
  path,
  image: images.barrierefreiesBad.src,
});

const faqs: Faq[] = [
  {
    question: 'Was ist der Unterschied zwischen barrierefrei, barrierearm und seniorengerecht?',
    answer:
      'Barrierefrei bedeutet, dass das Bad die Anforderungen der DIN 18040-2 erfüllt – etwa 120 × 120 cm Bewegungsfläche und eine bodengleiche Dusche. Barrierearm oder seniorengerecht heißt, dass die wichtigsten Hindernisse beseitigt sind, auch wenn nicht jede Norm-Vorgabe erfüllt werden kann. Rollstuhlgerecht ist die höchste Stufe mit 150 × 150 cm Bewegungsfläche.',
  },
  {
    question: 'Bekomme ich einen Zuschuss für ein barrierefreies Bad?',
    answer:
      'Mit Pflegegrad zahlt die Pflegekasse bis zu 4.180 € je Maßnahme für wohnumfeldverbessernde Maßnahmen. Wichtig: Der Antrag muss vor Baubeginn gestellt werden. Die KfW fördert zusätzlich mit dem Kredit 159. Wir erstellen Ihnen ein Angebot, das Sie direkt einreichen können.',
  },
  {
    question: 'Wie lange dauert ein barrierefreier Badumbau?',
    answer:
      'Der Austausch einer Badewanne gegen eine bodengleiche Dusche ist oft in wenigen Arbeitstagen erledigt. Ein kompletter barrierefreier Badumbau dauert je nach Umfang meist ein bis drei Wochen. Den genauen Zeitplan erhalten Sie mit dem Angebot.',
  },
  {
    question: 'Ist eine bodengleiche Dusche auch im Altbau möglich?',
    answer:
      'In den meisten Fällen ja. Entscheidend sind Lage und Gefälle des Abflusses und der Fußbodenaufbau. Wo der Boden nicht tief genug ist, arbeiten wir mit flachen Bodenabläufen, Wandabläufen oder einer kleinen Hebeanlage. Das klären wir beim kostenlosen Vor-Ort-Termin.',
  },
  {
    question: 'Darf ich in meiner Mietwohnung ein barrierefreies Bad einbauen lassen?',
    answer:
      'Nach § 554 BGB können Mieter verlangen, dass der Vermieter bauliche Veränderungen erlaubt, die der Nutzung durch Menschen mit Behinderungen dienen. Die Zustimmung sollte schriftlich vorliegen, bevor wir beginnen. Wir unterstützen Sie gern mit einer Beschreibung der geplanten Maßnahmen für Ihren Vermieter.',
  },
  {
    question: 'In welchen Orten bauen Sie barrierefreie Bäder?',
    answer:
      'Wir arbeiten in allen Berliner Bezirken – von Spandau bis Marzahn-Hellersdorf, von Pankow bis Treptow-Köpenick – und in Brandenburg, besonders im Umland östlich von Berlin wie Schöneiche, Neuenhagen, Strausberg, Erkner oder Woltersdorf.',
  },
];

export default function BarrierefreiesBadPage() {
  return (
    <TopicPage
      path={path}
      crumbs={[{ name: 'Barrierefreies Bad', path }]}
      eyebrow="Barrierefreier Badumbau"
      title="Barrierefreies Bad in Berlin & Brandenburg"
      intro={
        <p>
          Ein Bad, in dem Sie sich sicher bewegen – heute und in zwanzig Jahren. Als Meisterbetrieb bauen wir seit{' '}
          {site.foundingYear} barrierefreie, seniorengerechte und rollstuhlgerechte Bäder: bodengleiche Dusche, rutschhemmende
          Fliesen, Haltegriffe und genug Platz – alles aus einer Hand.
        </p>
      }
      image={images.barrierefreiesBad}
      highlights={['Planung nach DIN 18040-2', 'Bodengleiche Dusche auch im Altbau', 'Hilfe beim Förderantrag', 'Fester Ansprechpartner']}
      service={{
        name: 'Barrierefreier Badumbau',
        description: 'Planung und Umbau barrierefreier, seniorengerechter und rollstuhlgerechter Bäder nach DIN 18040-2 in Berlin und Brandenburg.',
      }}
      faqs={faqs}
      related={[badLinks[1], badLinks[2], leistungLinks[0]]}
    >
      <h2>Was macht ein Bad barrierefrei?</h2>
      <p>
        Ein barrierefreies Bad lässt sich ohne fremde Hilfe nutzen – auch mit Rollator, mit Gehstock oder nach einer Operation.
        Maßstab ist die <strong>DIN 18040-2</strong>, die Planungsnorm für barrierefreie Wohnungen. Sie unterscheidet zwei
        Stufen: <strong>barrierefrei nutzbar</strong> und <strong>uneingeschränkt mit dem Rollstuhl nutzbar</strong> (die
        sogenannten „R“-Anforderungen). Für die meisten Menschen reicht die erste Stufe völlig aus.
      </p>
      <p>Die wichtigsten Merkmale eines barrierefreien Bads:</p>
      <ul>
        <li>
          <strong>Bodengleiche Dusche</strong> ohne Duschwanne, mit höchstens 2 cm Absatz – oder ganz schwellenlos.
        </li>
        <li>
          <strong>Ausreichend Bewegungsfläche</strong>: 120 × 120 cm vor WC, Waschtisch und in der Dusche (rollstuhlgerecht:
          150 × 150 cm).
        </li>
        <li>
          <strong>Rutschhemmende Fliesen</strong> im Nassbereich, damit Sie auch barfuß sicheren Halt haben.
        </li>
        <li>
          <strong>Haltegriffe und Stützklappgriffe</strong> an WC und Dusche, fest in tragfähigem Untergrund verankert.
        </li>
        <li>
          <strong>Breite Tür</strong> mit mindestens 80 cm lichter Durchgangsbreite (rollstuhlgerecht: 90 cm), die nach außen
          öffnet und sich im Notfall von außen entriegeln lässt.
        </li>
        <li>
          <strong>Gut erreichbare Armaturen</strong>, etwa Einhebelmischer oder Thermostate mit Verbrühschutz.
        </li>
      </ul>

      <Callout title="Nicht jedes Bad muss die Norm zu 100 % erfüllen">
        Gerade in Berliner Altbauten und Plattenbauten ist das Bad oft klein. Dann planen wir ein <strong>barrierearmes</strong>{' '}
        Bad: Wir setzen die Maßnahmen um, die Ihnen im Alltag am meisten Sicherheit bringen – und erklären offen, wo die
        Grenzen liegen.
      </Callout>

      <h2>Seniorengerechtes und altersgerechtes Bad</h2>
      <p>
        Die meisten unserer Kundinnen und Kunden kommen nicht wegen einer Norm zu uns, sondern weil der Einstieg in die
        Badewanne beschwerlich geworden ist. Ein <strong>seniorengerechtes Bad</strong> setzt genau dort an: Die Wanne
        verschwindet zugunsten einer{' '}
        <Link href="/badewanne-zur-dusche">bodengleichen Dusche</Link>, ein Klappsitz ermöglicht das Duschen im Sitzen, und
        Griffe geben Halt beim Aufstehen. Ein erhöhtes WC und ein Waschtisch, an dem Sie auch sitzen können, machen den Alltag
        leichter.
      </p>
      <p>
        Wer früh plant, gewinnt: Ein altersgerechtes Bad, das beim nächsten Badumbau ohnehin entsteht, sieht nicht nach
        Pflegebad aus. Mit großformatigen Fliesen, flächenbündigen Abläufen und dezenten Griffen wirkt es modern – und ist
        trotzdem vorbereitet, wenn sich der Bedarf ändert.
      </p>

      <h2>Rollstuhlgerechtes und behindertengerechtes Bad</h2>
      <p>
        Für Rollstuhlnutzer gelten strengere Maße: 150 × 150 cm Wendefläche, ein unterfahrbarer Waschtisch, seitlich
        anfahrbares WC mit Stützklappgriffen auf beiden Seiten und eine Tür mit 90 cm lichter Breite. Oft müssen dafür Wände
        versetzt oder Türöffnungen verbreitert werden. Diese Arbeiten übernehmen wir ebenfalls – vom{' '}
        <Link href="/barrierefreier-umbau">Durchbruch über den Trockenbau</Link> bis zur fertigen Fliese.
      </p>

      <h2>Bodengleiche Dusche: das Herzstück</h2>
      <p>
        Die bodengleiche Dusche ist die Maßnahme mit der größten Wirkung. Damit sie dauerhaft dicht bleibt, kommt es auf drei
        Dinge an: das richtige Gefälle, eine lückenlose <strong>Verbundabdichtung</strong> unter den Fliesen und einen
        passenden Ablauf. Wir verwenden – je nach Bausituation – Punktabläufe, Duschrinnen oder Wandabläufe. Ist der
        Fußbodenaufbau sehr flach, wie in vielen Altbauten mit Holzbalkendecke, prüfen wir flache Systeme oder eine kompakte
        Hebeanlage.
      </p>
      <p>
        Als Meisterbetrieb erledigen wir Abdichtung und Fliesenarbeiten selbst. Das heißt: keine
        Schnittstellenprobleme zwischen verschiedenen Firmen und ein Ansprechpartner, der für das Ergebnis geradesteht.
      </p>

      <ProcessSection title="So läuft Ihr barrierefreier Badumbau ab" />

      <h2>Förderung für das barrierefreie Bad</h2>
      <p>
        Ein barrierefreies Bad wird von mehreren Stellen gefördert. Die wichtigste Quelle ist die <strong>Pflegekasse</strong>:
        Bei einem anerkannten Pflegegrad zahlt sie bis zu <strong>4.180 € je Maßnahme</strong> (§ 40 Abs. 4 SGB XI). Leben
        mehrere Anspruchsberechtigte im Haushalt, können sich die Beträge addieren. Zusätzlich gibt es den zinsgünstigen{' '}
        <strong>KfW-Kredit 159</strong> „Altersgerecht Umbauen“.
      </p>
      <p>
        Alle Details, den richtigen Ablauf und typische Fehler finden Sie auf unserer Seite{' '}
        <Link href="/foerderung">Förderung für den barrierefreien Umbau</Link>. <em>({foerderStand})</em>
      </p>

      <h2>Was kostet ein barrierefreies Bad?</h2>
      <p>
        Pauschale Preise sind bei Badumbauten wenig aussagekräftig – zwei Bäder gleicher Größe können sehr unterschiedlich
        aufwendig sein. Diese Faktoren bestimmen den Aufwand am stärksten:
      </p>
      <ul>
        <li>Umfang: nur Wanne gegen Dusche tauschen oder das ganze Bad erneuern</li>
        <li>Bausubstanz: Altbau mit Holzbalkendecke, Plattenbau oder Einfamilienhaus</li>
        <li>Lage der Leitungen und des Abflusses</li>
        <li>Notwendige Wand- oder Türarbeiten</li>
        <li>Auswahl von Fliesen, Sanitärobjekten und Armaturen</li>
      </ul>
      <p>
        Nach der kostenlosen Besichtigung erhalten Sie ein schriftliches, nach Positionen aufgeschlüsseltes Angebot – so, wie es
        die Pflegekasse für den Antrag braucht.
      </p>

      <h2>Barrierefreie Bäder in ganz Berlin und Brandenburg</h2>
      <p>
        Unser Betrieb sitzt in {site.city}, direkt an der östlichen Stadtgrenze. Von hier aus sind wir in allen Berliner
        Bezirken im Einsatz, von Spandau bis Marzahn-Hellersdorf, und in Brandenburg, etwa in Neuenhagen, Strausberg, Erkner, Woltersdorf, Hoppegarten und Fredersdorf-Vogelsdorf. Wir kennen
        die typischen Bauweisen der Region: den Gründerzeit-Altbau mit Holzbalkendecke, das Plattenbau-Bad mit Fertigzelle und
        das Einfamilienhaus aus den 70er-Jahren.
      </p>
    </TopicPage>
  );
}
