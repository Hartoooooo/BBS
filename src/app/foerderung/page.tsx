import Link from 'next/link';
import TopicPage from '@/components/templates/TopicPage';
import { Callout, foerderStand } from '@/components/templates/blocks';
import { buildMetadata } from '@/lib/seo';
import { images } from '@/content/images';
import { badLinks, leistungLinks } from '@/content/site';
import type { Faq } from '@/lib/schema';

const path = '/foerderung';

export const metadata = buildMetadata({
  title: 'Förderung barrierefreies Bad 2026: Pflegekasse 4.180 € & KfW | BBS',
  description:
    'Zuschuss für das barrierefreie Bad: bis 4.180 € von der Pflegekasse, KfW-Kredit 159 und Steuervorteil. So beantragen Sie die Förderung richtig – mit Checkliste.',
  path,
  image: images.griffe.src,
});

const faqs: Faq[] = [
  {
    question: 'Wie viel zahlt die Pflegekasse für den Badumbau?',
    answer:
      'Bis zu 4.180 € je Maßnahme, wenn ein Pflegegrad (1 bis 5) vorliegt. Wohnen mehrere Pflegebedürftige zusammen, kann der Zuschuss für bis zu vier Personen zusammengelegt werden. Ein barrierefreier Badumbau gilt dabei in der Regel als eine Maßnahme.',
  },
  {
    question: 'Kann ich Pflegekasse und KfW kombinieren?',
    answer:
      'Ja, der Zuschuss der Pflegekasse lässt sich mit dem KfW-Kredit 159 kombinieren. Die Pflegekasse übernimmt einen Teil, den Rest können Sie über den Kredit finanzieren.',
  },
  {
    question: 'Was passiert, wenn ich den Antrag erst nach dem Umbau stelle?',
    answer:
      'Dann riskieren Sie, leer auszugehen. Sowohl die Pflegekasse als auch die KfW verlangen, dass der Antrag vor Beginn der Arbeiten gestellt wird. Bei der Pflegekasse sollten Sie außerdem die Bewilligung abwarten.',
  },
  {
    question: 'Kann ich den Umbau von der Steuer absetzen?',
    answer:
      'Lohnkosten von Handwerkern können Sie nach § 35a EStG mit 20 %, maximal 1.200 € im Jahr, von der Steuer abziehen. Ist der Umbau medizinisch notwendig, kommen auch außergewöhnliche Belastungen infrage. Bitte klären Sie das mit Ihrer Steuerberatung.',
  },
];

