import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import StickyAnfrageButton from '@/components/ui/StickyAnfrageButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <StickyAnfrageButton />
    </main>
  );
}