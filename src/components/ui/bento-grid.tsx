import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type BentoItem = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  wide?: boolean;
};

// Nach dem 21st.dev-Bento-Grid: verlinkte Kacheln mit Bild, voll per Tastatur erreichbar
export default function BentoGrid({ items, className }: { items: BentoItem[]; className?: string }) {
  return (
    <ul className={cn('grid gap-4 md:grid-cols-3', className)}>
      {items.map((item) => (
        <li key={item.href} className={cn('group relative min-h-[280px] overflow-hidden rounded-[1.75rem] bg-ink', item.wide && 'md:col-span-2')}>
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            className="object-cover opacity-90 transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
            sizes={item.wide ? '(min-width: 768px) 760px, 100vw' : '(min-width: 768px) 380px, 100vw'}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,32,36,0.1),rgba(23,32,36,0.9))]" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <h3 className="text-2xl font-black leading-tight">
              <Link href={item.href} className="after:absolute after:inset-0 focus-visible:outline-none after:rounded-[1.75rem] focus-visible:after:outline focus-visible:after:outline-4 focus-visible:after:outline-brand">
                {item.title}
              </Link>
            </h3>
            <p className="mt-2 max-w-md text-base leading-7 text-white/90">{item.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-black uppercase tracking-[0.1em]" aria-hidden="true">
              Mehr erfahren <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
