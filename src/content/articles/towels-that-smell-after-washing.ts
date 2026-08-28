import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "towels-that-smell-after-washing",
  title: "Towels That Smell Even Straight Out Of The Wash",
  meta: "Why clean towels smell musty, how detergent and softener buildup causes it, the strip wash that fixes it, and how to keep it from coming back in an apartment.",
  keywords: "towels smell after washing, musty towels fix, strip washing towels, fabric softener buildup, towels smell when wet",
  category: "Odor and pests",
  topic: "odor-pests",
  genre: "problem-fix",
  readTime: "7 min read",
  date: "2026-08-28",
  heroImage: "/apartment-hero-new.jpg",
  summary: "The towels are not dirty, they are coated, and washing them the usual way adds another layer of the thing causing it.",
  answer: "Musty towels are usually carrying a buildup of detergent and fabric softener that traps moisture and holds bacteria in the fibres, which no ordinary wash removes because every wash adds more. Strip the buildup out with a hot wash using vinegar and then one using baking soda, both with no detergent, then use less detergent and no softener afterwards.",
  primaryLinks: [
    { label: "Deep apartment cleaning", href: "/deep-apartment-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "Recurring apartment cleaning", href: "/recurring-apartment-cleaning/" },
  ],
  sections: [
    {
      title: "Why more washing makes it worse",
      paragraphs: [
        "The smell appears when a towel gets damp, which is why it can seem fine folded and awful the moment you use it. That is bacteria in the fibres, and they survive because they are protected by a layer of residue rather than because the wash was too cool.",
        "The residue comes from the wash itself: too much detergent that does not fully rinse out, and fabric softener, which works by coating fibres. A coated towel absorbs less water, dries slower, and holds more of what smells. So the instinct to wash it again with extra detergent and extra softener is the exact opposite of the fix.",
      ],
    },
    {
      title: "The strip wash",
      bullets: [
        "Wash the towels alone on the hottest cycle the label allows, with one cup of white vinegar and no detergent.",
        "Run a second hot cycle with half a cup of baking soda and, again, no detergent.",
        "Do not add the two together, since they cancel each other out.",
        "Dry them completely and quickly, in a dryer if you have one or somewhere with real airflow.",
        "Expect the first cycle water to look worse than you feel comfortable with, which is the point.",
      ],
      closing: [
        "One round fixes most towels. Anything still smelling after two rounds has usually been left wet in a machine or a pile repeatedly, and at that point replacement is a fair call.",
      ],
    },
    {
      title: "Then change the washing itself",
      bullets: [
        "Use less detergent than the cap suggests, since dosing is written for heavily soiled loads and hard water.",
        "Stop using fabric softener on towels entirely. It reduces absorbency, which is the one thing a towel is for.",
        "Wash towels alone rather than crammed in with other laundry, because they need room to move.",
        "Do not overfill the drum, since a full machine does not rinse properly.",
        "Take them out the moment the cycle ends. An hour in a warm damp drum undoes the whole wash.",
      ],
    },
    {
      title: "Drying is half the problem in an apartment",
      paragraphs: [
        "A towel that takes a day to dry will smell again regardless of how it was washed, and apartments are where this goes wrong. A rail in a windowless bathroom with the door shut is the worst case, and it is also the most common one.",
        "Hang towels spread out rather than folded over a rail, use a hook only if the towel is genuinely dry by evening, and if the bathroom has no working ventilation, dry them somewhere else entirely. Drying laundry in a small bathroom also raises the humidity that causes the rest of that room's problems.",
      ],
    },
    {
      title: "Check the machine itself",
      paragraphs: [
        "If everything smells rather than just the towels, the machine is the suspect. Front loaders in particular hold water in the door seal, and the fold of that gasket is where a persistent smell lives.",
        "Wipe the seal out after use, leave the door ajar between loads, and run an empty hot cycle with vinegar monthly. In a shared laundry room you cannot do any of that, which is a reason to be more careful about not leaving loads sitting.",
      ],
      closing: [
        "The rest of the laundry area, including lint, the detergent drawer, and the floor under the machine, is covered in the ",
        { label: "laundry area guide", href: "/blog/apartment-laundry-area-cleaning-washer-dryer-lint/" },
        ", and appliance interiors sit inside ",
        { label: "deep apartment cleaning", href: "/deep-apartment-cleaning/" },
        ".",
      ],
    },
    {
      title: "When to stop trying",
      paragraphs: [
        "Towels have a working life. If a strip wash has been done twice, the machine is clean, and they still smell within an hour of use, they have been through too many damp cycles and the fibres are done.",
        "That is worth knowing because people spend months and a lot of hot water on towels that are past saving. Two rounds and an honest assessment is the right amount of effort.",
      ],
    },
  ],
  faqs: [
    { q: "Why do my clean towels smell musty?", a: "Detergent and fabric softener buildup coats the fibres, traps moisture, and shelters bacteria. Washing again with more of both adds to the layer causing it." },
    { q: "How do I strip wash towels?", a: "One hot cycle with a cup of white vinegar and no detergent, then a second hot cycle with half a cup of baking soda and no detergent. Never both together, and dry fully afterwards." },
    { q: "Should I use fabric softener on towels?", a: "No. It works by coating the fibres, which reduces absorbency and makes towels dry slower, which is exactly what causes the smell." },
    { q: "Why do towels smell again after a few days?", a: "Usually drying too slowly. A towel spread out with airflow dries in hours, while one folded on a rail in a windowless bathroom stays damp long enough to start again." },
  ],
  relatedSlugs: ["apartment-laundry-area-cleaning-washer-dryer-lint", "bathroom-without-a-window", "why-apartment-smells-bad-after-cleaning"],
}

export default article
