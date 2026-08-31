import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "cleaning-after-a-difficult-tenant",
  title: "A Unit Left In Bad Condition: Sequencing The Recovery",
  meta: "How property managers should handle a unit left in serious disorder: what to document first, where cleaning stops and specialists begin, and how to protect the turn schedule.",
  keywords: "unit left in bad condition, cleaning after bad tenant, abandoned belongings apartment, hoarding unit turnover, damage recovery rental cleaning",
  category: "Property management",
  topic: "property-management",
  genre: "problem-fix",
  readTime: "8 min read",
  date: "2026-08-31",
  heroImage: "/apartment-supplies-new.jpg",
  summary: "The instinct is to get a crew in immediately, and the order that actually works starts with a camera and a phone call.",
  answer: "Document before anything is touched, because the record is what supports any cost recovery and it stops existing the moment cleaning starts. Then separate the job into removal, specialist work, repairs, and cleaning, and schedule them in that order rather than sending a cleaning crew into a unit that is not a cleaning problem yet.",
  primaryLinks: [
    { label: "Apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
    { label: "Deep apartment cleaning", href: "/deep-apartment-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
  ],
  sections: [
    {
      title: "Document before anyone touches anything",
      paragraphs: [
        "Photograph and video everything, room by room, wide shots and close ups, before a single item is moved. Include meter readings, appliance interiors, and anything that will be a charge.",
        "This is the step that gets skipped under time pressure and it is the only one that cannot be redone. The moment a crew starts, the evidence for any deduction or claim is gone, and what remains is a memory and an invoice.",
      ],
    },
    {
      title: "Check the legal position on belongings before removing them",
      paragraphs: [
        "Abandoned property has rules, and they differ by location: notice periods, storage obligations, and what may be disposed of and when. Getting this wrong is expensive in a way that a delayed turn is not.",
        "Confirm the position for your jurisdiction before anything leaves the unit, and record what was there. This page is about sequencing the work rather than legal advice, and this is the one point where checking first is not optional.",
      ],
    },
    {
      title: "Sort the job into four, in this order",
      bullets: [
        "Removal: belongings, furniture, rubbish. This is a hauling job, not a cleaning one, and pricing it as cleaning is how quotes go wrong.",
        "Specialist work: biohazard, sewage, heavy mould, pest infestation, smoke damage. Different services, different equipment, different disposal rules.",
        "Repairs: anything broken, damaged flooring, holes, appliances, plumbing.",
        "Cleaning: last, and only once the unit is empty and the repairs are done.",
      ],
      closing: [
        "Sending a cleaning crew first is the most common and most expensive mistake here. They cannot work around a full unit, they are not equipped for the specialist categories, and the visit gets paid for twice.",
      ],
    },
    {
      title: "Where cleaning genuinely stops",
      paragraphs: [
        "A cleaning company handles dirt, grease, buildup, and appliance interiors. It does not handle bodily fluids, needles, animal waste beyond a normal litter tray, sewage, or a unit affected by pests until treatment has happened.",
        "Heavy hoarding is also a separate category, because it involves sorting and disposal decisions rather than cleaning, and because what is underneath is unknown until the sorting is done. Booking a standard clean into that situation produces a crew standing in a hallway making phone calls.",
      ],
    },
    {
      title: "Protecting the turn schedule",
      bullets: [
        "Get a walkthrough with the vendor before quoting, since photographs understate this category consistently.",
        "Assume two visits for cleaning: one after removal and repairs, one after any smell or residue work has settled.",
        "Book the specialist services first, because they have the longest lead times.",
        "Do not advertise a move-in date until removal and repairs are scheduled, not just quoted.",
        "Tell the vendor what they are walking into, plainly. A crew that arrives prepared works; a crew that is surprised leaves.",
      ],
    },
    {
      title: "Smoke and odour, which behave differently",
      paragraphs: [
        "Odour from smoke or animals is the item most likely to survive a full clean and be discovered by the next resident. It lives in carpet pad, walls, and ventilation rather than on surfaces.",
        "Plan for it rather than hoping: carpet and pad replacement rather than extraction, sealing and repainting rather than washing walls, and vent cleaning. Any of those done after a new resident has moved in costs several times what it costs in an empty unit.",
      ],
      closing: [
        "Once the unit is back to a normal starting point, the standard between residents is what ",
        { label: "apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
        " is scoped around, and ",
        { label: "deep apartment cleaning", href: "/deep-apartment-cleaning/" },
        " is the reset that brings it there. The ",
        { label: "checklist", href: "/apartment-cleaning-checklist/" },
        " is the document to quote and sign off against.",
      ],
    },
  ],
  faqs: [
    { q: "What should a property manager do first with a unit left in bad condition?", a: "Document everything with photographs and video before anything is moved, since that record supports any cost recovery and stops existing the moment cleaning begins." },
    { q: "Can I throw out belongings a tenant left behind?", a: "Rules on abandoned property differ by location, including notice periods and storage obligations. Confirm the position for your jurisdiction before anything leaves the unit." },
    { q: "In what order should the work happen?", a: "Removal, then specialist services, then repairs, then cleaning. Sending a cleaning crew into a full unit means paying for the visit twice." },
    { q: "What will a cleaning company not take on?", a: "Bodily fluids, needles, sewage, animal waste beyond a normal litter tray, active pest infestations, and heavy hoarding. Those are specialist services with different equipment and disposal rules." },
  ],
  relatedSlugs: ["cleaning-a-unit-that-sat-empty", "writing-a-cleaning-scope-for-vendors", "what-a-cleaning-service-will-not-do"],
}

export default article
