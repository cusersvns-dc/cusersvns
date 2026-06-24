// ─────────────────────────────────────────────────────────────────────────────
//  SITE CONTENT — edit everything in this file to update your site
//
//  HOW TO CHANGE IMAGES:
//  1. Put your image/gif files in the `public/images/` folder in your repo
//  2. Reference them here as '/images/your-file.png'
//  3. Supports: .jpg .png .gif .webp .mp4 .webm
// ─────────────────────────────────────────────────────────────────────────────

// ── HERO ─────────────────────────────────────────────────────────────────────
// backgroundImage: the big gif/image behind the hero text
// → replace /images/hero-bg.gif with your own file in public/images/
export const heroContent = {
  backgroundImage: 'https://cusersvns.com/images/Discord.gif',
  eyebrow: 'VNS — UI/UX Designer for Roblox Experiences',
  headlineLines: [
    'Redefining pixels,',
    'pushing every frame,',
    'bringing it all together.',
    'Defining a legacy',
    'in Roblox — on and off',
    'the screen.',
  ],
  subtext: 'Preem UI/UX interfaces engineered frame by frame for immersive Roblox experiences.',
  ctaPrimary:   { label: 'View Work', href: '#recent-designs' },
  ctaSecondary: { label: 'Pricing',   href: '#pricing' },
};

// ── NAVBAR LOGO ───────────────────────────────────────────────────────────────
// → replace /images/navbar-logo.png with your own file in public/images/
export const navbarLogo = 'https://cusersvns.com/images/VnsLogoV3-black.png';

// ── CONTACT CTA IMAGE ─────────────────────────────────────────────────────────
// The image shown in the "Get in Touch" / contact section
// → replace /images/contact-cta.png with your own file in public/images/
export const contactCtaImage = 'https://cusersvns.com/images/contact-cta.png';

// ── PROJECTS ──────────────────────────────────────────────────────────────────
// image    → card thumbnail on home + projects page
// media[]  → gallery inside the project detail page (lightbox)
//            Add or remove slots freely — just add more URLs to the array
//            Supports: .jpg .png .gif .webp .mp4 .webm
//
// To add a new project: copy one block, change the id, title, category, and images
// To remove a project: delete the whole { } block
export const projects = [
  {
    id: 'neon-arena',
    title: 'Fang',
    category: 'RPG UI',
    image: 'https://cusersvns.com/images/projects/fang/1.png',
    media: [
      'https://cusersvns.com/images/projects/fang/1.png',
      'https://cusersvns.com/images/projects/fang/2.png',
      'https://cusersvns.com/images/projects/fang/3.png',
      'https://cusersvns.com/images/projects/fang/4.png',
    ],
  },
  {
    id: 'void-runner',
    title: 'Samurai UI',
    category: 'RPG UI',
    image: 'https://cusersvns.com/images/projects/samurai-ui/1.png',
    media: [
      'https://cusersvns.com/images/projects/samurai-ui/1.png',
      'https://cusersvns.com/images/projects/samurai-ui/2.png',
      'https://cusersvns.com/images/projects/samurai-ui/3.png',
      'https://cusersvns.com/images/projects/samurai-ui/4.png',
    ],
  },
  {
    id: 'cyber-market',
    title: 'Golden Age',
    category: 'RPG UI',
    image: 'https://cusersvns.com/images/projects/golden-age/1.png',
    media: [
      'https://cusersvns.com/images/projects/golden-age/1.png',
      'https://cusersvns.com/images/projects/golden-age/2.png',
      'https://cusersvns.com/images/projects/golden-age/3.png',
    ],
  },
  {
    id: 'shadow-ops',
    title: 'Shadow Ops',
    category: 'HUD & Combat UI',
    image: '/images/projects/shadow-ops/thumb.png',
    media: [
      '/images/projects/shadow-ops/1.png',
      '/images/projects/shadow-ops/2.png',
      '/images/projects/shadow-ops/3.png',
    ],
  },
];

// ── FOOTER ────────────────────────────────────────────────────────────────────
export const footerContent = {
  brand:    'VNS',
  tagline:  'Crafting premium UI/UX experiences for Roblox games. Every frame engineered with precision.',
  discord:  { label: 'cusersvns',  url: 'https://discord.com/users/cusersvns' },
  twitter:  { label: '@cusersvns', url: 'https://twitter.com/cusersvns' },
  copyright: 'VNS',
};

// ── TERMS OF SERVICE ──────────────────────────────────────────────────────────
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
      "Designs may not be resold, redistributed, or claimed as the client's own work.",
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

// ── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    name: 'xR3aper',
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=xR3aper',
    rating: 5,
    text: 'Absolutely insane quality. The UI transformed our game from amateur to professional overnight. Every frame was pixel-perfect.',
  },
  {
    name: 'DarkVortex_Dev',
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=DarkVortex',
    rating: 5,
    text: "Best Roblox UI designer I've worked with. Fast turnaround, clean assets, and the tweening maps saved us weeks of work.",
  },
  {
    name: 'NovaBuildz',
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=NovaBuildz',
    rating: 4,
    text: 'Premium work at fair prices. The design elevated our entire game aesthetic. Already planning our next project together.',
  },
  {
    name: 'PixelForge',
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=PixelForge',
    rating: 5,
    text: 'VNS delivered beyond expectations. The combat HUD they designed became the most praised feature of our game.',
  },
  {
    name: 'StudioZero',
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=StudioZero',
    rating: 5,
    text: 'Incredible attention to detail. They understood our vision perfectly and delivered a UI system that feels AAA quality.',
  },
  {
    name: 'CryptoBuilds',
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=CryptoBuilds',
    rating: 5,
    text: 'The shop UI doubled our conversion rate. Clean, minimal, premium. Exactly what we needed for launch.',
  },
];