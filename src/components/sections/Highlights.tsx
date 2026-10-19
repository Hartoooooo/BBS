import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeEuro, ShowerHead } from 'lucide-react';
import { images } from '@/content/images';

// Feature-Split nach 21st.dev-Muster: zwei Kernthemen mit Bild und Link
const Highlights = () => {
  return (
    <section aria-labelledby="highlights-title" className="pb-20 sm:pb-28">
      <div className="section-shell">
        <h2 id="highlights-title" className="sr-only">Unsere Schwerpunkte</h2>
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="surface flex flex-col overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[16/9]">
              <Image src={images.badBeispiel.src} alt={images.badBeispiel.alt} fill className="object-cover" sizes="(min-width: 1024px) 580px, 100vw" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <ShowerHead className="h-8 w-8 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-3xl font-black leading-tight text-ink">Badewanne raus, Dusche rein</h3>
              <p className="mt-3 text-lg leading-8 text-ink/80">
                Der Wannenrand ist die häufigste Stolperfalle im Bad. Wir ersetzen ihn durch eine bodengleiche Dusche mit
                rutschhemmenden Fliesen, Griff und Klappsitz – sauber und meist in wenigen Arbeitstagen.
              </p>
              <Link href="/badewanne-zur-dusche" className="mt-auto inline-flex min-h-12 items-center gap-2 pt-6 font-black text-brand-strong hover:underline">
                Mehr zum Umbau von Wanne zur Dusche
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-[2rem] bg-ink text-white">
            <div className="relative aspect-[16/9]">
              <Image src={images.griffe.src} alt={images.griffe.alt} fill className="object-cover opacity-85" sizes="(min-width: 1024px) 580px, 100vw" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <BadgeEuro className="h-8 w-8 text-mint" aria-hidden="true" />
              <h3 className="mt-4 text-3xl font-black leading-tight">Bis zu 4.180 € Zuschuss</h3>
              <p className="mt-3 text-lg leading-8 text-white/85">
                Mit Pflegegrad bezuschusst die Pflegekasse Ihren barrierefreien Badumbau. Wir erstellen das Angebot so, dass Sie
                es direkt einreichen können – vor Baubeginn.
              </p>
              <Link href="/foerderung" className="mt-auto inline-flex min-h-12 items-center gap-2 pt-6 font-black text-mint hover:underline">
                Förderung verständlich erklärt
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
