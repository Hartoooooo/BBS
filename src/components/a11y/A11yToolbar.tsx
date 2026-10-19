'use client';

import { useEffect, useState } from 'react';
import { Contrast } from 'lucide-react';
import { cn } from '@/lib/utils';

const fontSteps = [
  { value: 'base', label: 'A', title: 'Normale Schriftgröße' },
  { value: 'lg', label: 'A+', title: 'Größere Schrift' },
  { value: 'xl', label: 'A++', title: 'Sehr große Schrift' },
] as const;

type FontValue = (typeof fontSteps)[number]['value'];

const store = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Speicher nicht verfügbar – Einstellung gilt nur für diese Seite
  }
};

export default function A11yToolbar({ className }: { className?: string }) {
  const [font, setFont] = useState<FontValue>('base');
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setFont((root.dataset.font as FontValue) ?? 'base');
    setHighContrast(root.dataset.contrast === 'high');
  }, []);

  const changeFont = (value: FontValue) => {
    const root = document.documentElement;
    if (value === 'base') delete root.dataset.font;
    else root.dataset.font = value;
    store('bbs-font', value);
    setFont(value);
  };

  const toggleContrast = () => {
    const root = document.documentElement;
    const next = !highContrast;
    if (next) root.dataset.contrast = 'high';
    else delete root.dataset.contrast;
    store('bbs-contrast', next ? 'high' : 'normal');
    setHighContrast(next);
  };

  return (
    <div className={cn('flex items-center gap-1', className)} role="group" aria-label="Darstellung anpassen">
      {fontSteps.map((step) => (
        <button
          key={step.value}
          type="button"
          onClick={() => changeFont(step.value)}
          aria-pressed={font === step.value}
          title={step.title}
          className={cn(
            'inline-flex h-11 min-w-11 items-center justify-center rounded-full px-2 text-sm font-black transition',
            font === step.value ? 'bg-ink text-white' : 'text-ink hover:bg-ink/8',
          )}
        >
          <span aria-hidden="true">{step.label}</span>
          <span className="sr-only">{step.title}</span>
        </button>
      ))}
      <button
        type="button"
        onClick={toggleContrast}
        aria-pressed={highContrast}
        title="Hoher Kontrast"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-full transition',
          highContrast ? 'bg-ink text-white' : 'text-ink hover:bg-ink/8',
        )}
      >
        <Contrast className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Hoher Kontrast</span>
      </button>
    </div>
  );
}
