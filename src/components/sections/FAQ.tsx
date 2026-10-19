import Link from 'next/link';
import { Hammer } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqSchema, type Faq } from '@/lib/schema';

const faqs: Faq[] = [
  {
    question: 'Führen Sie komplette barrierefreie Badumbauten durch?',
    answer:
      'Ja. Von der Planung nach DIN 18040-2 bis zur Fertigstellung: bodengleiche Dusche, rutschhemmende Fliesen, Haltegriffe, schwellenlose Übergänge und auf Wunsch breitere Türen – alles aus einer Hand.',
  },
  {
    question: 'Welche Förderungen gibt es für ein barrierefreies Bad?',
    answer:
      'Mit Pflegegrad zahlt die Pflegekasse bis zu 4.180 € je Maßnahme. Zusätzlich gibt es den zinsgünstigen KfW-Kredit 159. Wichtig: Alle Anträge müssen vor Baubeginn gestellt werden.',
  },
  {
    question: 'Ist die Beratung vor Ort kostenlos?',
    answer:
      'Ja. Wir kommen zu Ihnen nach Hause, messen auf, prüfen die Machbarkeit und erstellen anschließend ein schriftliches Angebot – kostenlos und unverbindlich.',
  },
  {
    question: 'Wie lange dauert der Umbau von der Badewanne zur Dusche?',
    answer:
      'Wird nur der Wannenbereich umgebaut, sind es meist wenige Arbeitstage. Ein kompletter barrierefreier Badumbau dauert je nach Umfang etwa ein bis drei Wochen.',
  },
  {
    question: 'In welchen Orten sind Sie tätig?',
    answer:
      'In allen Berliner Bezirken und in Brandenburg – besonders im östlichen Umland rund um unseren Standort Schöneiche bei Berlin, etwa in Neuenhagen, Strausberg, Erkner, Woltersdorf und Hoppegarten.',
  },
  {
    question: 'Welche Leistungen bieten Sie außer Badumbauten an?',
    answer:
      'Fliesen- und Bodenbelagsarbeiten, Badsanierung, Türverbreiterungen und Schwellenabbau, Trockenbau, Wasserschadensanierung, Bauwerksabdichtung sowie Holz- und Bautenschutz.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-20 sm:py-28">
      <JsonLd data={faqSchema(faqs)} />
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title" className="section-title mt-4">Häufige Fragen.</h2>
          <p className="body-copy mt-5">Ihre Frage ist nicht dabei? Rufen Sie uns an oder schreiben Sie uns – wir antworten schnell.</p>
          <Link href="/anfrage" className="mt-8 inline-flex min-h-14 items-center gap-2 rounded-full bg-brand px-7 font-black text-white transition hover:bg-brand-strong">
            <Hammer className="h-5 w-5" aria-hidden="true" />
            Kostenfreie Anfrage
          </Link>
        </div>
        <Accordion type="multiple" className="grid gap-3">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
