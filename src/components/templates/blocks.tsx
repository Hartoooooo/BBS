import type { ReactNode } from 'react';
import { Info } from 'lucide-react';
import ProcessTimeline from '@/components/ui/process-timeline';
import { umbauProcess } from '@/content/process';

// Hervorgehobener Hinweis innerhalb des Fließtexts
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="not-prose my-8 rounded-3xl border-l-4 border-brand bg-white p-6 shadow-[0_18px_50px_rgba(23,32,36,0.06)]">
      <p className="flex items-center gap-2 text-lg font-black text-ink">
        <Info className="h-5 w-5 text-brand" aria-hidden="true" />
        {title}
      </p>
      <div className="mt-2 text-base leading-7 text-ink/82">{children}</div>
    </aside>
  );
}

// Ablauf in fünf Schritten, bricht aus der Textspalte aus
export function ProcessSection({ title = 'So läuft Ihr Umbau ab' }: { title?: string }) {
  return (
    <section aria-labelledby="process-title" className="relative left-1/2 my-12 w-[min(1180px,calc(100vw-32px))] -translate-x-1/2">
      <h2 id="process-title" className="text-[clamp(1.75rem,3vw,2.4rem)] font-black leading-tight text-ink">{title}</h2>
      <ProcessTimeline steps={umbauProcess} className="mt-6" />
    </section>
  );
}

export const foerderStand = 'Stand: Oktober 2026';
