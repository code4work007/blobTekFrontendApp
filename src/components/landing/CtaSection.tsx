export function CtaSection() {
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
            timeline and quote — no sales calls required.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">
              Start a project <span className="btn-arrow">→</span>
            </a>
            <a href="#" className="btn btn-ghost">
              Book a 30-min intro call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
