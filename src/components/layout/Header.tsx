'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Hammer, Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Leistungen', href: '#services' },
  { name: 'Projekte', href: '#projects' },
  { name: 'Bewertungen', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontakt', href: '#contact' },
];

const mobileNavigation = navigation.filter((item) => item.name !== 'Bewertungen');

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between border px-3 py-2 transition-all duration-300 sm:px-5 ${
          isScrolled
            ? 'rounded-2xl border-black/10 bg-white/86 shadow-[0_18px_60px_rgba(23,32,36,0.12)] backdrop-blur-2xl'
            : 'rounded-2xl border-white/20 bg-white/62 backdrop-blur-xl'
        }`}
        aria-label="Hauptnavigation"
      >
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
          <Image
            src="/bbs-logo-transparent.png"
            alt="BBS Logo"
            width={46}
            height={46}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="min-w-0">
            <span className="block text-xl font-black leading-none tracking-tight text-[#172024]">BBS</span>
            <span className="block max-w-[150px] truncate text-[11px] font-bold uppercase tracking-[0.12em] text-[#6f8f9a] sm:max-w-none">
              Barrierefreies Bauen
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-[#172024]/72 transition hover:bg-[#172024] hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/anfrage"
            className="hidden items-center gap-2 rounded-full bg-[#d63d32] px-5 py-3 text-sm font-black text-white shadow-[0_14px_34px_rgba(214,61,50,0.28)] transition hover:-translate-y-0.5 hover:bg-[#b93028] sm:inline-flex"
          >
            <Hammer className="h-4 w-4" />
            Kostenfreie Anfrage
          </Link>
          <button
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#172024] transition hover:bg-[#172024] hover:text-white lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[-1] bg-[#172024]/30 backdrop-blur-sm transition-opacity lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed bottom-3 left-3 right-3 top-20 z-50 flex flex-col rounded-3xl border border-white/40 bg-[#f7f8f6] p-5 shadow-2xl transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
        }`}
      >
        <div className="grid gap-2">
          {mobileNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="group flex min-h-16 items-center justify-between rounded-2xl border border-black/10 bg-white px-5 py-4 text-lg font-black text-[#172024] transition hover:border-[#d63d32] hover:text-[#d63d32]"
            >
              {item.name}
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
        <Link
          href="/anfrage"
          onClick={closeMenu}
          className="mt-auto flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-[#d63d32] px-5 py-4 text-lg font-black text-white"
        >
          <Hammer className="h-5 w-5" />
          Kostenfreie Anfrage
        </Link>
      </div>
    </header>
  );
};

export default Header;
