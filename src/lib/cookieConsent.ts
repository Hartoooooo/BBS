export type CookieCategory = 'necessary' | 'analytics' | 'marketing';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'cookie-consent';
const COOKIE_PREFERENCES_KEY = 'cookie-preferences';

export const getCookieConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) === 'true';
};

export const setCookieConsent = (consented: boolean): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(COOKIE_CONSENT_KEY, String(consented));
};

export const getCookiePreferences = (): CookiePreferences => {
  if (typeof window === 'undefined') {
    return { necessary: true, analytics: false, marketing: false };
  }
  
  const stored = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return { necessary: true, analytics: false, marketing: false };
    }
  }
  
  return { necessary: true, analytics: false, marketing: false };
};

export const setCookiePreferences = (preferences: CookiePreferences): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
};

export const hasConsent = (category: CookieCategory): boolean => {
  const preferences = getCookiePreferences();
  return preferences[category] === true;
};

