import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, Hammer, Phone, Star } from 'lucide-react';
import { site } from '@/content/site';

const stats = [
  ['Seit 2003', 'Meisterbetrieb'],
  ['150+', 'Projekte realisiert'],
];

const Hero = () => {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-24">
      <div className="absolute inset-x-0 top-0 z-0 h-[72svh] bg-paper lg:inset-0 lg:h-auto">
        <Image
          src="/hero-bathroom.webp"
          alt="Helles barrierefreies Badezimmer mit bodengleicher Dusche"
          fill
          className="object-cover object-[84%_top] lg:object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,248,246,0.9)_0%,rgba(247,248,246,0.55)_40%,rgba(247,248,246,0.96)_100%)] lg:bg-[linear-gradient(90deg,rgba(247,248,246,0.96)_0%,rgba(247,248,246,0.82)_45%,rgba(247,248,246,0.1)_100%)]" />
        <div className="absolute inset-x-0 bottom-[-1px] h-24 bg-gradient-to-t from-paper to-transparent lg:h-48" />
      </div>

      <div className="section-shell relative z-10 flex flex-1 items-end pb-10 pt-8 lg:items-center">
        <div className="w-full max-w-5xl">
          <p className="eyebrow reveal-up">Meisterbetrieb für Berlin & Brandenburg</p>
          <h1 id="hero-title" className="mt-5 text-[clamp(2.4rem,6vw,5rem)] font-black leading-[0.98] text-ink reveal-up delay-1">
            <span className="block lg:whitespace-nowrap">Barrierefrei umbauen.</span>
            <span className="block">Ohne Kompromiss.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/85 reveal-up delay-2">
            Bodengleiche Dusche statt Badewanne, mehr Platz, sichere Griffe: Wir planen und bauen Ihr Bad so, dass Sie sich
            darin sicher fühlen – und helfen Ihnen beim Zuschuss der Pflegekasse.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row reveal-up delay-3">
            <Link
              href="/anfrage"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-black text-white shadow-[0_18px_44px_rgba(214,61,50,0.28)] transition hover:-translate-y-1 hover:bg-brand-strong"
            >
              <Hammer className="h-5 w-5" aria-hidden="true" />
              Kostenlose Beratung anfragen
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-7 text-base font-black text-ink transition hover:-translate-y-1 hover:border-ink"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {site.phone}
            </a>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-2 reveal-up delay-3 sm:max-w-md">
            {stats.map(([value, label]) => (
              <li key={label} className="rounded-2xl border border-ink/12 bg-white/90 p-3 shadow-[0_24px_80px_rgba(23,32,36,0.08)] sm:p-4">
                <span className="block text-base font-black text-ink sm:text-2xl">{value}</span>
                <span className="mt-1 block text-xs font-bold text-muted sm:text-sm">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-shell relative z-10 pb-6">
        <div className="flex flex-col gap-4 border-t border-ink/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-ink transition hover:text-brand-strong"
          >
            <span className="flex" aria-hidden="true">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-brand text-brand" />
              ))}
            </span>
            <span className="text-sm font-bold">5,0 Sterne bei Google – Bewertungen ansehen</span>
            <span className="sr-only">(öffnet in neuem Tab)</span>
          </a>
          <Link href="#leistungen" className="inline-flex min-h-11 items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-ink">
            Leistungen ansehen
            <ArrowDown className="h-4 w-4 motion-safe:animate-bounce" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
