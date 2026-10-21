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
  email: "Myles@launchlinedesign.com",
  phoneDisplay: "(786) 229-4730",
  phoneTel: "+17862294730",
  phoneSchema: "+1-786-229-4730",
  description:
    "Done-for-you AI that answers, books, and follows up for Miami home services, law firms, med spas, and dental practices.",
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

function usable(value: string): boolean {
  if (!value) return false;
  const lower = value.toLowerCase();
  if (value.includes("[") || value.includes("]")) return false;
  if (lower.includes("placeholder") || lower.includes("your_") || lower.includes("example.com")) return false;
  return true;
}

export function formEndpoint(): string | null {
  return usable(placeholders.formEndpoint) ? placeholders.formEndpoint : null;
}

export function calLink(): string | null {
  const value = placeholders.calLink.replace(/^https?:\/\/(www\.)?cal\.com\//, "").replace(/^\//, "");
  return usable(value) ? value : null;
}

export function streetAddress(): string | null {
  return usable(placeholders.streetAddress) ? placeholders.streetAddress : null;
}

export const nav = {
  solutions: [
    { href: "/ai-receptionist", label: "AI Receptionist", note: "Answers, qualifies, and books" },
    { href: "/automation", label: "Automation", note: "Text-back, reviews, follow-up" },
    { href: "/custom-ai", label: "Custom AI", note: "From a chatbot to the whole workflow" },
  ],
  industries: [
    { href: "/industries/home-services", label: "Home services" },
    { href: "/industries/law-firms", label: "Law firms" },
    { href: "/industries/med-spas", label: "Med spas" },
    { href: "/industries/dental", label: "Dental" },
  ],
  primary: [
    { href: "/demo", label: "Demo" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ],
  company: [
    { href: "/how-it-works", label: "How it works" },
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
          name: "Custom AI Systems",
          url: `${site.url}/pricing`,
          priceCurrency: "USD",
          description: "From $3,500 setup and from $997 per month. Workflow automation, integrations, and internal AI tools.",
        },
      ],
    },
  };
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
