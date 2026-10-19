'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowRight, ChevronDown, Hammer, Menu, Phone, X } from 'lucide-react';
import A11yToolbar from '@/components/a11y/A11yToolbar';
import { badLinks, leistungLinks, site, type NavLink } from '@/content/site';
import { cn } from '@/lib/utils';

const menus: { label: string; links: NavLink[] }[] = [
  { label: 'Barrierefreies Bad', links: badLinks },
  { label: 'Leistungen', links: leistungLinks },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-2xl border px-3 py-2 transition-all duration-300 sm:px-5',
          isScrolled
            ? 'border-black/10 bg-white/95 shadow-[0_18px_60px_rgba(23,32,36,0.12)] backdrop-blur-2xl'
            : 'border-white/20 bg-white/85 backdrop-blur-xl',
        )}
      >
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image src="/bbs-logo-transparent.png" alt="" width={46} height={46} className="h-11 w-11 object-contain" priority />
          <span className="min-w-0">
            <span className="block text-xl font-black leading-none tracking-tight text-ink">BBS</span>
            <span className="block whitespace-nowrap text-[0.7rem] font-bold uppercase tracking-[0.06em] text-muted sm:tracking-[0.12em] lg:hidden min-[1400px]:block">
              Barrierefreies Bauen
            </span>
            <span className="sr-only"> – zur Startseite</span>
          </span>
        </Link>

        <NavigationMenu.Root aria-label="Hauptnavigation" className="nav-desktop relative hidden lg:block">
          <NavigationMenu.List className="flex items-center gap-1">
            {menus.map((menu) => (
              <NavigationMenu.Item key={menu.label}>
                <NavigationMenu.Trigger className="group inline-flex min-h-11 items-center gap-1 whitespace-nowrap rounded-full px-3 text-[0.95rem] font-bold text-ink/80 transition hover:bg-ink hover:text-white data-[state=open]:bg-ink data-[state=open]:text-white">
                  {menu.label}
                  <ChevronDown className="h-4 w-4 transition group-data-[state=open]:rotate-180" aria-hidden="true" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute left-0 top-full mt-3 w-[30rem] rounded-3xl border border-ink/10 bg-white p-3 shadow-[0_24px_80px_rgba(23,32,36,0.16)]">
                  <ul className="grid gap-1">
                    {menu.links.map((link) => (
                      <li key={link.href}>
                        <NavigationMenu.Link asChild active={pathname === link.href}>
                          <Link href={link.href} className="block rounded-2xl p-4 transition hover:bg-paper data-[active]:bg-paper">
                            <span className="block font-black text-ink">{link.label}</span>
                            <span className="mt-1 block text-sm leading-6 text-ink/75">{link.description}</span>
                          </Link>
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link href="/#projekte" className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-3 text-[0.95rem] font-bold text-ink/80 transition hover:bg-ink hover:text-white">
                  Projekte
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link href="/#kontakt" className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-3 text-[0.95rem] font-bold text-ink/80 transition hover:bg-ink hover:text-white">
                  Kontakt
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="flex items-center gap-1 sm:gap-2">
          <A11yToolbar className="nav-desktop hidden xl:flex" />
          <a
            href={site.phoneHref}
            className="hidden min-h-11 items-center gap-2 whitespace-nowrap rounded-full px-3 text-sm font-black text-ink transition hover:bg-ink/8 md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden 2xl:inline">{site.phone}</span>
            <span className="2xl:hidden">Anrufen</span>
          </a>
          <Link
            href="/anfrage"
            className="hidden min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-brand px-5 text-sm font-black text-white shadow-[0_14px_34px_rgba(214,61,50,0.28)] transition hover:-translate-y-0.5 hover:bg-brand-strong sm:inline-flex"
          >
            <Hammer className="h-4 w-4" aria-hidden="true" />
            Kostenfreie Anfrage
          </Link>

          <a
            href={site.phoneHref}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-ink transition hover:bg-ink hover:text-white md:hidden"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Anrufen: {site.phone}</span>
          </a>
          <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <Dialog.Trigger className="nav-burger inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-ink transition hover:bg-ink hover:text-white lg:hidden">
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Menü öffnen</span>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm" />
              <Dialog.Content className="fixed inset-x-3 bottom-3 top-3 z-50 flex flex-col overflow-y-auto rounded-3xl bg-paper p-5 shadow-2xl">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-xl font-black text-ink">Menü</Dialog.Title>
                  <Dialog.Close className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-ink">
                    <X className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">Menü schließen</span>
                  </Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">Navigation und Darstellungsoptionen</Dialog.Description>
                <nav aria-label="Mobile Navigation" className="mt-4 grid gap-6">
                  {menus.map((menu) => (
                    <div key={menu.label}>
                      <p className="eyebrow">{menu.label}</p>
                      <ul className="mt-3 grid gap-2">
                        {menu.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              aria-current={pathname === link.href ? 'page' : undefined}
                              className="group flex min-h-14 items-center justify-between rounded-2xl border border-black/10 bg-white px-5 py-3 text-lg font-black text-ink transition hover:border-brand"
                            >
                              {link.label}
                              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <ul className="grid grid-cols-2 gap-2">
                    <li>
                      <Link href="/#projekte" className="flex min-h-14 items-center justify-center rounded-2xl border border-black/10 bg-white font-black text-ink">Projekte</Link>
                    </li>
                    <li>
                      <Link href="/#kontakt" className="flex min-h-14 items-center justify-center rounded-2xl border border-black/10 bg-white font-black text-ink">Kontakt</Link>
                    </li>
                  </ul>
                </nav>
                <div className="mt-6 rounded-2xl border border-black/10 bg-white p-3">
                  <p className="px-1 pb-2 text-sm font-bold text-ink">Schriftgröße & Kontrast</p>
                  <A11yToolbar />
                </div>
                <div className="mt-6 grid gap-2">
                  <a href={site.phoneHref} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-ink/15 bg-white font-black text-ink">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    {site.phone}
                  </a>
                  <Link href="/anfrage" className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-brand font-black text-white">
                    <Hammer className="h-5 w-5" aria-hidden="true" />
                    Kostenfreie Anfrage
                  </Link>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
};

export default Header;
