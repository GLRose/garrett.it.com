// ============================================================
// SITE CONFIG — edit this file to update anything on the site
// ============================================================

export const siteConfig = {
  // ── Identity ──────────────────────────────────────────────
  name: "Garrett Rose",
  title: "Garrett Rose — Software Consulting",
  description:
    "Software consulting, AI integration, and security for modern businesses.",

  // ── Contact ───────────────────────────────────────────────
  contactEmail: "garrett.rose03@gmail.com",

  // Formspree: sign up at formspree.io, create a form, paste the ID here.
  // Example: if your form URL is https://formspree.io/f/abcd1234, set "abcd1234"
  formspreeId: "mdaygnvo",

  // ── Social links (set to "" to hide) ──────────────────────
  socials: {
    github: "https://github.com/garrettrose",
    linkedin: "",
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
        "Bring modern AI into your workflows, products, and teams — from proof-of-concept to production-ready systems that actually deliver value.",
    },
    {
      icon: "code",
      title: "Software Consulting",
      description:
        "Architecture reviews, technical strategy, and hands-on development. I help teams build better software, faster, without accumulating the wrong kind of debt.",
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
    body: "I'm Garrett Rose — a software consultant who works directly with founders, technical leads, and product teams. Whether you need to modernize a legacy system, integrate AI responsibly, or close security gaps before they become incidents, I focus on practical solutions that fit your business, not one-size-fits-all advice.",
  },

  // ── Contact section ───────────────────────────────────────
  contact: {
    headline: "Let's talk.",
    subtext:
      "Tell me about your project and I'll get back to you within one business day.",
  },
} as const;

export type Service = (typeof siteConfig.services)[number];
