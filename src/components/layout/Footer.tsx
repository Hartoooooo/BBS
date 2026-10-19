import Link from 'next/link';
import Image from 'next/image';
import { Clock, Hammer, Mail, MapPin, Phone } from 'lucide-react';
import A11yToolbar from '@/components/a11y/A11yToolbar';
import { badLinks, leistungLinks, site } from '@/content/site';

const Footer = () => {
  return (
    <footer className="bg-ink py-14 text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/bbs-logo-transparent.png" alt="" width={48} height={48} className="h-12 w-12 object-contain" />
              <span>
                <span className="block text-2xl font-black leading-none">BBS</span>
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-mint">Barrierefreies Bauen und Sanieren</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-white/80">
              Meisterbetrieb für barrierefreie Badumbauten, Badsanierung und Fliesenarbeiten. Seit {site.foundingYear} in ganz
              Berlin und Brandenburg im Einsatz.
            </p>
            <Link href="/anfrage" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-6 font-black text-white transition hover:bg-brand-strong">
              <Hammer className="h-5 w-5" aria-hidden="true" />
              Kostenfreie Anfrage
            </Link>
          </div>

          <nav aria-label="Barrierefreies Bad">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-mint">Barrierefreies Bad</h2>
            <ul className="mt-5 grid gap-3 text-white/80">
              {badLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Leistungen">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-mint">Leistungen</h2>
            <ul className="mt-5 grid gap-3 text-white/80">
              {leistungLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-mint">Kontakt</h2>
            <address className="mt-5 grid gap-4 not-italic text-white/80">
              <a href={site.phoneHref} className="flex gap-3 hover:text-white">
                <Phone className="h-5 w-5 flex-none text-brand" aria-hidden="true" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white">
                <Mail className="h-5 w-5 flex-none text-brand" aria-hidden="true" />
                {site.email}
              </a>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white">
                <MapPin className="h-5 w-5 flex-none text-brand" aria-hidden="true" />
                <span>
                  {site.street}
                  <br />
                  {site.postalCode} {site.city}
                  <span className="sr-only"> (öffnet Google Maps in neuem Tab)</span>
                </span>
              </a>
              <p className="flex gap-3">
                <Clock className="h-5 w-5 flex-none text-brand" aria-hidden="true" />
                {site.hours}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-3 text-ink sm:inline-flex sm:items-center sm:gap-3">
          <p className="px-1 pb-2 text-sm font-bold sm:pb-0">Schriftgröße & Kontrast:</p>
          <A11yToolbar />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/75 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <ul className="flex flex-wrap gap-4">
            <li><Link href="/impressum" className="hover:text-white">Impressum</Link></li>
            <li><Link href="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
            <li><Link href="/cookies" className="hover:text-white">Cookies</Link></li>
            <li><Link href="/barrierefreiheit" className="hover:text-white">Barrierefreiheit</Link></li>
          </ul>
        </div>

        <p className="mt-6 text-center text-sm text-white/75">Umsetzung von Neoklar</p>
      </div>
    </footer>
  );
};

export default Footer;
