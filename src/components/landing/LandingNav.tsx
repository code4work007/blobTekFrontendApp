import { useEffect, useState } from 'react';
import { getCalApi } from '@calcom/embed-react';
import logoSrc from '@/asserts/logo.png';

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        cssVarsPerTheme: { light: { 'cal-brand': '#EE6E3A' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
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
        <button
          className="btn btn-primary nav-cta"
          data-cal-namespace="30min"
          data-cal-link="blobtek/30min"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"}'
        >
          Schedule a Call
        </button>
      </div>
    </nav>
  );
}
