import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, Hammer, Phone } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import CtaBanner from '@/components/ui/cta-banner';
import StickyAnfrageButton from '@/components/ui/StickyAnfrageButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { breadcrumbSchema, faqSchema, serviceSchema, type Crumb, type Faq } from '@/lib/schema';
import { site, type NavLink } from '@/content/site';

type TopicPageProps = {
  path: string;
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  intro: ReactNode;
  image: { src: string; alt: string };
  highlights?: string[];
  service?: { name: string; description: string };
  faqs: Faq[];
  related: NavLink[];
  children: ReactNode;
};

export default function TopicPage({ path, crumbs, eyebrow, title, intro, image, highlights, service, faqs, related, children }: TopicPageProps) {
  const schemas: object[] = [breadcrumbSchema(crumbs), faqSchema(faqs)];
  if (service) schemas.push(serviceSchema(service.name, service.description, path));

  return (
    <>
      <JsonLd data={schemas} />
      <Header />
      <main id="main" tabIndex={-1} className="page-pattern">
        <section className="relative overflow-hidden pb-14 pt-28 sm:pt-32">
          <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Breadcrumbs crumbs={crumbs} />
              <p className="eyebrow mt-8">{eyebrow}</p>
              <h1 className="mt-4 text-[clamp(2.3rem,5vw,4.2rem)] font-black leading-[1.02] text-ink">{title}</h1>
              <div className="body-copy mt-6 max-w-2xl">{intro}</div>
              {highlights && (
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-bold text-ink">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/anfrage" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand px-7 font-black text-white shadow-[0_18px_44px_rgba(214,61,50,0.28)] transition hover:bg-brand-strong">
                  <Hammer className="h-5 w-5" aria-hidden="true" />
                  Kostenlose Beratung anfragen
                </Link>
                <a href={site.phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-7 font-black text-ink transition hover:border-ink">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(23,32,36,0.18)] lg:aspect-[4/5]">
              <Image src={image.src} alt={image.alt} fill priority className="object-cover" sizes="(min-width: 1024px) 520px, 100vw" />
            </div>
          </div>
        </section>

        <div className="section-shell">
          <article className="prose-bbs mx-auto max-w-3xl pb-6">{children}</article>
        </div>

        <section aria-labelledby="faq-title" className="section-shell py-16">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Häufige Fragen</p>
            <h2 id="faq-title" className="mt-4 text-3xl font-black leading-tight text-ink sm:text-4xl">Fragen & Antworten</h2>
            <Accordion type="multiple" className="mt-8 grid gap-3">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <CtaBanner />

        <nav aria-labelledby="related-title" className="section-shell pb-20">
          <h2 id="related-title" className="text-2xl font-black text-ink">Das könnte Sie auch interessieren</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {related.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="surface group flex h-full flex-col rounded-3xl p-6 transition hover:border-brand">
                  <span className="flex items-center justify-between text-lg font-black text-ink">
                    {link.label}
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                  {link.description && <span className="mt-2 text-base leading-7 text-ink/78">{link.description}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <Footer />
      <StickyAnfrageButton />
    </>
  );
}
