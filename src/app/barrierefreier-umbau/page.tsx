import Link from 'next/link';
import TopicPage from '@/components/templates/TopicPage';
import { Callout, ProcessSection } from '@/components/templates/blocks';
import { buildMetadata } from '@/lib/seo';
import { images } from '@/content/images';
import { badLinks, leistungLinks } from '@/content/site';
import type { Faq } from '@/lib/schema';

const path = '/barrierefreier-umbau';

export const metadata = buildMetadata({
  title: 'Barrierefreier Umbau Berlin & Brandenburg – Türen, Schwellen, Wohnung | BBS',
  description:
    'Barrierefreier Umbau von Wohnung und Haus: Türen verbreitern, Schwellen entfernen, Bad anpassen. BBS ist Ihr Meisterbetrieb für Wohnraumanpassung in Berlin und Brandenburg.',
  path,
  image: images.trockenbau.src,
});

const faqs: Faq[] = [
  {
    question: 'Wie breit muss eine barrierefreie Tür sein?',
    answer:
      'Nach DIN 18040-2 mindestens 80 cm lichte Durchgangsbreite, für Rollstuhlnutzer 90 cm. Gemessen wird der tatsächlich nutzbare Durchgang, nicht die Breite des Türblatts.',
  },
  {
    question: 'Kann jede Tür verbreitert werden?',
    answer:
      'Bei nichttragenden Wänden ist das in der Regel unkompliziert. Bei tragenden Wänden wird ein neuer Sturz eingesetzt, gegebenenfalls nach statischer Berechnung. Das prüfen wir vor Ort.',
  },
  {
    question: 'Wie werden Türschwellen entfernt?',
    answer:
      'Wir bauen die Schwelle aus und gleichen die Höhen der Bodenbeläge an. Wo ein Höhenunterschied bleibt, setzen wir flache Übergangsprofile oder Keile ein. Bei Balkon- und Terrassentüren muss die Abdichtung besonders sorgfältig gelöst werden.',
  },
  {
    question: 'Wird der barrierefreie Umbau gefördert?',
    answer:
      'Ja. Mit Pflegegrad zahlt die Pflegekasse bis zu 4.180 € je Maßnahme, zusätzlich gibt es den KfW-Kredit 159. Mehr dazu auf unserer Förderseite.',
  },
];

export default function BarrierefreierUmbauPage() {
  return (
    <TopicPage
      path={path}
      crumbs={[{ name: 'Barrierefreier Umbau', path }]}
      eyebrow="Wohnraumanpassung"
      title="Barrierefreier Umbau für Wohnung und Haus"
      intro={
        <p>
          Zu schmale Türen, Schwellen, rutschige Böden: Oft sind es Kleinigkeiten, die das Leben zu Hause schwer machen. Wir
          passen Ihre Wohnung oder Ihr Haus in Berlin und Brandenburg an – damit Sie so lange wie möglich selbstständig in den
          eigenen vier Wänden leben können.
        </p>
      }
      image={images.trockenbau}
      highlights={['Türen verbreitern', 'Schwellen entfernen', 'Böden angleichen', 'Bad und Küche anpassen']}
      service={{
        name: 'Barrierefreier Umbau und Wohnraumanpassung',
        description: 'Türverbreiterung, Schwellenabbau, Bodenangleichung und barrierefreie Badumbauten in Berlin und Brandenburg.',
      }}
      faqs={faqs}
      related={[badLinks[0], badLinks[2], leistungLinks[1]]}
    >
      <h2>Barrierefrei umbauen: Wo fangen Sie an?</h2>
      <p>
        Beim barrierefreien Umbau geht es nicht darum, alles neu zu machen. Wir schauen gemeinsam mit Ihnen, welche Hindernisse
        Sie im Alltag tatsächlich bremsen – und beginnen dort. Die meisten Anfragen betreffen drei Bereiche: das{' '}
        <Link href="/barrierefreies-bad">Bad</Link>, die Türen und die Übergänge zwischen den Räumen.
      </p>

      <h2>Türen verbreitern</h2>
      <p>
        Viele Innentüren in Berliner Altbauten und Plattenbauten haben nur 70 bis 75 cm Durchgang. Mit Rollator oder Rollstuhl
        wird das schnell zu eng. Wir verbreitern die Öffnung, setzen eine neue Zarge und – wenn gewünscht – eine
        Schiebetür, die keinen Schwenkbereich braucht. Bei tragenden Wänden sorgen wir für einen fachgerechten Sturz.
      </p>
      <ul>
        <li>Mindestens 80 cm lichte Breite, für Rollstühle 90 cm</li>
        <li>Schiebetüren oder nach außen öffnende Badtüren</li>
        <li>Griffe in gut erreichbarer Höhe</li>
        <li>Saubere Wiederherstellung von Putz, Trockenbau und Anstrich</li>
      </ul>

      <h2>Schwellen entfernen und Böden angleichen</h2>
      <p>
        Jede Schwelle ist eine Stolperfalle. Wir entfernen Türschwellen, gleichen unterschiedliche Bodenhöhen aus und verlegen
        auf Wunsch einen neuen, durchgehenden Bodenbelag. Als{' '}
        <Link href="/fliesenleger">Fliesen- und Bodenleger</Link> wählen wir dabei Beläge, die rutschhemmend, pflegeleicht und
        mit Rollator gut befahrbar sind.
      </p>

      <h2>Haltegriffe, Licht und Bedienelemente</h2>
      <p>
        Kleine Maßnahmen mit großer Wirkung: Haltegriffe im Flur und Bad, gut erreichbare Schalter und eine helle,
        blendfreie Beleuchtung. Wichtig ist, dass Griffe in tragfähigem Untergrund sitzen. In Trockenbauwänden sehen wir
        dafür Verstärkungen vor.
      </p>

      <Callout title="Mietwohnung? Das sagt das Gesetz">
        Nach § 554 BGB können Mieterinnen und Mieter verlangen, dass der Vermieter bauliche Veränderungen erlaubt, die der
        Nutzung durch Menschen mit Behinderungen dienen. Holen Sie die Zustimmung schriftlich ein, bevor die Arbeiten
        beginnen.
      </Callout>

      <ProcessSection />

      <h2>Förderung nutzen</h2>
      <p>
        Viele Maßnahmen der Wohnraumanpassung werden gefördert – mit bis zu 4.180 € von der Pflegekasse oder über den
        KfW-Kredit 159. Wie das genau funktioniert, erklären wir auf der Seite{' '}
        <Link href="/foerderung">Förderung & Zuschüsse</Link>.
      </p>
    </TopicPage>
  );
}
