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
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#F5C24A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 1 0 5 5"/><path d="M12 12v4"/><path d="M8 16h8"/><circle cx="17" cy="7" r="3"/><path d="M17 4v6"/><path d="M14 7h6"/></svg>`,
    title: 'AI Automation',
    description: 'End-to-end workflow automation powered by AI agents, document processing, multi-step pipelines, and intelligent integrations that eliminate manual work at scale.',
    tags: ['n8n', 'AI Agents', 'Workflows'],
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#F0922E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3.5"/></svg>`,
    title: 'AI & ML Integration',
    description: 'From RAG pipelines to fine-tuned domain models, we embed production-grade AI into your product so features ship in weeks, not quarters.',
    tags: ['LLMs', 'RAG', 'Vector DBs'],
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#EE6E3A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><rect x="7" y="11" width="4" height="7" rx="1"/></svg>`,
    title: 'Web & Mobile Development',
    description: 'Responsive web apps, SaaS dashboards, and native iOS/Android built from a single senior team who sweats every detail, whether it renders in a browser or on a locked screen.',
    tags: ['React', 'Next.js', 'React Native'],
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#EF5F6B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: 'Cybersecurity',
    description: 'Pen testing, SOC 2 readiness, and zero-trust architectures designed for the threats your team will actually face before an attacker finds them first.',
    tags: ['SOC 2', 'Pen Test', 'Zero Trust'],
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#FBD9A0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    title: 'Cloud & DevOps',
    description: 'Multi-region infrastructure, automated CI/CD pipelines, and observability stacks that keep your team shipping fast and sleeping well built for the scale you are planning for.',
    tags: ['AWS', 'Docker', 'CI/CD'],
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#F0922E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
    title: 'Custom Software & APIs',
    description: 'Internal tools, third-party integrations, and developer grade APIs built to last, clean architecture, full documentation, and zero vendor lock-in.',
    tags: ['REST', 'GraphQL', 'Postgres'],
  },
];

export const whyItems: WhyItem[] = [
  {
    num: '01',
    title: 'Senior-only engineers',
    description: "Average 8+ years shipping. No \"we'll learn it on your dime\", you get the team that's already done it three times.",
  },
  {
    num: '02',
    title: 'Outcome-priced, not hourly',
    description: 'Fixed scope, fixed price, fixed timeline. We win when you ship and we put real skin in the game.',
  },
  {
    num: '03',
    title: 'You own the code, forever',
    description: 'Clean, idiomatic codebases handed over with full documentation. No lock-in, no consulting strings, no surprises.',
  },
  {
    num: '04',
    title: 'Built to be handed off',
    description: "Your in-house team is set up to own and extend everything we build that's the test of a job well done.",
  },
];

export const steps: Step[] = [
  {
    number: '01',
    mono: 'Week 1',
    title: 'Discover & Scope',
    description: 'A focused workshop with your team we map your goals, constraints and success metrics, then return a written proposal in 5 working days.',
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
    description: 'Full handover to your team with documentation, training, and 90-day support so nothing breaks the moment we leave the room.',
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
    quote: 'BlobTek rebuilt our entire ML pipeline in eleven weeks. The team genuinely felt like our own, sharper, faster, and unreasonably committed.',
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
    avatarStyle: { background: 'linear-gradient(95deg, #F5C24A, #EE8A36)', color: '#0B0A06' },
  },
  {
    quote: 'The handoff was so thorough we onboarded our in-house team in a single afternoon.',
    initials: 'SR',
    name: 'Sana Riaz',
    role: 'Head of Product, Hex Foundry',
    avatarStyle: { background: 'linear-gradient(95deg, #EE8A36, #EF5F6B)', color: '#0B0A06' },
  },
];
