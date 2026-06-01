import { useEffect, useState } from 'react';

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
          <span className="logo-mark" />
          <span>Blob Tech</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#why">Why us</a>
          <a href="#how">Process</a>
          <a href="#proof">Customers</a>
        </div>
        <a href="#cta" className="btn btn-primary nav-cta">
          Start a project <span className="btn-arrow">→</span>
        </a>
      </div>
    </nav>
  );
}
