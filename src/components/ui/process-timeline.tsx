import { cn } from '@/lib/utils';

export type ProcessStep = { title: string; text: string };

// Nach dem 21st.dev-Timeline-Muster: nummerierte Schritte mit Verbindungslinie
export default function ProcessTimeline({ steps, className }: { steps: ProcessStep[]; className?: string }) {
  return (
    <ol className={cn('relative grid gap-4 md:grid-cols-5', className)}>
      {steps.map((step, index) => (
        <li key={step.title} className="surface relative rounded-3xl p-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-lg font-black text-white" aria-hidden="true">
            {index + 1}
          </span>
          <h3 className="mt-4 text-lg font-black leading-tight text-ink">
            <span className="sr-only">Schritt {index + 1}: </span>
            {step.title}
          </h3>
          <p className="mt-2 text-base leading-7 text-ink/78">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
