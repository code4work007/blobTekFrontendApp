import { whyItems } from './data';

export function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="why-bg-shape" />
      <div className="container why-inner">
        <div className="why-left reveal">
          <div className="section-tag">Why BlobTek</div>
          <h2 className="h-display">
            Sharp minds,{' '}
            <br />
            <span className="grad-text">soft edges.</span>
          </h2>
          <p>
            We&apos;re built differently. Every project gets senior engineers not a junior squad
            shadowed by a partner. The work is fast, opinionated, and never feels like an outsource.
          </p>
        </div>

        <div className="why-list">
          {whyItems.map((item) => (
            <div key={item.num} className="why-item reveal">
              <div className="why-num">{item.num}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
