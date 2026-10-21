export type PriceLine = {
  text: string;
  lead?: boolean;
};

export type Tier = {
  id: "starter" | "growth" | "custom";
  step: string;
  name: string;
  pitch: string;
  setup: string;
  monthly: string;
  featured?: boolean;
  items: PriceLine[];
  fit: string;
};

export const tiers: Tier[] = [
  {
    id: "starter",
    step: "Step 1 · Start here",
    name: "Starter",
    pitch: "Catch every missed call and build your reviews on autopilot.",
    setup: "$497",
    monthly: "$197/mo",
    items: [
      { text: "Instant missed-call text-back on your business line" },
      { text: "Automated Google review requests after each job or visit" },
      { text: "One shared inbox for texts and replies (web + mobile)" },
      { text: "Custom message scripts in your brand voice" },
      { text: "Monthly check-in and tune-ups" },
    ],
    fit: "Owner-operators and busy crews (roofing, HVAC, pest control) who miss calls while on the job.",
  },
  {
    id: "growth",
    step: "Step 2 · Grow",
    name: "Growth",
    pitch: "A 24/7 AI receptionist that answers, qualifies, and books.",
    setup: "$1,497",
    monthly: "$497/mo",
    featured: true,
    items: [
      { text: "Everything in Starter, plus:", lead: true },
      { text: "AI voice receptionist for after-hours, overflow, or all calls" },
      { text: "AI website chat trained on your services, FAQs, and pricing" },
      { text: "Books appointments directly into your calendar" },
      { text: "Smart call transfer and urgent-lead alerts to your team" },
      { text: "Call summaries and monthly script optimization" },
    ],
    fit: "Med spas, dental offices, law firms, and service companies with steady inbound calls and leads.",
  },
  {
    id: "custom",
    step: "Step 3 · Scale",
    name: "Custom AI Systems",
    pitch: "AI built around your exact workflows, tools, and team.",
    setup: "from $3,500",
    monthly: "from $997/mo",
    items: [
      { text: "End-to-end workflow automation (intake to follow-up)" },
      { text: "CRM and practice-management integrations" },
      { text: "Bilingual English / Spanish intake by phone, text, and chat" },
      { text: "Internal AI tools: assistants, document drafting, reporting" },
      { text: "Discovery session and a written, fixed-scope proposal" },
    ],
    fit: "Multi-location or high-volume businesses ready to automate operations beyond the front desk.",
  },
];

export const addons: { name: string; detail: string; price: string }[] = [
  {
    name: "Bilingual English / Spanish",
    detail: "Starter or Growth",
    price: "+$297 setup · +$97/mo",
  },
  {
    name: "Speed-to-lead follow-up for web forms and ads",
    detail: "Setup and monthly",
    price: "$497 setup · $97/mo",
  },
  {
    name: "Appointment reminders + no-show follow-up",
    detail: "Setup and monthly",
    price: "$297 setup · $47/mo",
  },
  {
    name: "Past-customer reactivation campaign",
    detail: "One-time",
    price: "$750 one-time",
  },
  {
    name: "Additional location or phone line",
    detail: "Monthly",
    price: "+$147/mo",
  },
  {
    name: "Single custom automation (any tool)",
    detail: "One-time, scoped",
    price: "from $750",
  },
];

export const pricingNotes = [
  "Prices are starting points in USD; final quote confirmed on our call.",
  "Phone, SMS, and AI usage fees are billed at cost with no markup.",
  "Your accounts, numbers, and data stay yours.",
];

export const pilot = {
  kicker: "Free 14-day Starter pilot",
  title: "See it on your own line before you keep it.",
  text: "We set up Starter on your line at no cost. Keep it only if it's catching calls you would have missed.",
};
