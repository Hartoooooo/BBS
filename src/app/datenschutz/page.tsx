import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Datenschutzerklärung | BBS - Barrierefreies Bauen und Sanieren',
  description: 'Datenschutzerklärung von BBS Barrierefreies Bauen und Sanieren',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Zurück zur Startseite
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Datenschutzerklärung</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Einleitung */}
          <section>
            <p className="text-gray-700">
              Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. 
              Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
            </p>
          </section>

          {/* Verantwortliche Stelle */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Verantwortliche Stelle</h2>
            <div className="text-gray-700 space-y-2">
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mt-4"><strong>Björn Hartmann</strong></p>
              <p>BBS Barrierefreies Bauen und Sanieren</p>
              <p>Petershagener Straße 27</p>
              <p>15566 Schöneiche bei Berlin</p>
              <p className="mt-4">Telefon: <a href="tel:+493092371277" className="text-blue-600 hover:text-blue-700">+49 (0) 30 923 712 77</a></p>
              <p>E-Mail: <a href="mailto:service@b-b-s.berlin" className="text-blue-600 hover:text-blue-700">service@b-b-s.berlin</a></p>
            </div>
          </section>

          {/* Erhebung und Speicherung personenbezogener Daten */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <div className="text-gray-700 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Besuch unserer Website</h3>
                <p>
                  Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch 
                  Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert.
                </p>
                <p className="mt-2">Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>IP-Adresse des anfragenden Rechners</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nutzung unseres Kontaktformulars</h3>
                <p>
                  Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website bereitgestelltes 
                  Formular Kontakt aufzunehmen. Dabei sind folgende Angaben erforderlich:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer (optional)</li>
                  <li>Ihre Nachricht</li>
                </ul>
                <p className="mt-2">
                  Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO 
                  auf Grundlage Ihrer freiwillig erteilten Einwilligung.
                </p>
              </div>
            </div>
          </section>

          {/* Weitergabe von Daten */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Weitergabe von Daten</h2>
            <p className="text-gray-700">
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. 
              Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben</li>
              <li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist</li>
              <li>eine gesetzliche Verpflichtung nach Art. 6 Abs. 1 S. 1 lit. c DSGVO besteht</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies und Tracking-Technologien</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Unsere Website verwendet Cookies und ähnliche Tracking-Technologien, um Ihnen die bestmögliche Erfahrung 
                zu bieten und unsere Website zu verbessern.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4.1 Was sind Cookies?</h3>
                <p className="mb-2">
                  Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Website besuchen. 
                  Sie ermöglichen es uns, bestimmte Informationen zu speichern und später wieder abzurufen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4.2 Arten von Cookies</h3>
                <p className="mb-3">Wir verwenden folgende Arten von Cookies:</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-gray-900 mb-2">Notwendige Cookies</h4>
                  <p className="mb-2">
                    Diese Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich. Sie ermöglichen grundlegende 
                    Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Website.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-gray-900 mb-2">Analyse-Cookies</h4>
                  <p className="mb-2">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen 
                    anonym gesammelt und gemeldet werden. Wir verwenden folgende Analyse-Dienste:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-2 text-sm">
                    <li>
                      <strong>Google Analytics:</strong> Ein Webanalysedienst von Google LLC zur Analyse der Website-Nutzung. 
                      Die Daten werden anonymisiert übertragen und gespeichert.
                    </li>
                    <li>
                      <strong>Microsoft Clarity:</strong> Ein Analyse-Tool von Microsoft Corporation zur Analyse des Nutzerverhaltens 
                      durch Heatmaps und Session-Aufzeichnungen.
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Weitere Informationen:</strong>{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 underline">
                      Google Datenschutzerklärung
                    </a>
                    {' | '}
                    <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 underline">
                      Microsoft Datenschutzerklärung
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4.3 Cookie-Verwaltung</h3>
                <p className="mb-2">
                  Sie können Ihre Cookie-Präferenzen jederzeit über unseren Cookie-Banner oder die Einstellungen Ihres Browsers 
                  verwalten. Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität unserer Website 
                  beeinträchtigen kann.
                </p>
                <p className="mb-2">
                  Weitere Informationen finden Sie auf unserer{' '}
                  <Link href="/cookies" className="text-red-500 hover:text-red-600 underline">
                    Cookie-Richtlinie
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4.4 Opt-Out-Möglichkeiten</h3>
                <p className="mb-2">Sie können der Verwendung von Analyse-Cookies widersprechen:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <strong>Google Analytics:</strong>{' '}
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 underline">
                      Browser-Add-on zur Deaktivierung von Google Analytics
                    </a>
                  </li>
                  <li>
                    <strong>Microsoft Clarity:</strong> Über unsere Cookie-Einstellungen oder direkt in den{' '}
                    <a href="https://clarity.microsoft.com/opt-out" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 underline">
                      Clarity-Einstellungen
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ihre Rechte */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Ihre Rechte</h2>
            <p className="text-gray-700 mb-4">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Recht auf Auskunft</li>
              <li>Recht auf Berichtigung oder Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer 
              personenbezogenen Daten durch uns zu beschweren.
            </p>
          </section>

          {/* Aktualität der Datenschutzerklärung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className="text-gray-700">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand September 2024. Durch die Weiterentwicklung 
              unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben 
              kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
