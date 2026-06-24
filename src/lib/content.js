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
    name: 'Vex',
    avatar: 'https://cusersvns.com/images/testimonials/vex.png',
    rating: 5,
    text: 'I got what i wanted and vns was very patient with the revisions. Definitely recommend.',
  },
  {
    name: 'Way2Shifty',
    avatar: 'https://cusersvns.com/images/testimonials/way2shifty.png',
    rating: 5,
    text: "Good quality, delivered on time. Would definitely recommend!",
  },
  {
    name: 'AEMIX',
    avatar: 'https://cusersvns.com/images/testimonials/aemix.png',
    rating: 5,
    text: 'This guy work is amazing and he works great with passion and he cares about your feedback and the small changes you make, great guy would defiantly do more coms with him.',
  },
  {
    name: 'Kisobel',
    avatar: 'https://cusersvns.com/images/testimonials/kisobel.png',
    rating: 5,
    text: 'Great guy, super easy to work with. I have done various different games using him as my best Ul artist. Creative when I lack ideas, makes ideas into perfect reality.',
  },
  {
    name: 'Anse',
    avatar: 'https://cusersvns.com/images/testimonials/anse.png',
    rating: 5,
    text: 'Quick, High knowledge of what people prefer, cool initiatives.',
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
// q → the question
// a → the answer
// To add: copy a block. To remove: delete a block.
export const faqs = [
  {
    q: 'What does "per frame" pricing mean?',
    a: 'Each frame is a single UI screen or view — such as a main menu, inventory screen, or settings panel. Complex multi-state interfaces may count as multiple frames depending on the scope.',
  },
  {
    q: 'How do I start working with you?',
    a: 'Simply reach out through my contact page, and we’ll discuss your project, goals, and timeline before getting started',
  },
  {
    q: 'What design tools do you use?',
    a: 'I primarily work with Figma and Krita to craft high-quality and fully functional designs.',
  },
  {
    q: 'How long does a project take?',
    a: 'Timelines vary based on project complexity, but most designs take 1–2 weeks, while full games take 2–4 weeks.',
  },
  {
    q: 'Can I request revisions?',
    a: "I offer two rounds of revisions to ensure the final design aligns perfectly with your vision. Additional revisions are available if needed.",
  },
  {
    q: 'Can you redesign my existing game UI?',
    a: 'Absolutely! I can update and enhance your existing game UI to improve its usability, and visual appeal.',
  },
  {
    q: 'Do you animate your UI designs?',
    a: 'I currently do not provide animation services, but I can design UI elements that are ready for animation by your development team.',
  },
  {
    q: 'Do you provide vectors/icons?',
    a: 'Most of the icons I use are sourced from open-source libraries. If you need custom icons, please hire a specialized icon designer, as I do not provide custom icon design services.',
  },
];