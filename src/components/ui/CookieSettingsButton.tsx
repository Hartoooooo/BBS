'use client';

import { Settings } from 'lucide-react';

const CookieSettingsButton = () => {
  const openCookieSettings = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('openCookieSettings'));
      // Scroll zum unteren Rand, damit der Banner sichtbar ist
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <button
      onClick={openCookieSettings}
      className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200 cursor-pointer"
    >
      <Settings className="w-5 h-5" />
      Cookie-Einstellungen
    </button>
  );
};

export default CookieSettingsButton;

