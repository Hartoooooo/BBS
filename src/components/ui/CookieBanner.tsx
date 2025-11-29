'use client';

import { useState, useEffect } from 'react';
import { X, Settings, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { getCookieConsent, setCookieConsent, getCookiePreferences, setCookiePreferences, type CookiePreferences } from '@/lib/cookieConsent';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const hasConsented = getCookieConsent();
    if (!hasConsented) {
      setIsVisible(true);
      const savedPreferences = getCookiePreferences();
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setCookiePreferences(allAccepted);
    setCookieConsent(true);
    setIsVisible(false);
    // Analytics werden hier initialisiert, wenn akzeptiert
    if (allAccepted.analytics) {
      initializeAnalytics();
    }
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setCookiePreferences(onlyNecessary);
    setCookieConsent(true);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    setCookiePreferences(preferences);
    setCookieConsent(true);
    setIsVisible(false);
    // Analytics werden hier initialisiert, wenn akzeptiert
    if (preferences.analytics) {
      initializeAnalytics();
    }
  };

  const togglePreference = (category: keyof CookiePreferences) => {
    if (category === 'necessary') return; // Necessary kann nicht deaktiviert werden
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const initializeAnalytics = () => {
    // Analytics werden durch die Analytics-Komponente initialisiert
    // Diese Funktion triggert nur ein Event, damit die Komponente reagieren kann
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cookieConsentUpdated'));
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 md:p-8">
          {!showSettings ? (
            <>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Cookie-Einstellungen
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                    Einige sind notwendig für den Betrieb der Seite, während andere uns helfen, diese Website 
                    und die Nutzererfahrung zu verbessern (Tracking-Cookies). Sie können selbst entscheiden, 
                    ob Sie die Cookies zulassen möchten.
                  </p>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="ml-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  aria-label="Banner schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-3 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-3 rounded-lg font-semibold bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Settings className="w-4 h-4" />
                  Einstellungen
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 flex-1 sm:flex-initial cursor-pointer"
                >
                  Alle akzeptieren
                </button>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Weitere Informationen finden Sie in unserer{' '}
                <Link href="/datenschutz" className="text-red-500 hover:text-red-600 underline cursor-pointer">
                  Datenschutzerklärung
                </Link>
                {' '}und auf unserer{' '}
                <Link href="/cookies" className="text-red-500 hover:text-red-600 underline cursor-pointer">
                  Cookie-Seite
                </Link>
                .
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Cookie-Einstellungen anpassen
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  aria-label="Zurück"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Notwendige Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">Notwendige Cookies</h4>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">Immer aktiv</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                    </p>
                  </div>
                  <div className="ml-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 border-2 border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">Analyse-Cookies</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, 
                      indem Informationen anonym gesammelt und gemeldet werden (Google Analytics, Microsoft Clarity).
                    </p>
                    <div className="text-xs text-gray-500">
                      <strong>Verwendete Dienste:</strong> Google Analytics, Microsoft Clarity
                    </div>
                  </div>
                  <label className="ml-4 relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => togglePreference('analytics')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                  </label>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 border-2 border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">Marketing-Cookies</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Diese Cookies werden verwendet, um Besuchern auf anderen Websites relevante Werbung 
                      und Marketingkampagnen anzuzeigen. Aktuell verwenden wir keine Marketing-Cookies.
                    </p>
                  </div>
                  <label className="ml-4 relative inline-flex items-center cursor-pointer opacity-50">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => togglePreference('marketing')}
                      disabled
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-6 py-3 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                >
                  Abbrechen
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-3 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 flex-1 sm:flex-initial cursor-pointer"
                >
                  Einstellungen speichern
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

