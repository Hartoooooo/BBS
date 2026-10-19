'use client';

import { useState, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { Pause, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  repeat?: number;
  label: string;
}

// Nach Magic UI Marquee (21st.dev), ergänzt um Pause-Schalter (WCAG 2.2.2)
export function Marquee({ className, children, repeat = 2, label, ...props }: MarqueeProps) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative">
      <div
        {...props}
        className={cn(
          'group flex gap-(--gap) overflow-hidden py-2 [--duration:60s] [--gap:1rem] motion-reduce:overflow-x-auto',
          className,
        )}
      >
        {Array.from({ length: repeat }).map((_, index) => (
          <div
            key={index}
            aria-hidden={index > 0 ? true : undefined}
            inert={index > 0 ? true : undefined}
            className={cn(
              'flex shrink-0 justify-around gap-(--gap) animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none',
              paused && '[animation-play-state:paused]',
              index > 0 && 'motion-reduce:hidden',
            )}
          >
            {children}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/15 bg-white px-4 text-sm font-bold text-ink transition hover:border-brand motion-reduce:hidden"
        aria-pressed={paused}
      >
        {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
        {paused ? `${label} fortsetzen` : `${label} anhalten`}
      </button>
    </div>
  );
}
