import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "cleaning-a-unit-that-sat-empty",
  title: "A Unit That Sat Empty: What Changes Before The Next Showing",
  meta: "What happens to a vacant apartment between the make-ready and the showing: dry traps, stale air, settled dust, and the short pass that fixes all of it.",
  keywords: "vacant unit smell showing, apartment sat empty months, unit ready but smells, vacant apartment maintenance, re-clean before showing",
  category: "Property management",
  topic: "property-management",
  genre: "problem-fix",
  readTime: "7 min read",
  date: "2026-08-22",
  heroImage: "/apartment-detail-new.jpg",
  summary: "A unit cleaned in March and shown in June is not a clean unit, and the difference is entirely predictable.",
  answer: "A vacant unit develops dry drain traps, stale air, and a fresh layer of settled dust within weeks of the make-ready, none of which are cleaning failures. A twenty-minute pass before each showing handles it: run every drain, open the windows, and wipe the horizontal surfaces.",
  primaryLinks: [
    { label: "Apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "Deep apartment cleaning", href: "/deep-apartment-cleaning/" },
  ],
  sections: [
    {
      title: "The make-ready has an expiry date",
      paragraphs: [
        "A unit signed off as ready two months ago will not present as ready today, and the reason is not that the crew did a poor job. Vacancy changes an apartment in specific ways that have nothing to do with how it was left.",
        "This shows up as a prospect walking into a smell at the door, which loses the showing before anyone reaches the kitchen. It is preventable and it is cheap to prevent.",
      ],
    },
    {
      title: "What actually happens while it sits",
      bullets: [
        "Drain traps dry out and the sewer smell comes back through them, usually within four to eight weeks, and faster in a warm building.",
        "Air stops moving and the unit takes on the closed smell that people read as damp.",
        "Dust settles evenly on every surface, and without fingerprints or use to break it up, it reads as neglect.",
        "Water left in the dishwasher and washing machine goes stale and the seals grow mildew.",
        "Insects and pests move in more easily, because nothing is competing with them and nobody is noticing.",
        "In humid months, without air conditioning running, moisture builds in closets and bathrooms.",
      ],
    },
    {
      title: "The twenty-minute pass before a showing",
      bullets: [
        "Run every drain for thirty seconds: kitchen, bathrooms, shower, tub, laundry, and any floor drain.",
        "Open windows at both ends of the unit for as long as the showing schedule allows.",
        "Wipe the horizontal surfaces: counters, sills, vanity tops, the top of the fridge.",
        "Flush every toilet, and check the bowl water level, since evaporation leaves a ring and opens the same smell path.",
        "Wipe the dishwasher and washing machine door seals and leave both doors ajar.",
        "Quick vacuum or sweep of the entry and the main path, which is what a prospect actually walks.",
      ],
      closing: [
        "Drains first. It is the cheapest item on the list and it is the one that decides whether the unit smells when the door opens.",
      ],
    },
    {
      title: "Between showings, not just before them",
      paragraphs: [
        "For a unit expected to sit more than a month, a scheduled monthly visit costs far less than a re-clean and it catches things that are not cosmetic. A slow leak found in week three is a repair, and the same leak found in week twelve is a floor.",
        "Keep the HVAC running at a reasonable setting rather than off, particularly in summer humidity and in winter. A unit held at a stable temperature does not develop the closet mildew and window condensation that turns into a real remediation cost.",
      ],
    },
    {
      title: "Where the cost decision sits",
      paragraphs: [
        "The question that comes up is whether to re-clean the whole unit before showings or just refresh it. For most vacancies under three months, a refresh pass is enough and a full re-clean is money spent twice.",
        "Past three months, or after any work in the unit, a full clean is usually the honest answer, because dust from corridor work, contractor traffic, and time has accumulated beyond what a wipe-down covers.",
      ],
    },
    {
      title: "Build it into the vacancy, not into the emergency",
      paragraphs: [
        "The pattern worth avoiding is discovering all of this an hour before a showing. A refresh scheduled with the showing, and a monthly visit for anything sitting long term, removes an entire category of last-minute problems from a leasing calendar.",
      ],
      closing: [
        "A defined standard between residents is what ",
        { label: "apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
        " is scoped around, including refresh passes on units that have been sitting. The ",
        { label: "cleaning checklist", href: "/apartment-cleaning-checklist/" },
        " is specific enough to define what a refresh includes as against a full turn.",
      ],
    },
  ],
  faqs: [
    { q: "Why does a vacant apartment smell?", a: "Usually dry drain traps. The water seal that blocks the sewer line evaporates within four to eight weeks of no use, faster in a warm building. Running every drain for thirty seconds fixes it the same day." },
    { q: "How often should a vacant unit be checked?", a: "Monthly for anything sitting longer than a month. It costs less than a re-clean and it catches leaks and moisture problems while they are still small." },
    { q: "Should a unit be re-cleaned before every showing?", a: "A twenty-minute refresh pass is enough for most vacancies under three months. Past that, or after any work in the unit, a full clean is usually the honest answer." },
    { q: "Should HVAC be left running in a vacant apartment?", a: "Yes, at a reasonable setting rather than off, particularly in humid months. A stable temperature prevents the closet mildew and condensation that become remediation costs." },
  ],
  relatedSlugs: ["apartment-turnover-cleaning-timeline", "smell-coming-from-apartment-drain", "apartment-cleaning-when-you-travel-a-lot"],
}

export default article
