import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projektanfrage | BBS - Barrierefreies Bauen und Sanieren',
  description: 'Stellen Sie kostenlos und unverbindlich Ihre Anfrage für barrierefreies Bauen, Badumbau oder Fliesenarbeiten in Berlin & Brandenburg. Wir melden uns schnellstmöglich bei Ihnen.',
  keywords: 'projektanfrage barrierefreies bauen, badumbau anfrage berlin, fliesenarbeiten anfrage brandenburg, kostenlose beratung barrierefreies bauen',
  openGraph: {
    title: 'Projektanfrage | BBS - Barrierefreies Bauen und Sanieren',
    description: 'Stellen Sie kostenlos und unverbindlich Ihre Anfrage für barrierefreies Bauen, Badumbau oder Fliesenarbeiten in Berlin & Brandenburg.',
    url: 'https://www.artdesignbau.de/anfrage',
  },
  alternates: {
    canonical: 'https://www.artdesignbau.de/anfrage',
  },
};

export default function AnfrageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

