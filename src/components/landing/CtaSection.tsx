import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

export function CtaSection() {
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
    <section className="cta-section" id="cta">
      <div className="container">
        <div className="cta-card reveal">
          <div className="section-tag cta-tag">Let&apos;s build something</div>
          <h2 className="h-display">
            Ready to ship something{' '}
            <span className="grad-text">extraordinary?</span>
          </h2>
          <p>
            Tell us about your project. We respond inside one business day with a concrete plan,
            timeline and quote no sales calls required.
          </p>
          <div className="cta-buttons">
            <button
              className="btn btn-primary"
              data-cal-namespace="30min"
              data-cal-link="blobtek/30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"}'
            >
              Schedule a Call
            </button>
            <a href="mailto:info@blobtek.com?subject=Project%20Inquiry" className="btn btn-ghost">
              Email Us Instead
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
