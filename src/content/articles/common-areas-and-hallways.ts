import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "common-areas-and-hallways",
  title: "Common Areas: The Cleaning Residents Judge The Building By",
  meta: "How property managers should scope corridor, lobby, and stairwell cleaning: realistic frequencies, the items that get skipped, and why common areas drive renewals.",
  keywords: "common area cleaning schedule, hallway cleaning apartment building, lobby cleaning frequency, stairwell cleaning property management, common area scope",
  category: "Property management",
  topic: "property-management",
  genre: "scope",
  readTime: "7 min read",
  date: "2026-08-28",
  heroImage: "/apartment-hero-new.jpg",
  summary: "A resident sees the lobby twice a day and the inside of their unit's turnover once, and only one of those shapes how they describe the building.",
  answer: "Common areas need a frequency-based scope rather than a task list: daily for the lobby and entrance, two or three times a week for corridors and lifts, weekly for stairwells, and monthly for the items nobody assigns to anyone. The parts that get skipped are the ones between two contractors' scopes.",
  primaryLinks: [
    { label: "Apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "Apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
  ],
  sections: [
    {
      title: "Why this gets underweighted",
      paragraphs: [
        "Turnover cleaning has a deadline, a cost line, and someone chasing it. Common areas have none of those, so they drift, and the drift is invisible from the office because nobody reports a corridor that is slightly worse than last month.",
        "The asymmetry matters. A resident experiences their own unit's turnover once and the entrance twice a day for the length of the tenancy. When they describe the building to someone, they describe the entrance.",
      ],
    },
    {
      title: "Frequencies that hold up",
      bullets: [
        "Entrance, lobby, and the first few metres of floor: daily, because that is where every shoe in the building arrives.",
        "Corridors: two or three times a week, more on floors with heavy footfall or a chute room.",
        "Lifts: daily for the floor and the panel, weekly for the walls and the door tracks.",
        "Stairwells: weekly, and they are where the drift shows first because almost nobody uses them.",
        "Bin and chute rooms: daily attention, weekly wash, since this is the single biggest source of complaints.",
        "Laundry rooms and mail areas: two or three times a week.",
      ],
    },
    {
      title: "The items that fall between scopes",
      paragraphs: [
        "Nearly every neglected item in a common area is one that nobody explicitly owns. The cleaning contract covers floors and surfaces, maintenance covers equipment, and the gap between them is where things sit for years.",
        "The usual list: light fixtures and the dead insects inside them, the tops of door frames, corridor vent grilles, lift door tracks, window sills in stairwells, the underside of handrails, entrance mats that are vacuumed but never lifted, and the glass on both sides of the entrance door.",
      ],
    },
    {
      title: "Write it as a frequency table, not a task list",
      bullets: [
        "Each area, each item, and how often, on one page.",
        "Name who owns the items that are neither floors nor equipment.",
        "State what happens outside schedule: a spill, a broken bottle, a delivery mess.",
        "Define the reporting route for the crew, since they are in the building more than anyone.",
        "Set the seasonal changes explicitly: salt and slush in winter, pollen in spring.",
        "Say who checks and against what, because unchecked frequency drifts by definition.",
      ],
      closing: [
        "The same principle as a unit scope applies: name items rather than standards. A corridor described as kept clean means whatever the contractor's normal is at that price.",
      ],
    },
    {
      title: "Winter is a different contract",
      paragraphs: [
        "In a climate with salt and slush, entrance areas need a genuinely different frequency for four or five months. Salt tracked in destroys floor finishes, and a lobby that gets the summer schedule in February looks neglected regardless of how well it is cleaned.",
        "Budget it as a seasonal variation rather than discovering it every January. Longer matting at the entrance, more frequent passes, and a plan for where the wet mats go are worth more than any single cleaning decision in that period.",
      ],
    },
    {
      title: "The cheap signal nobody measures",
      paragraphs: [
        "Residents rarely complain about corridors. They mention them when they leave, in an exit conversation or a review, which is the most expensive place to hear it.",
        "A cheaper signal is the crew themselves. A crew in the building several times a week sees the failing door closer, the light that has been out for a fortnight, and the corner where somebody keeps leaving boxes. Asking for that report as part of the contract costs nothing and is usually the earliest warning available.",
      ],
      closing: [
        "A defined standard, written the same way as a unit scope, is what keeps this from drifting. The ",
        { label: "guide to writing a cleaning scope", href: "/blog/writing-a-cleaning-scope-for-vendors/" },
        " covers the format, and ",
        { label: "apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
        " is the unit-level equivalent.",
      ],
    },
  ],
  faqs: [
    { q: "How often should apartment building common areas be cleaned?", a: "Daily for the entrance and lobby, two or three times a week for corridors, daily floor and panel in lifts, weekly for stairwells, and daily attention to bin rooms." },
    { q: "What gets missed in common area cleaning?", a: "Whatever nobody explicitly owns: light fixtures, door frame tops, vent grilles, lift door tracks, stairwell sills, handrail undersides, and entrance mats that are never lifted." },
    { q: "How should a common area scope be written?", a: "As a frequency table by area and item on one page, with named ownership for items that are neither floors nor equipment, plus who checks and against what." },
    { q: "Do common areas need a different winter schedule?", a: "In a climate with salt and slush, yes. Entrance areas need a genuinely higher frequency for several months, plus longer matting, budgeted as a seasonal variation." },
  ],
  relatedSlugs: ["writing-a-cleaning-scope-for-vendors", "trash-chute-and-hallway-smells", "handling-a-cleaning-complaint-from-a-resident"],
}

export default article
