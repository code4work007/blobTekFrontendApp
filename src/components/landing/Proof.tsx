import { logos, testimonials } from './data';

export function Proof() {
  return (
    <section className="proof" id="proof">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-tag">Trusted by</div>
          <h2 className="h-display">
            Loved by teams that{' '}
            <span
              style={{
                background: 'var(--grad-text)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              care about quality
            </span>
            .
          </h2>
        </div>

        {/* Logo strip */}
        <div className="logos-strip reveal">
          {logos.map((logo) => (
            <div key={logo.name} className="logo-mark-fake">
              <span className={`glyph${logo.glyphClass ? ` ${logo.glyphClass}` : ''}`} />
              {logo.name}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className={`testi reveal${t.featured ? ' featured' : ''}`}
            >
              <div className="testi-quote-mark">&ldquo;</div>
              <q>{t.quote}</q>
              <div className="testi-person">
                <div className="testi-avatar" style={t.avatarStyle}>
                  {t.initials}
                </div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
