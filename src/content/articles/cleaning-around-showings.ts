import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "cleaning-around-showings",
  title: "Six Weeks Of Showings: Keeping A Unit Presentable Without Cleaning It Weekly",
  meta: "How property managers should schedule cleaning through a showing period: what to do in an occupied unit, what an empty one needs between viewings, and where a light touch-up beats another full clean.",
  keywords: "cleaning between showings apartment, showing ready unit property manager, occupied unit showings cleaning, vacant unit showing upkeep, turnover showings schedule",
  category: "Property management",
  topic: "property-management",
  genre: "scope",
  readTime: "8 min read",
  date: "2026-09-06",
  heroImage: "/apartment-hero-new.jpg",
  summary: "A unit is cleaned once for showings and then shown for five weeks, and the gap between those two facts is where most of the cost sits.",
  answer: "Clean the unit properly once at the start of the showing period and then buy short touch-ups rather than repeat full visits, since almost nothing accumulates in an empty unit except dust, marks at the entry, and the smell of a closed apartment. In an occupied unit you are scheduling around a resident rather than a unit, so notice and expectations matter more than scope.",
  primaryLinks: [
    { label: "Apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "Apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
  ],
  sections: [
    {
      title: "Two situations that get treated as one",
      paragraphs: [
        "An empty unit being shown and an occupied unit being shown have almost nothing in common. In the empty one you control everything and the only question is cost. In the occupied one you control nothing and the only question is what you can reasonably ask of someone who still lives there.",
        "Scheduling them the same way is how a manager ends up paying for weekly cleans of an empty apartment, or having an awkward conversation with a resident about a unit that is still their home.",
      ],
    },
    {
      title: "The empty unit: one proper clean, then touch-ups",
      paragraphs: [
        "An empty apartment generates very little. Dust settles, the entry picks up marks from agents and visitors, water spots appear in the bathroom if the taps are run, and the air goes stale within days of being closed up.",
        "So the pattern that costs least is a full clean before the first showing and then short visits, timed to the showings rather than the calendar. A touch-up is twenty to forty minutes and covers the entry, the floors on the traffic path, the bathroom, the kitchen surfaces, the glass, and airing the place out. Booking full cleans instead is paying turnover rates for dust.",
      ],
    },
    {
      title: "What a touch-up between showings covers",
      bullets: [
        "Entry floor and door, which take almost all of the traffic marks.",
        "Floors along the path people actually walk, rather than the whole floor area.",
        "Bathroom: toilet, sink, mirror, and a wipe of the shower, since agents run the taps.",
        "Kitchen surfaces and the sink, plus the inside of the fridge if it is running.",
        "Glass and any window in the room the unit is sold on.",
        "Air the unit out and open blinds to a set position, so it presents the same way every time.",
      ],
      closing: [
        "The single highest-return item is airing. A closed apartment smells closed within a week, and that is the first thing anybody notices when the door opens.",
      ],
    },
    {
      title: "The occupied unit is a scheduling problem, not a cleaning one",
      paragraphs: [
        "Give notice properly and give it in a pattern the resident can plan around, which usually means a fixed window a few days a week rather than requests as they come. A resident who can predict the showings will keep the apartment ready far more reliably than one who is being surprised.",
        "Ask for specific things rather than a standard. Surfaces clear, dishes away, bins out, floors done, personal items put away, lights on. That list is achievable in twenty minutes and is what actually changes how the unit shows. Asking someone to have their home clean is asking for a judgement, and it produces friction without producing a result.",
      ],
    },
    {
      title: "What is fair to offer a resident",
      paragraphs: [
        "A cleaning visit paid by the owner during the showing period is the version that works. It costs less than an extended vacancy, it removes the friction from every subsequent showing, and it changes the relationship from a demand into an arrangement.",
        "It is also the right move commercially if the unit is being shown while somebody is packing, because a unit with boxes in it shows badly regardless of how clean the surfaces are, and no amount of asking fixes that.",
      ],
    },
    {
      title: "Where the showing period ends and the turn begins",
      paragraphs: [
        "None of this replaces the make-ready. The touch-ups keep a unit presentable for viewing, and the full turnover clean still happens after the resident leaves and after paint and repairs, in that order.",
        "Building it into the schedule is simple: one clean at the start of showings, a touch-up before each block of viewings, and the full turn at the end. Priced out over a six week vacancy, that is usually less than half of what repeat full cleans cost.",
      ],
      closing: [
        "The end-of-tenancy version is ",
        { label: "apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
        ", what a full clean covers is in the ",
        { label: "cleaning checklist", href: "/apartment-cleaning-checklist/" },
        ", and touch-up visits are priced separately on ",
        { label: "apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
        ".",
      ],
    },
  ],
  faqs: [
    { q: "How often should a vacant unit be cleaned during showings?", a: "One full clean before the first showing, then short touch-ups timed to the viewings rather than to the calendar. An empty unit generates dust, entry marks, and stale air, and little else." },
    { q: "What should a touch-up between showings include?", a: "The entry, floors along the walking path, the bathroom, kitchen surfaces, glass, and airing the unit out. Twenty to forty minutes rather than a full visit." },
    { q: "What can you ask a resident to do before a showing?", a: "Specific items: surfaces clear, dishes away, bins out, floors done, personal items away, lights on. Asking for a clean apartment is asking for a judgement and produces friction instead of a result." },
    { q: "Should the owner pay for cleaning during a showing period?", a: "Usually yes in an occupied unit. It costs less than extended vacancy, removes friction from every showing, and turns a demand on the resident into an arrangement." },
  ],
  relatedSlugs: ["make-ready-vs-deep-cleaning", "apartment-turnover-cleaning-timeline", "cleaning-a-unit-that-sat-empty"],
}

export default article
