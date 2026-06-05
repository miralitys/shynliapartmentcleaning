import type { LucideIcon } from "lucide-react"
import { Building2, CalendarDays, ClipboardCheck, DoorOpen, Home, KeyRound, Sparkles } from "lucide-react"

export const siteUrl = "https://shynliapartmentcleaning.com"

export const cityGroups = [
  {
    label: "A-D",
    cities: ["Addison", "Aurora", "Bartlett", "Batavia", "Bolingbrook", "Bristol", "Burr Ridge", "Carol Stream", "Clarendon Hills", "Darien", "Downers Grove"],
  },
  {
    label: "E-L",
    cities: ["Elmhurst", "Geneva", "Glen Ellyn", "Hinsdale", "Homer Glen", "Itasca", "Lemont", "Lisle", "Lockport", "Lombard"],
  },
  {
    label: "M-S",
    cities: ["Montgomery", "Naperville", "North Aurora", "Oak Brook", "Oswego", "Plainfield", "Romeoville", "St. Charles", "Streamwood", "Sugar Grove"],
  },
  {
    label: "V-Y",
    cities: ["Villa Park", "Warrenville", "Wayne", "West Chicago", "Westmont", "Wheaton", "Willowbrook", "Winfield", "Wood Dale", "Woodridge", "Yorkville"],
  },
]

const cityNotes = [
  "commuter apartments, quiet condos, and townhomes that need predictable access windows",
  "busy renters, pet homes, and move-out turnovers that need a polished finish",
  "apartment communities, condo buildings, and owner-occupied units with practical scheduling needs",
  "renters, landlords, and professionals who want a clear checklist before booking",
]

const cityContexts = [
  "Addison appointments often need clear parking and entry notes for apartment buildings near busy suburban corridors.",
  "Aurora cleanings often include larger apartment layouts, pet homes, and move timing around busy work schedules.",
  "Bartlett bookings work best with early access details for quiet residential apartments and condo-style units.",
  "Batavia renters often need move-in and move-out help that keeps kitchens, baths, cabinets, and floors walkthrough-ready.",
  "Bolingbrook apartments often need flexible scheduling for busy households, pets, and multi-bath layouts.",
  "Bristol service calls are usually easier when driveway, building, and lockbox notes are confirmed before arrival.",
  "Burr Ridge condos and apartments often call for surface-safe products, careful access, and polished presentation.",
  "Carol Stream renters often book for recurring upkeep, guest prep, and move-out resets between lease dates.",
  "Clarendon Hills cleanings often benefit from precise entry, parking, and surface preference notes.",
  "Darien apartments and townhome-style units often need practical scheduling around commute and family routines.",
  "Downers Grove customers often need fast coordination for condos, rentals, and empty units near busy commute corridors.",
  "Elmhurst apartment cleaning often involves building access, parking notes, and recurring maintenance preferences.",
  "Geneva bookings often focus on careful kitchens, baths, floors, and move timing for well-kept residential units.",
  "Glen Ellyn renters often need a clean reset before guests, new leases, or recurring schedule changes.",
  "Hinsdale apartment and condo work often needs careful surface notes, access planning, and presentation detail.",
  "Homer Glen cleanings often include larger layouts, pets, and practical recurring plans for busy homes.",
  "Itasca apartments often need schedule-friendly timing, parking details, and clear lockbox or concierge instructions.",
  "Lemont bookings often combine apartment, condo, and townhome cleaning with practical move-in or move-out timing.",
  "Lisle renters often need dependable recurring cleaning, pet-hair attention, and apartment-safe supply planning.",
  "Lockport cleanings often benefit from clear access notes for rentals, townhome-style units, and move-out schedules.",
  "Lombard customers often need help with apartments near busy corridors, condo access, and recurring upkeep.",
  "Montgomery apartments often need flexible scheduling, pet-hair attention, and move-out detail for lease turnovers.",
  "Naperville bookings often combine apartment communities, condo buildings, busy professionals, and move timing.",
  "North Aurora service calls often need clear parking, entry, and empty-unit access for move-in or move-out work.",
  "Oak Brook condo and apartment cleaning often requires careful access, surface notes, and polished presentation.",
  "Oswego renters often book for pet homes, family schedules, and move-out cleans before final walkthroughs.",
  "Plainfield apartments and townhome-style units often need practical recurring plans and larger-layout timing.",
  "Romeoville cleanings often focus on move-in, move-out, and recurring apartment resets around busy schedules.",
  "St. Charles renters often need guest-ready kitchens, baths, floors, and clear access before arrival.",
  "Streamwood apartments often benefit from recurring upkeep, pet-hair attention, and flexible appointment windows.",
  "Sugar Grove bookings often need careful planning for quieter residential units, pets, and move timing.",
  "Villa Park renters often need efficient apartment resets, parking notes, and easy recurring scheduling.",
  "Warrenville customers often book for condo-style apartments, move-out detail, and recurring upkeep.",
  "Wayne service calls often need exact driveway, entry, and property access notes before the cleaner arrives.",
  "West Chicago cleanings often involve rentals, commuter schedules, pet homes, and move-out walkthrough prep.",
  "Westmont apartments often need building access, parking notes, and a checklist that covers compact layouts well.",
  "Wheaton customers often book for recurring maintenance, guest prep, and move-in or move-out transitions.",
  "Willowbrook condo and apartment work often calls for careful access notes, surface-safe products, and polished finish.",
  "Winfield bookings often focus on practical recurring cleaning, pet homes, and clear entry instructions.",
  "Wood Dale cleanings often need efficient timing, parking clarity, and apartment-safe products.",
  "Woodridge apartments often include busy renters, family schedules, pets, and move-out details.",
  "Yorkville customers often need flexible timing for larger suburban apartments, townhome-style units, and lease transitions.",
]

const cityNames = cityGroups.flatMap((group) => group.cities)

export const cities = cityNames.map((name, index) => ({
  name,
  slug: slugify(name),
  note: cityNotes[index % cityNotes.length],
  localContext: cityContexts[index],
}))

export type Service = {
  slug: string
  name: string
  shortName: string
  headline: string
  cityHeadline: (city: string) => string
  meta: (city?: string) => string
  price: string
  time: string
  fit: string
  promise: string
  checklist: string[]
  proof: string[]
  faqs: Array<{ q: (city?: string) => string; a: (city?: string) => string }>
  icon: LucideIcon
}

