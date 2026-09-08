import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "when-the-quote-changes-at-the-door",
  title: "The Crew Is At The Door And The Price Just Went Up",
  meta: "What legitimately changes a cleaning quote once the crew arrives, what should not, how a reasonable company handles it, and what to say when it happens to you.",
  keywords: "cleaning quote changed on arrival, cleaner asking for more money, cleaning price increase at door, apartment cleaning estimate wrong, cleaning surcharge condition",
  category: "Cost and booking",
  topic: "cost-booking",
  genre: "cost",
  readTime: "7 min read",
  date: "2026-09-08",
  heroImage: "/apartment-supplies-new.jpg",
  summary: "Almost every quote is made without seeing the apartment, so the awkward moment at the door is built into how this is sold.",
  answer: "A quote is priced from a description, and it legitimately changes when the apartment differs from that description: heavier condition, more rooms, pets nobody mentioned, a unit that is not empty, no hot water, or no parking within reach. What should not change it is a scope the company failed to state. A reasonable company calls you before starting rather than adding it to the invoice afterwards.",
  primaryLinks: [
    { label: "Apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "One-time apartment cleaning", href: "/one-time-apartment-cleaning/" },
  ],
  sections: [
    {
      title: "Why this happens at all",
      paragraphs: [
        "Nearly every cleaning quote in this industry is given over the phone or through a form, from a description of an apartment nobody has seen. That is what makes fast booking possible, and it is also what guarantees that some quotes meet a different apartment than the one described.",
        "So the question is not whether a quote can change. It is which changes are legitimate and how they are handled, and those two things separate a company you can use again from one you cannot.",
      ],
    },
    {
      title: "What legitimately changes it",
      bullets: [
        "Condition heavier than described. This is the big one, and it is usually honest rather than malicious, because people underestimate their own apartment.",
        "More rooms or more bathrooms than were quoted, which is straightforward arithmetic.",
        "The unit is not empty when it was booked as empty, on a move-out.",
        "Pets that were not mentioned, since hair changes the time on floors and fabric meaningfully.",
        "No hot water, no power, or no working vacuum access where the crew was expecting to use yours.",
        "Access that costs real time: no parking within a reasonable distance, a lift out of service on a high floor, a key that has to be collected across town.",
      ],
      closing: [
        "All six have one thing in common: they change how long the work takes, and time is what you were being charged for whichever pricing model was used.",
      ],
    },
    {
      title: "What should not change it",
      paragraphs: [
        "A scope the company never stated. If oven interiors, window tracks, or baseboards were not listed as exclusions and you were not told they cost extra, discovering that at the door is a failure of their quote rather than a fact about your apartment.",
        "Normal accumulation between visits on a recurring schedule, which is what the schedule is for. Ordinary dust, ordinary dishes, and ordinary clutter that was never excluded. And the crew arriving with two people instead of three, which is their staffing problem and not a reason for anything.",
      ],
    },
    {
      title: "How a reasonable company does it",
      paragraphs: [
        "They call before starting, name what is different, give the revised number, and let you decide. That decision has three real options: pay the difference, cut scope to fit the original number, or reschedule. A company that offers all three is being straight with you.",
        "What is not reasonable is starting the work and putting the difference on the invoice afterwards, since that removes your ability to choose. It is also not reasonable to leave halfway through a job that has already been started, and a company that does either of those has told you something worth knowing.",
      ],
    },
    {
      title: "What to say in the moment",
      bullets: [
        "Ask what specifically is different from what was quoted. A clear answer is a good sign and a vague one is not.",
        "Ask for the revised total rather than an hourly rate with no ceiling.",
        "Ask what comes off the list if you keep the original number, since that option should always exist.",
        "Say yes or no there and then rather than letting the work start while it is unresolved.",
        "Get it in a message, even a short one, so the number is written down before anyone picks up a cloth.",
        "If it is a large jump on something you cannot verify, rescheduling is a fair answer and a good company will accept it.",
      ],
    },
    {
      title: "How to make it much less likely",
      paragraphs: [
        "Describe the apartment as it is rather than as you would like it to be, including how long since the last proper clean, pets, and anything unusual. A few photos of the kitchen and bathroom sent with the booking removes most of the uncertainty on both sides.",
        "Then ask two questions when you book: what is excluded, and what would change this price. The answers take a minute and they are the whole prevention.",
      ],
      closing: [
        "What a visit includes is on the ",
        { label: "cleaning checklist", href: "/apartment-cleaning-checklist/" },
        ", what changes a number is set out on ",
        { label: "apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
        ", and a first visit on an apartment nobody has seen is ",
        { label: "one-time apartment cleaning", href: "/one-time-apartment-cleaning/" },
        ".",
      ],
    },
  ],
  faqs: [
    { q: "Can a cleaning company raise the price after arriving?", a: "Legitimately, yes, when the apartment differs from what was described: heavier condition, more rooms, unmentioned pets, a unit that is not empty, or missing utilities. All of those change how long the work takes." },
    { q: "What if the cleaner says the apartment needs a deep clean instead?", a: "Ask what specifically is different, ask for a revised total rather than an open hourly rate, and ask what comes off the list if you keep the original price. That third option should always exist." },
    { q: "Is it normal to be charged extra after the cleaning is done?", a: "No. A reasonable company calls before starting so you can pay the difference, cut scope, or reschedule. Adding it to the invoice afterwards removes your ability to choose." },
    { q: "How do I stop a cleaning quote from changing?", a: "Describe the apartment honestly, including how long since the last proper clean and any pets, send a few photos of the kitchen and bathroom, and ask at booking what is excluded and what would change the price." },
  ],
  relatedSlugs: ["hourly-vs-flat-rate-apartment-cleaning", "what-a-cleaning-service-will-not-do", "when-you-are-not-happy-with-the-clean"],
}

export default article
