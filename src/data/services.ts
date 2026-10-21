export type PillarId = "leads" | "convert" | "keep" | "ops";

export type Service = {
  id: string;
  pillar: PillarId;
  name: string;
  outcome: string;
  included: string[];
  tools: string;
  price: string;
  launch: string;
  note?: string;
  href?: string;
};

export type Pillar = {
  id: PillarId;
  href: string;
  name: string;
  menu: string;
  note: string;
  eyebrow: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  intro: string;
};

export const pillars: Pillar[] = [
  {
    id: "leads",
    href: "/get-more-leads",
    name: "Get More Leads",
    menu: "Get More Leads",
    note: "Search, ads, and nothing slips",
    eyebrow: "Pillar 1 · Get more leads",
    title: "Get More Leads for Miami Service Businesses | Launchline Design",
    description:
      "Missed-call text-back, speed-to-lead, Google Business Profile, local SEO, ads, chat, and prospecting for Miami roofing, HVAC, plumbing, and pest control.",
    h1: "More calls and forms, and nothing slips once a lead raises a hand.",
    lede: "Catch the leads you already get, then add the map pack, the landing page, and the list. Start with the missed call. Add the rest when it pays for itself.",
    intro:
      "Most shops should start with missed-call text-back and speed-to-lead, then Google Business Profile. Ads and landing pages come after tracking shows cost per booked job. SEO content and prospecting are the longer build.",
  },
  {
    id: "convert",
    href: "/convert-and-book",
    name: "Convert & Book",
    menu: "Convert & Book",
    note: "Answer, qualify, and book",
    eyebrow: "Pillar 2 · Convert and book",
    title: "AI Receptionist and Booking for Miami | Launchline Design",
    description:
      "A 24/7 AI receptionist, calendar and job-system booking, quote follow-up, and lead qualification for Miami service companies and law firms. Call Ava at (786) 952-6775.",
    h1: "Turn the leads you already get into appointments and signed estimates.",
    lede: "Every call answered, qualified, and booked. Open estimates get a follow-up. Tire-kickers stop reaching the owner. Hear it first: call Ava.",
    intro:
      "Growth is the voice receptionist, website chat, and calendar booking. Field-service booking, quote follow-up, and deeper qualification are add-ons, and they are included in Full Stack.",
  },
  {
    id: "keep",
    href: "/keep-customers",
    name: "Keep & Grow",
    menu: "Keep & Grow",
    note: "Reviews, reactivation, referrals",
    eyebrow: "Pillar 3 · Keep and grow",
    title: "Reviews, Reactivation, and Referrals | Launchline Design",
    description:
      "Review requests, AI review replies, reputation monitoring, past-customer reactivation, membership reminders, and referral automation for Miami local businesses.",
    h1: "The cheapest job is the customer who already trusts you.",
    lede: "Ask for the review, reply to it, bring past customers back, and let memberships and referrals book themselves. Marketing texts go only to people who opted in.",
    intro:
      "Review requests are already in Starter. The rest of this pillar is how a list you already paid to build keeps producing work without another ad dollar.",
  },
  {
    id: "ops",
    href: "/operations",
    name: "Operations",
    menu: "Operations",
    note: "CRM, reporting, invoicing",
    eyebrow: "Pillar 4 · Operations",
    title: "CRM, Reporting, and Internal AI | Launchline Design",
    description:
      "CRM setup, reporting dashboards, internal AI assistants, and invoicing reminders for Miami service companies. Custom AI systems from $3,500 setup.",
    h1: "Less admin, faster cash, and one screen for what is working.",
    lede: "One place for the lead, the call, the job, and the payment. A Monday-morning summary. Staff who can ask the playbook instead of guessing.",
    intro:
      "Full Stack includes CRM setup, the reporting dashboard, and invoicing reminders. Internal assistants and one-off builds stay on the Custom AI Systems line.",
  },
];

