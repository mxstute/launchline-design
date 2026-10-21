export type PriceLine = {
  text: string;
  lead?: boolean;
};

export type Tier = {
  id: "starter" | "growth" | "full";
  step: string;
  name: string;
  pitch: string;
  setup: string;
  monthly: string;
  featured?: boolean;
  items: PriceLine[];
  fit: string;
  launch: string;
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
      { text: "Missed-call text-back" },
      { text: "Automated Google review requests" },
      { text: "One shared inbox (web + mobile)" },
      { text: "Custom scripts in your brand voice" },
      { text: "Monthly check-in and tune-ups" },
    ],
    fit: "Owner-operators and busy crews who miss calls on the job.",
    launch: "As little as 7 days. Free 14-day pilot available.",
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
      { text: "AI website chat widget" },
      { text: "Booking directly into your calendar" },
      { text: "Smart transfer and urgent-lead alerts" },
      { text: "Call summaries and monthly script optimization" },
    ],
    fit: "Service companies and law firms with steady inbound calls.",
    launch: "As little as 7 to 10 days.",
  },
  {
    id: "full",
    step: "Step 3 · Scale",
    name: "Full Stack",
    pitch: "The whole customer journey: get found, book the job, get paid, get the review, get the referral.",
    setup: "$4,997",
    monthly: "$1,497/mo",
    items: [
      { text: "Everything in Growth, plus:", lead: true },
      { text: "Bilingual English / Spanish voice, chat, and text" },
      { text: "Speed-to-lead follow-up for forms, ads, and lead platforms" },
      { text: "Quote and estimate follow-up" },
      { text: "Advanced AI qualification and routing" },
      { text: "Booking into one field-service or practice system" },
      { text: "Google Business Profile and local SEO management" },
      { text: "AI review responses and reputation monitoring" },
      { text: "Quarterly reactivation campaigns" },
      { text: "Maintenance and membership reminders" },
      { text: "Referral automation" },
      { text: "CRM setup and integrations" },
      { text: "Reporting dashboard and a Monday-morning summary" },
      { text: "Invoicing and payment reminders" },
      { text: "Quarterly strategy review with Myles" },
    ],
    fit: "Established companies with a team, multi-truck operations, and law firms that want every lead handled the same way.",
    launch: "Core (receptionist, text-back, speed-to-lead) in 2 weeks. The full system in 4 to 6 weeks, in phases.",
  },
];

export const customBuild = {
  name: "Custom AI Systems",
  price: "from $3,500 setup · from $997/mo",
  text: "A scoped project for one-off builds, such as an internal assistant or a complex integration. Full Stack is the packaged step when you want the whole journey. A single custom automation, outside either line, starts at $750.",
};

export const fullStackMath =
  "At the low end of each listed range, buying Growth plus those add-ons separately is $8,970 to set up and $2,555 a month. Full Stack is $4,997 and $1,497 a month: one partner and one scope. That comparison is menu arithmetic, not a client result.";

export const fullStackExcludes =
  "Not included in Full Stack: ad management and landing pages, AI SEO content, outbound prospecting, and internal AI assistants. Each can be added at the listed price.";

export type Addon = {
  name: string;
  detail: string;
  price: string;
};

export type AddonGroup = {
  id: string;
  name: string;
  items: Addon[];
};

