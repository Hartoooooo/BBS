import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";
import CookieBanner from "@/components/ui/CookieBanner";
import Analytics from "@/components/analytics/Analytics";
import { FullscreenProvider } from "@/contexts/FullscreenContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.artdesignbau.de'),
  title: "Barrierefreies Bauen Berlin | Meisterbetrieb BBS – Badumbau & Fliesenarbeiten",
  description: "Meisterbetrieb für barrierefreies Bauen & Badsanierung in Berlin und Brandenburg. Bodengleiche Duschen, Fliesenarbeiten, KfW-förderfähig. Über 22 Jahre Erfahrung – jetzt kostenlose Beratung anfragen!",
  keywords: "barrierefreies bad berlin, barrierefreier badumbau berlin, bodengleiche dusche berlin, fliesenleger berlin, badsanierung berlin, badumbau berlin, barrierefreie badsanierung berlin, behindertengerechtes bad berlin, fliesenleger meisterbetrieb berlin, badumbau kfw förderung berlin, rutschfeste fliesen berlin, altersgerechter badumbau berlin, barrierefreie dusche berlin, seniorenbad umbau berlin, fliesenleger schöneiche, badsanierung schöneiche, bad umbau brandenburg, barrierefreies bad brandenburg, fliesenleger brandenburg, fliesenleger strausberg, barrierefreies bauen west-berlin, barrierefreies bauen charlottenburg, barrierefreies bauen und sanieren, wasserschadensanierung berlin, trockenbau berlin, bauwerksabdichtung berlin, nasszellenabdichtung berlin",
  authors: [{ name: "BBS Björn Hartmann" }],
  creator: "BBS Barrierefreies Bauen und Sanieren",
  publisher: "BBS Björn Hartmann",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.artdesignbau.de',
    siteName: 'BBS - Barrierefreies Bauen und Sanieren',
    title: 'Barrierefreies Bauen Berlin | Meisterbetrieb BBS – Badumbau & Fliesenarbeiten',
    description: 'Meisterbetrieb für barrierefreies Bauen & Badsanierung in Berlin und Brandenburg. Bodengleiche Duschen, Fliesenarbeiten, KfW-förderfähig. Über 22 Jahre Erfahrung.',
    images: [
      {
        url: '/hero-bathroom.webp',
        width: 1200,
        height: 630,
        alt: 'BBS Barrierefreies Bauen und Sanieren',
      },
      {
        url: '/LOGO.webp',
        width: 512,
        height: 512,
        alt: 'BBS Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barrierefreies Bauen Berlin | Meisterbetrieb BBS – Badumbau & Fliesenarbeiten',
    description: 'Meisterbetrieb für barrierefreies Bauen & Badsanierung in Berlin und Brandenburg. Bodengleiche Duschen, KfW-förderfähig. Über 22 Jahre Erfahrung.',
    images: ['/hero-bathroom.webp'],
  },
  alternates: {
    canonical: 'https://www.artdesignbau.de',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FullscreenProvider>
        {children}
        <CookieBanner />
        <Analytics />
        </FullscreenProvider>
      </body>
    </html>
  );
}
