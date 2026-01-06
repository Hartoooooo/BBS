'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Hammer } from 'lucide-react';
import { useFullscreen } from '@/contexts/FullscreenContext';

const StickyAnfrageButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const { isFullscreen } = useFullscreen();

  // Prüfe ob wir auf Impressum oder Datenschutz Seite sind
  const isExcludedPage = pathname === '/impressum' || pathname === '/datenschutz';

  useEffect(() => {
    // Wenn Vollbildmodus aktiv ist, Button sofort ausblenden
    if (isFullscreen) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Hero Sektion (erste 100vh)
      const heroHeight = windowHeight;
      const isCurrentlyInHero = scrollY < heroHeight;
      // Footer Sektion - präzisere Erkennung
      // Suche nach dem Footer-Element und verwende dessen Position
      const footerElement = document.querySelector('footer');
      let isCurrentlyInFooter = false;
      
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        const footerTop = scrollY + footerRect.top;
        
        // Button ist im Footer wenn der Viewport-Bottom im Footer-Bereich ist
        const viewportBottom = scrollY + windowHeight;
        isCurrentlyInFooter = viewportBottom > footerTop;
      } else {
        // Fallback: letzte 30% der Seite als Footer-Bereich
        const footerThreshold = documentHeight - (windowHeight * 0.3);
        isCurrentlyInFooter = scrollY > footerThreshold;
      }

      // Button ist sichtbar wenn:
      // 1. Nicht auf ausgeschlossenen Seiten
      // 2. Nicht in Hero Sektion
      // 3. Nicht im Footer
      // 4. Nicht im Vollbildmodus
      const shouldBeVisible = !isExcludedPage && !isCurrentlyInHero && !isCurrentlyInFooter && !isFullscreen;
      setIsVisible(shouldBeVisible);
    };

    // Initial check
    handleScroll();

    // Event listener für Scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isExcludedPage, isFullscreen]);

  // Button nicht rendern wenn nicht sichtbar
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link 
        href="/anfrage"
        className="group bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Kostenfreie Anfrage stellen"
      >
        <Hammer className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className="ml-2 font-semibold text-sm hidden sm:block">
          Kostenfreie Anfrage
        </span>
      </Link>
    </div>
  );
};

export default StickyAnfrageButton;