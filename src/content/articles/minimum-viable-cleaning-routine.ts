import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "minimum-viable-cleaning-routine",
  title: "The Minimum Cleaning Routine: What You Cannot Skip",
  meta: "The floor below which an apartment starts degrading: which cleaning tasks are structural, which are cosmetic, and what a bad week should actually look like.",
  keywords: "minimum cleaning routine, what cleaning tasks are essential, bare minimum apartment cleaning, cleaning when you have no time, what to skip cleaning",
  category: "Recurring cleaning",
  topic: "routine",
  genre: "checklist",
  readTime: "7 min read",
  date: "2026-08-18",
  heroImage: "/apartment-supplies-new.jpg",
  summary: "Some tasks stop damage and the rest are appearance, and knowing which is which is what gets you through a bad month.",
  answer: "The tasks that cannot be skipped are the ones where skipping causes damage or a health issue rather than mess: food waste and bins, anything wet left standing, the toilet, and dishes. Dusting, floors, surfaces, and tidying are appearance, and they can slide for a week without consequences.",
  primaryLinks: [
    { label: "Recurring apartment cleaning", href: "/recurring-apartment-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "One-time apartment cleaning", href: "/one-time-apartment-cleaning/" },
  ],
  sections: [
    {
      title: "The distinction that matters on a bad week",
      paragraphs: [
        "Most cleaning advice assumes a normal week. The weeks that break routines are the other ones: illness, a deadline, a newborn, a move, a stretch where nothing goes to plan.",
        "What helps then is not a shorter version of the full routine. It is knowing which tasks are structural, meaning skipping them creates a new problem, and which are cosmetic, meaning skipping them only makes the apartment look worse for a while.",
      ],
    },
    {
      title: "Structural: do these even on the worst week",
      bullets: [
        "Food waste out, every day. This is the one that turns into pests, and pests turn into a building problem rather than a cleaning one.",
        "Dishes not left more than a day, because the smell starts in the sink and because the job doubles overnight.",
        "Nothing wet left standing: laundry in the machine, a damp towel on the floor, a spill under the sink. Damp is how a week of neglect becomes mould.",
        "The toilet, roughly twice a week, which is hygiene rather than appearance.",
        "Anything spilled on a soft surface handled the same day, since almost every stain is reversible for a few hours and permanent after that.",
        "Litter trays and pet areas on their normal schedule, which is not negotiable for the animal's sake.",
      ],
    },
    {
      title: "Cosmetic: allowed to slide",
      paragraphs: ["None of these cause damage if they wait. They accumulate, and accumulation is recoverable in a way that mould and pests are not."],
      bullets: [
        "Dusting, shelves, and surfaces.",
        "Vacuuming and mopping, unless something was spilled.",
        "Bed making and general tidying.",
        "Mirrors, glass, and anything about how a room looks rather than what it holds.",
        "Everything monthly: baseboards, window tracks, appliance interiors, high dusting.",
      ],
    },
    {
      title: "Why a defined minimum works better than trying harder",
      paragraphs: [
        "A routine that only exists in its full form fails completely on the first bad week, and once it has failed it is hard to restart because the apartment is now behind. That is the mechanism, and it has nothing to do with discipline.",
        "A named minimum changes that. A bad week becomes a week you did the minimum rather than a week you failed, and there is nothing to restart when things settle. That framing sounds small and it is the difference between a routine that survives a rough month and one that ends in it.",
      ],
    },
    {
      title: "Coming back up",
      bullets: [
        "Start with the room that bothers you most, not the one that is objectively worst.",
        "One room per session rather than the whole apartment, so the first session actually finishes.",
        "Floors last, once the surfaces above them are done.",
        "Do not try to reach the full routine in one weekend. Two rooms now and two next weekend is what actually happens.",
      ],
      closing: [
        "If the gap is measured in months rather than weeks, that is a different problem, and it is normal for it to feel immovable. It is one visit, not a new habit.",
      ],
    },
    {
      title: "When the minimum has been the routine for a while",
      paragraphs: [
        "The minimum is designed to hold a line temporarily. Run it for a few months and the cosmetic layer becomes its own project, because dust, buildup, and appliance interiors have kept accumulating the whole time.",
      ],
      closing: [
        "Getting back to a baseline in a single visit is what ",
        { label: "one-time apartment cleaning", href: "/one-time-apartment-cleaning/" },
        " is for, and if the goal is not having to fight for it again, ",
        { label: "recurring cleaning", href: "/recurring-apartment-cleaning/" },
        " holds the cosmetic layer while you keep the minimum.",
      ],
    },
  ],
  faqs: [
    { q: "What is the bare minimum cleaning I should do?", a: "Food waste out daily, dishes within a day, nothing wet left standing, the toilet twice a week, and spills on soft surfaces handled the same day. Everything else can wait." },
    { q: "What cleaning tasks can I skip when busy?", a: "Dusting, vacuuming, mopping, tidying, and all the monthly items. They accumulate rather than cause damage, which makes them recoverable." },
    { q: "How long can an apartment go without cleaning?", a: "The cosmetic layer can slide for a couple of weeks without harm. Food waste, damp, and pet areas cannot, because those create problems that outlast the neglect." },
    { q: "How do I restart a cleaning routine after months of not doing it?", a: "One room per session, starting with the one that bothers you most, floors last. If it has been months, a single reset visit is usually more realistic than a new habit." },
  ],
  relatedSlugs: ["overwhelmed-apartment-cleaning-where-to-start", "fifteen-minute-apartment-reset", "apartment-cleaning-when-you-travel-a-lot"],
}

export default article
