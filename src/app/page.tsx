import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Highlights from '@/components/sections/Highlights';
import Process from '@/components/sections/Process';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import ServiceArea from '@/components/sections/ServiceArea';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import StickyAnfrageButton from '@/components/ui/StickyAnfrageButton';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Barrierefreies Bad & Badumbau Berlin | Meisterbetrieb BBS',
  description:
    'BBS ist Ihr Meisterbetrieb für barrierefreie Badumbauten in Berlin und Brandenburg: bodengleiche Dusche, Badewanne zur Dusche, seniorengerechtes Bad – mit Förderberatung. Seit 2003.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
        <Highlights />
        <Projects />
        <About />
        <Process />
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyAnfrageButton />
    </>
  );
}
