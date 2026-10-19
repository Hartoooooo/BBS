import { Quote, Star } from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';
import { site } from '@/content/site';

const testimonials = [
  {
    text: 'Wir haben schon mehrere Sachen machen lassen, ist jedes Mal super geworden. Tolle Arbeit! Jederzeit wieder!',
    author: 'D. S.',
    location: '',
    sourceUrl: 'https://maps.app.goo.gl/H5Vvn7cMA8UXGQAF9',
  },
  {
    text: 'Ich habe mein Bad von BBS umbauen lassen, weil mir die Sicherheit im Alltag wichtig ist. Ebenerdige Dusche, rutschfeste Fliesen und schwellenlose Übergänge wurden sauber, zuverlässig und termingerecht eingebaut.',
    author: 'Herr E. V.',
    location: 'Berlin Spandau',
    sourceUrl: 'https://www.fliesenleger.net/berlin/bjoern-hartmann---bbs-barrierefreies-bauen-und-sanieren-aULrY0#bewertungen',
  },
  {
    text: 'Unser Badezimmer wurde komplett barrierefrei umgebaut. Dusche abgesenkt, Fliesenarbeiten sehr sauber ausgeführt und alle Übergänge ohne Kanten gestaltet.',
    author: 'Frau W. E.',
    location: 'Berlin Charlottenburg',
    sourceUrl: 'https://www.fliesenleger.net/berlin/bjoern-hartmann---bbs-barrierefreies-bauen-und-sanieren-aULrY0#bewertungen',
  },
  {
    text: 'Richtig gute Arbeit! Die Jungs waren pünktlich, haben ordentlich gearbeitet und das Ergebnis kann sich echt sehen lassen.',
    author: 'Luc S.',
    location: 'Neuenhagen',
    sourceUrl: 'https://maps.app.goo.gl/H5Vvn7cMA8UXGQAF9',
  },
  {
    text: 'Vom ersten Kontakt bis zur Fertigstellung einfach super! Saubere Arbeit, ein sehr kompetentes und sympathisches Team.',
    author: 'Louis H.',
    location: 'Schöneiche',
    sourceUrl: 'https://maps.app.goo.gl/H5Vvn7cMA8UXGQAF9',
  },
];

const sourceLabel = (url: string) => (url.includes('fliesenleger.net') ? 'fliesenleger.net' : 'Google');

// Testimonial-Marquee nach 21st.dev / Magic UI
const Testimonials = () => {
  return (
    <section id="bewertungen" aria-labelledby="bewertungen-title" className="overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="section-shell">
        <p className="eyebrow !text-mint">Bewertungen</p>
        <h2 id="bewertungen-title" className="section-title mt-4 !text-white">Was unsere Kunden sagen.</h2>
        <a
          href={site.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-white/90 hover:text-white hover:underline"
        >
          <span className="flex" aria-hidden="true">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-brand text-brand" />
            ))}
          </span>
          5,0 Sterne bei Google – alle Bewertungen ansehen
          <span className="sr-only">(öffnet in neuem Tab)</span>
        </a>
      </div>
      <div className="mt-10 pl-4 sm:pl-[max(1rem,calc((100vw-1180px)/2))]">
        <Marquee label="Bewertungen">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="flex w-[min(84vw,400px)] flex-col rounded-3xl border border-white/15 bg-white/[0.06] p-6">
              <Quote className="h-7 w-7 text-brand" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-lg leading-8 text-white/90">„{testimonial.text}“</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="block font-black text-white">{testimonial.author}</span>
                <span className="text-white/75">
                  {testimonial.location && `${testimonial.location} · `}
                  <a href={testimonial.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                    Bewertung auf {sourceLabel(testimonial.sourceUrl)}
                    <span className="sr-only"> (öffnet in neuem Tab)</span>
                  </a>
                </span>
              </figcaption>
            </figure>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
