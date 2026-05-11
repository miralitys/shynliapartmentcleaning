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

export const footerServiceLinks = [
  ["Apartment cleaning", "/apartment-cleaning/"],
  ["Deep cleaning", "/deep-apartment-cleaning/"],
  ["Move-in cleaning", "/move-in-apartment-cleaning/"],
  ["Move-out cleaning", "/move-out-apartment-cleaning/"],
  ["Recurring cleaning", "/recurring-apartment-cleaning/"],
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
  ]
  const cityHubs = cities.map((city) => `/service-areas/${city.slug}/`)
  const localServices = cities.flatMap((city) => cityServices.map((service) => `/service-areas/${city.slug}/${service.slug}/`))
  const lowIntent = cities.flatMap((city) => lowIntentPages.map((page) => `/service-areas/${city.slug}/${page.slug}/`))
  return [...core, ...cityHubs, ...localServices, ...lowIntent]
}