export const services: Service[] = [
  {
    id: "prospecting",
    pillar: "leads",
    name: "AI lead generation and prospecting",
    outcome:
      "A steady list of commercial and repeat-work prospects — property managers, HOAs, realtors, restaurants, contractors — who hear from you before your competitors.",
    included: [
      "Ideal-customer definition",
      "AI-enriched prospect lists, including decision-maker, email, and property data where it is available",
      "Two to three personalized email sequences in your voice",
      "Separate sending domains with warm-up",
      "Reply handling routed to your inbox or CRM",
      "Monthly list refresh and copy tests",
    ],
    tools: "Clay, Apollo, Google Maps or Outscraper data, Instantly or Smartlead, GoHighLevel, and OpenAI or Claude for personalization.",
    price: "$997 setup · $497 to $997/mo, depending on volume",
    launch: "2 to 3 weeks. Domain warm-up is the bottleneck.",
    note: "Cold outreach is email only, with an opt-out, under CAN-SPAM. No cold texts and no AI cold calls. TCPA and Florida’s FTSA restrict automated marketing calls and texts without prior written consent. This is general guidance, not legal advice.",
  },
  {
    id: "ads",
    pillar: "leads",
    name: "Ad and landing page optimization",
    outcome: "Every ad dollar lands on a page built to turn clicks into calls, and you can see which ads produce booked jobs.",
    included: [
      "Audit of Google Ads, Local Services Ads, and Meta campaigns",
      "One to two landing pages per service, with click-to-call, a short form, AI chat, reviews, and a financing badge",
      "Call tracking and conversion tracking, including GA4, GTM, and offline conversions from booked jobs",
      "AI-generated ad copy variants",
      "Monthly A/B tests and a plain-English report",
    ],
    tools: "Google Ads, Google Local Services Ads, Meta Ads, GA4, Google Tag Manager, CallRail, Astro or GoHighLevel funnels, and Microsoft Clarity.",
    price: "$997 to $1,997 setup · $497 to $997/mo. Ad spend is separate and paid directly to Google or Meta.",
    launch: "2 to 3 weeks.",
  },
  {
    id: "gbp",
    pillar: "leads",
    name: "Google Business Profile and local SEO",
    outcome: "Show up in the map pack when someone nearby searches “roofer near me” or “emergency plumber Miami.”",
    included: [
      "Full Google Business Profile audit and rebuild: categories, services, service areas, hours, Q&A, photos, and a booking link",
      "Citation cleanup across major directories, including Yelp, BBB, Angi, Apple Maps, and Bing",
      "NAP consistency fix",
      "Two to four AI-drafted Google Business Profile posts per month",
      "Local rank grid tracking against the top three competitors",
      "A monthly report",
    ],
    tools: "Google Business Profile, BrightLocal or Whitespark, Local Falcon, Google Search Console, and GoHighLevel.",
    price: "$497 to $997 setup · $297 to $497/mo",
    launch: "1 to 2 weeks to optimize. Ranking movement usually takes 60 to 90 days.",
    href: "/google-business-profile-optimization-miami",
  },
  {
    id: "seo",
    pillar: "leads",
    name: "AI SEO content",
    outcome:
      "The site starts ranking for the services and neighborhoods you actually want, such as “roof repair Coral Gables” or “termite tenting Kendall.”",
    included: [
      "Keyword and competitor research",
      "Service-area and service pages",
      "FAQ and article drafts edited by a person for accuracy, local detail, and your voice",
      "Schema markup and internal linking",
      "Publishing to your CMS",
      "A monthly rank and traffic report",
      "English and Spanish available",
    ],
    tools: "Ahrefs or Semrush, Google Search Console, Surfer or a similar editor, OpenAI or Claude, and your CMS.",
    price: "$497 setup · $497/mo for 4 pages, up to $1,297/mo for 12 pages",
    launch: "First pages live in 2 weeks. Traffic builds over 3 to 6 months.",
  },
  {
    id: "chat",
    pillar: "leads",
    name: "AI chat widget",
    outcome: "Website visitors get answers at 11 p.m. and leave with a booked appointment instead of bouncing.",
    included: [
      "Chat trained on your services, FAQs, service area, and the prices you choose to publish",
      "Lead capture: name, phone, address, and photos",
      "A booking link or direct booking",
      "Handoff to text so the conversation continues on the customer’s phone",
      "English and Spanish option",
    ],
    tools: "GoHighLevel Conversation AI, Retell chat, Voiceflow, or a custom build on OpenAI or Claude, on your website.",
    price: "Included in Growth. Standalone: $497 setup · $147/mo",
    launch: "5 to 7 days.",
    href: "/ai-chat-widget",
  },
  {
    id: "speed",
    pillar: "leads",
    name: "Speed-to-lead SMS and email",
    outcome: "Every web form, Facebook lead, Angi, or Thumbtack lead hears from you in under 60 seconds.",
    included: [
      "Instant text and email reply to every new lead",
      "An AI conversation that answers questions and books",
      "Five to seven touches over 14 days if they go quiet",
      "An urgent-lead alert to your phone",
      "All threads in one shared inbox",
    ],
    tools: "GoHighLevel, Twilio, Zapier or Make, Facebook Lead Ads, and Angi, Thumbtack, or Google LSA lead feeds.",
    price: "$497 setup · $97/mo",
    launch: "3 to 5 days, plus A2P registration if it is not already done.",
  },
  {
    id: "text-back",
    pillar: "leads",
    name: "Missed-call text-back",
    outcome: "Every missed call gets a text within seconds, so the customer waits for you instead of calling the next company.",
    included: [
      "Text-back on your business line, in your brand voice",
      "One shared inbox on web and mobile",
      "After-hours and on-the-job variations",
      "A monthly tune-up",
    ],
    tools: "GoHighLevel, Twilio, and your existing carrier or call forwarding.",
    price: "Included in Starter ($497 setup · $197/mo, with review requests and the shared inbox). Standalone: $297 setup · $97/mo",
    launch: "As little as 7 days. A2P registration can add time.",
    href: "/missed-call-text-back",
  },
  {
    id: "receptionist",
    pillar: "convert",
    name: "AI receptionist",
    outcome: "Every call is answered 24/7 in English or Spanish, qualified, and booked, without hiring another front-desk person.",
    included: [
      "A custom voice agent trained on your services, service area, hours, and booking rules",
      "After-hours, overflow, or all-calls coverage",
      "Smart live transfer and urgent-lead alerts",
      "Emergency rules for gas, flooding, active leaks, and accidents",
      "A recording disclosure in a script you approve",
      "Call summaries and transcripts sent to you",
      "Monthly script optimization",
    ],
    tools: "Retell AI, Twilio, Cal.com or GoHighLevel calendars, and ServiceTitan, Jobber, Housecall Pro, or Clio via API or webhooks.",
    price: "Included in Growth: $1,497 setup · $497/mo. Bilingual is +$297 setup and +$97/mo on Starter or Growth, and included in Full Stack. An additional location or line is +$147/mo.",
    launch: "As little as 7 days.",
    href: "/ai-receptionist",
    note: "Florida is an all-party consent state. When recording is on, the script says the call is recorded before the conversation continues. This is general guidance, not legal advice.",
  },
  {
    id: "booking",
    pillar: "convert",
    name: "Auto-booking into calendars and job systems",
    outcome: "Appointments land in the calendar and job system you already use, with no double entry.",
    included: [
      "Booking rules by service type, zone, and technician",
      "Real-time availability",
      "A job or matter created in your CRM or field-service software with the intake details",
      "Confirmation text and email",
      "Reminders and no-show follow-up as the current add-on",
    ],
    tools: "Cal.com, Google Calendar, GoHighLevel, ServiceTitan, Jobber, Housecall Pro, Clio, Zapier, or Make.",
    price: "Calendar booking is included in Growth. A direct field-service or practice-system integration is $750 to $1,500 setup · $97/mo. Reminders and no-show follow-up are $297 setup · $47/mo.",
    launch: "1 to 2 weeks for a job-system integration. Reminders are 3 to 5 days.",
  },
  {
    id: "quotes",
    pillar: "convert",
    name: "Quote and estimate follow-up",
    outcome: "Open estimates stop dying in the inbox. More quotes turn into signed jobs without you chasing anyone.",
    included: [
      "A trigger from estimate status in your field-service software or CRM",
      "A personalized text and email sequence on day 1, 3, 7, 14, and 30",
      "Answers to common objections you approve, such as financing, timing, and insurance",
      "“Ready to schedule” replies routed to your team",
      "A monthly close-rate report from your own numbers",
    ],
    tools: "Jobber, Housecall Pro, ServiceTitan, GoHighLevel, Twilio, Zapier or Make, and OpenAI or Claude.",
    price: "$497 to $750 setup · $147/mo",
    launch: "5 to 7 days.",
  },
  {
    id: "qualification",
    pillar: "convert",
    name: "AI lead qualification and routing",
    outcome: "The team spends time on real jobs and real cases. Tire-kickers and out-of-area leads are filtered first.",
    included: [
      "Qualification questions by service or case type",
      "Lead scoring",
      "Routing rules: a hot lead to the owner’s cell, a standard lead to booking, an out-of-area lead to a polite referral",
      "Law-firm intake screening with conflict-check fields and an attorney handoff",
      "CRM tagging",
    ],
    tools: "Retell AI, GoHighLevel, OpenAI or Claude, Zapier or Make, and Clio Grow or Lawmatics for law firms.",
    price: "Basic qualification is included in Growth. Advanced qualification and routing: $750 to $1,500 setup · $197/mo",
    launch: "1 to 2 weeks.",
    note: "The AI never gives legal advice. Conflict screening stays with a person. This is general guidance, not legal advice.",
  },
  {
    id: "reviews",
    pillar: "keep",
    name: "Review requests and AI review responses",
    outcome: "More Google reviews, and every review gets a thoughtful reply without you writing it.",
    included: [
      "A review request by text and email after each completed job",
      "AI-drafted replies in your voice",
      "Positive reviews can be posted for you; negative ones come to you for approval first",
      "Every customer is asked. There is no review gating.",
    ],
    tools: "GoHighLevel Reputation, Google Business Profile, and OpenAI or Claude.",
    price: "Review requests are included in Starter. AI review responses: $197 setup · $97/mo",
    launch: "3 to 5 days.",
    href: "/review-automation",
    note: "Review gating is against Google’s policy and FTC rules. This is general guidance, not legal advice.",
  },
  {
    id: "reputation",
    pillar: "keep",
    name: "Reputation monitoring",
    outcome: "You hear about a bad review within minutes, and you can see how you compare with local competitors.",
    included: [
      "Alerts for new reviews on Google, Yelp, Facebook, BBB, Angi, and Nextdoor where those sources are available",
      "A weekly digest",
      "Competitor review count and rating tracking",
      "A recovery playbook for unhappy customers",
    ],
    tools: "GoHighLevel Reputation, BrightLocal, Google Alerts, and Zapier.",
    price: "$97/mo, setup included. $147/mo bundled with AI review responses.",
    launch: "3 days.",
  },
  {
    id: "reactivation",
    pillar: "keep",
    name: "Reactivation campaigns",
    outcome: "Revenue from the customer list you already have, without spending on ads.",
    included: [
      "Export and clean the past-customer list",
      "Segments by service and last visit",
      "An AI-written email, and a text for customers who opted in, with a timely reason to come back",
      "Replies handled and booked",
      "A results report from that campaign",
    ],
    tools: "GoHighLevel, Twilio, Mailgun or LeadConnector, and a CSV export from Jobber, ServiceTitan, or QuickBooks.",
    price: "$750 one-time per campaign. Ongoing quarterly reactivation: $297/mo",
    launch: "1 week.",
    href: "/customer-reactivation",
    note: "Marketing texts require prior express written consent under TCPA and Florida’s FTSA. Email is used for anyone without text consent. This is general guidance, not legal advice.",
  },
  {
    id: "memberships",
    pillar: "keep",
    name: "Maintenance and membership reminders",
    outcome: "Tune-ups, quarterly treatments, and inspections book themselves on schedule.",
    included: [
      "Reminder schedules by service",
      "A self-booking link",
      "A membership page with recurring billing",
      "Renewal and failed-payment reminders",
    ],
    tools: "GoHighLevel, ServiceTitan or Housecall Pro memberships, Stripe, Twilio, and Cal.com.",
    price: "$497 setup · $97 to $147/mo",
    launch: "1 week.",
  },
  {
    id: "referrals",
    pillar: "keep",
    name: "Referral automation",
    outcome: "Happy customers send you their neighbors without a manual ask each time.",
    included: [
      "A referral ask after a 5-star review or a completed job",
      "A unique referral link or code",
      "Tracking and a thank-you reward, such as a gift card or service credit",
      "A referral count in your reporting",
    ],
    tools: "GoHighLevel, Stripe or Tremendous for rewards, Twilio, and Zapier.",
    price: "$497 setup · $97/mo",
    launch: "1 week.",
    note: "For law firms, referral asks are thank-you messages only, with no paid rewards, so the program stays within Florida Bar rules on giving value for referrals. This is general guidance, not legal advice.",
  },
  {
    id: "crm",
    pillar: "ops",
    name: "CRM setup and integrations",
    outcome: "One system where every lead, call, text, job, and payment lives, connected to the tools you already pay for.",
    included: [
      "CRM selection or cleanup",
      "Pipeline stages for your sales process",
      "Data import",
      "Integrations between phone, website, ads, field-service or practice software, and accounting",
      "Team training on a recorded Loom",
      "Ongoing maintenance and fixes",
    ],
    tools: "GoHighLevel, HubSpot, Jobber, Housecall Pro, ServiceTitan, Clio, QuickBooks, Zapier, Make, and n8n.",
    price: "$997 to $2,500 setup · $197 to $297/mo, including sub-account management and maintenance",
    launch: "1 to 3 weeks.",
  },
  {
    id: "dashboards",
    pillar: "ops",
    name: "Reporting dashboards",
    outcome: "One screen, and a Monday-morning text, for leads, calls answered, jobs booked, revenue by source, and reviews.",
    included: [
      "KPI definition with you",
      "A live dashboard from phone, CRM, ads, and reviews",
      "Cost per lead and cost per booked job by channel, from your numbers",
      "A weekly email or text summary in plain English",
    ],
    tools: "Looker Studio, Google Sheets, GoHighLevel reporting, CallRail, Retell analytics, and Supabase.",
    price: "$750 to $1,500 setup · $147/mo",
    launch: "1 to 2 weeks.",
  },
  {
    id: "assistants",
    pillar: "ops",
    name: "Internal AI assistants and SOP bots",
    outcome: "Techs and office staff get answers from your own playbook, and new hires get up to speed from the same source.",
    included: [
      "A knowledge base from your SOPs, price book, warranties, scripts, and past jobs",
      "An assistant by text, Slack, or web",
      "Uses such as warranty lookups, estimate drafting, job notes turned into a customer summary, and intake memos for attorney review",
      "Access controls",
      "Monthly content updates",
    ],
    tools: "OpenAI or Claude, Notion, Google Drive, Slack or Microsoft Teams, Twilio, Supabase, and custom builds.",
    price: "$1,500 to $3,500 setup · $197 to $497/mo. Larger builds are scoped under Custom AI Systems.",
    launch: "2 to 3 weeks.",
  },
  {
    id: "invoicing",
    pillar: "ops",
    name: "Invoicing and payment reminders",
    outcome: "Get paid faster, without awkward collection calls.",
    included: [
      "An invoice when a job is marked complete",
      "A text-to-pay link",
      "A reminder sequence at the due date, then 3, 7, and 14 days",
      "An escalation alert to you",
      "Deposit requests for large jobs",
      "A paid and unpaid view",
    ],
    tools: "QuickBooks Online, Stripe, Square, Jobber or Housecall Pro payments, GoHighLevel text-to-pay, and Zapier.",
    price: "$497 setup · $97/mo",
    launch: "5 to 7 days.",
  },
];

