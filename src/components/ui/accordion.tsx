'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// Nach shadcn/ui Accordion (21st.dev), an das BBS-Design angepasst
function Accordion(props: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('surface overflow-hidden rounded-3xl', className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, headingLevel = 3, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger> & { headingLevel?: 2 | 3 }) {
  return (
    <AccordionPrimitive.Header asChild>
      {React.createElement(
        `h${headingLevel}`,
        { className: 'flex' },
        <AccordionPrimitive.Trigger
          data-slot="accordion-trigger"
          className={cn(
            'group flex min-h-16 flex-1 items-center justify-between gap-4 px-5 py-5 text-left text-lg font-black leading-tight text-ink transition hover:text-brand-strong sm:px-7',
            className,
          )}
          {...props}
        >
          {children}
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-ink/6 transition group-data-[state=open]:rotate-180 group-data-[state=open]:bg-brand group-data-[state=open]:text-white" aria-hidden="true">
            <ChevronDown className="h-5 w-5" />
          </span>
        </AccordionPrimitive.Trigger>,
      )}
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn('px-5 pb-6 text-base leading-7 text-ink/80 sm:px-7', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
