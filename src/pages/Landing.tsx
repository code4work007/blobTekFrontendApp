import { useRef } from 'react';
import '@/styles/landing.css';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { LandingNav } from '@/components/landing/LandingNav';
import { Hero } from '@/components/landing/Hero';
import { Services } from '@/components/landing/Services';
import { WhyUs } from '@/components/landing/WhyUs';
import { Process } from '@/components/landing/Process';
import { Proof } from '@/components/landing/Proof';
import { CtaSection } from '@/components/landing/CtaSection';
import { LandingFooter } from '@/components/landing/LandingFooter';

export default function Landing() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Wire IntersectionObserver reveal for all .reveal elements in this page
  useScrollReveal(rootRef);

  return (
    <div className="blob-landing" ref={rootRef}>
      <LandingNav />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Proof />
      <CtaSection />
      <LandingFooter />
    </div>
  );
}