export const addonGroups: AddonGroup[] = [
  {
    id: "leads",
    name: "Get More Leads",
    items: [
      {
        name: "AI lead generation and prospecting",
        detail: "Email only. 2 to 3 weeks.",
        price: "$997 setup · $497 to $997/mo",
      },
      {
        name: "Ad and landing page optimization",
        detail: "Ad spend is paid to Google or Meta.",
        price: "$997 to $1,997 setup · $497 to $997/mo",
      },
      {
        name: "Google Business Profile and local SEO",
        detail: "Ranking movement usually takes 60 to 90 days.",
        price: "$497 to $997 setup · $297 to $497/mo",
      },
      {
        name: "AI SEO content",
        detail: "4 to 12 pages a month. English and Spanish.",
        price: "$497 setup · $497 to $1,297/mo",
      },
      {
        name: "AI chat widget",
        detail: "Included in Growth. Standalone is this price.",
        price: "$497 setup · $147/mo",
      },
      {
        name: "Speed-to-lead follow-up",
        detail: "Forms, ads, and lead platforms. Current add-on.",
        price: "$497 setup · $97/mo",
      },
      {
        name: "Missed-call text-back",
        detail: "Included in Starter. Standalone is this price.",
        price: "$297 setup · $97/mo",
      },
    ],
  },
  {
    id: "convert",
    name: "Convert & Book",
    items: [
      {
        name: "Field-service or practice-system booking",
        detail: "ServiceTitan, Jobber, Housecall Pro, or Clio.",
        price: "$750 to $1,500 setup · $97/mo",
      },
      {
        name: "Reminders and no-show follow-up",
        detail: "Current add-on.",
        price: "$297 setup · $47/mo",
      },
      {
        name: "Quote and estimate follow-up",
        detail: "Day 1, 3, 7, 14, and 30.",
        price: "$497 to $750 setup · $147/mo",
      },
      {
        name: "AI qualification and routing",
        detail: "Basic qualification is already in Growth.",
        price: "$750 to $1,500 setup · $197/mo",
      },
    ],
  },
  {
    id: "keep",
    name: "Keep & Grow",
    items: [
      {
        name: "AI review responses",
        detail: "Review requests are already in Starter.",
        price: "$197 setup · $97/mo",
      },
      {
        name: "Reputation monitoring",
        detail: "Setup included. $147/mo with AI review responses.",
        price: "$97/mo",
      },
      {
        name: "Past-customer reactivation",
        detail: "One campaign, or quarterly.",
        price: "$750 one-time · $297/mo quarterly",
      },
      {
        name: "Maintenance and membership reminders",
        detail: "Tune-ups, treatments, inspections.",
        price: "$497 setup · $97 to $147/mo",
      },
      {
        name: "Referral automation",
        detail: "Law firms: thank-you only, no paid rewards.",
        price: "$497 setup · $97/mo",
      },
    ],
  },
  {
    id: "ops",
    name: "Operations",
    items: [
      {
        name: "CRM setup and integrations",
        detail: "Includes sub-account maintenance.",
        price: "$997 to $2,500 setup · $197 to $297/mo",
      },
      {
        name: "Reporting dashboards",
        detail: "Weekly summary in plain English.",
        price: "$750 to $1,500 setup · $147/mo",
      },
      {
        name: "Internal AI assistants and SOP bots",
        detail: "Larger builds move to Custom AI Systems.",
        price: "$1,500 to $3,500 setup · $197 to $497/mo",
      },
      {
        name: "Invoicing and payment reminders",
        detail: "Text-to-pay and a due-date sequence.",
        price: "$497 setup · $97/mo",
      },
    ],
  },
  {
    id: "any",
    name: "Any package",
    items: [
      {
        name: "Bilingual English / Spanish",
        detail: "Add-on for Starter or Growth. Included in Full Stack.",
        price: "+$297 setup · +$97/mo",
      },
      {
        name: "Additional location or phone line",
        detail: "Monthly.",
        price: "+$147/mo",
      },
      {
        name: "Single custom automation",
        detail: "One tool, scoped. One-time.",
        price: "from $750",
      },
    ],
  },
];

export const pricingNotes = [
  "Prices are starting points in USD. The final quote is confirmed on the call.",
  "Phone, SMS, and AI usage are billed at cost with no markup. Ad spend, software seats, and third-party subscriptions are paid by you or passed through at cost.",
  "Your accounts, numbers, and data stay yours.",
  "Time to launch assumes scripts are approved within 2 business days. Business texting needs A2P 10DLC registration, which can take 1 to 3 weeks. That registration starts on day one.",
  "Compliance notes on the service pages are general guidance, not legal advice.",
];

export const pilot = {
  kicker: "Free 14-day Starter pilot",
  title: "See it on your own line before you keep it.",
  text: "We set up Starter on your line at no cost. Keep it only if it is catching calls you would have missed.",
};

export const auditOffer = {
  kicker: "AI Missed-Revenue Audit",
  price: "$297",
  title: "Find the leaks before you spend on AI.",
  text: "Credited 100% toward any setup fee if you start within 30 days. Free when you come through cold outreach or a referral, at Myles’s discretion.",
  href: "/audit",
};