export const services: Service[] = [
  {
    slug: "apartment-cleaning",
    name: "Apartment Cleaning",
    shortName: "Apartment",
    headline: "Apartment cleaning that resets the rooms you actually live in.",
    cityHeadline: (city) => `Apartment cleaning in ${city} with a checklist you can trust.`,
    meta: (city) =>
      city
        ? `Book apartment cleaning in ${city} with vetted cleaners, supplies included, clear pricing, and re-clean support.`
        : "Book apartment cleaning with vetted cleaners, supplies included, clear pricing, and a room-by-room checklist.",
    price: "$129+",
    time: "2-3 hours",
    fit: "Weekly, bi-weekly, monthly, and one-time apartment resets.",
    promise: "A practical clean for kitchens, bathrooms, floors, dust, pet hair, and everyday buildup.",
    checklist: ["Kitchen counters, sink, stovetop, and appliance fronts", "Bathroom vanity, toilet, tub, shower, mirrors, and fixtures", "Vacuuming, mopping, dusting, trash, and high-touch surfaces", "Entry, hallway, bedroom, living area, and visible detail reset"],
    proof: ["Vetted and insured cleaners", "Supplies and equipment included", "Recurring schedule options"],
    faqs: [
      {
        q: (city) => `How much does apartment cleaning cost${city ? ` in ${city}` : ""}?`,
        a: () => "Most apartment cleanings start from $129+. The exact estimate depends on bedrooms, bathrooms, condition, pets, extras, and how soon you need the appointment.",
      },
      {
        q: () => "Do I need to provide supplies?",
        a: () => "No. Cleaners bring supplies and equipment. If your apartment requires a specific product, add that note before booking.",
      },
      {
        q: () => "Can I set up recurring visits?",
        a: () => "Yes. Weekly, bi-weekly, and monthly schedules are available, with recurring savings when the same scope is repeated.",
      },
    ],
    icon: Home,
  },
  {
    slug: "deep-apartment-cleaning",
    name: "Deep Apartment Cleaning",
    shortName: "Deep",
    headline: "A deeper apartment clean for buildup, pets, guests, and first visits.",
    cityHeadline: (city) => `Deep apartment cleaning in ${city} for the places regular cleaning misses.`,
    meta: (city) =>
      city
        ? `Deep apartment cleaning in ${city} for kitchens, bathrooms, baseboards, buildup, pet hair, and first-time resets.`
        : "Deep apartment cleaning for first visits, buildup, pet hair, baseboards, kitchens, bathrooms, and detailed resets.",
    price: "$219+",
    time: "4-5 hours",
    fit: "First-time cleans, neglected corners, guest prep, pet hair, and heavier buildup.",
    promise: "More detail time for the edges, surfaces, buildup, and touchpoints that make an apartment feel cared for again.",
    checklist: ["Baseboards, edges, doors, switches, handles, and detailed dusting", "Bathroom buildup, fixtures, tile attention, and floor edges", "Kitchen backsplash, sink detail, appliance fronts, and microwave interior", "Pet hair attention, high-touch areas, and add-on options"],
    proof: ["Detail-focused scope", "Apartment-safe products", "Support if something is missed"],
    faqs: [
      {
        q: (city) => `When should I choose deep cleaning${city ? ` in ${city}` : ""}?`,
        a: () => "Choose deep cleaning for first visits, heavier buildup, pet homes, guest prep, or when the apartment has gone longer than usual between professional cleanings.",
      },
      {
        q: () => "Is oven or fridge cleaning included?",
        a: () => "Oven and fridge interiors can be added before booking. The base deep clean focuses on visible rooms, surfaces, bathrooms, kitchen details, and floor edges.",
      },
      {
        q: () => "Can deep cleaning become recurring cleaning later?",
        a: () => "Yes. Many customers start with a deep clean and then move to a weekly, bi-weekly, or monthly maintenance plan.",
      },
    ],
    icon: Sparkles,
  },
  {
    slug: "move-out-apartment-cleaning",
    name: "Move-Out Apartment Cleaning",
    shortName: "Move-out",
    headline: "Move-out apartment cleaning built for deposits, walkthroughs, and empty units.",
    cityHeadline: (city) => `Move-out apartment cleaning in ${city} for a cleaner final walkthrough.`,
    meta: (city) =>
      city
        ? `Move-out apartment cleaning in ${city} for renters, landlords, cabinets, appliances, bathrooms, floors, and final walkthroughs.`
        : "Move-out apartment cleaning for renters, landlords, empty units, cabinets, appliances, bathrooms, floors, and walkthroughs.",
    price: "$279+",
    time: "5-7 hours",
    fit: "Renters, landlords, property managers, empty apartments, and pre-listing turnovers.",
    promise: "A deposit-minded clean that focuses on the areas people notice during final checks.",
    checklist: ["Inside cabinets and drawers when empty", "Kitchen, bathrooms, floors, baseboards, doors, and touchpoints", "Appliance detail options for fridge and oven interiors", "Trash-out ready surfaces and walkthrough-minded finishing"],
    proof: ["Access notes for empty units", "Photo-ready turnover finish", "Landlord and tenant friendly scope"],
    faqs: [
      {
        q: (city) => `Do you clean empty apartments for move-out${city ? ` in ${city}` : ""}?`,
        a: () => "Yes. Move-out cleaning is designed for empty apartments, final walkthroughs, landlord expectations, and renter turnover timelines.",
      },
      {
        q: () => "Should furniture be removed first?",
        a: () => "For the best result, remove furniture and personal items before the appointment. Cleaners can then reach cabinets, floors, corners, and appliance areas more completely.",
      },
      {
        q: () => "Can you coordinate access without me there?",
        a: () => "Yes. Add lockbox, smart lock, concierge, leasing office, or building instructions before the appointment.",
      },
    ],
    icon: KeyRound,
  },
  {
    slug: "move-in-apartment-cleaning",
    name: "Move-In Apartment Cleaning",
    shortName: "Move-in",
    headline: "Move-in apartment cleaning before boxes, furniture, and new routines arrive.",
    cityHeadline: (city) => `Move-in apartment cleaning in ${city} before you settle in.`,
    meta: (city) =>
      city
        ? `Move-in apartment cleaning in ${city} for kitchens, bathrooms, cabinets, floors, appliance add-ons, and fresh-start checklists.`
        : "Move-in apartment cleaning for fresh-start kitchens, bathrooms, cabinets, floors, appliance add-ons, and pre-furniture resets.",
    price: "$249+",
    time: "4-6 hours",
    fit: "New leases, condo purchases, empty units, and pre-furniture cleaning.",
    promise: "A fresh-start clean before the apartment becomes full of boxes, furniture, and everyday life.",
    checklist: ["Cabinet and drawer wipe-downs when empty", "Kitchen, bathroom, floor, and high-touch reset", "Inside microwave and appliance-front detail", "Add fridge, oven, baseboard, or heavy buildup options"],
    proof: ["Before-move access support", "Supplies included", "Clear checklist before arrival"],
    faqs: [
      {
        q: (city) => `Should I book move-in cleaning before my lease starts${city ? ` in ${city}` : ""}?`,
        a: () => "Book as soon as you have access. Empty apartments are easier to clean thoroughly before furniture and boxes block cabinets, floors, and corners.",
      },
      {
        q: () => "Can you clean before furniture arrives?",
        a: () => "Yes. That is the best time for move-in cleaning because cabinets, drawers, floors, and appliance areas are easier to reach.",
      },
      {
        q: () => "Can I add fridge or oven cleaning?",
        a: () => "Yes. Add fridge or oven interior cleaning before booking so enough time is reserved.",
      },
    ],
    icon: DoorOpen,
  },
  {
    slug: "recurring-apartment-cleaning",
    name: "Recurring Apartment Cleaning",
    shortName: "Recurring",
    headline: "Recurring apartment cleaning that keeps your week from sliding.",
    cityHeadline: (city) => `Recurring apartment cleaning in ${city} for weekly, bi-weekly, or monthly upkeep.`,
    meta: (city) =>
      city
        ? `Recurring apartment cleaning in ${city} with weekly, bi-weekly, and monthly options, supplies included, and clear apartment checklists.`
        : "Recurring apartment cleaning with weekly, bi-weekly, and monthly options, supplies included, and a clear apartment checklist.",
    price: "$109+",
    time: "2-3 hours",
    fit: "Busy renters, professionals, pet homes, families, and anyone who wants a cleaner baseline.",
    promise: "A reliable rhythm for kitchens, bathrooms, dust, floors, trash, and reset tasks.",
    checklist: ["Kitchen and bathroom maintenance", "Floors, dusting, surfaces, mirrors, and trash", "Bedroom and living area reset", "Preference notes that carry into future visits"],
    proof: ["Recurring savings", "Cleaner preference when possible", "Flexible cadence"],
    faqs: [
      {
        q: (city) => `Can I book recurring apartment cleaning${city ? ` in ${city}` : ""}?`,
        a: () => "Yes. Weekly, bi-weekly, and monthly appointments are available, depending on route capacity and preferred days.",
      },
      {
        q: () => "Will I get the same cleaner?",
        a: () => "The team tries to keep the same cleaner when schedule and route availability allow. Your notes help keep each visit consistent.",
      },
      {
        q: () => "Can I skip or reschedule a visit?",
        a: () => "Yes. Use the cancellation and rescheduling policy so the route can be adjusted cleanly.",
      },
    ],
    icon: CalendarDays,
  },
  {
    slug: "one-time-apartment-cleaning",
    name: "One-Time Apartment Cleaning",
    shortName: "One-time",
    headline: "One-time apartment cleaning when you need the place reset now.",
    cityHeadline: (city) => `One-time apartment cleaning in ${city} for guests, events, and busy weeks.`,
    meta: (city) =>
      city
        ? `One-time apartment cleaning in ${city} for guests, busy weeks, seasonal resets, pet hair, kitchens, bathrooms, and floors.`
        : "One-time apartment cleaning for guests, busy weeks, seasonal resets, pet hair, kitchens, bathrooms, and floors.",
    price: "$129+",
    time: "2-4 hours",
    fit: "Guests, busy weeks, post-trip resets, seasonal cleaning, and apartment refreshes.",
    promise: "A one-visit reset that gets the apartment back to a livable, guest-ready baseline.",
    checklist: ["Kitchen and bathroom reset", "Dusting, floors, trash, and high-touch surfaces", "Pet hair attention and tidy edges", "Optional add-ons for deeper tasks"],
    proof: ["No recurring commitment", "Simple estimate", "Support after the visit"],
    faqs: [
      {
        q: (city) => `Can I book one-time cleaning${city ? ` in ${city}` : ""} without a plan?`,
        a: () => "Yes. One-time cleaning is available without a recurring commitment.",
      },
      {
        q: () => "Can a one-time clean be deep cleaning?",
        a: () => "Yes. Choose deep cleaning if the apartment needs more detail time than a normal reset.",
      },
      {
        q: () => "How do I get the best estimate?",
        a: () => "Share bedrooms, bathrooms, condition, pets, extras, access, and timing. The more accurate the details, the cleaner the estimate.",
      },
    ],
    icon: ClipboardCheck,
  },
  {
    slug: "condo-cleaning",
    name: "Condo Cleaning",
    shortName: "Condo",
    headline: "Condo cleaning for polished kitchens, baths, floors, and building access.",
    cityHeadline: (city) => `Condo cleaning in ${city} with apartment-style scheduling and checklist clarity.`,
    meta: (city) =>
      city
        ? `Condo cleaning in ${city} with vetted cleaners, supplies included, building access notes, kitchens, bathrooms, floors, and recurring plans.`
        : "Condo cleaning with vetted cleaners, supplies included, building access notes, kitchens, bathrooms, floors, and recurring plans.",
    price: "$149+",
    time: "2-4 hours",
    fit: "Condo owners, renters, high-rise units, townhome-style condos, and busy professionals.",
    promise: "A clean that respects building access, elevators, parking, surfaces, and owner preferences.",
    checklist: ["Kitchen, bath, floors, dusting, and surfaces", "Building access, parking, concierge, or elevator notes", "Recurring or one-time cleaning", "Add-ons for deeper detail work"],
    proof: ["Insured cleaners", "Access-note friendly", "Condo-safe supply planning"],
    faqs: [
      {
        q: (city) => `Do you clean condos${city ? ` in ${city}` : ""}?`,
        a: () => "Yes. Condo cleaning supports owner-occupied units, rentals, recurring plans, and move-in or move-out needs.",
      },
      {
        q: () => "Can I leave concierge or elevator instructions?",
        a: () => "Yes. Add building access, parking, elevator, front desk, and entry notes before booking.",
      },
      {
        q: () => "Is condo cleaning different from apartment cleaning?",
        a: () => "The checklist is similar, but condo appointments often need more building access details and surface preference notes.",
      },
    ],
    icon: Building2,
  },
  {
    slug: "townhouse-cleaning",
    name: "Townhouse Cleaning",
    shortName: "Townhouse",
    headline: "Townhouse cleaning for multi-level living without the house-cleaning guesswork.",
    cityHeadline: (city) => `Townhouse cleaning in ${city} for kitchens, baths, stairs, and lived-in spaces.`,
    meta: (city) =>
      city
        ? `Townhouse cleaning in ${city} for kitchens, bathrooms, stairs, floors, bedrooms, recurring plans, deep cleaning, and move-in/out support.`
        : "Townhouse cleaning for kitchens, bathrooms, stairs, floors, bedrooms, recurring plans, deep cleaning, and move-in/out support.",
    price: "$169+",
    time: "3-5 hours",
    fit: "Townhomes, multi-level rentals, condo townhouses, families, and busy professionals.",
    promise: "A practical clean for kitchens, bathrooms, stairs, floors, entryways, and daily living zones.",
    checklist: ["Kitchen and bathroom cleaning", "Stairs, entry, floors, dusting, and surfaces", "Bedroom and living area reset", "Deep, recurring, move-in, and move-out options"],
    proof: ["Multi-level scope planning", "Supplies included", "Clear add-ons"],
    faqs: [
      {
        q: (city) => `Do you clean townhouses${city ? ` in ${city}` : ""}?`,
        a: () => "Yes. Townhouse cleaning is available for multi-level rentals, owner-occupied townhomes, and condo-style townhouses.",
      },
      {
        q: () => "Are stairs included?",
        a: () => "Yes. Stairs and entry areas can be included in the scope when you provide the home layout.",
      },
      {
        q: () => "Can I book recurring townhouse cleaning?",
        a: () => "Yes. Weekly, bi-weekly, and monthly schedules are available when route capacity allows.",
      },
    ],
    icon: Building2,
  },
]

