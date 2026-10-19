import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Kostenlose Anfrage – barrierefreier Badumbau | BBS Berlin',
  description:
    'Stellen Sie kostenlos und unverbindlich Ihre Anfrage für ein barrierefreies Bad, Badsanierung oder Fliesenarbeiten in Berlin & Brandenburg. Wir melden uns schnellstmöglich.',
  path: '/anfrage',
});

export default function AnfrageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
