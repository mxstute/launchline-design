export type Industry = {
  slug: string;
  name: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  story: string[];
  scenarios: { title: string; text: string }[];
  handles: string[];
  handsOff: string[];
  fit: string;
  note?: string;
};

export const industries: Industry[] = [
  {
    slug: "home-services",
    name: "Home services",
    title: "AI for Miami Home Service Companies | Launchline Design",
    description:
      "Missed-call text-back, review requests, and an AI receptionist for Miami roofing, HVAC, plumbing, and pest control. Built in Miami by Myles Stute.",
    eyebrow: "Roofing, HVAC, plumbing, pest control",
    h1: "The phone rings while your crew is on the job.",
    lede: "Launchline sets up missed-call text-back, review requests, and a 24/7 receptionist for Miami home service companies. The caller gets an answer. You get the lead when you are back on the ground.",
    story: [
      "A roofing crew on a tile roof in Kendall cannot take the estimate call. An HVAC tech in an August attic cannot either. The next company in the search results can. Missed-call text-back replies on your line the moment the call drops, in a script you approve, and the thread lands in one shared inbox.",
      "When the phone is steady enough that text-back is not enough, Growth adds a voice receptionist. It asks whether anyone is unsafe, separates a no-cool emergency from a tune-up, and books a window on your calendar. After the job, a review request goes out on its own.",
      "Myles Stute also runs Magic City Services, a home services business in Miami. The scripts are written with that constraint in mind: the owner is often the one on the tools, and the phone still has to be covered.",
    ],
    scenarios: [
      {
        title: "Roofing",
        text: "Estimate requests, insurance questions you choose to answer, and the surge of calls after a storm. The crew stays on the roof.",
      },
      {
        title: "HVAC",
        text: "No-cool and no-heat calls sorted from maintenance. Urgent ones alert you. The rest get a booked window.",
      },
      {
        title: "Plumbing",
        text: "An active leak is not a remodel quote. The AI asks which it is, then books or escalates.",
      },
      {
        title: "Pest control",
        text: "Route-day calls that currently die in voicemail get a text back and a chance to book the next opening.",
      },
    ],
    handles: [
      "Missed-call text-back on the line you already use",
      "Booking a service window into your calendar",
      "Asking if anyone is unsafe before treating a call as routine",
      "A Google review request after the job or visit",
      "An urgent alert to the owner or on-call tech",
    ],
    handsOff: [
      "Gas smell, electrical danger, or anyone who might be hurt: the script tells the caller to contact emergency services and alerts you",
      "Prices you have not approved",
      "Disputes and complaints, which go to a person",
    ],
    fit: "Starter is built for owner-operators who miss calls on the job. Growth fits companies whose phone rings all day. Spanish on Starter or Growth is an add-on. Full Stack includes bilingual voice, chat, and text, plus one field-service booking connection. Custom AI Systems is the scoped line for a one-off build.",
    note: "Additional locations or phone lines are $147 a month each.",
  },
  {
    slug: "law-firms",
    name: "Law firms",
    title: "AI Intake for Miami Law Firms | Launchline Design",
    description:
      "After-hours intake and conflict-screening questions for Miami law firms. The AI books a consult. It does not give legal advice.",
    eyebrow: "Miami law firms",
    h1: "Intake that does not wait until morning.",
    lede: "After-hours callers answer the questions you approve, including the names a person needs for a conflict check, and book a consult. The AI does not practice law and does not give legal advice.",
    story: [
      "A prospective client calling a Brickell or Coral Gables firm at 9pm will not leave a useful voicemail, and they may call the next firm. Growth answers, collects the matter type, and offers a consult time from the calendar you connect.",
      "Conflict screening stays with a person. The AI can ask for the caller’s name, the other parties, and a short description of the matter, using the questions you write. It does not tell the caller they are cleared, and it does not discuss strategy.",
      "Existing clients who need the attorney get a message taken and a transfer or alert, based on the rules you set. The AI’s job is the front door, not the representation.",
    ],
    scenarios: [
      {
        title: "New matter, after hours",
        text: "Who is calling, what kind of matter, and when they can meet. A consult gets booked or a coordinator gets the summary in the morning.",
      },
      {
        title: "Conflict questions",
        text: "Names and adverse parties are collected for a person to check. The AI never says there is no conflict.",
      },
      {
        title: "Existing clients",
        text: "A message is taken. Legal questions wait for the attorney. Urgent matters follow the transfer rules you approve.",
      },
      {
        title: "Spanish-speaking callers",
        text: "Bilingual intake is an add-on on Growth, and it is included in Custom. Miami firms should assume they will need it.",
      },
    ],
    handles: [
      "After-hours and overflow answering",
      "Practice-area routing from a list you provide",
      "Consult booking on your calendar",
      "A written call summary for the intake coordinator",
      "Website chat trained only on the pages you approve",
    ],
    handsOff: [
      "Legal advice, case evaluation, and fee quotes that are not on the approved list",
      "Telling a caller they have cleared conflicts",
      "Anyone describing immediate danger: emergency services, then your team",
    ],
    fit: "Growth is the usual starting point for a firm with steady inbound calls. Full Stack adds bilingual intake, qualification, a practice-system connection such as Clio, and the rest of the journey. Custom AI Systems covers a one-off build. The integration is confirmed on the call, not assumed. Referral asks for firms are thank-you messages only, with no paid rewards.",
  },
  {
    slug: "med-spas",
    name: "Med spas",
    title: "AI Receptionist for Miami Med Spas | Launchline Design",
    description:
      "Consult booking, rebooking, and after-hours chat for Miami med spas. Clinical questions go to a person. You approve every script.",
    eyebrow: "Miami med spas",
    h1: "Consult requests answered before they book someone else.",
    lede: "Launchline covers the calls and chats that arrive after the front desk leaves: treatment questions from your approved menu, consult booking, and rebooking. Clinical questions go to your team.",
    story: [
      "A Miami Beach or Coral Gables spa loses consults at night to whoever answers. Growth puts an AI receptionist on after-hours, overflow, or every call, plus a website chat trained on your services, the prices you choose to publish, and your FAQs.",
      "The AI can book a consult and send a reminder if you add that on. It cannot tell someone they are a candidate for a treatment, and it cannot advise on a reaction. Those hand off to a person, every time.",
      "Rebooking and no-show follow-up are a separate add-on. Past-guest reactivation is a one-time campaign when you want a list worked through carefully, not blasted.",
    ],
    scenarios: [
      {
        title: "After-hours consult",
        text: "Which treatment they asked about, which location, and a booked consult. The summary is waiting in the morning.",
      },
      {
        title: "Price questions",
        text: "Only the numbers you have approved are spoken. Anything custom is handed to the coordinator.",
      },
      {
        title: "Rebooking",
        text: "A facial or follow-up gets a new time, and reminders can nudge no-shows.",
      },
      {
        title: "A medical concern",
        text: "The AI does not assess it. It reaches your team and tells the caller a person will follow up.",
      },
    ],
    handles: [
      "Voice answering and website chat on your approved menu",
      "Consult and rebooking appointments on your calendar",
      "Urgent-lead alerts to the front desk or owner",
      "Review requests after a visit, from the Starter tools included in Growth",
      "Optional reminders and no-show follow-up",
    ],
    handsOff: [
      "Medical advice, candidacy, and anything clinical",
      "Complaints about a result",
      "Health details, which should not be sent through the public form on this site",
    ],
    fit: "Growth is the package most med spas start with: $1,497 to set up and $497 a month. Bilingual English and Spanish is a common Miami add-on. If a business associate agreement is required for how you operate, it is scoped in the proposal before launch. Launchline does not claim a blanket HIPAA certification.",
  },
  {
    slug: "dental",
    name: "Dental",
    title: "AI Receptionist for Miami Dental Practices | Launchline Design",
    description:
      "After-hours answering, new-patient booking, and insurance questions from an approved list for Miami dental practices. No diagnosis.",
    eyebrow: "Miami dental practices",
    h1: "Covered after the last patient leaves.",
    lede: "New-patient calls, recall reminders, and “do you take my plan?” from a list you approve. The AI books the visit. It does not diagnose a toothache.",
    story: [
      "Front desks in Doral, Hialeah, Kendall, and Aventura spend the day on the same questions while the unanswered call goes to another practice. Growth answers after hours or on overflow, books into your calendar, and chats on the site from the FAQs you approve.",
      "Insurance answers stay inside the plan list you provide. The AI does not check live benefits and does not promise coverage. If the plan is not on the list, it says so and offers a person.",
      "Recall and no-show follow-up are an add-on. A true emergency — swelling, trauma, uncontrolled bleeding — is not a booking puzzle. The script directs the caller to emergency care and alerts the office.",
    ],
    scenarios: [
      {
        title: "New patient after work",
        text: "Reason for the visit, preferred time, and a booked new-patient slot. A summary lands with the front desk.",
      },
      {
        title: "Insurance questions",
        text: "Answered only from the plans you listed. No live benefit check unless a later custom scope builds one.",
      },
      {
        title: "Recalls and no-shows",
        text: "Reminders and a follow-up when someone misses. This is the reminders add-on, not the base Starter text-back.",
      },
      {
        title: "Tooth pain at night",
        text: "Details are collected. There is no diagnosis. Emergencies are told to seek urgent care and your team is alerted.",
      },
    ],
    handles: [
      "After-hours, overflow, or full-time voice answering",
      "New and returning patient booking",
      "Plan-list answers you have approved, word for word",
      "Missed-call text-back and review requests, included with Growth",
      "Call summaries so the morning huddle starts informed",
    ],
    handsOff: [
      "Diagnosis, treatment recommendations, and clinical advice",
      "Billing disputes and treatment-plan changes",
      "Live insurance verification, unless it is written into a custom scope",
    ],
    fit: "Growth is the fit for a single practice with steady calls. Full Stack covers bilingual answering and one practice-system connection. A narrower custom build starts at $3,500 to set up and $997 a month. Dentrix and similar systems are discussed on the call. They are not promised as a default.",
    note: "Spanish-language answering is an add-on on Growth and is included in Full Stack.",
  },
  {
    slug: "roofing",
    name: "Roofing",
    title: "AI for Miami Roofing Companies | Launchline Design",
    description:
      "Missed-call text-back and a 24/7 receptionist for Miami roofers. Storm-night leak calls get a text or a booked inspection. Starter, Growth, or Full Stack.",
    eyebrow: "Miami roofing",
    h1: "The storm-night leak call does not go to voicemail.",
    lede: "A homeowner in Kendall or Coral Gables calls while the crew is still on a roof, or at 9 p.m. after the wind dies down. Launchline answers on your line, asks about the damage, and books the inspection.",
    story: [
      "Sample day: rain hits after dinner. Three calls come in about an active leak, one about a quote from last month, and a property manager asking about an HOA. Nobody in the office is there. Text-back replies to the missed calls in the script you approved. On Growth, Ava’s setup answers, separates the active leak from the estimate, and puts an inspection on the calendar.",
      "Intake for a roofing call is the address, what is damaged, how urgent it is, and whether photos can come by text. Prices that are not on the approved list are not quoted. Gas smell, electrical danger, or anyone hurt is emergency services, then an alert to you.",
      "Myles Stute also runs Magic City Services in Miami. The missed-call problem is the one the crew already has, not a hypothetical.",
    ],
    scenarios: [
      {
        title: "Storm night",
        text: "Active leak versus a next-week inspection. Urgent ones alert the on-call tech. The rest get a window.",
      },
      {
        title: "Estimate left open",
        text: "Quote follow-up, on Full Stack or as an add-on, checks back on day 1, 3, 7, 14, and 30.",
      },
      {
        title: "HOA and property managers",
        text: "Prospecting, if you add it, is email to commercial accounts. No cold texts.",
      },
      {
        title: "After the job",
        text: "A review request goes out. Past customers can be invited back before the next season.",
      },
    ],
    handles: [
      "Missed-call text-back on the line you already use",
      "Address, damage, and urgency, plus a request for photos by text",
      "Booking an inspection window",
      "A Google review request after the job",
      "An urgent alert to the owner or on-call tech",
    ],
    handsOff: [
      "Anyone who might be hurt, or a gas or electrical danger: emergency services, then your team",
      "Prices and insurance positions you have not approved",
      "Complaints, which go to a person",
    ],
    fit: "Recommended start: Starter, if the crew misses calls on the roof. Recommended when the phone is the bottleneck: Growth. Full Stack when the map pack, open estimates, reviews, and the job system should run as one system.",
    note: "Spanish on Starter or Growth is an add-on. It is included in Full Stack.",
  },
  {
    slug: "hvac",
    name: "HVAC",
    title: "AI for Miami HVAC Companies | Launchline Design",
    description:
      "After-hours answering for Miami HVAC companies. A no-cool call in August is sorted from a tune-up and booked. Starter, Growth, or Full Stack.",
    eyebrow: "Miami HVAC",
    h1: "The August no-cool call gets a window, not a voicemail.",
    lede: "The tech is in an attic. The homeowner’s air is out. Launchline asks whether anyone is unsafe, then books the emergency or the maintenance visit.",
    story: [
      "Sample day: it is 94 degrees. The board is full of no-cool calls, one capacitor job that could wait, and a membership tune-up that was due in June. Growth answers, marks the no-cool as urgent, and offers the next real window. The tune-up gets a membership reminder instead of jumping the emergency queue.",
      "Maintenance reminders, on Full Stack or as an add-on, bring the twice-a-year tune-up back without a manual call. Quote follow-up covers the replacement estimate that usually dies after the tech leaves the driveway.",
      "The AI does not diagnose the system and does not invent a repair price. It uses the questions and the price list you approved.",
    ],
    scenarios: [
      {
        title: "No-cool in August",
        text: "Unsafe situations are escalated. A straight no-cool gets the on-call alert and a booked window.",
      },
      {
        title: "Tune-up due",
        text: "Membership reminders book the next visit from a self-serve link.",
      },
      {
        title: "Replacement estimate",
        text: "Follow-up on the days you choose, with the financing and timing answers you approved.",
      },
      {
        title: "After hours",
        text: "The summary is waiting in the morning, including what the caller already said.",
      },
    ],
    handles: [
      "Sorting no-cool and no-heat from maintenance",
      "Booking into the calendar, and into ServiceTitan, Jobber, or Housecall Pro on Full Stack",
      "Membership and tune-up reminders",
      "Review requests after the job",
      "Urgent alerts to the on-call tech",
    ],
    handsOff: [
      "Gas smell, electrical danger, or anyone who might be hurt",
      "A diagnosis or a price that is not on the approved list",
      "Warranty disputes, which go to a person",
    ],
    fit: "Recommended package: Growth for a company whose summer phone outruns the front desk. Add membership reminders when the maintenance base is the business. Full Stack when dispatch, estimates, reviews, and invoicing should share one system.",
  },
  {
    slug: "pest-control",
    name: "Pest control",
    title: "AI for Miami Pest Control Companies | Launchline Design",
    description:
      "Weekend termite and pest calls for Miami route businesses. Text-back, booking, and recurring-service reminders. Starter, Growth, or Full Stack.",
    eyebrow: "Miami pest control",
    h1: "The weekend termite swarm does not wait until Monday.",
    lede: "The route is already full. A homeowner sees swarmers on Saturday and calls the next company that answers. Launchline takes the pest, the property, and whether they want recurring service.",
    story: [
      "Sample day: Saturday morning, termite swarmers in a Coral Gables garage, a recurring customer who wants to move Tuesday’s treatment, and a restaurant asking about a commercial account. Text-back holds the missed calls. Growth asks the pest, the property type, and whether they want a one-time visit or a plan, then books the next opening.",
      "Quarterly treatment reminders are the membership service: a self-booking link on the schedule you set. Reactivation brings back accounts that lapsed after the last annual inspection.",
      "The AI does not recommend a chemical and does not promise a result. It books the visit and sends you the summary.",
    ],
    scenarios: [
      {
        title: "Weekend swarm",
        text: "Pest type, property, and urgency. A recurring plan is offered only with the language you approved.",
      },
      {
        title: "Route-day missed call",
        text: "Starter texts back while the tech is at the next stop. The thread is in the shared inbox.",
      },
      {
        title: "Quarterly service",
        text: "Membership reminders book the next treatment without a manual dial.",
      },
      {
        title: "Commercial prospect",
        text: "Outbound email prospecting is a separate add-on. It is not a cold text.",
      },
    ],
    handles: [
      "Pest type, property, and recurring-service questions",
      "Booking the next route opening",
      "Missed-call text-back during the route",
      "Review requests after the visit",
      "Quarterly reminders when that add-on or Full Stack is on",
    ],
    handsOff: [
      "Medical questions about bites or exposure",
      "Promises about elimination that you have not approved",
      "Billing disputes",
    ],
    fit: "Recommended start: Starter for a route that misses calls all day. Growth when weekend and after-hours swarms should be booked out loud. Full Stack when recurring service, reviews, and the map pack are part of the same system.",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    title: "AI for Miami Plumbing Companies | Launchline Design",
    description:
      "Active-leak calls versus remodel quotes for Miami plumbers. The AI asks which it is, then books or escalates. Starter, Growth, or Full Stack.",
    eyebrow: "Miami plumbing",
    h1: "An active leak is not a remodel quote.",
    lede: "Launchline asks which call it is, sends water-heater and drain jobs to the calendar, and alerts you when water is moving now.",
    story: [
      "Sample day: a slab leak that is still running, a water heater that is out, a kitchen remodel that wants a quote next month, and a property manager with three units. Growth separates them. The active leak alerts the on-call plumber. The remodel gets a booked estimate. The property manager’s details are in the summary.",
      "Photos by text help the water-heater and leak calls. The AI asks for them. It does not diagnose the pipe and it does not quote a number you have not approved.",
      "Full Stack adds estimate follow-up for the remodel quotes, invoicing when the job is marked complete, and the Google profile work that puts “emergency plumber Miami” in reach of the map pack. Ranking is not promised on a date.",
    ],
    scenarios: [
      {
        title: "Water moving now",
        text: "Address, what is leaking, and whether anyone is unsafe. The on-call tech is alerted.",
      },
      {
        title: "Water heater",
        text: "Age, symptoms, and photos by text. A window gets booked.",
      },
      {
        title: "Remodel quote",
        text: "Not an emergency. It is scheduled, then followed up if the estimate sits.",
      },
      {
        title: "After the job",
        text: "A review request, and a text-to-pay reminder if invoicing is in scope.",
      },
    ],
    handles: [
      "Sorting active leaks from scheduled work",
      "Address, fixtures, and a photo request",
      "Booking and an urgent alert",
      "Review requests after the job",
      "Estimate follow-up and invoicing when those services are included",
    ],
    handsOff: [
      "Gas smell, sewage in a living space with anyone unwell, or anyone who might be hurt: emergency services, then your team",
      "A diagnosis or an unapproved price",
      "Disputes about a previous repair",
    ],
    fit: "Recommended package: Growth, so the active leak is answered out loud. Starter if the only gap is the missed call while you are under a house. Full Stack for shops that also want estimate follow-up, reviews, local SEO, and payment reminders.",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
