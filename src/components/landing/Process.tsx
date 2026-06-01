import { steps } from './data';

export function Process() {
  return (
    <section className="how" id="how">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-tag">How it works</div>
          <h2 className="h-display">
            Kickoff to{' '}
            <span
              style={{
                background: 'var(--grad-text)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              production
            </span>{' '}
            in weeks.
          </h2>
          <p className="sub">
            A simple, opinionated process that&apos;s been battle-tested across 120+ engagements.
          </p>
        </div>

        <div className="how-steps">
          {steps.map((step) => (
            <div key={step.number} className="step reveal">
              <div className="step-blob">{step.number}</div>
              <span className="step-mono">{step.mono}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
