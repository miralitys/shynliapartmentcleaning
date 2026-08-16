import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "writing-a-cleaning-scope-for-vendors",
  title: "How To Write A Cleaning Scope Your Vendors Cannot Misread",
  meta: "How property managers should write a cleaning scope for vendors: naming the standard, listing exclusions, defining sign-off, and the ambiguous words that cause disputes.",
  keywords: "cleaning scope of work template, property manager cleaning vendor, turnover cleaning specification, cleaning contract scope, vendor cleaning standard",
  category: "Property management",
  topic: "property-management",
  genre: "scope",
  readTime: "8 min read",
  date: "2026-08-16",
  heroImage: "/apartment-detail-new.jpg",
  summary: "Most vendor disputes trace back to four or five undefined words, and fixing those is a one-page job.",
  answer: "Write the scope as a room-by-room list of items rather than as a standard, name what is excluded as explicitly as what is included, define who signs off and against what, and remove every word that means different things to different people. A one-page specific scope prevents more disputes than a five-page general one.",
  primaryLinks: [
    { label: "Apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "Apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
  ],
  sections: [
    {
      title: "Why most scopes fail",
      paragraphs: [
        "A scope that says the unit should be left clean and ready for showing is not a scope, it is a hope. Every vendor reads it against their own default, and their default is whatever their crews normally do at that price.",
        "The disputes that follow are rarely about bad work. They are about two parties who genuinely believed different things were included, discovering it at the walkthrough, when the new resident is already scheduled.",
      ],
    },
    {
      title: "Write items, not adjectives",
      paragraphs: ["Replace every quality word with a thing that either was or was not done. A line either passes or fails on inspection, with no judgment involved."],
      bullets: [
        "Not 'clean the kitchen' but: oven interior including racks and door glass, refrigerator interior including drawers and seals, range hood filter washed, cabinet interiors and exteriors, backsplash degreased.",
        "Not 'bathroom cleaned' but: toilet including base and behind, shower walls and door tracks, grout worked, exhaust fan cover removed and washed, mirror, vanity interior.",
        "Not 'floors done' but: hard floors vacuumed and mopped including edges and under heaters, carpet vacuumed in overlapping passes, baseboards wiped.",
        "Not 'windows' but: interior glass, sills, tracks vacuumed then wiped, blinds dusted, plus whether exterior glass is in or out.",
        "Not 'general dusting' but: door frames and tops, switch plates, vent covers, light fixtures, closet shelves and rails.",
      ],
    },
    {
      title: "Name the exclusions in writing",
      paragraphs: [
        "Exclusions prevent more arguments than inclusions do, because they are where assumptions live. Say plainly whether the following are in or out: carpet shampooing, wall washing versus spot cleaning, trash and item removal from an abandoned unit, exterior windows, balconies, appliance moving, light bulb replacement, smoke or odor treatment, and paint overspray removal.",
        "Add one line stating that repairs are not cleaning: failed grout, damaged blinds, appliance faults, dead exhaust fans, and sub-floor odors get reported rather than resolved. Ask for that report while the crew is on site, not at the walkthrough, because that timing is worth a day on the turn.",
      ],
    },
    {
      title: "Define the conditions, not just the tasks",
      bullets: [
        "Access: who lets the crew in, and what happens if the unit is not empty on arrival.",
        "Utilities: water, hot water, and power confirmed on before the crew is dispatched.",
        "Sequence: cleaning happens after paint, repairs, and carpet, never before.",
        "Timing: how long the vendor has, and how much notice a reschedule needs.",
        "Photos: whether before and after photos are required and how they are submitted.",
        "Second visits: who pays when the unit was not ready versus when the work was incomplete.",
      ],
      closing: [
        "The unit-not-empty clause and the utilities clause are the two that pay for themselves fastest. Both describe things that go wrong regularly and cost a full visit each time.",
      ],
    },
    {
      title: "Sign-off has to be against the list",
      paragraphs: [
        "Name who inspects, when, and against what document. If the walkthrough happens against the scope line by line, disagreements resolve in minutes. If it happens against an opinion, they escalate.",
        "Set a remedy window too: how long the vendor has to correct a failed line, and at whose cost. A scope without a defined remedy leaves both sides negotiating under time pressure with a resident waiting.",
      ],
    },
    {
      title: "Keep it to one page",
      paragraphs: [
        "A one-page scope that a crew lead can read in the unit outperforms a five-page contract nobody opens. If it does not fit on a page, the excess is usually general language rather than items, and general language is what caused the problem in the first place.",
      ],
      closing: [
        "If it is useful to start from something rather than a blank page, the ",
        { label: "apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
        " is a room-by-room list already written at that level of detail, and ",
        { label: "apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
        " is the version scoped for units between residents.",
      ],
    },
  ],
  faqs: [
    { q: "What should a cleaning scope of work include?", a: "A room-by-room list of specific items, an explicit list of exclusions, the conditions the vendor is entitled to expect such as an empty unit and working utilities, and who signs off against what." },
    { q: "Why do cleaning vendors and property managers disagree?", a: "Almost always because a quality word like clean or ready was never defined, so each side read it against their own default. Naming items instead of standards removes the ambiguity." },
    { q: "Should cleaning happen before or after repairs and paint?", a: "After. Paint prep and drywall work generate dust for hours, so cleaning scheduled first means paying for it twice." },
    { q: "How long should a vendor cleaning scope be?", a: "One page. A crew lead has to be able to read it inside the unit, and anything longer is usually general language rather than specific items." },
  ],
  relatedSlugs: ["apartment-turnover-cleaning-timeline", "apartment-turnover-cleaning-scope-property-managers", "hourly-vs-flat-rate-apartment-cleaning"],
}

export default article
