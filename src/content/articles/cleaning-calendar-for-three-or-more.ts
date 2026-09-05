import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "cleaning-calendar-for-three-or-more",
  title: "Three People In One Apartment: Why The Rota Stops Working",
  meta: "Cleaning arrangements between three or more housemates fail for a different reason than between two. What changes at three, why a visible record beats a rota, and how to make it survive someone moving out.",
  keywords: "cleaning rota three roommates, shared apartment cleaning schedule, housemate chore chart, cleaning arrangement four people, roommate cleaning accountability",
  category: "Routine cleaning",
  topic: "routine",
  genre: "checklist",
  readTime: "8 min read",
  date: "2026-09-05",
  heroImage: "/apartment-detail-new.jpg",
  summary: "Between two people, a mess has an author. Between three, it does not, and every arrangement built for two quietly stops working.",
  answer: "At three or more the problem is not effort and not the schedule, it is that nobody is identifiable, so nothing gets attributed and the arrangement decays without anyone deciding to abandon it. Fixed zones written somewhere everyone sees them work better than a rotating rota, the heaviest zone should rotate on its own, and the whole thing has to be written down rather than remembered, because at three or more somebody moves out every year.",
  primaryLinks: [
    { label: "Recurring apartment cleaning", href: "/recurring-apartment-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "Apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
  ],
  sections: [
    {
      title: "What actually changes at three",
      paragraphs: [
        "With two people, an unwashed pan belongs to one of you. Nobody has to say anything for that to be true, and that quiet arithmetic does most of the work of keeping a two-person apartment functional.",
        "At three it stops. The pan has no author, and each person can reasonably believe it is not theirs. Nobody is lying and nothing has been abandoned, but the mechanism that made the arrangement work has gone, and the arrangement outlives it by several months before anyone admits it.",
      ],
    },
    {
      title: "The second thing that changes is comparison",
      paragraphs: [
        "With two people, each of you can see exactly what the other does. With three, everyone compares themselves to an average they cannot observe, and almost everyone concludes they are doing slightly more than their share. That is not a character flaw, it is what happens when the information is incomplete.",
        "This is why arguments in a three-person apartment are about fairness while arguments in a two-person one are about standards. The fix is not a conversation about effort. It is making the work visible enough that nobody has to estimate.",
      ],
    },
    {
      title: "Fixed zones, with one rotating",
      bullets: [
        "Give each person a zone they own permanently rather than a task they take turns at, since ownership is what survives a busy week.",
        "The kitchen and the bathroom are the two heavy zones, and everything else together is roughly one lighter zone. Splitting three ways evenly by room is not splitting evenly by work.",
        "So rotate the heaviest zone monthly and leave the others fixed. Monthly, not weekly, because a weekly handover needs a conversation and the conversation is what fails.",
        "Personal mess in shared space stays with whoever made it, always, and sits outside the zone system entirely.",
        "Consumables need one named buyer per item, otherwise the apartment runs out of bin bags with three people each assuming somebody else noticed.",
        "Bins and dishes need same-day rules rather than zone rules, because they are the two things that make an apartment feel dirty within hours.",
      ],
    },
    {
      title: "Write it where everyone can see it",
      paragraphs: [
        "A shared apartment arrangement that lives in a conversation is gone in six weeks. One that lives on a sheet on the fridge or in a pinned message survives, and not because anyone reads it regularly. It survives because it settles disagreements without either person having to remember what was agreed.",
        "Keep it to one page: who owns which zone, what the rotating zone is this month, the same-day rules, and who buys what. Anything longer is a document nobody consults, which is the same as not having one.",
      ],
    },
    {
      title: "It has to survive somebody moving out",
      paragraphs: [
        "In a household of three or more, someone leaves most years, and the arrangement usually leaves with them because it was never written down and because the person going was the one who maintained it.",
        "So the handover matters. The incoming person gets the sheet on day one rather than a summary of it over a beer in week three, and inherits a zone rather than being told to help out. It takes five minutes and it is the difference between an arrangement that lasts a year and one that lasts through the first change.",
      ],
    },
    {
      title: "The option that gets cheaper as the household grows",
      paragraphs: [
        "The coordination cost rises with each person while the cost per head of a cleaner falls. At three or four, a visit every two weeks split evenly is often less per person than a couple pays, and it removes the two zones that cause nearly all of the friction.",
        "It does not remove everything. Personal mess, dishes, and bins stay with the people who make them, and the arrangement still needs writing down. What it removes is the recurring negotiation about the bathroom, which in most shared apartments is the argument.",
      ],
      closing: [
        "A shared visit every week or two is ",
        { label: "recurring apartment cleaning", href: "/recurring-apartment-cleaning/" },
        ", what a visit covers and what stays yours is in the ",
        { label: "cleaning checklist", href: "/apartment-cleaning-checklist/" },
        ", and ",
        { label: "apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
        " is where the per-person arithmetic gets easy to do.",
      ],
    },
  ],
  faqs: [
    { q: "Why do cleaning rotas fail with three or more roommates?", a: "Because nobody is identifiable. With two people a mess has an author, which does most of the work on its own. With three it does not, so nothing gets attributed and the arrangement decays without anyone deciding to abandon it." },
    { q: "Should housemates rotate chores or own them?", a: "Own them. Fixed zones survive a busy week, while rotation needs a handover conversation that eventually stops happening. Rotate only the heaviest zone, and monthly rather than weekly." },
    { q: "How do you split cleaning fairly between three people?", a: "Not by room, since the kitchen and bathroom are far heavier than everything else combined. Give those two as fixed zones with a monthly rotation, and everything else together as the third." },
    { q: "Is it worth splitting a cleaner between roommates?", a: "The cost per person falls as the household grows while the coordination cost rises, so at three or four a fortnightly visit split evenly is often cheaper per head than a couple pays." },
  ],
  relatedSlugs: ["apartment-cleaning-roommates-shared-space", "routine-for-two-people-on-opposite-shifts", "two-people-different-cleaning-standards"],
}

export default article
