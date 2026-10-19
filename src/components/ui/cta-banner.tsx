import Link from 'next/link';
import { Hammer, Phone } from 'lucide-react';
import { site } from '@/content/site';

// Nach dem 21st.dev-CTA-Banner
export default function CtaBanner({
  title = 'Kostenlose Beratung vor Ort',
  text = 'Wir kommen zu Ihnen, messen auf, prüfen die Machbarkeit und erklären Ihnen, welche Förderung infrage kommt – unverbindlich.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="section-shell py-16">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-white sm:px-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/30 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-3xl">
          <h2 id="cta-title" className="text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-white/85">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/anfrage" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand px-7 font-black text-white transition hover:bg-brand-strong">
              <Hammer className="h-5 w-5" aria-hidden="true" />
              Kostenfreie Anfrage
            </Link>
            <a href={site.phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/30 px-7 font-black text-white transition hover:bg-white hover:text-ink">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
