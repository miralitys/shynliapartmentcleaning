import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "handling-a-cleaning-complaint-from-a-resident",
  title: "A New Resident Says The Unit Was Not Clean: How To Handle It",
  meta: "How property managers should handle a move-in cleaning complaint: separating cleaning from wear and repairs, checking against the scope, and closing it in one visit.",
  keywords: "resident cleaning complaint, move in complaint dirty unit, property manager cleaning dispute, turnover quality complaint, tenant says unit was not cleaned",
  category: "Property management",
  topic: "property-management",
  genre: "scope",
  readTime: "7 min read",
  date: "2026-08-19",
  heroImage: "/apartment-detail-new.jpg",
  summary: "Most of these complaints are three different problems wearing the same sentence, and sorting them first is what keeps the response cheap.",
  answer: "Sort the complaint before responding: part of it is usually cleaning that was genuinely missed, part is wear that looks like dirt, and part is a repair that was never a cleaning item. Check the named items against the scope, fix the cleaning misses in one visit, and answer the other two plainly rather than absorbing everything.",
  primaryLinks: [
    { label: "Apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "Move-in apartment cleaning", href: "/move-in-apartment-cleaning/" },
  ],
  sections: [
    {
      title: "Ask for items, not an assessment",
      paragraphs: [
        "A message saying the unit was filthy cannot be acted on, and arguing with it goes nowhere. Ask for specifics and photos, room by room, and the conversation changes immediately.",
        "It also usually shrinks. A complaint that sounded like the whole apartment often resolves to the oven, the inside of one cabinet, and a stained bathtub. Two of those are fixable this week and the third may not be a cleaning issue at all.",
      ],
    },
    {
      title: "Sort into three piles",
      bullets: [
        "Missed cleaning: dust on top of the fridge, crumbs in a drawer, a dirty oven, a bathroom that was wiped rather than cleaned. This is yours to fix and it should happen fast.",
        "Wear that reads as dirt: grout stained over years, a scratched sink, a faded bathtub finish, discoloured caulk, worn flooring. Clean and not new are different things, and this pile needs explaining rather than re-cleaning.",
        "Repairs: failed grout, a dead exhaust fan, a slow drain, a fridge that does not hold temperature. These were never cleaning items and they are the ones most likely to be under the complaint.",
      ],
      closing: [
        "The third pile matters most. A resident describing a unit as dirty is often describing a bathroom with no working fan, and a second clean will not change how that room feels in a week.",
      ],
    },
    {
      title: "Check against the scope, not against memory",
      paragraphs: [
        "If the vendor worked to a written scope, each named item either was or was not on it. That turns a judgment call into a lookup, and it decides in minutes who pays for the return visit.",
        "If there was no written scope, this complaint is the argument for writing one. The same three items come up repeatedly across turns, and a scope that names them stops the disagreement from recurring on every unit.",
      ],
    },
    {
      title: "Close it in one visit",
      bullets: [
        "Send someone to look before sending a crew, so the return visit is scoped rather than exploratory.",
        "Fix everything in the cleaning pile at once, including anything the resident did not mention but is obviously in the same category.",
        "Raise the repair items as work orders the same day, with dates, so they are visibly moving.",
        "Answer the wear items directly and without defensiveness, saying what the surface is and why it looks that way.",
        "Confirm in writing what was done and what was scheduled, which usually ends it.",
      ],
    },
    {
      title: "What not to do",
      paragraphs: [
        "Do not send a second full clean to make a complaint go away. It is expensive, it does not address the repair items underneath, and it teaches nothing about which vendor or which part of the scope failed.",
        "Do not dispute the wear items by implying the resident is wrong to notice them. They are noticing accurately, they are just calling it dirty because that is the available word. Explaining that grout stains over years and cannot be returned to white is a better answer than another visit that changes nothing.",
      ],
    },
    {
      title: "The pattern worth tracking",
      paragraphs: [
        "One complaint is an incident. The same three items appearing across several turns is a scope problem or a vendor problem, and it is cheaper to fix once at that level than to absorb repeatedly at unit level.",
        "Ovens, appliance interiors, and bathroom detail are the three that show up most, and all three are exactly where a general scope leaves room for interpretation.",
      ],
      closing: [
        "A defined standard between residents is what ",
        { label: "apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
        " is scoped around, and the ",
        { label: "apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
        " is a room-by-room list specific enough to check a complaint against line by line.",
      ],
    },
  ],
  faqs: [
    { q: "How should a property manager respond to a cleaning complaint?", a: "Ask for specific items and photos rather than an overall assessment, sort them into missed cleaning, normal wear, and repairs, then fix the cleaning in one scoped visit and raise the repairs as work orders." },
    { q: "Who pays for a re-clean after a resident complaint?", a: "If there was a written scope, whoever missed a line that was on it. Without a scope it becomes a negotiation, which is the main argument for having one." },
    { q: "What if the unit is clean but the resident says it is dirty?", a: "It is often wear rather than dirt: stained grout, a scratched sink, discoloured caulk. Explain what the surface is instead of sending a second clean that will not change it." },
    { q: "How do I stop the same complaints on every turn?", a: "Track which items recur. Ovens, appliance interiors, and bathroom detail are the usual three, and all three come from a scope that left them open to interpretation." },
  ],
  relatedSlugs: ["writing-a-cleaning-scope-for-vendors", "apartment-turnover-cleaning-timeline", "what-a-cleaning-service-will-not-do"],
}

export default article