export const cityServices = services.slice(0, 4)

export type LowIntentPage = {
  slug: string
  shortName: string
  title: (city: string) => string
  h1: (city: string) => string
  meta: (city: string) => string
  badge: string
  image: string
  intro: (city: string, note: string) => string
  sections: Array<{ title: string; text: string }>
  bullets: string[]
  faqs: Array<{ q: (city: string) => string; a: string }>
}

export const lowIntentPages: LowIntentPage[] = [
  {
    slug: "apartment-cleaning-prices",
    shortName: "Prices",
    title: (city) => `Apartment Cleaning Prices in ${city} | Shynli Apartment`,
    h1: (city) => `Apartment cleaning prices in ${city} without the back-and-forth.`,
    meta: (city) => `Apartment cleaning prices in ${city} with starting rates, room factors, add-ons, supplies included, and clear estimates before booking.`,
    badge: "Price planning",
    image: "/apartment-supplies-new.jpg",
    intro: (city, note) =>
      `Price your ${city} apartment clean around the details that actually change the work: bedrooms, bathrooms, condition, pets, add-ons, move timing, and access. This page is built for ${note}, so you can compare the scope before you choose a time.`,
    sections: [
      {
        title: "What changes the estimate",
        text: "Bedrooms, bathrooms, pet hair, heavy buildup, empty-unit access, fridge or oven interiors, and baseboard detail can all change the final time needed.",
      },
      {
        title: "What is included before add-ons",
        text: "Most appointments cover the kitchen, bathroom, floors, dusting, trash, surfaces, high-touch points, and a visible room reset.",
      },
      {
        title: "How to get a cleaner quote",
        text: "Share the apartment size, clean type, timing, pets, access notes, and any move-in or move-out pressure before booking.",
      },
    ],
    bullets: ["Starting estimates by clean type", "Supplies and equipment included", "Add-ons priced before arrival", "Recurring, deep, move-in, and move-out options"],
    faqs: [
      {
        q: (city) => `What is the starting price for apartment cleaning in ${city}?`,
        a: "Standard apartment cleaning usually starts around $129+, deep cleaning around $219+, and move-out cleaning around $279+, depending on scope.",
      },
      {
        q: () => "Can I see the price before I book?",
        a: "Yes. The booking flow is designed to show a clear estimate before you choose the appointment time.",
      },
      {
        q: () => "Do pets or heavy buildup change the price?",
        a: "They can. Pet hair, grease, dust buildup, and neglected corners may need more time than a standard reset.",
      },
    ],
  },
  {
    slug: "tenant-move-out-cleaning",
    shortName: "Tenant move-out",
    title: (city) => `Tenant Move-Out Cleaning in ${city} | Shynli Apartment`,
    h1: (city) => `Tenant move-out cleaning in ${city} for a calmer final walkthrough.`,
    meta: (city) => `Tenant move-out cleaning in ${city} for renters, deposits, empty apartments, cabinets, appliances, bathrooms, floors, and access notes.`,
    badge: "For renters",
    image: "/apartment-detail-new.jpg",
    intro: (city, note) =>
      `Move-out week gets tight fast. This ${city} page is for renters who want the apartment cleaned after boxes are out and before the final walkthrough. It fits ${note} and keeps the focus on the details landlords and leasing offices usually notice first.`,
    sections: [
      {
        title: "Walkthrough-minded scope",
        text: "The clean focuses on kitchens, bathrooms, floors, cabinet faces, drawers when empty, doors, handles, switches, baseboards, and visible edges.",
      },
      {
        title: "Good timing for renters",
        text: "Book after most belongings are removed so cleaners can reach cabinets, corners, floors, appliance fronts, and entry areas.",
      },
      {
        title: "Access without stress",
        text: "Add lockbox, smart lock, concierge, leasing office, parking, elevator, or stay-home instructions before the appointment.",
      },
    ],
    bullets: ["Empty-unit checklist", "Deposit-minded detail", "Cabinets and drawers when empty", "Fridge and oven add-ons available"],
    faqs: [
      {
        q: (city) => `Can you clean my apartment before the final walkthrough in ${city}?`,
        a: "Yes. Tenant move-out cleaning is built for empty apartments, renter timelines, and final checks.",
      },
      {
        q: () => "Do I need to remove everything first?",
        a: "For the best result, remove belongings first. Empty rooms make floors, cabinets, corners, and appliance areas easier to clean.",
      },
      {
        q: () => "Can this help with a security deposit?",
        a: "A clean apartment can help the walkthrough feel smoother, though deposit decisions always remain with the landlord or property manager.",
      },
    ],
  },
  {
    slug: "apartment-turnover-cleaning",
    shortName: "Turnover",
    title: (city) => `Apartment Turnover Cleaning in ${city} | Shynli Apartment`,
    h1: (city) => `Apartment turnover cleaning in ${city} for the next resident.`,
    meta: (city) => `Apartment turnover cleaning in ${city} for landlords, property managers, empty units, kitchens, bathrooms, floors, and move-ready resets.`,
    badge: "For landlords",
    image: "/apartment-hero-new.jpg",
    intro: (city, note) =>
      `Turnover cleaning is for the space between residents: the old lease is ending, the unit needs to feel ready, and timing matters. This ${city} page is built for ${note}, with a scope that keeps property managers, landlords, and incoming residents in mind.`,
    sections: [
      {
        title: "Ready-for-next-resident detail",
        text: "Turnover work focuses on empty-unit kitchens, bathrooms, floors, cabinets, drawers, doors, handles, baseboards, and visible presentation.",
      },
      {
        title: "Built for access handoffs",
        text: "Share lockbox, leasing office, smart lock, concierge, parking, elevator, or vacant-unit notes so the cleaner can enter without delays.",
      },
      {
        title: "Add-ons when the unit needs more",
        text: "Fridge interiors, oven interiors, heavy buildup, laundry areas, and deeper floor-edge detail can be added before the appointment.",
      },
    ],
    bullets: ["Vacant-unit cleaning", "Property manager friendly access", "Move-ready presentation", "Add-ons for appliances and buildup"],
    faqs: [
      {
        q: (city) => `Do you handle apartment turnover cleaning in ${city}?`,
        a: "Yes. Turnover cleaning is available for landlords, property managers, and empty apartments between residents.",
      },
      {
        q: () => "Can you clean without the owner or manager present?",
        a: "Yes, when safe access is arranged in advance through a lockbox, smart lock, leasing office, concierge, or other approved method.",
      },
      {
        q: () => "Is turnover cleaning different from move-out cleaning?",
        a: "They overlap, but turnover cleaning is framed around getting the unit ready for the next resident or showing.",
      },
    ],
  },
]

