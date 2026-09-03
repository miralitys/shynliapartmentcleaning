import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "per-visit-package-or-subscription",
  title: "Per Visit, Package, Or Subscription: What You Are Agreeing To",
  meta: "The three ways cleaning companies sell the same work, where the recurring discount comes from, the questions to ask before committing, and why a prepaid package carries a risk the others do not.",
  keywords: "cleaning subscription vs per visit, prepaid cleaning package, recurring cleaning discount, cleaning service cancellation policy, apartment cleaning minimum term",
  category: "Cost and booking",
  topic: "cost-booking",
  genre: "cost",
  readTime: "8 min read",
  date: "2026-09-03",
  heroImage: "/apartment-detail-new.jpg",
  summary: "The rate is the part everyone compares, and the terms are the part that decides what you actually pay.",
  answer: "Paying per visit costs the most per clean and commits you to nothing. A recurring rate is genuinely cheaper because a predictable slot is worth money to the company, and it usually comes with a notice period and a rule about skipped visits. A prepaid package is the only one of the three where you are holding the risk, so it needs a shorter term and a card payment.",
  primaryLinks: [
    { label: "Apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
    { label: "Recurring apartment cleaning", href: "/recurring-apartment-cleaning/" },
    { label: "One-time apartment cleaning", href: "/one-time-apartment-cleaning/" },
  ],
  sections: [
    {
      title: "Three ways to buy the same work",
      paragraphs: [
        "Per visit means you book when you want one and pay after. A recurring rate means you hold a repeating slot at a lower price with no money up front. A package or subscription means you pay for several visits in advance at a further discount.",
        "The cleaning is identical in all three. What changes is who carries the risk of the schedule, and that is what the price difference is buying.",
      ],
    },
    {
      title: "Where the recurring discount comes from",
      paragraphs: [
        "It is not a loyalty gesture. A company that knows a crew is in your building every second Tuesday can build a route around it, and route density is most of the difference between a profitable schedule and an unprofitable one. A repeating slot also gets faster over time, because the crew stops rediscovering the apartment on every visit.",
        "That also explains what makes the discount disappear. Frequent rescheduling turns a predictable slot back into a one-off, and most companies have a clause for it. If your schedule genuinely moves around, the honest choice is per visit at the higher rate rather than a recurring rate you cannot hold.",
      ],
    },
    {
      title: "The questions to ask before committing",
      bullets: [
        "How many visits is the minimum, and what happens if you stop before that number.",
        "How much notice cancels a single visit without a charge, and how much cancels the arrangement.",
        "What happens when you skip one. Some companies price the next visit higher because more has built up, which is reasonable, and it should be stated rather than appearing on an invoice.",
        "Does the rate change after the first visit. A first clean is often longer and priced separately, and the recurring rate starts at visit two.",
        "Is the price locked for the term, and how much notice you get before a change.",
        "Same crew each time or whoever is available. This matters more than people expect, because a crew that knows the apartment is the reason recurring visits get better.",
        "What happens to unused visits if you move out mid-term.",
      ],
    },
    {
      title: "Prepaid packages carry a different kind of risk",
      paragraphs: [
        "With per visit and with recurring billing you pay for work already done. With a package you are handing money to a company in exchange for a promise, and if that company stops trading you are an unsecured creditor for the balance. This is not a common outcome and it is not a theoretical one either.",
        "Two things reduce it. Pay by card rather than by transfer, since a card gives you a route to dispute the unused portion. And with a company you have not used before, take the shortest package on offer even at a smaller discount. Once you know them, a longer one is a reasonable trade.",
      ],
    },
    {
      title: "Which one fits which situation",
      bullets: [
        "A move-out, a one-off before guests, or a first deep clean: per visit, every time. There is nothing to commit to.",
        "A steady schedule and a predictable apartment: recurring, and the discount is real money over a year.",
        "A lease with a few months left: recurring monthly, with a check on the notice period so the arrangement ends when the lease does.",
        "Shared housing where several people split the cost: recurring, with one named person on the account, because a rotating payer is where these fall apart.",
        "A company you have never used: per visit for the first one regardless of the offer, then decide.",
      ],
      closing: [
        "The general shape is that the discount rises with commitment and so does the cost of being wrong, so buy the smallest commitment that matches how settled your schedule actually is.",
      ],
    },
    {
      title: "How we handle it",
      paragraphs: [
        "We quote per visit and recurring, the recurring rate starts from the second visit, and there is no minimum term or prepayment. Cancelling a visit needs a day of notice, cancelling the schedule needs nothing beyond telling us. If a visit gets skipped and the next one takes longer, we say so before it happens rather than afterwards.",
      ],
      closing: [
        "Rates for both are on ",
        { label: "apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
        ". The schedules we run are on ",
        { label: "recurring apartment cleaning", href: "/recurring-apartment-cleaning/" },
        ", and if you only need one visit, ",
        { label: "one-time apartment cleaning", href: "/one-time-apartment-cleaning/" },
        " is priced on its own.",
      ],
    },
  ],
  faqs: [
    { q: "Is a cleaning subscription cheaper than paying per visit?", a: "Yes, and for a real reason. A repeating slot lets a company build an efficient route and the crew gets faster in an apartment it knows. The saving disappears if you reschedule often, because the slot stops being predictable." },
    { q: "Should I prepay for a cleaning package?", a: "Only with a company you have used before, and pay by card so the unused portion is disputable. With a new company, take the shortest package or skip the discount and pay per visit." },
    { q: "What should I ask before signing up for recurring cleaning?", a: "The minimum number of visits, the notice period for one visit and for the arrangement, whether the rate changes after the first clean, whether the price is locked, and what happens to the schedule if you move out." },
    { q: "Why is the first cleaning visit priced differently?", a: "It usually takes longer because everything is being brought to a baseline at once. The lower recurring rate normally applies from the second visit, and that should be stated in the quote." },
  ],
  relatedSlugs: ["hourly-vs-flat-rate-apartment-cleaning", "is-apartment-cleaning-service-worth-it", "what-a-cleaning-service-will-not-do"],
}

export default article
