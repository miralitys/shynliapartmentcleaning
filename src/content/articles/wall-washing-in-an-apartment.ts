import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "wall-washing-in-an-apartment",
  title: "Washing Walls: When It Is Worth It And When It Makes Things Worse",
  meta: "When washing apartment walls is worth doing, why it often looks worse afterwards, how to test a section first, and which marks will never come off.",
  keywords: "washing walls apartment, clean painted walls rental, wall washing worth it, matte paint cleaning, wall looks worse after cleaning",
  category: "Deep cleaning",
  topic: "deep-clean",
  genre: "decision",
  readTime: "7 min read",
  date: "2026-08-30",
  heroImage: "/apartment-supplies-new.jpg",
  summary: "The most common outcome of washing a wall is a clean patch that looks worse than the dirty wall did, and that is a paint question rather than a technique question.",
  answer: "Wash a whole wall only when the dirt is even and the paint can take it, which usually means a satin or semi-gloss finish. On flat or matte paint, washing lifts pigment and leaves a lighter patch, so spot cleaning is the better call and sometimes doing nothing is better than both.",
  primaryLinks: [
    { label: "Deep apartment cleaning", href: "/deep-apartment-cleaning/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    { label: "Move-out apartment cleaning", href: "/move-out-apartment-cleaning/" },
  ],
  sections: [
    {
      title: "The finish decides everything",
      paragraphs: [
        "Satin and semi-gloss paint have a sealed surface and tolerate washing. Flat and matte paint are porous by design, which is what makes them hide imperfections and also what makes them absorb dirt and release pigment when rubbed.",
        "Most rental interiors are painted flat or matte, because it is cheap and it covers patchy walls. That is the single most useful thing to know before deciding to wash anything: the wall you have is probably the kind that does not want to be washed.",
      ],
    },
    {
      title: "Test before committing to a wall",
      bullets: [
        "Pick a low corner behind a door or furniture, about the size of your hand.",
        "Damp cloth, warm water, a drop of dish soap, light pressure, one pass.",
        "Look at the cloth. Colour on it means the paint is releasing pigment, and the whole wall will do the same.",
        "Let it dry fully and look at the patch from the side against the light rather than straight on.",
        "If the test patch is invisible when dry, the wall can be washed. If it is lighter or shinier, stop.",
      ],
      closing: [
        "That five-minute test prevents the most common wall mistake, which is discovering the answer halfway across a living room wall in daylight.",
      ],
    },
    {
      title: "When washing a whole wall is worth it",
      bullets: [
        "Smoke residue, which is even, everywhere, and will not respond to spot cleaning.",
        "Kitchen grease film on the wall near the stove, which is genuinely a deposit rather than a stain.",
        "Even grey above a radiator or along a hallway, where the dirt arrived gradually and uniformly.",
        "Before a move-out where the lease requires it and the paint can take it.",
        "A satin or semi-gloss wall that has simply not been washed in years.",
      ],
    },
    {
      title: "When spot cleaning is the better answer",
      paragraphs: [
        "Isolated marks on flat paint: fingerprints by a switch, a scuff from a chair, a splash near the bin. Clean the mark gently and stop. A washed wall with one clean rectangle where the mark was is more visible than the mark, and once the sheen is disturbed it does not come back.",
        "Work from the outside of a mark inward, use the least aggressive thing that moves it, and accept a partial improvement over a perfect patch. On matte paint, partial is usually the correct target.",
      ],
    },
    {
      title: "Marks that are not coming off",
      bullets: [
        "Crayon, marker, and ink, which soak into porous paint rather than sitting on it.",
        "Water stains from a leak, which are in the paint and often in the plaster.",
        "Anything where the surface has already been rubbed shiny by previous cleaning.",
        "Nicotine yellowing on flat paint, which usually needs sealing and repainting.",
        "Mould coming through the paint rather than growing on it, which is a building issue.",
      ],
      closing: [
        "For all of these, cleaning harder makes the wall worse and the argument later harder, because a damaged patch is easier to attribute to you than an even stain.",
      ],
    },
    {
      title: "At move-out, do less rather than more",
      paragraphs: [
        "Repainting between residents is routine in most buildings, which means a wall that is evenly worn is expected and a wall with cleaning damage is not. Spot clean the obvious marks, leave the rest, and photograph anything you decided not to touch.",
        "If the lease explicitly requires walls to be washed, ask what finish the paint is before doing it, and consider whether the cleaning belongs with someone whose insurance covers the outcome.",
      ],
      closing: [
        "Walls, door frames, and switch plates are part of the scope in ",
        { label: "deep apartment cleaning", href: "/deep-apartment-cleaning/" },
        " and in ",
        { label: "move-out apartment cleaning", href: "/move-out-apartment-cleaning/" },
        ", and the ",
        { label: "guide to nail holes and wall marks", href: "/blog/nail-holes-wall-marks-apartment-move-out/" },
        " covers which marks count as damage rather than dirt.",
      ],
    },
  ],
  faqs: [
    { q: "Should I wash the walls in my apartment?", a: "Only if the paint can take it, which usually means satin or semi-gloss. Most rentals are painted flat or matte, which releases pigment when rubbed and leaves a lighter patch." },
    { q: "How do I know if my wall paint can be washed?", a: "Test a hand-sized area in a low corner with a damp cloth and light pressure. Colour on the cloth means the paint is releasing pigment. If the dry patch is invisible from the side, the wall can be washed." },
    { q: "Why does my wall look worse after cleaning?", a: "The cleaned area lost pigment or sheen, which makes it lighter or shinier than the wall around it. On matte paint that is permanent, which is why spot cleaning beats washing." },
    { q: "Do I have to wash walls before moving out?", a: "Usually not. Repainting between residents is routine, and an evenly worn wall is expected while a wall with cleaning damage is not. Check the lease before doing more than spot cleaning." },
  ],
  relatedSlugs: ["nail-holes-wall-marks-apartment-move-out", "neighbor-smoke-smell-apartment", "cleaning-after-the-furniture-is-out"],
}

export default article
