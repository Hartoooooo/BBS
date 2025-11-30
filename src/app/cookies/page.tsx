import Link from 'next/link';
import { ArrowLeft, Cookie, Shield, BarChart3, Megaphone } from 'lucide-react';
import CookieSettingsButton from '@/components/ui/CookieSettingsButton';

export const metadata = {
  title: 'Cookie-Richtlinie | BBS - Barrierefreies Bauen und Sanieren',
  description: 'Informationen über die Verwendung von Cookies auf unserer Website',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 cursor-pointer">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Zurück zur Startseite
          </Link>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Cookie className="w-8 h-8 text-red-500" />
              <h1 className="text-4xl font-bold text-gray-900">Cookie-Richtlinie</h1>
            </div>
            <CookieSettingsButton />
          </div>
          <p className="text-gray-600">Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Einleitung */}
          <section>
            <p className="text-gray-700">
              Diese Cookie-Richtlinie erklärt, wie BBS Barrierefreies Bauen und Sanieren („wir“, „uns“ oder „unser“) 
              Cookies und ähnliche Technologien auf unserer Website verwendet und welche Optionen Sie haben.
            </p>
          </section>

          {/* Was sind Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Cookie className="w-6 h-6 text-red-500" />
              1. Was sind Cookies?
            </h2>
            <p className="text-gray-700 mb-4">
              Cookies sind kleine Textdateien, die von Websites auf Ihrem Computer oder Mobilgerät gespeichert werden, 
              wenn Sie eine Website besuchen. Sie werden häufig verwendet, um Websites funktionsfähig zu machen oder 
              effizienter zu arbeiten, sowie um Berichtsinformationen bereitzustellen.
            </p>
            <p className="text-gray-700">
              Cookies können „persistent“ oder „Session“-Cookies sein. Persistente Cookies bleiben auf Ihrem Computer 
              oder Mobilgerät, wenn Sie offline gehen, während Session-Cookies gelöscht werden, sobald Sie Ihren Browser schließen.
            </p>
          </section>

          {/* Wie verwenden wir Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-red-500" />
              2. Wie verwenden wir Cookies?
            </h2>
            <p className="text-gray-700 mb-4">
              Wir verwenden Cookies für verschiedene Zwecke, die in den folgenden Kategorien beschrieben sind:
            </p>

            {/* Notwendige Cookies */}
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                Notwendige Cookies
              </h3>
              <p className="text-gray-700 mb-3">
                Diese Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich. Sie ermöglichen grundlegende 
                Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Website.
              </p>
              <div className="bg-white p-4 rounded border border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">Rechtsgrundlage:</p>
                <p className="text-sm text-gray-700">
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) – Diese Cookies sind für die Bereitstellung 
                  der Website erforderlich und können nicht deaktiviert werden.
                </p>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                Analyse-Cookies
              </h3>
              <p className="text-gray-700 mb-3">
                Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen 
                anonym gesammelt und gemeldet werden. Dies hilft uns, unsere Website zu verbessern.
              </p>
              
              <div className="space-y-4 mb-4">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Google Analytics</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Google Analytics ist ein Webanalysedienst von Google LLC. Wir verwenden Google Analytics, um zu analysieren, 
                    wie Besucher unsere Website nutzen.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Anbieter:</strong> Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA<br />
                    <strong>Datenschutzerklärung:</strong>{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 underline">
                      https://policies.google.com/privacy
                    </a>
                    <br />
                    <strong>Opt-Out:</strong>{' '}
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 underline">
                      https://tools.google.com/dlpage/gaoptout
                    </a>
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Microsoft Clarity</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Microsoft Clarity ist ein Analyse-Tool, das uns hilft zu verstehen, wie Besucher mit unserer Website 
                    interagieren, indem es Heatmaps, Session-Aufzeichnungen und Metriken bereitstellt.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Anbieter:</strong> Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA<br />
                    <strong>Datenschutzerklärung:</strong>{' '}
                    <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 underline">
                      https://privacy.microsoft.com/de-de/privacystatement
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">Rechtsgrundlage:</p>
                <p className="text-sm text-gray-700">
                  Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) – Diese Cookies werden nur mit Ihrer Einwilligung gesetzt. 
                  Sie können Ihre Einwilligung jederzeit widerrufen.
                </p>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-purple-500" />
                Marketing-Cookies
              </h3>
              <p className="text-gray-700">
                Diese Cookies werden verwendet, um Besuchern auf anderen Websites relevante Werbung und Marketingkampagnen 
                anzuzeigen. Aktuell verwenden wir keine Marketing-Cookies.
              </p>
            </div>
          </section>

          {/* Cookie-Verwaltung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Wie können Sie Cookies verwalten?</h2>
            <p className="text-gray-700 mb-4">
              Sie haben verschiedene Möglichkeiten, Cookies zu verwalten:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>
                <strong>Cookie-Einstellungen:</strong> Sie können Ihre Cookie-Präferenzen jederzeit über den Button 
                oben auf dieser Seite oder über unseren Cookie-Banner anpassen.
              </li>
              <li>
                <strong>Browser-Einstellungen:</strong> Die meisten Browser erlauben es Ihnen, Cookies zu verwalten. 
                Sie können Cookies in den Einstellungen Ihres Browsers blockieren oder löschen.
              </li>
              <li>
                <strong>Opt-Out-Links:</strong> Für bestimmte Dienste wie Google Analytics können Sie sich über die 
                oben genannten Links abmelden.
              </li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Hinweis:</strong> Wenn Sie Cookies deaktivieren, können einige Funktionen unserer Website 
                möglicherweise nicht ordnungsgemäß funktionieren.
              </p>
            </div>
          </section>

          {/* Dauer der Speicherung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Dauer der Speicherung</h2>
            <p className="text-gray-700 mb-4">
              Die Dauer der Speicherung von Cookies variiert je nach Cookie-Typ:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Session-Cookies:</strong> Werden automatisch gelöscht, wenn Sie Ihren Browser schließen.
              </li>
              <li>
                <strong>Persistente Cookies:</strong> Bleiben auf Ihrem Gerät, bis sie ablaufen oder Sie sie löschen. 
                Die Speicherdauer beträgt in der Regel zwischen 30 Tagen und 2 Jahren.
              </li>
            </ul>
          </section>

          {/* Ihre Rechte */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Ihre Rechte</h2>
            <p className="text-gray-700 mb-4">
              Sie haben das Recht:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Ihre Einwilligung zur Verwendung von Cookies jederzeit zu widerrufen</li>
              <li>Informationen über die von uns verwendeten Cookies zu erhalten</li>
              <li>Cookies in Ihren Browser-Einstellungen zu verwalten</li>
              <li>Beschwerde bei einer Datenschutzbehörde einzulegen</li>
            </ul>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kontakt</h2>
            <p className="text-gray-700 mb-4">
              Wenn Sie Fragen zu unserer Verwendung von Cookies haben, können Sie uns kontaktieren:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Björn Hartmann</strong><br />
                BBS Barrierefreies Bauen und Sanieren<br />
                Schöneiche bei Berlin<br />
                <br />
                Telefon: <a href="tel:+493092371277" className="text-red-500 hover:text-red-600">+49 (0) 30 923 712 77</a><br />
                E-Mail: <a href="mailto:service@b-b-s.berlin" className="text-red-500 hover:text-red-600">service@b-b-s.berlin</a>
              </p>
            </div>
          </section>

          {/* Weitere Informationen */}
          <section>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                Weitere Informationen finden Sie in unserer{' '}
                <Link href="/datenschutz" className="text-red-500 hover:text-red-600 underline font-semibold">
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

