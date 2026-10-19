import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/content/site';

export const metadata = buildMetadata({
  title: 'Erklärung zur Barrierefreiheit | BBS',
  description: 'Erklärung zur Barrierefreiheit der Website von BBS Barrierefreies Bauen und Sanieren.',
  path: '/barrierefreiheit',
  noindex: true,
});

export default function BarrierefreiheitPage() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="page-pattern pb-20 pt-28 sm:pt-32">
        <div className="section-shell">
          <article className="prose-bbs mx-auto max-w-3xl">
            <Breadcrumbs crumbs={[{ name: 'Barrierefreiheit', path: '/barrierefreiheit' }]} />
            <h1 className="mt-8 text-[clamp(2.2rem,5vw,3.6rem)] font-black leading-tight text-ink">Erklärung zur Barrierefreiheit</h1>
            <p>
              Wir bauen barrierefreie Bäder – und wollen, dass auch unsere Website für alle Menschen gut nutzbar ist. Sie orientiert
              sich an den Web Content Accessibility Guidelines (WCAG) 2.2 auf Stufe AA.
            </p>

            <h2>Was wir umgesetzt haben</h2>
            <ul>
              <li>Schriftgröße in drei Stufen und ein Hochkontrast-Modus – über die Schaltflächen im Kopf- und Fußbereich</li>
              <li>Vollständige Bedienbarkeit per Tastatur mit gut sichtbarem Fokusrahmen</li>
              <li>„Zum Inhalt springen“-Link am Seitenanfang</li>
              <li>Klare Überschriftenstruktur und Orientierungsbereiche für Screenreader</li>
              <li>Textalternativen für informative Bilder</li>
              <li>Ausreichende Farbkontraste für Texte</li>
              <li>Bewegte Inhalte lassen sich anhalten; die Einstellung „Bewegung reduzieren“ Ihres Geräts wird beachtet</li>
              <li>Ausreichend große Schaltflächen und Links für die Bedienung per Touch</li>
            </ul>

            <h2>Bekannte Einschränkungen</h2>
            <p>
              Eingebettete Inhalte von Drittanbietern, etwa Google Maps, liegen nicht in unserem Einflussbereich und sind
              möglicherweise nicht vollständig barrierefrei. In diesen Fällen erreichen Sie uns jederzeit telefonisch oder per
              E-Mail.
            </p>

            <h2>Feedback und Kontakt</h2>
            <p>
              Ist Ihnen eine Barriere auf unserer Website aufgefallen? Dann sagen Sie es uns bitte – wir kümmern uns darum.
            </p>
            <ul>
              <li>
                Telefon: <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
            <p>
              Zurück zur <Link href="/">Startseite</Link>.
            </p>
            <p className="text-sm">Stand dieser Erklärung: Oktober 2026</p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
