import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "rescheduling-cancelling-not-being-home",
  title: "Moving A Cleaning Appointment Without It Costing You",
  meta: "The logistics nobody explains when you book a cleaner: how much notice a reschedule needs, what a cancellation actually costs, whether to be home, and how keys and access should be handled.",
  keywords: "reschedule cleaning appointment, cleaning cancellation fee, should i be home for cleaner, giving cleaner a key, cleaning service access instructions",
  category: "Cost and booking",
  topic: "cost-booking",
  genre: "checklist",
  readTime: "7 min read",
  date: "2026-09-09",
  heroImage: "/apartment-supplies-new.jpg",
  summary: "Nearly all of the friction in a cleaning arrangement comes from three questions that never get asked at booking.",
  answer: "Ask for the notice period, the cancellation policy, and the access arrangement before the first visit rather than when you need them. A day of notice is a common minimum for moving a visit, a same-day cancellation is usually charged because the slot cannot be refilled, and you do not need to be home if access and instructions are set up properly.",
  primaryLinks: [
    { label: "Apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
    { label: "Recurring apartment cleaning", href: "/recurring-apartment-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
  ],
  sections: [
    {
      title: "Why a late cancellation is charged",
      paragraphs: [
        "A cleaning company sells a crew's day in blocks, and a block cancelled the same morning cannot be refilled. The crew still gets paid and still travels, so the cost lands somewhere whatever the policy says.",
        "That is worth knowing because it explains the shape of every policy you will see. Notice is what makes a slot re-sellable, so the further ahead you move something, the less anyone cares. It is not a penalty for changing your mind.",
      ],
    },
    {
      title: "The three questions to ask at booking",
      bullets: [
        "How much notice moves a visit at no charge. A day is common, two is not unusual for a busy company.",
        "What a same-day cancellation costs, and whether a lockout counts as one. It usually does.",
        "How access works: you present, a key held, a code, or a building concierge.",
        "What happens if the crew cannot get in, since that is the expensive version of every other question here.",
        "Whether a missed visit on a recurring schedule affects the recurring rate, because on some schedules it does.",
        "How to reach an actual person on the day, rather than a booking form that is checked tomorrow.",
      ],
      closing: [
        "Five minutes at booking, and it removes almost every awkward conversation that follows.",
      ],
    },
    {
      title: "Being home, or not",
      paragraphs: [
        "For a first visit it is worth being there for the first twenty minutes, then leaving. You walk the apartment, say what matters most, point out anything fragile, and get out of the way. Staying for the whole visit slows the work and puts both sides on edge.",
        "After that, most people are not home, and the work is usually better for it. A crew that has to clean around someone working at the kitchen table is doing a different and worse job. If you are home, pick one room to be in and stay in it.",
      ],
    },
    {
      title: "Access, done properly",
      paragraphs: [
        "Whatever the arrangement, it needs to be written down rather than agreed on a phone call. Building entry, apartment door, parking, lift, whether there is a code and where, and who to call if none of it works. A crew standing outside a building for twenty minutes is time you are paying for either way.",
        "Two things are worth confirming before you hand over a key or a code: that the company is insured, and how they store keys. A reasonable answer is a labelled system with no address on the label. If the answer is vague, a lockbox or a smart lock code that you change is the version that stays under your control.",
      ],
    },
    {
      title: "The lockout, which is the expensive one",
      bullets: [
        "Confirm the visit the day before if anything in your week moved.",
        "Check that a code still works, especially after a building changes its system.",
        "Tell them about a dog before the day, not through the door.",
        "Warn them about building rules on lifts and loading, which some buildings enforce by turning people away.",
        "If you are running late to let them in, call rather than assume they will wait.",
        "Where the building requires you to register visitors, do it the day before, since a crew turned away at reception counts as a lockout.",
      ],
    },
    {
      title: "Rescheduling a recurring slot",
      paragraphs: [
        "A repeating visit is worth more to both sides than any single clean, and it is the thing that gets damaged by casual moves. Skipping one usually means the next visit takes longer, and on many schedules it is priced accordingly, which should be said out loud rather than appearing on an invoice.",
        "If your week genuinely moves around, say so and ask for a slot that fits rather than moving a fixed one repeatedly. A company would rather place you correctly once than reshuffle a crew every fortnight.",
      ],
      closing: [
        "How recurring slots are priced and what notice they need is on ",
        { label: "recurring apartment cleaning", href: "/recurring-apartment-cleaning/" },
        ", what a visit covers is in the ",
        { label: "cleaning checklist", href: "/apartment-cleaning-checklist/" },
        ", and ",
        { label: "apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
        " sets out what changes a quote.",
      ],
    },
  ],
  faqs: [
    { q: "How much notice do I need to reschedule a cleaning?", a: "A day is a common minimum and some companies ask for two. Notice is what makes the slot re-sellable, so a change made well ahead costs nothing while a same-day one usually does." },
    { q: "Do I have to be home when the cleaners come?", a: "No, and the work is often better when you are not. For a first visit it helps to be there for the first twenty minutes to walk the apartment, then leave." },
    { q: "Is it safe to give a cleaning company a key?", a: "Ask whether they are insured and how keys are stored. A labelled system with no address on the label is a reasonable answer. A lockbox or a code you can change keeps it under your control." },
    { q: "What happens if the cleaners cannot get in?", a: "It is normally charged as a same-day cancellation, since the slot cannot be refilled. Confirm codes and building visitor registration the day before, which is where most lockouts come from." },
  ],
  relatedSlugs: ["how-to-prepare-apartment-before-cleaner-arrives", "what-to-check-before-letting-a-cleaner-in", "per-visit-package-or-subscription"],
}

export default article
