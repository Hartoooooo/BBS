import Link from 'next/link';
import { CheckCircle2, Phone } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/content/site';

export const metadata = buildMetadata({
  title: 'Vielen Dank für Ihre Anfrage | BBS',
  description: 'Ihre Anfrage ist bei BBS eingegangen. Wir melden uns schnellstmöglich bei Ihnen.',
  path: '/anfrage/danke',
  noindex: true,
});

export default function DankePage() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="page-pattern flex min-h-[80vh] items-center pb-20 pt-32">
        <div className="section-shell max-w-2xl text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-brand" aria-hidden="true" />
          <h1 className="mt-6 text-4xl font-black leading-tight text-ink sm:text-5xl">Vielen Dank für Ihre Anfrage!</h1>
          <p className="body-copy mt-5">
            Ihre Nachricht ist bei uns eingegangen. Wir melden uns schnellstmöglich bei Ihnen, um einen
            Termin für die kostenlose Beratung vor Ort zu vereinbaren.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="inline-flex min-h-14 items-center justify-center rounded-full bg-ink px-7 font-black text-white">
              Zur Startseite
            </Link>
            <a href={site.phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-7 font-black text-ink">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {site.phone}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
