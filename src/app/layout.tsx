import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import { businessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { a11yInitScript } from "@/lib/a11yInit";
import { site } from "@/content/site";
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
  metadataBase: new URL(site.url),
  ...buildMetadata({
    title: 'Barrierefreies Bad & Badumbau Berlin | Meisterbetrieb BBS',
    description:
      'BBS ist Ihr Meisterbetrieb für barrierefreie Badumbauten in Berlin und Brandenburg: bodengleiche Dusche, Badewanne zur Dusche, seniorengerechtes Bad – mit Förderberatung. Seit 2003.',
    path: '/',
  }),
  // Canonical setzt jede Seite selbst, sonst erben Unterseiten die Startseite
  alternates: undefined,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.name,
  publisher: site.legalName,
  formatDetection: { telephone: true },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: a11yInitScript }} />
        <JsonLd data={businessSchema()} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main" className="skip-link">Zum Inhalt springen</a>
        <FullscreenProvider>
        {children}
        <CookieBanner />
        <Analytics />
        </FullscreenProvider>
      </body>
    </html>
  );
}
