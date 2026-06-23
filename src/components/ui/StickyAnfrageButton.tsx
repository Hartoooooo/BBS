'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Hammer } from 'lucide-react';
import { useFullscreen } from '@/contexts/FullscreenContext';

const StickyAnfrageButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const { isFullscreen } = useFullscreen();
  const isExcludedPage = pathname === '/impressum' || pathname === '/datenschutz';

  useEffect(() => {
    if (isFullscreen) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const footerElement = document.querySelector('footer');
      const inHero = scrollY < windowHeight * 0.75;
      const inFooter = footerElement ? scrollY + windowHeight > scrollY + footerElement.getBoundingClientRect().top : false;
      setIsVisible(!isExcludedPage && !inHero && !inFooter && !isFullscreen);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isExcludedPage, isFullscreen]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:left-auto sm:right-6">
      <Link
        href="/anfrage"
        className="mx-auto flex min-h-14 max-w-md items-center justify-center gap-2 rounded-full bg-[#d63d32] px-6 py-4 font-black text-white shadow-[0_18px_44px_rgba(214,61,50,0.34)] transition hover:-translate-y-1 hover:bg-[#b93028] sm:w-auto"
        aria-label="Kostenfreie Anfrage stellen"
      >
        <Hammer className="h-5 w-5" />
        Kostenfreie Anfrage
      </Link>
    </div>
  );
};

export default StickyAnfrageButton;
