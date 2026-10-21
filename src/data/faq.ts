import { DEMO_LINE } from "./site";

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How do you handle customer and patient data?",
    answer:
      "Phone numbers, calendars, and CRM records stay in accounts you own. Launchline does not keep your customer list as its own product. Phone, SMS, and AI usage is billed at cost with no markup. Dental practices and med spas should assume protected health information needs a written scope before anything goes live. Launchline does not claim a blanket HIPAA certification. If a business associate agreement is required, it is part of the proposal. Do not send health details through the form on this website.",
  },
  {
    question: "Are calls recorded, and what about consent?",
    answer:
      "Florida is an all-party consent state for recording private conversations. When recording is on, the AI identifies itself and says the call is recorded, using a script you approve, before the conversation continues. You are responsible for the consent rules that apply to your business, including TCPA rules for text messages. A missed-call text-back replies to someone who just called you. The script still says who is texting and how to stop. This is not legal advice. Have your own counsel review the script before launch.",
  },
  {
    question: "What does the voice sound like?",
    answer:
      `You hear it before it answers your customers. Call Ava at ${DEMO_LINE.display}, or request the 2-minute Loom on your website, and judge the tone yourself. If a voice does not fit the office, it gets changed before launch. Nothing goes live on your line until you approve the script.`,
  },
  {
    question: "What happens when the AI does not know the answer?",
    answer:
      "It does not invent one. Approved answers cover your services, hours, the prices you choose to publish, and your booking rules. Anything outside that — a legal question, a clinical question, an angry caller, a true emergency — transfers to your team or alerts them, using rules written with you. The caller is told a person will follow up. For gas smells, flooding near electrical equipment, or anyone in danger, the script tells the caller to contact emergency services and alerts you.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Starter is $497 to set up and $197 a month. Growth is $1,497 to set up and $497 a month. Custom AI systems start at $3,500 to set up and $997 a month. Those are starting points. The number you pay is the quote confirmed on the call. Phone, SMS, and AI usage are passed through at cost. Add-ons are listed on the pricing page.",
  },
  {
    question: "How fast can it go live, and is there a pilot?",
    answer:
      "Many Starter and Growth setups go live in as little as 7 days, after you approve every script. Custom scopes take longer and are written down before work starts. If you want to see Starter on your own line first, the 14-day pilot is free. You keep it only if it is catching calls you would have missed.",
  },
];

export function faqJsonLd(): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    "@id": "https://www.launchlinedesign.com/#faq",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
