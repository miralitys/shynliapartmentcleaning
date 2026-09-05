import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "the-vacuum-is-the-problem",
  title: "The Floor Is Not Getting Cleaner And The Vacuum Is Why",
  meta: "Why a vacuum stops picking up: a loaded filter, hair wrapped around the brush roll, a bag past half full, a blocked hose, and a worn belt. How to check each one in ten minutes.",
  keywords: "vacuum not picking up, vacuum lost suction, clean vacuum filter, hair wrapped around brush roll, vacuum bag how full",
  category: "Deep cleaning",
  topic: "deep-clean",
  genre: "problem-fix",
  readTime: "7 min read",
  date: "2026-09-05",
  heroImage: "/apartment-supplies-new.jpg",
  summary: "Every cleaning guide says to vacuum slowly and in overlapping passes. None of them mention that the machine might be running at a third of its suction.",
  answer: "The usual causes, in order of likelihood: a filter that has never been washed, hair wrapped around the brush roll so it cannot turn, a bag or bin past half full, something lodged in the hose or the neck of the machine, and a stretched belt. All five are checkable in about ten minutes with no tools, and the first two account for most of it.",
  primaryLinks: [
    { label: "Deep apartment cleaning", href: "/deep-apartment-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "Recurring apartment cleaning", href: "/recurring-apartment-cleaning/" },
  ],
  sections: [
    {
      title: "The advice everyone gives assumes a working machine",
      paragraphs: [
        "Vacuum slowly. Overlap your passes. Go in two directions on carpet. All of that is right, and all of it assumes the machine is pulling what it was built to pull.",
        "A vacuum degrades gradually rather than failing, so there is no moment where you notice. It just takes a bit longer each month, and the carpet looks a bit less improved afterwards, and eventually people conclude the carpet is old. Quite often the carpet is fine.",
      ],
    },
    {
      title: "The filter, which is the usual answer",
      paragraphs: [
        "Most bagless machines have two filters, one before the motor and one after, and a large number of them have never been touched. A washable foam filter that looks grey is already restricting airflow badly, and one that looks black has been doing so for a long time.",
        "Rinse it in cold water until the water runs clear, squeeze it out, and then leave it to dry completely, which takes longer than people expect and usually means overnight. Putting a damp filter back is how a vacuum starts to smell. If yours is a paper or pleated cartridge, that one gets tapped out rather than washed, and replaced on a schedule.",
      ],
    },
    {
      title: "The brush roll, which is the second answer",
      bullets: [
        "Turn the machine over, unplug it first, and look at the roll. Hair and thread wrap around the ends near the bearings, not the middle.",
        "Cut along the roll with scissors or a seam ripper and pull the wrapped material off in pieces.",
        "Spin it by hand afterwards. It should turn freely with almost no resistance.",
        "Check the ends where the roll meets its housing, since that is where a tight wrap stops it turning at all.",
        "If the roll does not spin when the machine is running on carpet, the belt has stretched or broken, which is a cheap part.",
        "The bristles wear down over years. A roll whose bristles no longer reach past the housing is finished.",
      ],
    },
    {
      title: "How full is too full",
      paragraphs: [
        "A bag loses meaningful suction from about half full, because the airflow has to pass through a layer of what is already in there. The line printed on the bag is a maximum rather than a target. The same applies to a bagless bin: emptying at the fill line means running the last third of every session at reduced suction.",
        "Empty it when it looks half full, and empty it outside or straight into a bag you close, because tipping a full bin into an open kitchen bin puts a cloud of fine dust back into the room you just cleaned.",
      ],
    },
    {
      title: "Blockages and leaks",
      paragraphs: [
        "If the suction at the hose end is strong but the floor head does nothing, the blockage is in the head or the neck. Detach the hose and check both ends by holding them up to a light, since a sock or a bottle cap will sit in there indefinitely.",
        "A cracked hose is the version people miss, because the machine still sounds normal. Run your hand along it while the vacuum is on and feel for air escaping at a bend. The same goes for a bin lid that no longer seals, which turns the whole machine into a device that moves air past the dirt rather than through it.",
      ],
    },
    {
      title: "What to do on a schedule",
      bullets: [
        "Bin or bag: empty at half, every time.",
        "Filters: wash monthly if you have pets, every couple of months otherwise, and always dry fully.",
        "Brush roll: check for wrapping monthly, more if anyone in the apartment has long hair.",
        "Hose and head: look through them whenever suction drops rather than waiting.",
        "Belt: replace when the roll slows under load, not when it snaps.",
        "The whole check takes ten minutes and it is the highest return of any ten minutes in this list.",
      ],
      closing: [
        "A working machine is what makes the floor advice in the ",
        { label: "cleaning checklist", href: "/apartment-cleaning-checklist/" },
        " do anything. Where the carpet is genuinely past what a vacuum reaches, that is ",
        { label: "deep apartment cleaning", href: "/deep-apartment-cleaning/" },
        ", and ",
        { label: "recurring apartment cleaning", href: "/recurring-apartment-cleaning/" },
        " keeps it from getting back there.",
      ],
    },
  ],
  faqs: [
    { q: "Why has my vacuum stopped picking up?", a: "Most often a filter that has never been washed or hair wrapped around the brush roll. After those, a bag past half full, a blockage in the hose or head, or a stretched belt." },
    { q: "How often should I wash a vacuum filter?", a: "Monthly with pets in the apartment, every couple of months otherwise. Rinse in cold water until it runs clear and let it dry completely, which usually means overnight." },
    { q: "How full should a vacuum bag be before changing it?", a: "Change it at about half full. Suction drops from that point because air has to pass through what is already inside, and the printed line is a maximum rather than a target." },
    { q: "How do I get hair off a vacuum brush roll?", a: "Unplug the machine, turn it over, cut along the roll with scissors, and pull the wrap off in pieces. Check the ends near the bearings, which is where it binds tightest." },
  ],
  relatedSlugs: ["vacuum-vs-sweep-in-an-apartment", "why-apartment-looks-dusty-again", "deep-cleaning-apartment-for-dust-allergies"],
}

export default article
