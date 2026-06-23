'use client';

import { Award, CheckCircle, Globe2 } from 'lucide-react';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const facts = [
  { icon: Award, value: '22+', label: 'Jahre Erfahrung im barrierefreien Bauen' },
  { icon: CheckCircle, value: '150+', label: 'abgeschlossene Projekte' },
  { icon: Globe2, value: 'Regional', label: 'in Berlin & Brandenburg' },
];

const About = () => {
  const [edgeProgress, setEdgeProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setEdgeProgress(1);
      return;
    }

    let frame = 0;
    const clamp = (value: number) => Math.max(0, Math.min(1, value));
    const updateEdge = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      setEdgeProgress(clamp((viewport - rect.top) / (viewport * 0.36)));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateEdge);
    };

    updateEdge();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ '--about-top': edgeProgress } as CSSProperties}
      className="relative z-30 mt-[-3rem] translate-y-[calc(72px*(1-var(--about-top)))] transform-gpu overflow-hidden rounded-t-[3rem] bg-[#f7f8f6] py-20 shadow-[0_calc(-34px*var(--about-top))_80px_rgba(23,32,36,calc(0.18*var(--about-top)))] will-change-transform sm:mt-[-4rem] sm:translate-y-[calc(96px*(1-var(--about-top)))] sm:rounded-t-[4rem] sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 rounded-t-[3rem] bg-[linear-gradient(180deg,rgba(23,32,36,calc(0.06*var(--about-top))),rgba(23,32,36,0))] sm:h-14 sm:rounded-t-[4rem]" />
      <div
        ref={ref}
        className={`section-shell relative z-10 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="max-w-5xl">
          <p className="eyebrow">Über BBS</p>
          <h2 className="section-title mt-4">Handwerk für mehr Bewegungsfreiheit.</h2>
          <p className="body-copy mt-6">
            BBS ist Ihr Fliesenleger und Badumbau-Experte in Berlin & Brandenburg. Wir planen
            barrierefreie Lösungen mit Blick auf Sicherheit, Komfort und saubere Ausführung.
          </p>
          <p className="body-copy mt-4">
            Ob präventive Sanierung, kompletter Umbau oder Wasserschaden: Sie sprechen direkt
            mit einem Betrieb, der die Baustelle kennt und Verantwortung übernimmt.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="surface rounded-3xl p-5">
                  <Icon className="mb-5 h-6 w-6 text-[#d63d32]" />
                  <div className="text-3xl font-black text-[#172024]">{fact.value}</div>
                  <p className="mt-2 text-sm font-bold leading-5 text-[#172024]/62">{fact.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
