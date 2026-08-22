import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "roaches-in-an-apartment-building",
  title: "Roaches In An Apartment Building: Why One Unit Cannot Solve It",
  meta: "Why roaches in an apartment are a building problem rather than a cleaning one, what cleaning genuinely does, what to report and how, and why store-bought foggers backfire.",
  keywords: "roaches in apartment building, cockroach landlord responsibility, german cockroach apartment, report roaches rental, roach treatment apartment",
  category: "Odor and pests",
  topic: "odor-pests",
  genre: "scope",
  readTime: "8 min read",
  date: "2026-08-22",
  heroImage: "/apartment-detail-new.jpg",
  summary: "The honest version: this is not a problem a tenant can clean their way out of, and treating it as one loses time that matters.",
  answer: "Roaches move between units through wall voids, plumbing chases, and shared spaces, so an infestation is a building-level problem and treating one apartment rarely resolves it. Cleaning removes the food, water, and hiding places that let numbers grow, and it does not eliminate an established population. Report it in writing immediately and coordinate treatment through the building.",
  primaryLinks: [
    { label: "Deep apartment cleaning", href: "/deep-apartment-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "Cleaning FAQ", href: "/faq/" },
  ],
  sections: [
    {
      title: "Say the uncomfortable part first",
      paragraphs: [
        "Roaches in a multi-unit building are not a housekeeping verdict. They travel through wall voids, along plumbing and electrical chases, under baseboards, and through shared corridors, which means a spotless apartment next to an infested one still gets them.",
        "This matters because the usual response is shame followed by cleaning harder, and both cost time. The apartment does need to be clean, and cleaning alone will not end it. Reporting early is the action with the most leverage, and it is the one people delay longest.",
      ],
    },
    {
      title: "What the sightings tell you",
      bullets: [
        "Roaches are nocturnal, so seeing one during the day usually means the population is large enough that they are competing for space.",
        "Small ones mean breeding is happening nearby rather than something wandering in.",
        "Droppings that look like coffee grounds or black pepper along cabinet edges indicate an established harborage.",
        "A musty or oily smell in a cabinet is a sign of a significant population.",
        "Sightings in the bathroom point at moisture and plumbing routes as much as at food.",
      ],
      closing: [
        "None of this is a diagnosis, and all of it is worth writing down with dates and photographs, because it is exactly what a professional will ask and what makes a report actionable.",
      ],
    },
    {
      title: "What cleaning genuinely does",
      paragraphs: [
        "Cleaning removes what lets a population grow: food residue, water, and clutter to hide in. That slows growth and it makes professional treatment far more effective, because bait competes with whatever else is available in the kitchen.",
        "So it is worth doing properly: crumbs, grease behind and under appliances, the gap beside the stove, food in sealed containers, pet food not left down, dishes not left overnight, and no standing water in sinks or under the sink. Cardboard is worth removing too, since it is both harborage and a common way they arrive.",
      ],
    },
    {
      title: "What not to do",
      paragraphs: [
        "Store-bought foggers and bombs are the classic mistake. They kill what is in the open and drive the rest deeper into wall voids and into neighbouring units, which spreads the problem and makes the professional treatment that follows harder. Several pest control bodies advise against them specifically for this reason.",
        "Sealing every gap yourself before treatment can also work against you, since technicians need access to the routes they are treating. And spraying repellents around bait stations makes the bait useless, which is a common way a treatment quietly fails.",
      ],
    },
    {
      title: "How to report it so it moves",
      bullets: [
        "In writing, the same day, with photos and the dates and locations of sightings.",
        "State clearly whether you have seen them during daylight, since that changes urgency.",
        "Ask specifically for a professional inspection of your unit and the adjacent ones, above, below, and either side.",
        "Ask whether other units have reported it, which tells you whether this is being handled building-wide.",
        "Keep every reply. If treatment happens once and stops, the record is what supports asking for a follow-up.",
        "Follow the preparation instructions exactly when treatment is scheduled, since a poorly prepped unit is a wasted visit.",
      ],
      closing: [
        "In most leases pest control in a multi-unit building is the landlord's responsibility rather than the tenant's, though local rules and lease terms vary. Read yours, and check the rules where you live rather than assuming either way.",
      ],
    },
    {
      title: "The clean that supports treatment",
      paragraphs: [
        "Before and after a treatment, the useful cleaning is the kind that reaches where they live rather than where they are seen: behind and under appliances, inside and under cabinets, the gap between the counter and the stove, and any grease film that gives them a food source.",
        "That is a deep clean rather than a regular one, and it is the version worth timing around the treatment date rather than doing at random.",
      ],
      closing: [
        "Those areas are exactly the scope of ",
        { label: "deep apartment cleaning", href: "/deep-apartment-cleaning/" },
        ": appliance interiors, behind and under units, and cabinet interiors. The ",
        { label: "cleaning checklist", href: "/apartment-cleaning-checklist/" },
        " lists what a deep visit reaches in a kitchen.",
      ],
    },
  ],
  faqs: [
    { q: "Are roaches in an apartment the landlord's responsibility?", a: "In most leases pest control in a multi-unit building sits with the landlord, since the problem crosses units. Local rules and lease terms vary, so read yours and check the rules where you live." },
    { q: "Can I get rid of roaches by cleaning?", a: "Cleaning removes the food, water, and hiding places that let numbers grow and makes treatment more effective. It does not eliminate an established population, because they live in the structure rather than in your unit." },
    { q: "Should I use a roach fogger or bomb?", a: "Better not to. Foggers kill what is in the open and push the rest into wall voids and neighbouring units, which spreads the problem and makes professional treatment harder." },
    { q: "Does seeing one roach mean there are more?", a: "Usually. They are nocturnal, so a daytime sighting generally means the population is large enough that they are competing for space." },
  ],
  relatedSlugs: ["ants-in-an-apartment-kitchen", "pantry-moths-in-an-apartment", "fruit-flies-gnats-drain-flies-apartment-cleaning"],
}

export default article
