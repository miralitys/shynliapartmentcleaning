import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "documenting-unit-condition-portfolio",
  title: "A Unit Condition Record That Still Works Six Months Later",
  meta: "How property managers should capture unit condition across a portfolio: the four moments to photograph, what makes an image usable in a dispute, naming and storage that survives staff turnover, and what to record besides photos.",
  keywords: "unit condition report property management, move out photo documentation, rental inspection photos, turnover documentation system, security deposit photo evidence",
  category: "Property management",
  topic: "property-management",
  genre: "checklist",
  readTime: "8 min read",
  date: "2026-09-03",
  heroImage: "/apartment-supplies-new.jpg",
  summary: "Most portfolios have plenty of photos and no record, and the difference only shows up when someone disputes a charge.",
  answer: "Capture four moments for every unit: move-out before anything is touched, after the vendor and before showing, move-in with the resident, and any mid-lease visit. Shoot wide before close so every detail can be placed in a room, keep original files rather than screenshots, name them by unit, date, and stage, and store them somewhere that is not an employee's phone.",
  primaryLinks: [
    { label: "Apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "Apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
  ],
  sections: [
    {
      title: "Photos are not the same as a record",
      paragraphs: [
        "Nearly every manager has photos. Far fewer have something they can find in twenty seconds, eight months after the fact, when a former resident's attorney asks what the unit looked like on the day the keys came back.",
        "The gap is rarely the camera. It is that the images live in three phones and a text thread, nobody wrote down which unit is which, and there is no frame taken before the work started. A folder of two hundred after photos with no before proves that the unit was clean, and proves nothing about who made it dirty.",
      ],
    },
    {
      title: "The four moments",
      bullets: [
        "Move-out, before anyone touches anything. This is the one that carries legal weight, and it is the one most often skipped because the turn is already behind.",
        "After the vendor, before showing. This separates what the cleaner did from what happened afterwards during showings, painting touch-ups, and maintenance.",
        "Move-in, with the resident present if possible, countersigned or acknowledged by email the same day.",
        "Any mid-lease entry, even a filter change. Five photos from a routine visit have settled more end-of-lease arguments than a thorough move-out set on its own.",
      ],
      closing: [
        "The pairs matter more than the totals. Move-out against the previous move-in is the comparison anyone will actually make.",
      ],
    },
    {
      title: "What makes an image usable later",
      paragraphs: [
        "Shoot the room wide first, then step in for the detail. A close-up of scorched countertop with no context is an anonymous photo of a countertop, and it cannot be placed in a unit by anyone who was not standing there.",
        "Keep original files. A screenshot strips the capture time and location out of the image, and a photo of a photo is worth less again. Do not crop, rotate, or run anything through a filter, since an untouched original is easier to stand behind than an improved one. Ten to fifteen frames per room is plenty, and video walking through the unit is a good supplement and a poor substitute, because nobody scrubs through eleven minutes of footage looking for a scratch.",
      ],
    },
    {
      title: "Naming and storage that survives staff turnover",
      bullets: [
        "One folder per turn, named with the property, the unit, and the date: 'Oakview-214-2026-08-30-moveout'.",
        "Stage in the folder name, so move-out, post-vendor, and move-in never mix.",
        "Cloud storage the company owns, not a personal phone or a messaging app. When a leasing agent leaves, their camera roll leaves with them.",
        "Upload the same day. Photos that sit on a phone for a fortnight get lost during a phone upgrade, which is a mundane way to lose a deposit case.",
        "A retention rule that runs past your state's deposit dispute window with room to spare, and applies to every unit rather than the ones someone remembers.",
        "Read access for whoever handles disputes, so the record does not depend on one person being reachable.",
      ],
    },
    {
      title: "What to record that is not a photo",
      paragraphs: [
        "A photograph shows a surface and nothing else. A short written line beside each set holds what a camera cannot: utility meter readings at both ends, how many keys and fobs came back against how many were issued, appliance model and serial numbers with their condition, the date smoke and carbon monoxide detectors were tested and batteries changed, filter sizes and the last change date, and the paint colour and finish used in each room.",
        "That last one saves a call every single time. So does noting who was in the unit and when, which is what lets you answer the question of whether the damage was there before the flooring crew arrived.",
      ],
    },
    {
      title: "Who does it, and where it belongs",
      paragraphs: [
        "Assign it to whoever is last in the unit at each stage rather than to a role. When it belongs to a job title nobody can be sure it happened, and when it belongs to the person locking the door it usually does.",
        "It also belongs in writing with your vendors. If before and after photos on flagged items are part of the cleaning scope, you get a second independent set at the point in the turn where disputes cluster, at no extra cost.",
      ],
      closing: [
        "For a unit between residents, ",
        { label: "apartment turnover cleaning", href: "/apartment-turnover-cleaning/" },
        " includes photos on flagged items as standard. The ",
        { label: "cleaning checklist", href: "/apartment-cleaning-checklist/" },
        " is what the after set is checked against, and ",
        { label: "apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
        " covers portfolio scheduling.",
      ],
    },
  ],
  faqs: [
    { q: "What should a property manager photograph at move-out?", a: "Every room wide, then close-ups of anything charged or flagged, taken before cleaning or repairs start. The before frame is what carries weight, and it is the one most often skipped when a turn is running late." },
    { q: "How long should rental inspection photos be kept?", a: "Past your state's deposit dispute window with margin, applied to every unit as a standing rule rather than case by case. Storage is cheap next to a contested deposit." },
    { q: "Are phone photos enough for a deposit dispute?", a: "Yes, if they are original files rather than screenshots, uncropped and unfiltered, include a wide shot placing each detail in a room, and are stored on company systems the same day." },
    { q: "What should be recorded besides photos at a turnover?", a: "Meter readings, keys and fobs issued against returned, appliance serials and condition, detector test dates, filter sizes and last change, paint colour and finish, and who entered the unit on which date." },
  ],
  relatedSlugs: ["cleaning-after-a-difficult-tenant", "writing-a-cleaning-scope-for-vendors", "apartment-turnover-cleaning-scope-property-managers"],
}

export default article
