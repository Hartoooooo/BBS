import Link from 'next/link';
import Image from 'next/image';
import { Clock, Hammer, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#172024] py-12 text-white">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/bbs-logo-transparent.png" alt="BBS Logo" width={48} height={48} className="h-12 w-12 object-contain" />
              <span>
                <span className="block text-2xl font-black leading-none">BBS</span>
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-[#d8ebe6]">Barrierefreies Bauen</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-white/64">
              Meisterbetrieb für barrierefreies Bauen, Sanieren, Fliesenarbeiten und Badumbau in Berlin & Brandenburg.
            </p>
            <Link href="/anfrage" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d63d32] px-6 py-3 font-black text-white transition hover:bg-[#b93028]">
              <Hammer className="h-5 w-5" />
              Kostenfreie Anfrage
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[#d8ebe6]">Navigation</h3>
            <nav className="mt-5 grid gap-3 text-white/70">
              <Link href="#services" className="hover:text-white">Leistungen</Link>
              <Link href="#projects" className="hover:text-white">Projekte</Link>
              <Link href="#about" className="hover:text-white">Über uns</Link>
              <Link href="#faq" className="hover:text-white">FAQ</Link>
              <Link href="#contact" className="hover:text-white">Kontakt</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[#d8ebe6]">Zeiten</h3>
            <div className="mt-5 flex gap-3 text-white/70">
              <Clock className="h-5 w-5 flex-none text-[#d63d32]" />
              <span>Montag - Freitag<br />7.00-16.00 Uhr</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[#d8ebe6]">Kontakt</h3>
            <div className="mt-5 grid gap-4 text-white/70">
              <a href="tel:+493092371277" className="flex gap-3 hover:text-white">
                <Phone className="h-5 w-5 flex-none text-[#d63d32]" />
                +49 (0) 30 923 712 77
              </a>
              <a href="mailto:service@b-b-s.berlin" className="flex gap-3 hover:text-white">
                <Mail className="h-5 w-5 flex-none text-[#d63d32]" />
                service@b-b-s.berlin
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=BBS+Barrierefreies+Bauen+und+Sanieren+Schöneiche+bei+Berlin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 hover:text-white"
              >
                <MapPin className="h-5 w-5 flex-none text-[#d63d32]" />
                Schöneiche bei Berlin
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 BBS Björn Hartmann</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-white/50">Umsetzung von Neoklar</p>
      </div>
    </footer>
  );
};

export default Footer;
