export const membershipIntro = {
  title: "Membership",
  subtitle: "Oliver Wayne rental and relocation services membership",
};

export const membershipScope = {
  title: "Scope",
  paragraphs: [
    "We focus our research on lodging availability in specific areas with a high need for Essential Critical Infrastructure Workers and Contractors in the Defense Industrial Base. We have narrowed the search to include only Shipbuilding job locations currently.",
    "To qualify for membership, workers must have at least two years of experience with companies or subcontractors under contract with the Department of Defense (DoD), or at government-owned/contractor-operated (GOCO) or government-owned/government-operated (GOGO) facilities.",
    "A partial list of qualifying shipbuilding jobs includes engineers, designers, IT professionals, and manufacturing trades such as shipfitters, welders, pipefitters, electricians, machinists, painters, and blasters. Any job with two years of experience in building ships, submarines, or related parts qualifies you for free membership.",
    "The Cybersecurity and Infrastructure Security Agency (CISA), which operates within the Department of Homeland Security (DHS), is responsible for securing the nation's critical infrastructure and can provide additional guidance on defining Essential Critical Infrastructure Workers and Contractors.",
    "Members with active accounts may be eligible for discounts as critical infrastructure workers and contractors.",
  ],
};

export const membershipApplicationFields = [
  "Full name",
  "Email address",
  "Phone number",
  "Occupation / job title",
  "Qualifying projects or employer",
  "Years of experience",
];

export const membershipPaymentNote = {
  free: "Silver membership is free. After you submit your application details, our team reviews your qualifications. No payment is required.",
  paid:
    "Gold membership is billed securely by card at checkout (monthly or annual). You will receive a confirmation email after payment. Cancel at any time — your access continues through the end of the current billing period.",
};

export const membershipPlans = [
  {
    id: 1,
    title: "Silver Member (Free)",
    price: "Free",
    description: "Two to Forty years of experience",
    applicationItems: [
      "Name",
      "Occupation",
      "Qualifying Projects",
      "Years of experience",
    ],
    benefits: ["View all available rental options."],
    isPaid: false,
  },
  {
    id: 2,
    title: "Gold Member",
    price: "$7.00 / month",
    priceAlt: "or $80.00 / annually",
    description:
      "Members with two to ten years of experience. Cancel at any time.",
    benefits: [
      "Priority placement recommended by Oliver Wayne.",
      "Instant notifications for new properties or price changes.",
      "Cancel at any time.",
    ],
    isPaid: true,
  },
];
