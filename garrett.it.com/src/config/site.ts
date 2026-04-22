// ============================================================
// SITE CONFIG — edit this file to update anything on the site
// ============================================================

export const siteConfig = {
  // ── Identity ──────────────────────────────────────────────
  name: "Garrett Rose",
  title: "Garrett Rose Software Consulting",
  description:
    "Software consulting, AI integration, and security for businesses.",

  // ── Contact ───────────────────────────────────────────────
  contactEmail: "garrett.rose03@gmail.com",

  // Formspree: sign up at formspree.io, create a form, paste the ID here.
  // Example: if your form URL is https://formspree.io/f/abcd1234, set "abcd1234"
  formspreeId: "mdaygnvo",

  // ── Social links (set to "" to hide) ──────────────────────
  socials: {
    github: "https://github.com/glrose",
    linkedin: "https://www.linkedin.com/in/garrett-rose-b0974a131",
    youtube: "https://www.youtube.com/@garrettrose",
  },

  // ── Hero section ──────────────────────────────────────────
  hero: {
    eyebrow: "Software Consulting",
    headline: "Garrett Rose",
    tagline:
      "I help businesses integrate AI, build reliable software, and lock down their security.",
    cta: "Get in Touch",
  },

  // ── Services ──────────────────────────────────────────────
  // icon: "ai" | "code" | "shield"
  // To add a new icon type, add its SVG in src/components/ServiceCard.astro
  services: [
    {
      icon: "ai",
      title: "AI Integration",
      description:
        "Bring modern AI into your workflows, products, and teams from proof-of-concept to production-ready systems.",
    },
    {
      icon: "code",
      title: "Software Consulting",
      description:
        "Untangling your complex systems, fixing broken code, building new features and more.",
    },
    {
      icon: "shield",
      title: "Security",
      description:
        "Vulnerability assessments, secure development practices, and hardening for web applications and APIs. Find the gaps before someone else does.",
    },
  ],

  // ── About section ─────────────────────────────────────────
  about: {
    headline: "Building software that works. Securing what matters.",
    body: "I'm Garrett Rose, a software engineer who works directly with you to build informed software solutions that fit your business logic.",
  },

  // ── Contact section ───────────────────────────────────────
  contact: {
    headline: "Let's have a conversation",
    subtext:
      "Tell me about your project, inquiry, or opportunity and I'll get back to you as soon as possible.",
  },
} as const;

export type Service = (typeof siteConfig.services)[number];
