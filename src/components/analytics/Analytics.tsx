'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { hasConsent } from '@/lib/cookieConsent';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    clarity?: (...args: unknown[]) => void;
  }
}

const Analytics = () => {
  const pathname = usePathname();
  const [analyticsInitialized, setAnalyticsInitialized] = useState(false);

  // Prüfe Cookie-Consent und initialisiere Analytics
  useEffect(() => {
    const checkAndInitialize = () => {
      if (hasConsent('analytics') && !analyticsInitialized) {
        initializeAnalytics();
        setAnalyticsInitialized(true);
      }
    };

    // Initiale Prüfung
    checkAndInitialize();

    // Event-Listener für Cookie-Consent-Änderungen
    const handleConsentUpdate = () => {
      checkAndInitialize();
    };

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate);
    
    // Storage-Event für Änderungen in anderen Tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie-preferences' || e.key === 'cookie-consent') {
        checkAndInitialize();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('cookieConsentUpdated', handleConsentUpdate);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [analyticsInitialized]);

  // Google Analytics Page View Tracking
  useEffect(() => {
    if (hasConsent('analytics') && typeof window !== 'undefined' && window.gtag) {
      const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-S0CHERQPCK';
      window.gtag('config', gaId, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  const initializeAnalytics = () => {
    if (typeof window === 'undefined') return;

    // Google Analytics initialisieren mit der ID G-S0CHERQPCK
    const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-S0CHERQPCK';
    
    if (!window.gtag) {
      // Google tag (gtag.js) - wie von Google bereitgestellt
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}', {
          anonymize_ip: true,
          cookie_flags: 'SameSite=None;Secure'
        });
      `;
      document.head.appendChild(script2);
    }

    // Microsoft Clarity initialisieren mit der ID udoice912q
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID || 'udoice912q';
    
    if (!window.clarity) {
      const clarityScript = document.createElement('script');
      clarityScript.type = 'text/javascript';
      clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityId}");
      `;
      document.head.appendChild(clarityScript);
    }
  };

  return null;
};

export default Analytics;

