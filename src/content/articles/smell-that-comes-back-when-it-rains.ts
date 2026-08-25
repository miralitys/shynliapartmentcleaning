import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "smell-that-comes-back-when-it-rains",
  title: "The Smell That Only Shows Up When It Rains",
  meta: "Why an apartment smells after heavy rain, the four usual sources, how to tell which one you have, and why this is almost always a building issue.",
  keywords: "apartment smells after rain, musty smell heavy rain, sewer smell when it rains, damp smell rainy days apartment, basement smell apartment",
  category: "Odor and pests",
  topic: "odor-pests",
  genre: "problem-fix",
  readTime: "7 min read",
  date: "2026-08-25",
  heroImage: "/apartment-supplies-new.jpg",
  summary: "A smell with a weather pattern is the most diagnosable kind there is, because the trigger tells you most of what you need to know.",
  answer: "A smell that appears with rain and fades afterwards is almost never coming from your apartment. The four usual sources are a sewer system under load, water entering the building envelope, air pushed up from a damp basement or crawlspace, and a drain trap that only fails under certain conditions. Log the pattern, then report it, because three of the four are structural.",
  primaryLinks: [
    { label: "Deep apartment cleaning", href: "/deep-apartment-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "Cleaning FAQ", href: "/faq/" },
  ],
  sections: [
    {
      title: "A trigger is a gift",
      paragraphs: [
        "Most apartment smells are hard to trace because nothing distinguishes the times they appear from the times they do not. A smell tied to weather is the opposite: the trigger narrows the field immediately.",
        "So the first job is not cleaning. It is writing down when it happens, how long after the rain starts, how long it lasts, which room is worst, and whether it changes with the windows open. Four or five entries make the pattern obvious, and they are also exactly what a building needs to act.",
      ],
    },
    {
      title: "Source one: the sewer under load",
      paragraphs: [
        "Heavy rain fills combined sewer systems, which changes the pressure in the pipes. That pushes air back up through the building's stack, and any weak point lets it into an apartment: a dried trap, a failed seal at a toilet base, an unused floor drain, a washing machine standpipe.",
        "The tell is that it smells like sewer rather than mustiness, it hits within an hour of heavy rain, and it fades as the system drains. Running water down every drain in the apartment is worth doing first, because a dry trap is the one version of this you can fix yourself in two minutes.",
      ],
    },
    {
      title: "Source two: water reaching the building envelope",
      bullets: [
        "A musty, earthy smell rather than a sewer one.",
        "Strongest along an exterior wall, in a closet on that wall, or near a window.",
        "Appears hours after rain begins rather than immediately, and lingers for a day or two.",
        "Sometimes with visible signs: a damp patch, bubbling paint, a cold spot on the wall.",
        "Often worse in autumn and spring, when rain is prolonged rather than heavy.",
      ],
      closing: [
        "This one is structural without exception. A gutter discharging against the wall, a failed window seal, or water tracking through masonry are all repairs, and the smell is the early warning before the damage becomes visible.",
      ],
    },
    {
      title: "Source three: air from below",
      paragraphs: [
        "Buildings move air upward. A damp basement, crawlspace, or garage under the building sends that air into the stairwell and the shafts, and from there into apartments, particularly on lower floors.",
        "The tell here is that the smell arrives at the front door or through the hallway rather than from a room, and that neighbours notice it too. Worth asking one, because a shared observation moves a report faster than an individual one.",
      ],
    },
    {
      title: "What to do on your side",
      bullets: [
        "Run every drain, including ones you never use, since that removes the one cause you own.",
        "Check under sinks and behind the washing machine for damp with a dry paper towel.",
        "Look at the closet on any exterior wall, which is where damp shows first.",
        "Ventilate during and after, since the smell is airborne and the residue is usually not in your apartment.",
        "Do not mask it with plug-ins, because the pattern is the evidence and covering it up removes your own data.",
      ],
    },
    {
      title: "Reporting it so it moves",
      paragraphs: [
        "Send the log rather than the complaint. Dates, times relative to the rain, which room, how long it lasted, and whether anyone else noticed. Name what you have already ruled out, specifically that every trap in the apartment was filled.",
        "Ask for something concrete: an inspection of the stack venting, a check of the basement or crawlspace, or an examination of the exterior wall on your side of the building. A specific request produces a specific answer, and a smell described in general terms produces a suggestion to open a window.",
      ],
      closing: [
        "If the smell also lingers between rains, some of it has settled into the apartment, and a reset of the soft surfaces and closets is worth doing once the source is handled. That is what ",
        { label: "deep apartment cleaning", href: "/deep-apartment-cleaning/" },
        " covers, and the ",
        { label: "guide to drain smells", href: "/blog/smell-coming-from-apartment-drain/" },
        " covers the trap side in more detail.",
      ],
    },
  ],
  faqs: [
    { q: "Why does my apartment smell when it rains?", a: "Usually one of four things: the sewer system under load pushing air back up, water reaching the building envelope, damp air from a basement or crawlspace, or a dried drain trap. Only the last one is yours to fix." },
    { q: "Is a sewer smell after rain dangerous?", a: "It means a water seal somewhere is not holding, which is worth resolving rather than living with. Fill every trap in your apartment first, then report it if it continues." },
    { q: "How do I tell damp from sewer smell?", a: "Sewer arrives within an hour of heavy rain and fades as the system drains. Damp is earthy, arrives hours later, lingers for a day or two, and is strongest near an exterior wall." },
    { q: "What should I send my landlord about a rain smell?", a: "A log rather than a complaint: dates, timing relative to the rain, which room, how long it lasted, whether neighbours noticed, and confirmation that you filled every trap." },
  ],
  relatedSlugs: ["smell-coming-from-apartment-drain", "musty-smell-in-apartment-closet", "trash-chute-and-hallway-smells"],
}

export default article
