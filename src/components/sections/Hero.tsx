import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, Hammer, Phone, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-24 lg:pt-24">
      <div className="absolute inset-x-0 top-0 z-0 h-[78svh] bg-[#f7f8f6] lg:inset-0 lg:h-auto">
        <Image
          src="/hero-bathroom.webp"
          alt="Barrierefreies Badezimmer von BBS Berlin Brandenburg"
          fill
          className="object-cover object-[84%_top] lg:object-cover lg:object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,32,36,0.20)_0%,rgba(23,32,36,0.10)_38%,rgba(23,32,36,0.00)_58%)] lg:hidden" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,248,246,0.00)_0%,rgba(247,248,246,0.10)_50%,rgba(247,248,246,0.96)_100%)] lg:bg-[linear-gradient(90deg,rgba(247,248,246,0.90)_0%,rgba(247,248,246,0.58)_42%,rgba(247,248,246,0.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-[-1px] h-36 bg-gradient-to-t from-[#f7f8f6] via-[#f7f8f6]/76 to-transparent lg:h-48" />
      </div>

      <div className="section-shell relative z-10 grid flex-1 items-end gap-10 pb-8 pt-10 lg:items-center lg:pb-6 lg:pt-0">
        <div className="max-w-6xl">
          <h1 className="display-title text-[clamp(2.45rem,10.5vw,3.6rem)] font-black text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.45)] reveal-up delay-1 lg:text-[clamp(2.2rem,5.2vw,5.2rem)] lg:text-[#172024] lg:drop-shadow-none">
            <span className="block whitespace-nowrap lg:inline">Barrierefrei umbauen.</span>
            <span className="block lg:inline"> Ohne Kompromiss.</span>
          </h1>
          <p className="mt-6 hidden max-w-3xl text-base leading-7 text-[#172024]/72 reveal-up delay-2 sm:text-lg lg:block">
            Meisterbetrieb für barrierefreie Bäder, Fliesenarbeiten und Sanierung. Wir planen präzise,
            bauen sauber und machen Ihr Zuhause sicherer.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row reveal-up delay-3">
            <Link
              href="/anfrage"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#d63d32] px-7 py-4 text-base font-black text-white shadow-[0_18px_44px_rgba(214,61,50,0.28)] transition hover:-translate-y-1 hover:bg-[#b93028]"
            >
              <Hammer className="h-5 w-5" />
              Kostenfreie Anfrage
            </Link>
            <Link
              href="tel:+493092371277"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#172024]/15 bg-white/70 px-7 py-4 text-base font-black text-[#172024] transition hover:-translate-y-1 hover:bg-white"
            >
              <Phone className="h-5 w-5" />
              Direkt anrufen
            </Link>
          </div>

          <div className="mx-auto mt-8 grid w-full max-w-xl grid-cols-3 gap-1.5 reveal-up delay-3 sm:mx-0 sm:gap-2">
            {[
              ['22+', 'Jahre Erfahrung'],
              ['150+', 'Projekte realisiert'],
              ['Regional', 'Berlin & Brandenburg'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#172024]/12 bg-white/78 p-2.5 text-center shadow-[0_24px_80px_rgba(23,32,36,0.08)] sm:p-4 sm:text-left">
                <div className="text-lg font-black text-[#172024] sm:text-3xl">{value}</div>
                <div className="mt-1 whitespace-nowrap text-[0.48rem] font-bold uppercase tracking-[0.01em] text-[#6f8f9a] sm:text-[0.68rem] sm:tracking-[0.08em]">{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="section-shell relative z-10 pb-5 lg:pb-6">
        <div className="flex flex-col gap-4 border-t border-[#172024]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="https://share.google/1o8Gsmu8uAAyrGKVm"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 text-[#172024] transition hover:text-[#d63d32] sm:flex"
          >
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-[#d63d32] text-[#d63d32]" />
            ))}
            <span className="text-sm font-bold">Google 5,0</span>
          </a>
          <Link href="#services" className="inline-flex items-center justify-center gap-2 text-center text-sm font-black uppercase tracking-[0.14em] text-[#172024] sm:justify-start sm:text-left">
            Leistungen ansehen
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
