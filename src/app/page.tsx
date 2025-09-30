import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import FliesenShowcase from '@/components/sections/FliesenShowcase';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FliesenShowcase />
      <Services />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}