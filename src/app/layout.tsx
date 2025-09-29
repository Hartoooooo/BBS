import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BBS - Barrierefreies Bauen und Sanieren | Bad Umbau Berlin Brandenburg | Fliesenleger Schöneiche",
  description: "Fliesenleger & Badumbau Experte in Schöneiche, Berlin, Brandenburg & Strausberg. Spezialist für barrierefreies Bauen in West-Berlin/Charlottenburg. Bad Sanierung Berlin, Bad Umbau Brandenburg. Über 22 Jahre Erfahrung.",
  keywords: "fliesenleger schöneiche, bad umbau, bad sanierung berlin, bad umbau brandenburg, barrierefreies bauen west-berlin, barrierefreies bauen charlottenburg, barrierefreies bauen und sanieren, fliesenleger brandenburg, fliesenleger strausberg, badumbau berlin, badsanierung brandenburg, altersgerechter badumbau, barrierefreie badsanierung",
  authors: [{ name: "BBS Björn Hartmann" }],
  creator: "BBS Barrierefreies Bauen und Sanieren",
  publisher: "BBS Björn Hartmann",
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
    title: 'BBS - Bad Umbau & Fliesenleger Schöneiche | Barrierefreies Bauen Berlin Brandenburg',
    description: 'Fliesenleger & Badumbau Experte in Schöneiche, Berlin, Brandenburg & Strausberg. Bad Sanierung Berlin. Barrierefreies Bauen West-Berlin/Charlottenburg.',
    images: [
      {
        url: '/hero-bathroom.png',
        width: 1200,
        height: 630,
        alt: 'BBS Barrierefreies Bauen und Sanieren',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BBS - Bad Umbau & Fliesenleger Schöneiche | Barrierefreies Bauen',
    description: 'Fliesenleger & Badumbau Experte in Schöneiche, Berlin, Brandenburg & Strausberg. Bad Sanierung Berlin.',
    images: ['/hero-bathroom.png'],
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
        {children}
      </body>
    </html>
  );
}
