import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Impressum | BBS - Barrierefreies Bauen und Sanieren',
  description: 'Impressum und rechtliche Informationen von BBS Barrierefreies Bauen und Sanieren',
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Zurück zur Startseite
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Impressum</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Angaben gemäß TMG */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Björn Hartmann</strong></p>
              <p>BBS Barrierefreies Bauen und Sanieren</p>
              <p>Petershagener Straße 27</p>
              <p>15566 Schöneiche bei Berlin</p>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Telefon:</strong> <a href="tel:+493092371277" className="text-blue-600 hover:text-blue-700">+49 (0) 30 923 712 77</a></p>
              <p><strong>Telefax:</strong> +49 (0) 30 960 632 46</p>
              <p><strong>E-Mail:</strong> <a href="mailto:info@bbs-hartmann.de" className="text-blue-600 hover:text-blue-700">info@bbs-hartmann.de</a></p>
            </div>
          </section>

          {/* Steuernummer */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Steuernummer</h2>
            <div className="text-gray-700">
              <p>Steuernummer gemäß §27 a Umsatzsteuergesetz:</p>
              <p><strong>063/228/02593</strong></p>
            </div>
          </section>

          {/* Quellenangaben */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quellenangaben für die verwendeten Bilder und Grafiken</h2>
            <div className="text-gray-700">
              <p>www.shutterstock.de, AI-generierte Bilder, BBS Barrierefreies Bauen und Sanieren</p>
            </div>
          </section>

          {/* Haftungsausschluss */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftungsausschluss (Disclaimer)</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Haftung für Inhalte</h3>
                <p className="text-gray-700">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Haftung für Links</h3>
                <p className="text-gray-700">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Urheberrecht</h3>
                <p className="text-gray-700">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p>Quelle: <a href="http://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">www.e-recht24.de</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
