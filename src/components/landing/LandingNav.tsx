import { useEffect, useState } from 'react';
import logoSrc from '@/asserts/logo.png';

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="logo">
          <img src={logoSrc} alt="BlobTek logo" className="logo-mark-img" />
          <span>BlobTek</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#why">Why us</a>
          <a href="#how">Process</a>
          <a href="#proof">Customers</a>
        </div>
        <a href="mailto:hello@blobtek.com?subject=Project%20Inquiry" className="btn btn-primary nav-cta">
          Start a project <span className="btn-arrow">→</span>
        </a>
      </div>
    </nav>
  );
}
