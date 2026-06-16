import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

export function Hero() {
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
    <header className="hero">
      <div className="hero-bg-glow" />
      <div className="hero-grid" />
      <div className="container hero-inner">
        {/* Copy */}
        <div className="hero-copy reveal">
          <div className="hero-eyebrow">
            <span className="dot" />
            <span>Now booking Q3 2026 engagements</span>
          </div>
          <h1 className="h-display">
            Software that{' '}
            <span className="underline grad-text">flows</span>
            <br />
            like thought.
          </h1>
          <p className="hero-sub">
            BlobTek is a senior engineering studio for ambitious teams. We design, build and run
            AI-native products from first prototype to global scale.
          </p>
          <div className="hero-ctas">
            <button
              className="btn btn-primary"
              data-cal-namespace="30min"
              data-cal-link="blobtek/30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"}'
            >
              Schedule a Call
            </button>
            <a href="#services" className="btn btn-ghost">
              See what we do
            </a>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="num">120+</div>
              <div className="lbl">Products shipped</div>
            </div>
            <div className="hero-meta-item">
              <div className="num">14</div>
              <div className="lbl">Senior engineers</div>
            </div>
            <div className="hero-meta-item">
              <div className="num">99.99%</div>
              <div className="lbl">Uptime SLA</div>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="hero-visual reveal">
          <div className="blob-stage">
            <div className="blob-main" />
            <div className="blob-orb b1" />
            <div className="blob-orb b2" />
            <div className="blob-orb b3" />
          </div>

          {/* Glass card 1 */}
          <div className="glass-card gc-1">
            <div className="gc-row">
              <span className="gc-dot" />
              <div>
                <div className="gc-title">deploy.prod</div>
                <div className="gc-sub">v2.4.1 · 1.2s</div>
              </div>
            </div>
            <div className="gc-bars">
              <span className="gc-bar on" />
              <span className="gc-bar on" />
              <span className="gc-bar on" />
              <span className="gc-bar on" />
              <span className="gc-bar on" />
              <span className="gc-bar" />
              <span className="gc-bar" />
            </div>
          </div>

          {/* Glass card 2 */}
          <div className="glass-card gc-2">
            <div className="gc-row">
              <span
                className="gc-dot"
                style={{ background: 'var(--c-amber)', boxShadow: '0 0 10px var(--c-amber)' }}
              />
              <div>
                <div className="gc-title">ML inference</div>
                <div className="gc-sub">42ms · 0.0% err</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
