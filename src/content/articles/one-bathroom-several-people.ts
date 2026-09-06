import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "one-bathroom-several-people",
  title: "One Bathroom, Four People: What Changes Besides The Queue",
  meta: "A bathroom shared by three or four people never gets a dry period and never has a free surface. How to arrange storage, who should run the fan, why the drain needs an owner, and how often it really needs cleaning.",
  keywords: "shared bathroom roommates, one bathroom four people, bathroom storage shared apartment, who cleans the shared bathroom, bathroom drain roommates",
  category: "Bathroom cleaning",
  topic: "bathroom",
  genre: "decision",
  readTime: "7 min read",
  date: "2026-09-06",
  heroImage: "/apartment-detail-new.jpg",
  summary: "Four people do not make a bathroom four times dirtier. They remove the two things the room needs, which are a dry hour and an empty surface.",
  answer: "Give each person their own shelf or caddy rather than sharing a counter, make the last person in the morning responsible for the fan rather than each person, and give the drain a named owner with a weekly slot. A bathroom used back to back needs cleaning roughly twice as often as a single-user one, and the reason is that it never dries out in between.",
  primaryLinks: [
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "Recurring apartment cleaning", href: "/recurring-apartment-cleaning/" },
    { label: "Deep apartment cleaning", href: "/deep-apartment-cleaning/" },
  ],
  sections: [
    {
      title: "The room loses its recovery time",
      paragraphs: [
        "A bathroom used once a day gets around twenty three hours to dry out. The same bathroom with four people showering between seven and nine gets none, and by the time the last person leaves, the first person's water is still on the walls.",
        "Everything that goes wrong in a shared bathroom follows from that. The grout stays damp, the seal at the tub stays damp, the mat never dries, and the mildew that appears is not a sign that nobody is cleaning. It is a sign the room has no gap between uses.",
      ],
    },
    {
      title: "The fan belongs to the last person, not to everyone",
      paragraphs: [
        "The usual advice is to run the fan during and after your shower, and in a shared bathroom that advice quietly fails, because each person runs it for their own ten minutes and then the next person starts. What the room needs is one long run after the last shower of the morning.",
        "So assign it rather than assuming it. Whoever leaves last turns the fan on and leaves the door open, and it runs for half an hour into an empty room. That single change does more for a shared bathroom than any product, and it costs nobody anything.",
      ],
      closing: [
        "The same applies to a squeegee on the shower walls: it works, and in a shared bathroom it only works if it is the last person's job rather than everyone's.",
      ],
    },
    {
      title: "Storage is the second structural problem",
      bullets: [
        "One shelf or one caddy per person, rather than a shared counter that ends up holding fifteen bottles nobody can move.",
        "Caddies that come in and out of the shower beat a communal shower shelf, since a shelf with four people's products on it is never empty enough to clean.",
        "The counter stays clear of everything except hand soap, which is what makes a two-minute wipe possible.",
        "Towels need four separate places to hang with air between them, and if the room has one rail, hooks on the back of the door are the cheapest fix in this article.",
        "Bath mats do not dry in a room like this. Hang it over the tub edge after the last shower rather than leaving it flat.",
        "One person buys the paper and the cleaner, on a standing arrangement, rather than whoever notices.",
      ],
    },
    {
      title: "The drain needs a named owner",
      paragraphs: [
        "The drain is the flashpoint in every shared bathroom, because the cost of ignoring it falls on whoever cares first while the cause is spread across everyone. That asymmetry is why it reliably turns into an argument about something other than the drain.",
        "Take it out of the argument by giving it a slot: one named person, once a week, pulling the stopper and clearing it. It is a thirty second job when it is weekly and a genuinely unpleasant one when it is quarterly, which is the whole reason to schedule it.",
      ],
    },
    {
      title: "Cadence, honestly",
      paragraphs: [
        "A shared bathroom needs the full clean about twice as often as a single-user one, and it needs a wipe of the sink and counter far more often than that. The useful split is a quick reset most days that takes two minutes, and the real clean once a week.",
        "The two-minute version is only possible if the counter is clear, which is why the storage decision above is not a tidiness point. It is what makes the frequent version cheap enough that it actually happens.",
      ],
    },
    {
      title: "When to stop arranging and start paying",
      paragraphs: [
        "The bathroom is the room that produces most of the friction in a shared apartment, and it is also the one where a paid visit removes the most argument per dollar. Split between three or four people, a fortnightly visit covering the bathroom and the kitchen is usually the cheapest way to stop having the conversation.",
        "What it does not remove is the daily part: hair in the drain, wet towels, and the fan. Those stay with the people who live there, whatever else is arranged.",
      ],
      closing: [
        "The bathroom line by line is in the ",
        { label: "cleaning checklist", href: "/apartment-cleaning-checklist/" },
        ", a fortnightly shared visit is ",
        { label: "recurring apartment cleaning", href: "/recurring-apartment-cleaning/" },
        ", and grout and seals that have been damp for a year belong to ",
        { label: "deep apartment cleaning", href: "/deep-apartment-cleaning/" },
        ".",
      ],
    },
  ],
  faqs: [
    { q: "Why does a shared bathroom get mouldy so fast?", a: "Because it never dries between uses. Four people showering back to back means the room is wet all morning, so grout, seals, and mats stay damp. It is not a sign that nobody is cleaning." },
    { q: "Who should run the bathroom fan in a shared apartment?", a: "The last person to shower, for half an hour into an empty room with the door open. Each person running it for their own shower does far less, because the next person starts immediately." },
    { q: "How should roommates store toiletries in one bathroom?", a: "One shelf or caddy each, with the counter kept clear apart from hand soap. A clear counter is what makes a two-minute daily wipe possible." },
    { q: "How often should a shared bathroom be cleaned?", a: "The full clean about twice as often as a single-user bathroom, so weekly for most households, plus a two-minute sink and counter reset most days." },
  ],
  relatedSlugs: ["bathroom-without-a-window", "drain-hair-and-slow-drain", "cleaning-calendar-for-three-or-more"],
}

export default article
