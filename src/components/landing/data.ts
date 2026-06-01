export interface Service {
  icon: string;         // raw SVG string
  title: string;
  description: string;
  tags: string[];
}

export interface WhyItem {
  num: string;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  mono: string;
  title: string;
  description: string;
}

export interface Logo {
  name: string;
  glyphClass: string; // "blob" | "circle" | "triangle" | ""
}

export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
  featured?: boolean;
  avatarStyle?: React.CSSProperties;
}

// SVG paths (viewBox 0 0 24 24, fill=none, stroke-linecap=round, stroke-linejoin=round)
export const services: Service[] = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#9FB4FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3.5"/></svg>`,
    title: 'AI & ML Integration',
    description: 'From RAG pipelines to fine-tuned models — we turn the latest research into shipped product features that actually move metrics.',
    tags: ['LLMs', 'RAG', 'Vector DBs'],
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#FF9FD9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    title: 'Custom Software',
    description: 'Web apps, internal tools, mobile clients built in TypeScript, Swift and Kotlin by people who care about details.',
    tags: ['Next.js', 'Swift', 'Rust'],
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#9FFFD0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    title: 'Cloud Infrastructure',
    description: "Multi-region deployments, autoscaling and observability that just works — so your team can stop being on-call for plumbing.",
    tags: ['AWS', 'K8s', 'Terraform'],
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#E1FF9F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: 'Cybersecurity',
    description: 'Pen testing, SOC 2 readiness, and zero-trust architectures designed for the threats your team will actually face.',
    tags: ['SOC 2', 'Pen Test', 'Zero Trust'],
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#FFC79F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    title: 'DevOps & SRE',
    description: 'CI/CD pipelines, deployment automation and incident response — so you ship 10× more often with 10× more confidence.',
    tags: ['CI/CD', 'GitOps', 'SLO'],
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#C19FFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
    title: 'API & Platform',
    description: "Developer-grade APIs, SDKs and platform tooling designed like products, documented like manuals you'd actually read.",
    tags: ['REST', 'GraphQL', 'gRPC'],
  },
];

export const whyItems: WhyItem[] = [
  {
    num: '01',
    title: 'Senior-only engineers',
    description: "Average 8+ years shipping. No \"we'll learn it on your dime\" — you get the team that's already done it three times.",
  },
  {
    num: '02',
    title: 'Outcome-priced, not hourly',
    description: 'Fixed scope, fixed price, fixed timeline. We win when you ship — and we put real skin in the game.',
  },
  {
    num: '03',
    title: 'You own the code, forever',
    description: 'Clean, idiomatic codebases handed over with full documentation. No lock-in, no consulting strings, no surprises.',
  },
  {
    num: '04',
    title: 'Built to be handed off',
    description: "Your in-house team is set up to own and extend everything we build — that's the test of a job well done.",
  },
];

export const steps: Step[] = [
  {
    number: '01',
    mono: 'Week 1',
    title: 'Discover & Scope',
    description: 'A focused workshop with your team — we map your goals, constraints and success metrics, then return a written proposal in 5 working days.',
  },
  {
    number: '02',
    mono: 'Weeks 2–N',
    title: 'Design & Ship',
    description: 'Weekly demos, daily PRs, monthly retros. You see real software from day three and steer the direction as we go.',
  },
  {
    number: '03',
    mono: 'Forever',
    title: 'Handoff & Support',
    description: 'Full handover to your team with documentation, training, and 90-day support — so nothing breaks the moment we leave the room.',
  },
];

export const logos: Logo[] = [
  { name: 'Lumen Health',   glyphClass: 'blob' },
  { name: 'Northstar Bank', glyphClass: 'circle' },
  { name: 'Vector Labs',    glyphClass: 'triangle' },
  { name: 'Forge & Co.',    glyphClass: '' },
  { name: 'Hex Foundry',    glyphClass: 'blob' },
  { name: 'Slate AI',       glyphClass: 'circle' },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Blob Tech rebuilt our entire ML pipeline in eleven weeks. The team genuinely felt like our own — sharper, faster, and unreasonably committed.',
    initials: 'EM',
    name: 'Elena Marsh',
    role: 'VP Engineering, Lumen Health',
    featured: true,
  },
  {
    quote: "I've worked with eight agencies. None of them shipped this clean, this fast.",
    initials: 'DK',
    name: 'Daniel Khoury',
    role: 'CTO, Vector Labs',
    avatarStyle: { background: 'linear-gradient(95deg, #C6FF5C, #4EE2FF)', color: '#0A0B14' },
  },
  {
    quote: 'The handoff was so thorough we onboarded our in-house team in a single afternoon.',
    initials: 'SR',
    name: 'Sana Riaz',
    role: 'Head of Product, Hex Foundry',
    avatarStyle: { background: 'linear-gradient(95deg, #4EE2FF, #B45BFF)', color: '#0A0B14' },
  },
];