export default function FoerderungPage() {
  return (
    <TopicPage
      path={path}
      crumbs={[
        { name: 'Barrierefreies Bad', path: '/barrierefreies-bad' },
        { name: 'Förderung', path },
      ]}
      eyebrow={`Förderung · ${foerderStand}`}
      title="Förderung für das barrierefreie Bad: Zuschüsse richtig beantragen"
      intro={
        <p>
          Ein barrierefreier Badumbau muss nicht allein aus eigener Tasche bezahlt werden. Hier finden Sie die aktuellen
          Förderungen von Pflegekasse und KfW, den richtigen Ablauf und die häufigsten Fehler – verständlich erklärt.
        </p>
      }
      image={images.griffe}
      highlights={['Pflegekasse: bis 4.180 € je Maßnahme', 'KfW-Kredit 159 bis 50.000 €', 'Antrag immer vor Baubeginn', 'Angebot von uns zum Einreichen']}
      faqs={faqs}
      related={[badLinks[0], badLinks[1], leistungLinks[0]]}
    >
      <Callout title="Das Wichtigste zuerst">
        Stellen Sie jeden Förderantrag <strong>bevor</strong> die Arbeiten beginnen. Ein Kostenvoranschlag ist dafür die
        Grundlage – den erstellen wir Ihnen nach der kostenlosen Besichtigung.
      </Callout>

      <h2>Überblick: Welche Förderung gibt es?</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Förderung</th>
            <th scope="col">Höhe</th>
            <th scope="col">Voraussetzung</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Pflegekasse</strong> (§ 40 Abs. 4 SGB XI)</td>
            <td>bis 4.180 € je Maßnahme</td>
            <td>Pflegegrad 1–5, Antrag vor Baubeginn</td>
          </tr>
          <tr>
            <td><strong>KfW-Kredit 159</strong> „Altersgerecht Umbauen“</td>
            <td>bis 50.000 € je Wohneinheit, zinsgünstig</td>
            <td>unabhängig von Alter und Pflegegrad, über die Hausbank</td>
          </tr>
          <tr>
            <td><strong>Steuerermäßigung</strong> (§ 35a EStG)</td>
            <td>20 % der Lohnkosten, max. 1.200 € pro Jahr</td>
            <td>Rechnung und unbare Zahlung</td>
          </tr>
        </tbody>
      </table>

      <h2>Zuschuss der Pflegekasse: bis zu 4.180 €</h2>
      <p>
        Wer einen <strong>Pflegegrad</strong> hat, kann bei seiner Pflegekasse einen Zuschuss für „wohnumfeldverbessernde
        Maßnahmen“ beantragen. Dazu zählt alles, was die häusliche Pflege ermöglicht oder erleichtert oder ein selbstständigeres
        Leben erlaubt – zum Beispiel der Umbau der{' '}
        <Link href="/badewanne-zur-dusche">Badewanne zur bodengleichen Dusche</Link>, Haltegriffe, ein erhöhtes WC oder{' '}
        <Link href="/barrierefreier-umbau">verbreiterte Türen</Link>.
      </p>
      <p>
        Der Zuschuss beträgt bis zu <strong>4.180 € je Maßnahme</strong>. Wichtig: Mehrere Umbauten, die zur gleichen Zeit
        geplant werden, zählen meist als <em>eine</em> Maßnahme. Leben mehrere Menschen mit Pflegegrad in derselben Wohnung,
        kann der Zuschuss für bis zu vier Personen zusammengelegt werden. Ändert sich die Pflegesituation später, ist ein
        erneuter Antrag möglich.
      </p>
      <h3>So beantragen Sie den Zuschuss</h3>
      <ol>
        <li>Kostenlose Besichtigung durch uns und schriftliches Angebot</li>
        <li>Formloser Antrag bei der Pflegekasse – mit Angebot und kurzer Begründung</li>
        <li>Bewilligung der Pflegekasse abwarten</li>
        <li>Umbau durch uns</li>
        <li>Rechnung bei der Pflegekasse einreichen, Auszahlung an Sie</li>
      </ol>

      <h2>KfW-Kredit 159: Altersgerecht Umbauen</h2>
      <p>
        Die KfW fördert den Abbau von Barrieren mit dem Programm <strong>„Altersgerecht Umbauen“</strong>. Der{' '}
        <strong>Kredit 159</strong> steht allen offen – Eigentümern wie Mietern, unabhängig vom Alter. Sie beantragen ihn über
        Ihre Hausbank, ebenfalls vor Beginn der Arbeiten.
      </p>

      <h2>Typische Fehler, die Geld kosten</h2>
      <ul>
        <li>Mit dem Umbau beginnen, bevor die Bewilligung vorliegt</li>
        <li>Mehrere Maßnahmen nacheinander beantragen, statt sie sinnvoll zu bündeln</li>
        <li>Ein Angebot ohne klare Positionen einreichen</li>
        <li>In der Mietwohnung ohne schriftliche Zustimmung des Vermieters umbauen</li>
      </ul>

      <h2>Wir helfen beim Antrag</h2>
      <p>
        Förderanträge stellen Sie als Versicherte oder Versicherter selbst. Wir sorgen dafür, dass Sie alle Unterlagen in der
        richtigen Form bekommen: ein übersichtliches Angebot, auf Wunsch Fotos der Ausgangssituation und eine Beschreibung,
        warum die Maßnahme Ihren Alltag erleichtert. Mehr zur Planung lesen Sie auf der Seite{' '}
        <Link href="/barrierefreies-bad">Barrierefreies Bad</Link>.
      </p>
      <p className="text-sm">
        Hinweis: Diese Informationen ersetzen keine Rechts- oder Steuerberatung. Verbindliche Auskünfte geben Ihre Pflegekasse
        und die KfW. {foerderStand}.
      </p>
    </TopicPage>
  );
}