export type LocalPage = {
  slug: string;
  serviceId: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  story: string[];
};

export const localPages: LocalPage[] = [
  {
    slug: "missed-call-text-back",
    serviceId: "text-back",
    title: "Missed-Call Text-Back for Miami Service Companies | Launchline Design",
    description:
      "A text goes out within seconds of a missed call on your Miami business line. Included in Starter at $497 setup and $197 a month. Standalone from $297 setup.",
    eyebrow: "Miami · Starter",
    h1: "The missed call gets a text before they dial the next roofer.",
    lede: "Launchline puts missed-call text-back on the line you already use. The script is yours. The thread lands in one inbox.",
    story: [
      "A crew on a tile roof in Kendall, an HVAC tech in an August attic, a plumber under a house, a pest tech mid-route: the phone rings and nobody can take it. The next listing answers. Text-back does not pretend to be a person on the roof. It replies, in the voice you approved, and holds the lead until you are free.",
      "Starter is the package that includes this, plus Google review requests and the shared inbox: $497 to set up and $197 a month. A free 14-day pilot is available. You keep it only if it is catching calls you would have missed. Standalone text-back, without the rest of Starter, is $297 to set up and $97 a month.",
      "Business texting needs A2P 10DLC carrier registration, which often takes 1 to 3 weeks. Launchline starts that on day one. The reply identifies who is texting and how to stop. That is general guidance for TCPA and Florida’s FTSA, not legal advice.",
    ],
  },
  {
    slug: "google-business-profile-optimization-miami",
    serviceId: "gbp",
    title: "Google Business Profile Optimization in Miami | Launchline Design",
    description:
      "Google Business Profile rebuild, citation cleanup, and map-pack tracking for Miami service companies. $497 to $997 setup and $297 to $497 a month.",
    eyebrow: "Miami · Local SEO",
    h1: "Show up when Miami searches “roofer near me.”",
    lede: "Categories, services, photos, citations, and a booking link, then a monthly rank grid against the three competitors who already own the map pack.",
    story: [
      "A Miami roofer, plumber, or HVAC company can have a busy truck and a Google profile that still lists the old hours, the wrong category, and no booking link. The map pack is where the emergency search starts. This service rebuilds the profile and cleans the directories that disagree with it.",
      "Setup is $497 to $997. Monthly management is $297 to $497, including two to four posts and a rank grid. The profile can be optimized in 1 to 2 weeks. Movement in the pack usually takes 60 to 90 days. That is a typical window, not a ranking promise.",
      "Full Stack includes this management. If you only want the profile fixed, buy it on its own. You keep the Google account.",
    ],
  },
  {
    slug: "review-automation",
    serviceId: "reviews",
    title: "Review Automation for Miami Businesses | Launchline Design",
    description:
      "Automated Google review requests after each job, plus AI-drafted replies. Requests are included in Starter. AI responses are $197 setup and $97 a month.",
    eyebrow: "Miami · Keep and grow",
    h1: "Ask every customer. Reply without writing it yourself.",
    lede: "A review request goes out after the job. New reviews get a draft in your voice. Negative ones wait for your approval.",
    story: [
      "The request is part of Starter, $497 to set up and $197 a month, along with missed-call text-back. AI replies are a separate add-on at $197 to set up and $97 a month, or $147 a month bundled with reputation monitoring.",
      "Every customer is asked. Launchline does not set up review gating. Happy customers are not filtered in and unhappy ones filtered out. That practice conflicts with Google’s policy and FTC rules. This is general guidance, not legal advice.",
      "Reputation monitoring, on the same pillar, alerts you when a new review shows up on Google, Yelp, Facebook, BBB, Angi, or Nextdoor where those sources exist.",
    ],
  },
  {
    slug: "ai-chat-widget",
    serviceId: "chat",
    title: "AI Website Chat for Miami Businesses | Launchline Design",
    description:
      "Website chat trained on your services, service area, and published prices. Included in Growth. Standalone is $497 setup and $147 a month.",
    eyebrow: "Miami · Growth",
    h1: "The 11 p.m. visitor gets an answer and a time.",
    lede: "Chat knows the services, the FAQs, the area you cover, and the prices you chose to publish. It captures the lead and can book.",
    story: [
      "A homeowner comparing roofers at night will not wait until your office opens. The widget answers from the material you approved, asks for a name and phone, and can hand the thread to text so it continues on their phone.",
      "Growth includes the chat widget with the voice receptionist: $1,497 to set up and $497 a month. On its own, chat is $497 to set up and $147 a month, live in 5 to 7 days.",
      "It does not invent a price. Anything outside the approved answers goes to a person. Spanish is an option, and it is included when you are on Full Stack.",
    ],
  },
  {
    slug: "customer-reactivation",
    serviceId: "reactivation",
    title: "Customer Reactivation Campaigns | Launchline Design",
    description:
      "A one-time campaign to past customers for $750, or quarterly reactivation at $297 a month. Email for anyone who has not opted into texts.",
    eyebrow: "Miami · Keep and grow",
    h1: "Work the list you already paid to build.",
    lede: "A hurricane-season roof check, a pre-summer AC tune-up, an annual termite inspection. A reason to come back, written in your voice.",
    story: [
      "The list is exported from Jobber, ServiceTitan, QuickBooks, or a spreadsheet, then cleaned and split by service and last visit. Replies can be booked. You get a report of that campaign, not a borrowed industry statistic.",
      "One campaign is $750. Quarterly reactivation is $297 a month. A campaign can be ready in about a week.",
      "Marketing texts go only to people who gave prior express written consent. Everyone else gets email. That is the TCPA and Florida FTSA constraint Launchline follows. It is general guidance, not legal advice.",
    ],
  },
];

export function getPillar(id: PillarId): Pillar {
  const pillar = pillars.find((item) => item.id === id);
  if (!pillar) {
    throw new Error(`Unknown pillar: ${id}`);
  }
  return pillar;
}

export function servicesFor(id: PillarId): Service[] {
  return services.filter((service) => service.pillar === id);
}

export function getService(id: string): Service {
  const service = services.find((item) => item.id === id);
  if (!service) {
    throw new Error(`Unknown service: ${id}`);
  }
  return service;
}

export function getLocalPage(slug: string): LocalPage | undefined {
  return localPages.find((page) => page.slug === slug);
}

export const ownershipLine =
  "You own the accounts, the ads, the phone numbers, and the data. Launchline does not keep your customer list as its own product.";

export const complianceLine =
  "Compliance notes on this page are general guidance, not legal advice. Have your own counsel review scripts before they go live.";