export type BlogArticleSection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

export type BlogArticle = {
  slug: string
  title: string
  meta: string
  category: string
  readTime: string
  updated: string
  heroImage: string
  summary: string
  answer: string
  primaryLinks: Array<{ label: string; href: string }>
  sections: BlogArticleSection[]
  faqs: Array<{ q: string; a: string }>
  relatedSlugs: string[]
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "apartment-move-out-cleaning-checklist",
    title: "Apartment Move-Out Cleaning Checklist: What to Clean Before You Leave",
    meta: "Use this apartment move-out cleaning checklist to clean the kitchen, bathroom, floors, closets, appliances, and overlooked details before you hand over the keys.",
    category: "Move-out cleaning",
    readTime: "8 min read",
    updated: "June 5, 2026",
    heroImage: "/apartment-detail-new.jpg",
    summary: "A practical room-by-room move-out checklist for renters who want the apartment empty, clean, documented, and easier to inspect.",
    answer: "Before leaving an apartment, clean the kitchen, bathroom, floors, baseboards, windows, closets, appliances, and all storage areas. Remove every item, take photos and video, and check your lease for any required professional cleaning or carpet-cleaning receipt.",
    primaryLinks: [
      { label: "Move-out cleaning service", href: "/move-out-apartment-cleaning/" },
      { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
      { label: "Apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
    ],
    sections: [
      {
        title: "Start with the lease or move-out instructions",
        paragraphs: [
          "Moving out is not the same as doing a normal weekly clean. The apartment is empty, the landlord or property manager may look at details you do not notice day to day, and small missed spots can create stress after you have already left.",
          "Some buildings only ask for broom-clean condition. Others give a detailed checklist or require professional carpet cleaning. Read that first, then use this checklist to catch the areas renters most often miss.",
        ],
      },
      {
        title: "Kitchen",
        paragraphs: ["The kitchen is usually the highest-risk room in a move-out inspection because it collects grease, crumbs, odors, and hidden residue."],
        bullets: [
          "Inside and outside of the refrigerator and freezer.",
          "Oven interior, stovetop, microwave interior, and dishwasher edges.",
          "Sink, faucet, drain, counters, backsplash, cabinet doors, shelves, pantry shelves, and floor edges.",
          "Every item from the refrigerator, freezer, cabinets, and pantry.",
        ],
      },
      {
        title: "Bathroom",
        paragraphs: ["The bathroom should look and smell clean when the door opens. Focus on residue, hair, water spots, and corners."],
        bullets: [
          "Toilet bowl, seat, base, and the floor around the toilet.",
          "Sink, faucet, vanity, mirror, shower walls, tub, ledges, and reachable grout.",
          "Bathroom cabinets, drawers, exhaust fan cover if dusty, floor corners, and baseboards.",
        ],
      },
      {
        title: "Floors, baseboards, and corners",
        paragraphs: [
          "Once the apartment is empty, floors show everything. Vacuum or sweep first, then mop hard floors. Pay attention to the edges of rooms, under heaters, behind doors, and along baseboards.",
          "For carpet, check your lease. Some apartments require professional carpet cleaning or a receipt. Others only expect vacuuming unless there are stains.",
        ],
      },
      {
        title: "Windows, blinds, closets, and storage",
        paragraphs: ["Window areas and closets are easy to forget because they do not feel like normal weekly cleaning. During move-out, they matter because dust, bugs, and debris collect there."],
        bullets: [
          "Window sills, tracks, blinds, shades, sliding door tracks, and reachable glass smudges.",
          "Closet shelves, closet floors, storage areas, doors, handles, and behind doors.",
          "Hooks, tape, and removable strips, removed carefully according to building instructions.",
        ],
      },
      {
        title: "Trash, final walkthrough, and photos",
        paragraphs: [
          "The apartment should be completely empty. Remove trash, boxes, cleaning supplies, hangers, shower items, and anything left in cabinets.",
          "Before handing over keys, take photos and a short video of each room, inside appliances, bathroom fixtures, floors, closets, and any existing damage or stains. This gives you a clear record of how you left the apartment.",
        ],
      },
      {
        title: "When to hire a move-out cleaner",
        paragraphs: ["Hiring a cleaner can be worth it if you are moving on a tight schedule, the apartment is already empty, the kitchen or bathroom needs detail work, your lease requires professional cleaning, or you want a receipt for your records."],
      },
    ],
    faqs: [
      { q: "How clean should an apartment be before move-out?", a: "At minimum, the apartment should be empty, swept or vacuumed, wiped down, and free of trash, food, obvious grime, and personal items. If your lease gives a stricter standard, follow that." },
      { q: "What do people most often forget during move-out cleaning?", a: "Common missed areas include the oven, inside cabinets, fridge drawers, baseboards, blinds, window tracks, bathroom corners, closet shelves, and behind doors." },
      { q: "Should I take photos after move-out cleaning?", a: "Yes. Take photos and a short video after the apartment is empty and cleaned. Capture rooms, appliances, bathroom fixtures, closets, floors, and any existing wear." },
      { q: "Is this legal advice about security deposits?", a: "No. This is practical cleaning guidance. For deposit disputes or lease questions, read your lease and check local tenant rules or speak with a qualified professional." },
    ],
    relatedSlugs: ["do-you-need-professional-cleaners-before-moving-out", "move-in-deep-cleaning-checklist", "is-apartment-cleaning-service-worth-it"],
  },
  {
    slug: "do-you-need-professional-cleaners-before-moving-out",
    title: "Do You Need Professional Cleaners Before Moving Out of an Apartment?",
    meta: "Learn when professional move-out cleaning is worth it, when a DIY clean may be enough, and what to ask your landlord before hiring cleaners.",
    category: "Move-out cleaning",
    readTime: "7 min read",
    updated: "June 5, 2026",
    heroImage: "/apartment-supplies-new.jpg",
    summary: "A decision guide for renters who are not sure whether a DIY move-out clean is enough or whether a professional receipt matters.",
    answer: "You need professional cleaners before moving out only if your lease requires it, you need a receipt, or the apartment needs more detailed cleaning than you can realistically do. If the lease allows a tenant-cleaned move-out and you have time, a careful DIY clean may be enough.",
    primaryLinks: [
      { label: "Move-out cleaning service", href: "/move-out-apartment-cleaning/" },
      { label: "Pricing guide", href: "/apartment-cleaning-pricing/" },
      { label: "Cleaning FAQ", href: "/faq/" },
    ],
    sections: [
      {
        title: "Start with your lease",
        paragraphs: [
          "You do not always need professional cleaners before moving out of an apartment. The practical answer is to check your lease first, then decide based on the apartment condition, your timeline, and whether you need a receipt.",
          "A professional move-out cleaning does not automatically guarantee that a landlord will waive every fee, but it can help you leave the apartment in better condition and create a clearer record of the cleaning.",
        ],
        bullets: [
          "Check whether professional cleaning or carpet cleaning is required.",
          "Check whether a receipt must be submitted.",
          "Ask the property manager in writing if tenant-cleaned condition is acceptable.",
        ],
      },
      {
        title: "When a DIY move-out clean may be enough",
        paragraphs: ["A do-it-yourself clean may be enough when the lease does not require professional cleaning, the apartment is small and well maintained, and you have enough time after moving your belongings out."],
        bullets: [
          "Clean more than visible surfaces.",
          "Include cabinets, drawers, appliance interiors, baseboards, window tracks, closets, and bathroom corners.",
          "Take photos after the cleaning.",
        ],
      },
      {
        title: "When professional cleaning is worth it",
        paragraphs: ["Many renters underestimate how hard it is to clean after a move. Packing, loading, address changes, utility transfers, and key return all happen at once."],
        bullets: [
          "Your lease requires professional cleaning or a receipt.",
          "You are moving the same day and do not have time.",
          "The oven, fridge, bathroom, or floors need detailed work.",
          "You have pets, odor, heavy dust, or inspection anxiety.",
        ],
      },
      {
        title: "What a cleaner cannot promise",
        paragraphs: [
          "A cleaner can make the apartment clean. A cleaner cannot promise that your landlord will return your full deposit, waive all fees, or ignore damage.",
          "Cleaning and damage are different issues. A cleaner can help with dirt, dust, grease, soap residue, hair, crumbs, and normal cleaning tasks. Broken blinds, damaged flooring, wall holes, paint issues, and missing items are separate problems.",
        ],
      },
      {
        title: "How to prepare for a move-out cleaner",
        bullets: [
          "Remove furniture and belongings if possible.",
          "Empty the fridge, freezer, cabinets, and closets.",
          "Remove trash and leave utilities on if water and electricity are needed.",
          "Share the building move-out checklist and any strict inspection notes.",
        ],
      },
    ],
    faqs: [
      { q: "Does hiring a professional cleaner guarantee I will not be charged?", a: "No. It can help, but it does not guarantee that every fee will be waived. Damage, lease terms, building rules, and inspection standards can still matter." },
      { q: "Should I clean before the professional cleaner arrives?", a: "Remove belongings, trash, food, and clutter. You do not need to deep clean first, but the apartment should be empty enough for the cleaner to reach surfaces." },
      { q: "What should I ask before booking a move-out cleaner?", a: "Ask what is included, whether oven and fridge interiors are included, whether they clean blinds or window tracks, whether they provide a receipt, and whether carpet cleaning is separate." },
      { q: "Is a move-out clean different from regular cleaning?", a: "Yes. Move-out cleaning is usually more detailed because the apartment is empty and the focus is on appliances, cabinets, baseboards, closets, and inspection-ready condition." },
    ],
    relatedSlugs: ["apartment-move-out-cleaning-checklist", "is-apartment-cleaning-service-worth-it", "move-in-deep-cleaning-checklist"],
  },
  {
    slug: "move-in-deep-cleaning-checklist",
    title: "Move-In Deep Cleaning Checklist: What To Clean Before You Unpack",
    meta: "Before unpacking, use this move-in deep cleaning checklist to reset the kitchen, bathroom, floors, appliances, closets, and high-touch areas.",
    category: "Move-in cleaning",
    readTime: "8 min read",
    updated: "June 5, 2026",
    heroImage: "/apartment-hero-new.jpg",
    summary: "A before-you-unpack checklist for renters who want to clean cabinets, bathrooms, floors, appliances, and high-touch areas while the apartment is still empty.",
    answer: "Before unpacking, deep clean the kitchen, bathroom, floors, closets, appliances, windowsills, baseboards, and high-touch areas. Take photos first, clean top to bottom, and handle anything serious with the property manager in writing.",
    primaryLinks: [
      { label: "Move-in cleaning service", href: "/move-in-apartment-cleaning/" },
      { label: "Deep apartment cleaning", href: "/deep-apartment-cleaning/" },
      { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
    ],
    sections: [
      {
        title: "Why clean before you unpack",
        paragraphs: [
          "The best time to deep clean an apartment is before furniture, rugs, dishes, and clothing move in. The rooms are empty, floors are open, and cabinets are easy to reach.",
          "Even when a unit was professionally cleaned, it may still have dust in tracks, residue inside cabinets, hair in bathroom corners, food crumbs in drawers, or stale smells in appliances.",
        ],
      },
      {
        title: "Start with photos",
        paragraphs: ["Before cleaning, take photos of anything damaged, stained, broken, or unusually dirty. Send anything serious to the landlord or property manager in writing."],
        bullets: [
          "Carpet stains, wall marks, damaged blinds, cracked tiles, dirty grout, water damage, appliance issues, or pest evidence.",
          "Cleaning is one thing. Documenting condition is another.",
        ],
      },
      {
        title: "Clean top to bottom",
        bullets: [
          "Ceiling corners, vents, light fixtures, tops of cabinets, shelves, window frames, and blinds.",
          "Baseboards and floors last so you do not clean the same dust twice.",
        ],
      },
      {
        title: "Kitchen reset",
        paragraphs: ["The kitchen deserves the most attention before move-in because it touches food, dishes, and daily habits."],
        bullets: [
          "Inside cabinets and drawers, cabinet handles, pantry shelves, counters, backsplash, sink, and faucet.",
          "Inside the refrigerator, freezer drawers, oven if needed, stovetop, microwave, dishwasher edges, and floor edges.",
          "Use surface-safe products, especially on stainless steel, stone, enamel, painted cabinets, and older finishes.",
        ],
      },
      {
        title: "Bathroom, floors, closets, and high-touch areas",
        bullets: [
          "Toilet, sink, vanity drawers, mirror, shower walls, tub, grout, shower tracks, exhaust fan cover, floor corners, and baseboards.",
          "Vacuum every room before furniture comes in, then mop with a cleaner safe for the floor type.",
          "Clean closet floors, shelves, rods, door tracks, linen closets, storage cabinet corners, handles, switches, thermostat, and appliance handles.",
        ],
      },
      {
        title: "When to hire move-in cleaning",
        paragraphs: ["Move-in cleaning is worth it when you have a short moving window, the apartment was not cleaned well, the kitchen or bathroom feels neglected, or you want the apartment cleaned before furniture blocks access."],
      },
    ],
    faqs: [
      { q: "Should I clean before moving into a new apartment?", a: "Yes. Even if the apartment was cleaned, a move-in clean helps remove dust, residue, and hidden grime before your belongings fill the space." },
      { q: "What should I clean first in a new apartment?", a: "Start with photos, then clean top to bottom. Focus first on the kitchen, bathroom, floors, closets, and high-touch areas." },
      { q: "Is move-in cleaning different from move-out cleaning?", a: "Yes. Move-in cleaning focuses on making the space safe, fresh, and comfortable for your belongings. Move-out cleaning focuses on leaving the apartment ready for inspection." },
      { q: "Should I hire a cleaner before or after movers arrive?", a: "Before, if possible. An empty apartment is easier to clean deeply and quickly." },
    ],
    relatedSlugs: ["apartment-move-out-cleaning-checklist", "weekly-apartment-cleaning-schedule", "is-apartment-cleaning-service-worth-it"],
  },
  {
    slug: "weekly-apartment-cleaning-schedule",
    title: "A Realistic Weekly Apartment Cleaning Schedule For Busy Renters",
    meta: "Use this simple daily, weekly, monthly, and seasonal apartment cleaning schedule to keep your space manageable without spending every weekend cleaning.",
    category: "Recurring cleaning",
    readTime: "8 min read",
    updated: "June 5, 2026",
    heroImage: "/apartment-detail-new.jpg",
    summary: "A realistic apartment cleaning rhythm for renters who want the kitchen, bathroom, floors, dust, and clutter under control without losing every weekend.",
    answer: "A realistic apartment cleaning schedule is daily kitchen and clutter maintenance, a weekly bathroom and floor reset, monthly deep-clean zones, and seasonal bigger tasks. Keep it simple enough that you will actually follow it.",
    primaryLinks: [
      { label: "Recurring apartment cleaning", href: "/recurring-apartment-cleaning/" },
      { label: "Deep apartment cleaning", href: "/deep-apartment-cleaning/" },
      { label: "One-time apartment cleaning", href: "/one-time-apartment-cleaning/" },
    ],
    sections: [
      {
        title: "Daily: 5 to 15 minutes",
        paragraphs: ["Daily cleaning is mostly maintenance. It is the small reset that keeps the apartment from sliding."],
        bullets: [
          "Wash dishes or load the dishwasher.",
          "Wipe kitchen counters and take out trash if it is full or smells.",
          "Put laundry in a basket, return obvious clutter, and wipe the bathroom sink if needed.",
          "If you only do one thing daily, reset the kitchen.",
        ],
      },
      {
        title: "Weekly: the main reset",
        paragraphs: ["Once a week, do the tasks that keep the apartment healthy and comfortable. For a small apartment, this can often be done in 60 to 90 minutes if clutter is already under control."],
        bullets: [
          "Clean the toilet, sink, mirror, shower, or tub.",
          "Vacuum carpets and rugs, sweep and mop hard floors, and dust main surfaces.",
          "Change sheets, wash towels, wipe appliance fronts, clean the microwave, and remove old food from the fridge.",
        ],
      },
      {
        title: "Every two weeks",
        bullets: [
          "Dust blinds or window sills, vacuum under couch cushions, mop less-used rooms, and wipe high-traffic baseboards.",
          "Vacuum furniture if you have pets and clean under the bed if dust collects quickly.",
        ],
      },
      {
        title: "Monthly: one deep-clean zone",
        paragraphs: ["Monthly cleaning works best when you do not try to deep clean the entire apartment at once. Pick one or two zones each month."],
        bullets: [
          "Clean inside the fridge, oven, cabinets, drawers, and under small appliances.",
          "Scrub bathroom buildup, clean window tracks, wash the shower liner, dust vents, and vacuum closet floors.",
          "If you clean one hidden area each week, you rarely need a full-day deep clean.",
        ],
      },
      {
        title: "A simple weekly plan",
        bullets: [
          "Monday: kitchen reset and trash.",
          "Tuesday: bathroom.",
          "Wednesday: laundry and sheets.",
          "Thursday: floors.",
          "Friday: dusting and quick clutter reset.",
          "Saturday or Sunday: one monthly deep-clean task.",
        ],
      },
      {
        title: "When to hire recurring cleaning",
        paragraphs: ["Recurring cleaning is worth considering if you work long hours, keep falling behind, have pets, dislike bathroom and kitchen cleaning, or want the apartment maintained before it needs a deep clean."],
      },
    ],
    faqs: [
      { q: "How often should I clean my apartment?", a: "Do light maintenance daily, a main clean weekly, deeper tasks monthly, and larger reset tasks seasonally." },
      { q: "How often should I deep clean an apartment?", a: "Most renters can deep clean by rotating one or two deeper tasks each month. A full deep clean may be useful every few months or before move-in, move-out, guests, or a major reset." },
      { q: "What is the most important room to clean weekly?", a: "The bathroom and kitchen usually matter most because they collect moisture, food residue, odors, and germs." },
      { q: "Is recurring apartment cleaning worth it?", a: "It can be worth it if it protects your time, keeps the kitchen and bathroom under control, and prevents the apartment from becoming overwhelming." },
    ],
    relatedSlugs: ["is-apartment-cleaning-service-worth-it", "move-in-deep-cleaning-checklist", "apartment-move-out-cleaning-checklist"],
  },
  {
    slug: "is-apartment-cleaning-service-worth-it",
    title: "How Much Does Apartment Cleaning Cost, And When Is Hiring A Cleaner Worth It?",
    meta: "Apartment cleaning cost depends on size, condition, frequency, and service type. Learn when hiring a cleaner is worth it and how to compare quotes.",
    category: "Pricing",
    readTime: "8 min read",
    updated: "June 5, 2026",
    heroImage: "/apartment-supplies-new.jpg",
    summary: "A cost and value guide for renters comparing standard, deep, move-in, move-out, one-time, and recurring apartment cleaning.",
    answer: "Apartment cleaning cost depends on size, condition, service type, and what is included. Hiring a cleaner is worth it when it saves meaningful time, reduces stress, handles a move-in or move-out deadline, or keeps the apartment from falling behind.",
    primaryLinks: [
      { label: "Apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
      { label: "One-time cleaning", href: "/one-time-apartment-cleaning/" },
      { label: "Recurring cleaning", href: "/recurring-apartment-cleaning/" },
    ],
    sections: [
      {
        title: "What affects apartment cleaning cost",
        paragraphs: ["Apartment cleaning usually costs more than people expect because the price is not only for wiping surfaces. You are paying for time, labor, supplies, travel, insurance, scheduling, detail work, and the ability to hand off a job you may not have time or energy to do well."],
        bullets: [
          "Apartment size, bedrooms, bathrooms, condition, and whether the unit is furnished or empty.",
          "Cleaning frequency and whether the job is standard, deep, move-in, or move-out.",
          "Oven, fridge, windows, blinds, interior cabinets, pet hair, odor, travel area, and clutter.",
        ],
      },
      {
        title: "Standard cleaning vs deep cleaning",
        paragraphs: ["Standard apartment cleaning is for a home that is already maintained. Deep cleaning goes further and may include more detail time for buildup, baseboards, appliance detail, corners, and stuck-on grime."],
      },
      {
        title: "When hiring a cleaner is worth it",
        bullets: [
          "You are moving out and need the apartment inspection-ready.",
          "You are moving in and want a clean reset before unpacking.",
          "You work long hours and weekends are your only recovery time.",
          "The apartment has fallen behind, guests are coming, or pet hair builds quickly.",
          "A recurring clean helps you stay ahead.",
        ],
      },
      {
        title: "When DIY cleaning makes more sense",
        paragraphs: ["Doing it yourself may make sense if the apartment is small, the cleaning is light, you have time, you already have supplies, you do not need a receipt, and the task is manageable."],
      },
      {
        title: "One-time cleaning vs recurring cleaning",
        paragraphs: [
          "One-time cleaning is best for move-in, move-out, deep reset, guests, post-party cleanup, seasonal cleaning, or catching up after a busy period.",
          "Recurring cleaning is best when you want the apartment maintained, dust and pet hair return quickly, and you want fewer emergency deep cleans.",
        ],
      },
      {
        title: "How to compare cleaning quotes",
        bullets: [
          "Ask whether the quote is for standard, deep, move-in, or move-out cleaning.",
          "Ask how long the appointment should take, whether supplies are included, and whether oven, fridge, cabinets, blinds, tracks, or carpet cleaning are included.",
          "A cheaper quote may be fine for light cleaning, but move-out, move-in, or heavy buildup work needs the right scope.",
        ],
      },
    ],
    faqs: [
      { q: "Why does apartment cleaning cost more for move-out cleaning?", a: "Move-out cleaning usually takes longer because the cleaner focuses on appliances, cabinets, baseboards, closets, bathrooms, floors, and inspection details in an empty apartment." },
      { q: "Is a recurring cleaner cheaper than one-time cleaning?", a: "Often, yes. Recurring cleaning can be more predictable because the apartment stays maintained, while one-time deep cleaning may require more labor." },
      { q: "Should I tip an apartment cleaner?", a: "Tipping is optional unless a company has a specific policy. Many customers tip when the cleaner does detailed work, handles a difficult job, or provides excellent service." },
      { q: "How do I know if a quote is fair?", a: "A fair quote should clearly explain what is included, what costs extra, how long the cleaning should take, and what type of cleaning you are booking." },
    ],
    relatedSlugs: ["weekly-apartment-cleaning-schedule", "do-you-need-professional-cleaners-before-moving-out", "move-in-deep-cleaning-checklist"],
  },
]

export const footerGuideLinks = [
  { label: "Apartment cleaning guides", href: "/blog/" },
  { label: "Move-out checklist", href: "/blog/apartment-move-out-cleaning-checklist/" },
  { label: "Professional cleaners", href: "/blog/do-you-need-professional-cleaners-before-moving-out/" },
  { label: "Move-in checklist", href: "/blog/move-in-deep-cleaning-checklist/" },
  { label: "Weekly schedule", href: "/blog/weekly-apartment-cleaning-schedule/" },
]

export const footerServiceLinks = [
  ["Apartment cleaning", "/apartment-cleaning/"],
  ["Deep cleaning", "/deep-apartment-cleaning/"],
  ["Move-in cleaning", "/move-in-apartment-cleaning/"],
  ["Move-out cleaning", "/move-out-apartment-cleaning/"],
  ["Recurring cleaning", "/recurring-apartment-cleaning/"],
  ["One-time cleaning", "/one-time-apartment-cleaning/"],
  ["Condo cleaning", "/condo-cleaning/"],
  ["Townhouse cleaning", "/townhouse-cleaning/"],
]

export const footerServiceAreas = [
  { label: "All service areas", href: "/service-areas/" },
  ...["Addison", "Aurora", "Bolingbrook", "Downers Grove", "Elmhurst", "Naperville", "Plainfield", "Wheaton"].map((city) => ({
    label: city,
    href: `/service-areas/${slugify(city)}/`,
  })),
]

export function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

export function normalizePath(pathname: string) {
  if (pathname === "/") return "/"
  return pathname.endsWith("/") ? pathname : `${pathname}/`
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug)
}

export function getNearbyCities(citySlug: string, count = 6) {
  const index = cities.findIndex((city) => city.slug === citySlug)
  if (index < 0) return cities.slice(0, count)

  const result = []
  for (let offset = 1; result.length < count && offset < cities.length; offset += 1) {
    const before = cities[index - offset]
    const after = cities[index + offset]
    if (before) result.push(before)
    if (after && result.length < count) result.push(after)
  }
  return result
}

export function allSeoPaths() {
  const core = [
    "/",
    ...services.map((service) => `/${service.slug}/`),
    "/apartment-cleaning-pricing/",
    "/apartment-cleaning-checklist/",
    "/service-areas/",
    "/faq/",
    "/privacy-policy/",
    "/terms-of-service/",
    "/cancellation-policy/",
    "/blog/",
    ...blogArticles.map((article) => `/blog/${article.slug}/`),
  ]
  const cityHubs = cities.map((city) => `/service-areas/${city.slug}/`)
  const localServices = cities.flatMap((city) => cityServices.map((service) => `/service-areas/${city.slug}/${service.slug}/`))
  const lowIntent = cities.flatMap((city) => lowIntentPages.map((page) => `/service-areas/${city.slug}/${page.slug}/`))
  return [...core, ...cityHubs, ...localServices, ...lowIntent]
}
