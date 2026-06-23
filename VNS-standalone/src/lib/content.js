// ─────────────────────────────────────────────
//  SITE CONTENT — edit everything here freely
// ─────────────────────────────────────────────

// ── HERO ─────────────────────────────────────
// Change backgroundImage to any URL (gif, jpg, png, mp4 not supported here — use img)
export const heroContent = {
  backgroundImage: 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/2c1805c5a_Discord.gif',
  eyebrow: 'VNS — UI/UX Designer for Roblox Experiences',
  // Each line renders on its own <br />, edit freely
  headlineLines: [
    'Redefining pixels,',
    'pushing every frame,',
    'bringing it all together.',
    'Defining a legacy',
    'in Roblox — on and off',
    'the screen.',
  ],
  subtext: 'Premium UI/UX interfaces engineered frame by frame for immersive Roblox experiences.',
  ctaPrimary: { label: 'View Work', href: '#recent-designs' },
  ctaSecondary: { label: 'Pricing', href: '#pricing' },
};

// ── PROJECTS ─────────────────────────────────
// image    → card thumbnail shown on home + projects page
// media[]  → gallery shown inside the project detail page
//            Each slot is independent — replace any URL without affecting the others.
//            Supports: .jpg .png .gif .mp4 .webm + YouTube/Vimeo full URLs
export const projects = [
  {
    id: 'neon-arena',
    title: 'Neon Arena',
    category: 'Game UI System',
    image: 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/5962a4130_generated_d0e381d8.png',
    media: [
      /* slot 0 */ 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/5962a4130_generated_d0e381d8.png',
      /* slot 1 */ 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/d0944cfab_generated_584bb4cb.png',
      /* slot 2 */ 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/e96ed505a_generated_7e323519.png',
    ],
  },
  {
    id: 'void-runner',
    title: 'Void Runner',
    category: 'Lobby & Menu',
    image: 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/d0944cfab_generated_584bb4cb.png',
    media: [
      /* slot 0 */ 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/d0944cfab_generated_584bb4cb.png',
      /* slot 1 */ 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/f8d59d5db_generated_18eb0a28.png',
      /* slot 2 */ 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/5962a4130_generated_d0e381d8.png',
    ],
  },
  {
    id: 'cyber-market',
    title: 'Cyber Market',
    category: 'Shop Interface',
    image: 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/e96ed505a_generated_7e323519.png',
    media: [
      /* slot 0 */ 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/e96ed505a_generated_7e323519.png',
      /* slot 1 */ 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/5962a4130_generated_d0e381d8.png',
      /* slot 2 */ 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/f8d59d5db_generated_18eb0a28.png',
    ],
  },
  {
    id: 'shadow-ops',
    title: 'Shadow Ops',
    category: 'HUD & Combat UI',
    image: 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/f8d59d5db_generated_18eb0a28.png',
    media: [
      /* slot 0 */ 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/f8d59d5db_generated_18eb0a28.png',
      /* slot 1 */ 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/d0944cfab_generated_584bb4cb.png',
      /* slot 2 */ 'https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/e96ed505a_generated_7e323519.png',
    ],
  },
];

// ── FOOTER ───────────────────────────────────
export const footerContent = {
  brand: 'VNS',
  tagline: 'Crafting premium UI/UX experiences for Roblox games. Every frame engineered with precision.',
  discord: { label: 'cusersvns', url: 'https://discord.com/users/cusersvns' },
  twitter: { label: '@cusersvns', url: 'https://twitter.com/cusersvns' },
  copyright: 'VNS',
};

// ── TERMS OF SERVICE ─────────────────────────
export const termsIntro =
  'These Terms of Service apply to all design work commissioned from me. By hiring me, you agree to the terms outlined below.';

export const termsSections = [
  {
    id: 'scope',
    title: 'Scope of Work',
    points: [
      'UI/UX design services are provided primarily for Roblox games.',
      'Project scope is agreed upon beforehand.',
      'Anything not explicitly agreed may require additional payment.',
      'Icons shown in showcases are not included unless obtained from an open-source library.',
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & Payment',
    points: [
      'Minimum charge is $40 per frame.',
      'Final pricing depends on complexity, workload, and project requirements.',
      'Accepted payment methods: PayPal and Robux.',
      "Transaction fees and taxes are the client's responsibility.",
      'Payment (full or deposit) must be received before work begins unless otherwise agreed.',
    ],
  },
  {
    id: 'revisions',
    title: 'Revisions',
    points: [
      'Up to 2 major revisions are included per project.',
      'Major revisions involve significant layout or structural changes.',
      'Minor edits (color, spacing, text) are considered minor revisions.',
      'Full redesigns or concept changes after approval are not included.',
    ],
  },
  {
    id: 'communication',
    title: 'Communication & Client Responsibility',
    points: [
      'Clients should provide clear instructions and references.',
      'Respond within a reasonable timeframe.',
      'Review work promptly.',
      'Ensure sufficient funds when paying via Roblox.',
      'Communication delays may affect delivery timelines.',
    ],
  },
  {
    id: 'timeline',
    title: 'Timeline',
    points: [
      'No fixed deadlines are guaranteed.',
      'Completion time depends on complexity, workload, and revision requests.',
      'Projects requiring strict deadlines must be discussed in advance and may be declined.',
    ],
  },
  {
    id: 'ownership',
    title: 'Ownership & Usage',
    points: [
      'After full payment, clients may use the final UI design for their Roblox project.',
      'I retain the right to showcase completed work in my portfolio.',
      'I retain ownership of drafts, unused concepts, and working files unless otherwise agreed.',
      'Designs may not be resold, redistributed, or claimed as the client\'s own work.',
    ],
  },
  {
    id: 'refunds',
    title: 'Refunds',
    points: [
      'Payments are non-refundable once work has started.',
      'No refunds are issued after final files are delivered.',
      'Partial refunds may be issued at my discretion if a project cannot be completed for valid reasons.',
    ],
  },
  {
    id: 'cancellation',
    title: 'Cancellation',
    points: [
      'Clients may receive a refund if they cancel before work begins.',
      'No refund is provided after work has started.',
      'I may cancel a project due to non-communication, non-payment, or inappropriate behavior.',
    ],
  },
  {
    id: 'liability',
    title: 'Liability',
    points: [
      'I am not responsible for script functionality, coding errors, or platform-related issues after delivery that were not caused by me.',
      'My responsibility is limited to the agreed design work.',
    ],
  },
  {
    id: 'agreement',
    title: 'Agreement',
    points: [
      'By commissioning me, you confirm that you have read and agreed to these Terms of Service.',
    ],
  },
];