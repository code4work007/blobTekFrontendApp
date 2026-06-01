import type { MouseEvent } from 'react';
import { services } from './data';

function handleCardGlow(e: MouseEvent<HTMLElement>) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  card.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

export function Services() {
  return (
    <section className="services" id="services">
      <div className="services-bg-blob" />
      <div className="services-bg-blob b2" />
      <div className="container">
        <div className="section-head reveal">
          <div className="section-tag">What we do</div>
          <h2 className="h-display">
            A full-stack studio for{' '}
            <span
              style={{
                background: 'var(--grad-text)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              teams that build
            </span>
          </h2>
          <p className="sub">
            Six disciplines, one fluid team. We embed with you end-to-end — from architecture to
            production — so you ship faster without compromising on quality.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc) => (
            <article
              key={svc.title}
              className="svc-card reveal"
              onMouseMove={handleCardGlow}
            >
              <div
                className="svc-icon"
                dangerouslySetInnerHTML={{ __html: svc.icon }}
              />
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <div className="svc-tags">
                {svc.tags.map((tag) => (
                  <span key={tag} className="svc-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
