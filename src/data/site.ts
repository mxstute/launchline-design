export const site = {
  name: "Launchline Design",
  domain: "launchlinedesign.com",
  url: "https://www.launchlinedesign.com",
  locale: "en_US",
  city: "Miami",
  region: "FL",
  regionName: "Florida",
  country: "US",
  serviceArea: "Miami-Dade County",
  founder: "Myles Stute",
  otherBusiness: "Magic City Services",
  email: "mxstute@launchlinedesign.com",
  phoneDisplay: "(786) 229-4730",
  phoneTel: "+17862294730",
  phoneSchema: "+1-786-229-4730",
  description:
    "Done-for-you AI for Miami local businesses: more leads, a receptionist that books, reviews and reactivation, and the operations behind them.",
} as const;

/** Live AI receptionist. Not the office line. */
export const DEMO_LINE = {
  name: "Ava",
  display: "(786) 952-6775",
  tel: "+17869526775",
  href: "tel:+17869526775",
} as const;

function readEnv(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name];
  return typeof value === "string" ? value.trim() : "";
}

export const placeholders = {
  formEndpoint: readEnv("PUBLIC_DEMO_FORM_ENDPOINT"),
  calLink: readEnv("PUBLIC_CAL_LINK"),
  streetAddress: readEnv("PUBLIC_STREET_ADDRESS"),
};

/** Used when PUBLIC_DEMO_FORM_ENDPOINT is unset. */
const DEFAULT_FORM_ENDPOINT = "https://formspree.io/f/xvzvrpow";

/** Cal.com profile path. Visitors pick the event. Used when PUBLIC_CAL_LINK is unset. */
const DEFAULT_CAL_LINK = "myles-stute-v7irmp";

function usable(value: string): boolean {
  if (!value) return false;
  const lower = value.toLowerCase();
  if (value.includes("[") || value.includes("]")) return false;
  if (lower.includes("placeholder") || lower.includes("your_") || lower.includes("example.com")) return false;
  return true;
}

export function formEndpoint(): string {
  return usable(placeholders.formEndpoint) ? placeholders.formEndpoint : DEFAULT_FORM_ENDPOINT;
}

export function calLink(): string {
  const value = placeholders.calLink
    .replace(/^https?:\/\/(www\.)?cal\.com\//i, "")
    .replace(/^\//, "")
    .replace(/\/$/, "");
  return usable(value) ? value : DEFAULT_CAL_LINK;
}

export function streetAddress(): string | null {
  return usable(placeholders.streetAddress) ? placeholders.streetAddress : null;
}

export const nav = {
  solutions: [
    { href: "/services", label: "All services", note: "Four pillars, one stack" },
    { href: "/get-more-leads", label: "Get More Leads", note: "Search, ads, and nothing slips" },
    { href: "/convert-and-book", label: "Convert & Book", note: "Answer, qualify, and book" },
    { href: "/keep-customers", label: "Keep & Grow", note: "Reviews, reactivation, referrals" },
    { href: "/operations", label: "Operations", note: "CRM, reporting, invoicing" },
  ],
  industries: [
    { href: "/industries/roofing", label: "Roofing" },
    { href: "/industries/hvac", label: "HVAC" },
    { href: "/industries/pest-control", label: "Pest control" },
    { href: "/industries/plumbing", label: "Plumbing" },
    { href: "/industries/home-services", label: "Home services" },
    { href: "/industries/law-firms", label: "Law firms" },
    { href: "/industries/med-spas", label: "Med spas" },
    { href: "/industries/dental", label: "Dental" },
  ],
  primary: [
    { href: "/audit", label: "Audit" },
    { href: "/demo", label: "Demo" },
    { href: "/pricing", label: "Pricing" },
  ],
  company: [
    { href: "/how-it-works", label: "How it works" },
    { href: "/audit", label: "Missed-revenue audit" },
    { href: "/integrations", label: "Integrations" },
    { href: "/es", label: "Español" },
    { href: "/demo", label: "Demo" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;

export function businessJsonLd(): Record<string, unknown> {
  const address: Record<string, unknown> = {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  };
  const street = streetAddress();
  if (street) address.streetAddress = street;

  return {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    image: `${site.url}/og.png`,
    logo: `${site.url}/logo.png`,
    description: site.description,
    email: site.email,
    telephone: site.phoneSchema,
    priceRange: "$$",
    currenciesAccepted: "USD",
    address,
    areaServed: [
      { "@type": "City", name: "Miami" },
      { "@type": "AdministrativeArea", name: "Miami-Dade County" },
    ],
    founder: {
      "@type": "Person",
      name: site.founder,
      jobTitle: "Founder",
    },
    knowsLanguage: ["English", "Spanish"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI service packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter",
          url: `${site.url}/pricing`,
          priceCurrency: "USD",
          description: "$497 setup and $197 per month. Missed-call text-back, review requests, and a shared inbox.",
        },
        {
          "@type": "Offer",
          name: "Growth",
          url: `${site.url}/pricing`,
          priceCurrency: "USD",
          description: "$1,497 setup and $497 per month. 24/7 AI receptionist, website chat, and booking. Most popular.",
        },
        {
          "@type": "Offer",
          name: "Full Stack",
          url: `${site.url}/pricing`,
          priceCurrency: "USD",
          description:
            "$4,997 setup and $1,497 per month. Growth plus bilingual coverage, follow-up, local SEO, reviews, CRM, reporting, and invoicing.",
        },
        {
          "@type": "Offer",
          name: "Custom AI Systems",
          url: `${site.url}/pricing`,
          priceCurrency: "USD",
          description:
            "From $3,500 setup and from $997 per month. Scoped builds such as an internal assistant or a complex integration.",
        },
        {
          "@type": "Offer",
          name: "AI Missed-Revenue Audit",
          url: `${site.url}/audit`,
          price: "297",
          priceCurrency: "USD",
          description: "$297, credited toward any setup fee if you start within 30 days.",
        },
      ],
    },
  };
}

export const solutionPaths = [
  "/services",
  "/get-more-leads",
  "/convert-and-book",
  "/keep-customers",
  "/operations",
  "/ai-receptionist",
  "/missed-call-text-back",
  "/ai-chat-widget",
  "/google-business-profile-optimization-miami",
  "/review-automation",
  "/customer-reactivation",
] as const;

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
