import { useEffect, useMemo, useState, type ReactNode } from "react"
import {
  ArrowRight,
  BadgeCheck,
  Bath,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock,
  DoorOpen,
  Home,
  KeyRound,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  cities,
  cityGroups,
  cityServices,
  footerServiceAreas,
  footerServiceLinks,
  getCity,
  getNearbyCities,
  getService,
  lowIntentPages,
  normalizePath,
  services,
  siteUrl,
  type LowIntentPage,
  type Service,
} from "@/site-data"

const quoteUrl = "https://shynlicleaningservice.com/quote"

const serviceTypes = [
  {
    id: "standard",
    label: "Standard",
    price: "$129+",
    time: "2-3 hrs",
    text: "Recurring or one-time reset for lived-in apartments.",
    bullets: ["Kitchen and bath reset", "Floors, dusting, surfaces", "Supplies included"],
  },
  {
    id: "deep",
    label: "Deep",
    price: "$219+",
    time: "4-5 hrs",
    text: "For buildup, first-time cleans, pets, guests, and neglected corners.",
    bullets: ["Baseboards and detail dusting", "Inside microwave", "High-touch disinfection"],
  },
  {
    id: "turnover",
    label: "Move-in/out",
    price: "$279+",
    time: "5-7 hrs",
    text: "A deposit-minded clean for renters, landlords, and property managers.",
    bullets: ["Inside cabinets and drawers", "Appliance detail options", "Photo-ready finish"],
  },
]

const rooms = [
  { icon: Utensils, title: "Kitchen", items: ["Counters, backsplash, sink", "Stovetop and appliance fronts", "Trash, floors, cabinet faces"] },
  { icon: Bath, title: "Bathroom", items: ["Toilet, tub, shower, vanity", "Mirrors and fixtures", "Floors, baseboards, touchpoints"] },
  { icon: Home, title: "Living + bedroom", items: ["Dusting and surfaces", "Beds made and room reset", "Vacuum, mop, tidy edges"] },
  { icon: DoorOpen, title: "Apartment details", items: ["Entry, hallways, switches", "Pet hair attention", "Add fridge, oven, laundry"] },
]

const process = [
  { icon: ClipboardCheck, title: "Customize", text: "Choose size, clean type, pets, extras, and access notes." },
  { icon: CalendarDays, title: "Pick a time", text: "See realistic windows for weekday, weekend, and recurring cleans." },
  { icon: KeyRound, title: "Let us in", text: "Home, lockbox, concierge, leasing office, or smart access." },
  { icon: Sparkles, title: "Walk into clean", text: "Apartment checklist completed, support ready if anything feels off." },
]

const faqs = [
  {
    q: "Do I need to provide supplies?",
    a: "No. The team brings cleaning products and equipment. If your building or lease requires specific products, add that note before booking.",
  },
  {
    q: "Can I book recurring apartment cleaning?",
    a: "Yes. Weekly, bi-weekly, and monthly visits are available, with recurring savings and a preference for the same cleaner when the schedule allows.",
  },
  {
    q: "Do I need to be home?",
    a: "No. The access step supports concierge desks, lockboxes, smart locks, leasing offices, and stay-home appointments.",
  },
  {
    q: "What if something is missed?",
    a: "Message support within 24 hours. The team reviews the issue and arranges the right fix, including a re-clean when needed.",
  },
]

const legalPages = {
  "/privacy-policy": {
    title: "Privacy Policy",
    updated: "Last updated: February 16, 2026",
    intro:
      "How SHYNLI LLC collects, uses, shares, and protects information when you request a quote, book apartment cleaning, receive service, or contact us.",
    sections: [
      {
        title: "Information we collect",
        items: [
          "Contact details, service address, apartment size, rooms, bathrooms, condition, scheduling details, and special requests.",
          "Access notes such as concierge instructions, lockbox details, smart-lock notes, parking, elevator, and building requirements.",
          "Website usage data, cookies, analytics, advertising measurement, payment confirmations, appointment metadata, and service communications.",
          "Quality-control notes or photos when needed for training, support, dispute review, or service verification.",
        ],
      },
      {
        title: "How we use information",
        items: [
          "To provide quotes, schedule and perform cleaning services, coordinate access, process payments, send service messages, and provide support.",
          "To improve website performance, maintain quality standards, document consent and opt-outs, comply with law, and protect customers, staff, and the company.",
        ],
      },
      {
        title: "Sharing and choices",
        items: [
          "We do not sell personal information. We may use service providers for payments, CRM, SMS, email, analytics, hosting, and advertising measurement.",
          "You can opt out of marketing messages, manage non-essential cookies where available, and contact us to request access, correction, deletion, or other privacy choices allowed by law.",
        ],
      },
      {
        title: "Contact",
        items: ["Email: info@shynli.com", "Phone: +1 (630) 812-7077", "Mailing Address: P.O. Box 2492, Naperville IL 60566"],
      },
    ],
    sourceUrl: "https://shynlicleaningservice.com/privacy-policy",
  },
  "/terms-of-service": {
    title: "Terms of Service",
    updated: "Last updated: February 16, 2026",
    intro:
      "Terms for SHYNLI LLC cleaning services, including quotes, scheduling, payments, access, safety, service scope, cancellations, and dispute procedures.",
    sections: [
      {
        title: "Service scope",
        items: [
          "Services are provided only as described and confirmed at booking, including the selected package, checklist, estimate, proposal, or invoice.",
          "Deep cleaning, move-in/move-out, and turnover work have defined inclusions and exclusions. Additional tasks require approval and may change time or price.",
          "Specialty remediation, hazardous cleanup, hoarding cleanup, mold, biohazard, pest, large hauling, and tasks requiring special licensing are outside normal scope unless separately agreed.",
        ],
      },
      {
        title: "Client responsibilities",
        items: [
          "Provide accurate apartment details, condition, pets, fragile surfaces, access, parking, building rules, and special requests before service.",
          "Provide safe access, working utilities, and a reasonable work environment. Incorrect access details, no access, unsafe conditions, or undisclosed issues may cause rescheduling, fees, or refusal of service.",
        ],
      },
      {
        title: "Safety, quality, and liability",
        items: [
          "We may refuse or stop service for unsafe conditions, aggressive conduct, undisclosed audio recording, unsecured pets, active hazards, or unsuitable conditions.",
          "Before/after photos may be used for internal quality control and dispute review. Marketing use requires separate consent.",
          "Key terms include cancellation/no-show fees, limits on missing-item liability, limitation of liability, staff non-solicitation, and dispute procedures.",
        ],
      },
    ],
    sourceUrl: "https://shynlicleaningservice.com/terms-of-service",
  },
  "/cancellation-policy": {
    title: "Cancellation Policy",
    updated: "Last updated: February 13, 2026",
    intro:
      "This policy applies to bookings with SHYNLI LLC. Timing is based on Central Time, and the Terms of Service control if there is any inconsistency.",
    sections: [
      {
        title: "Cancel or reschedule",
        items: [
          "You may cancel or reschedule by replying to confirmation or reminder SMS, emailing info@shynli.com, or calling/texting +1 (630) 812-7077.",
          "Requests are effective when received. Processing may be delayed outside normal operating hours.",
        ],
      },
      {
        title: "Fees",
        items: [
          "More than 48 hours before the appointment: $0.",
          "24-48 hours before: $50 flat fee.",
          "12-24 hours before: 50% of the booked price.",
          "Less than 12 hours before, same-day cancellation, same-day reschedule, no-show, or no-access: 100% of the booked price.",
        ],
      },
      {
        title: "No access and late arrival",
        items: [
          "No-access includes locked doors, incorrect codes, missing keys or lockboxes, building/security denial, unavailable units, guests still present, or unreachable clients.",
          "If entry cannot be obtained within 15 minutes, the appointment may be treated as no-show. Optional waiting may be billed at $45/hour, prorated.",
          "If the company arrives more than 60 minutes late for reasons within reasonable control and cannot complete the booked scope, the remedy may be rescheduling at no charge or a proportional credit.",
        ],
      },
    ],
    sourceUrl: "https://shynlicleaningservice.com/cancellation-policy",
  },
} as const

type SeoRoute =
  | { type: "service"; service: Service }
  | { type: "pricing" }
  | { type: "checklist" }
  | { type: "serviceAreas" }
  | { type: "faq" }
  | { type: "city"; city: (typeof cities)[number] }
  | { type: "cityService"; city: (typeof cities)[number]; service: Service }
  | { type: "lowIntent"; city: (typeof cities)[number]; page: LowIntentPage }

function resolveSeoRoute(pathname: string): SeoRoute | undefined {
  const coreService = pathname.match(/^\/([^/]+)\/$/)
  if (coreService) {
    const service = getService(coreService[1])
    if (service) return { type: "service", service }
  }

  if (pathname === "/apartment-cleaning-pricing/") return { type: "pricing" }
  if (pathname === "/apartment-cleaning-checklist/") return { type: "checklist" }
  if (pathname === "/service-areas/") return { type: "serviceAreas" }
  if (pathname === "/faq/") return { type: "faq" }

  const cityMatch = pathname.match(/^\/service-areas\/([^/]+)\/$/)
  if (cityMatch) {
    const city = getCity(cityMatch[1])
    if (city) return { type: "city", city }
  }

  const cityServiceMatch = pathname.match(/^\/service-areas\/([^/]+)\/([^/]+)\/$/)
  if (cityServiceMatch) {
    const city = getCity(cityServiceMatch[1])
    const lowIntent = lowIntentPages.find((item) => item.slug === cityServiceMatch[2])
    const service = cityServices.find((item) => item.slug === cityServiceMatch[2])
    if (city && lowIntent) return { type: "lowIntent", city, page: lowIntent }
    if (city && service) return { type: "cityService", city, service }
  }

  return undefined
}

function pageTitle(route?: SeoRoute, legalPage?: (typeof legalPages)[keyof typeof legalPages]) {
  if (legalPage) return `${legalPage.title} | Shynli Apartment Cleaning`
  if (!route) return "Shynli Apartment Cleaning | Apartment Cleaning Services"
  if (route.type === "service") return `${route.service.name} | Shynli Apartment Cleaning`
  if (route.type === "city") return `Apartment Cleaners in ${route.city.name} | Shynli Apartment`
  if (route.type === "cityService") return `${route.service.shortName} Cleaning in ${route.city.name} | Shynli Apartment`
  if (route.type === "lowIntent") return route.page.title(route.city.name)
  if (route.type === "pricing") return "Apartment Cleaning Pricing | Shynli Apartment Cleaning"
  if (route.type === "checklist") return "Apartment Cleaning Checklist | Shynli Apartment Cleaning"
  if (route.type === "serviceAreas") return "Apartment Cleaning Service Areas | Shynli Apartment Cleaning"
  return "Apartment Cleaning FAQ | Shynli Apartment Cleaning"
}

function pageDescription(route?: SeoRoute, legalPage?: (typeof legalPages)[keyof typeof legalPages]) {
  if (legalPage) return legalPage.intro
  if (!route) return "Book apartment cleaning with vetted cleaners, supplies included, clear pricing, local service areas, and re-clean support."
  if (route.type === "service") return route.service.meta()
  if (route.type === "city") return `Apartment cleaning in ${route.city.name} with vetted cleaners, supplies included, clear estimates, recurring, deep, move-in, and move-out options.`
  if (route.type === "cityService") return route.service.meta(route.city.name)
  if (route.type === "lowIntent") return route.page.meta(route.city.name)
  if (route.type === "pricing") return "See apartment cleaning pricing by clean type, apartment size, bathrooms, pets, add-ons, and move-in or move-out needs."
  if (route.type === "checklist") return "Review the apartment cleaning checklist for kitchens, bathrooms, living areas, bedrooms, floors, supplies, and move-out details."
  if (route.type === "serviceAreas") return "See apartment cleaning service areas across Chicagoland suburbs with local city pages, service options, and booking support."
  return "Answers to apartment cleaning questions about pricing, supplies, access, recurring service, move-in, move-out, and re-clean support."
}

function setPageMeta(title: string, description: string, pathname: string, schema?: Record<string, unknown>) {
  document.title = title
  setMeta("description", description)
  setCanonical(`${siteUrl}${pathname}`)

  document.querySelectorAll("script[data-seo-schema]").forEach((node) => node.remove())
  if (schema) {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.dataset.seoSchema = "true"
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)
  }
}

function setMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement("meta")
    tag.name = name
    document.head.appendChild(tag)
  }
  tag.content = content
}

function setCanonical(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) {
    link = document.createElement("link")
    link.rel = "canonical"
    document.head.appendChild(link)
  }
  link.href = href
}

function localBusinessSchema(pathname: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Shynli Apartment Cleaning",
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}/apartment-hero-new.jpg`,
    telephone: "+1-630-555-0142",
    areaServed: cities.map((city) => city.name),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "IL",
      addressCountry: "US",
    },
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      name: service.name,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: service.price,
      },
    })),
  }
}

function App() {
  const [bedrooms, setBedrooms] = useState("1")
  const [bathrooms, setBathrooms] = useState("1")
  const currentPath = normalizePath(window.location.pathname)

  const estimate = useMemo(() => {
    const rooms = Number(bedrooms || 1)
    const baths = Number(bathrooms || 1)
    return 109 + rooms * 32 + baths * 28
  }, [bedrooms, bathrooms])

  const legalPage =
    legalPages[window.location.pathname as keyof typeof legalPages] ||
    legalPages[currentPath.slice(0, -1) as keyof typeof legalPages]
  const seoRoute = resolveSeoRoute(currentPath)

  useEffect(() => {
    setPageMeta(pageTitle(seoRoute, legalPage), pageDescription(seoRoute, legalPage), currentPath, localBusinessSchema(currentPath))
  }, [currentPath, legalPage, seoRoute])

  if (legalPage) {
    return <LegalPage page={legalPage} />
  }

  if (seoRoute) {
    return <SeoPage route={seoRoute} />
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfdfd] pb-24 text-[#142027] md:pb-0">
      <Hero estimate={estimate} bedrooms={bedrooms} bathrooms={bathrooms} setBedrooms={setBedrooms} setBathrooms={setBathrooms} />
      <TrustStrip />
      <ServiceTabs />
      <Checklist />
      <Process />
      <Coverage />
      <Guarantee />
      <Faq />
      <FinalCta />
      <Footer />
      <MobileBookBar estimate={estimate} />
    </main>
  )
}

function Hero({
  estimate,
  bedrooms,
  bathrooms,
  setBedrooms,
  setBathrooms,
}: {
  estimate: number
  bedrooms: string
  bathrooms: string
  setBedrooms: (value: string) => void
  setBathrooms: (value: string) => void
}) {
  return (
    <section id="estimate" className="relative min-h-[88svh] overflow-hidden bg-[#101820] text-white">
      <img
        src="/apartment-hero-new.jpg"
        alt="Bright clean apartment living room after professional cleaning"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="hero-noise absolute inset-0" />
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="Shynli Apartment Cleaning home">
          <span className="flex size-10 items-center justify-center rounded-full bg-[#62ffd5] text-[#101820]">
            <Sparkles className="size-5" />
          </span>
          <span className="font-display text-base font-black tracking-normal sm:text-lg">Shynli Apartment Cleaning</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/80 lg:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#checklist" className="hover:text-white">Checklist</a>
          <a href="#coverage" className="hover:text-white">Areas</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <Button asChild className="hidden rounded-full bg-white px-5 text-[#101820] hover:bg-[#62ffd5] sm:inline-flex">
          <a href={quoteUrl}>
            Get price
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </header>

      <div className="relative z-10 mx-auto grid min-h-[calc(88svh-84px)] max-w-7xl items-center gap-8 px-5 pb-28 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:grid-cols-[0.95fr_0.82fr] lg:gap-14 lg:pb-14">
        <div className="max-w-3xl">
          <Badge className="reveal-up mb-5 rounded-full border-white/18 bg-white/10 px-4 py-2 text-white shadow-lg shadow-black/10 hover:bg-white/10">
            Apartment-first cleaning in 60 seconds
          </Badge>
          <h1 className="reveal-up delay-1 font-display max-w-4xl text-4xl font-black leading-[0.96] tracking-normal sm:text-6xl lg:text-7xl xl:text-8xl">
            Your apartment, reset in one visit.
          </h1>
          <p className="reveal-up delay-2 mt-5 max-w-2xl text-base font-semibold leading-7 text-white/78 sm:mt-6 sm:text-xl sm:leading-8">
            Get a transparent apartment cleaning estimate, choose your time, and leave the kitchen, bath, floors, pet hair, and move-out details to vetted pros.
          </p>
          <div className="reveal-up delay-3 mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-13 rounded-full bg-[#62ffd5] px-7 text-base font-black text-[#101820] shadow-xl shadow-[#62ffd5]/20 hover:bg-white">
              <a href={quoteUrl}>
                See instant estimate
                <ArrowRight className="size-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-13 rounded-full border-white/35 bg-white/10 px-7 text-base font-bold text-white hover:bg-white hover:text-[#101820]">
              View checklist
            </Button>
          </div>
          <div className="reveal-up delay-3 mt-7 hidden max-w-xl grid-cols-3 gap-3 border-t border-white/14 pt-5 text-sm font-bold text-white/72 sm:grid">
            {["Supplies included", "Insured cleaners", "24 hr support"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="size-4 shrink-0 text-[#62ffd5]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-up delay-2 w-full justify-self-end rounded-[1.65rem] border border-white/24 bg-[#fbfdfd]/96 p-4 text-[#142027] shadow-2xl shadow-black/28 backdrop-blur md:max-w-[520px] md:p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff6b57]">Instant apartment quote</p>
              <h2 className="mt-1 text-2xl font-black tracking-normal">Build your clean</h2>
            </div>
            <div className="rounded-full bg-[#142027] px-4 py-2 text-sm font-black text-white">${estimate}+</div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <label className="space-y-2">
              <span className="text-xs font-bold text-[#53616a]">Bedrooms</span>
              <Input value={bedrooms} onChange={(event) => setBedrooms(event.target.value)} inputMode="numeric" className="h-12 rounded-2xl border-[#c8d5d6] bg-white text-lg font-black" />
            </label>
            <label className="space-y-2">
              <span className="text-xs font-bold text-[#53616a]">Bathrooms</span>
              <Input value={bathrooms} onChange={(event) => setBathrooms(event.target.value)} inputMode="numeric" className="h-12 rounded-2xl border-[#c8d5d6] bg-white text-lg font-black" />
            </label>
          </div>
          <div className="mt-4 grid gap-2 text-sm font-semibold text-[#40505a]">
            {["Vetted and insured cleaners", "Supplies and equipment included", "Re-clean support if anything is missed"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-[#eefafa] px-3 py-2 transition-transform hover:-translate-y-0.5">
                <Check className="size-4 text-[#00a885]" />
                {item}
              </div>
            ))}
          </div>
          <Button asChild className="mt-5 h-12 w-full rounded-2xl bg-[#142027] text-base font-black text-white hover:bg-[#ff6b57]">
            <a href={quoteUrl}>
              Continue to times
              <ChevronRight className="size-5" />
            </a>
          </Button>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-black uppercase tracking-[0.11em] text-[#6a777f]">
            <span>No card yet</span>
            <span>Flat estimate</span>
            <span>Easy reschedule</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustStrip() {
  return (
    <section className="border-y border-[#dfe8e8] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-4">
        {[
          ["4.9", "local rating"],
          ["24 hr", "support window"],
          ["0", "supply runs"],
          ["same", "cleaner when possible"],
        ].map(([value, label]) => (
          <div key={label} className="px-3 py-7 text-center transition-colors hover:bg-[#f4fbfb]">
            <p className="font-display text-4xl font-black tracking-normal text-[#142027]">{value}</p>
            <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-[#66747d]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ServiceTabs() {
  const [activeTypeId, setActiveTypeId] = useState<(typeof serviceTypes)[number]["id"]>("standard")
  const activeType = serviceTypes.find((type) => type.id === activeTypeId) ?? serviceTypes[0]

  return (
    <section id="services" className="bg-[#fbfdfd] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="rounded-[2rem] bg-[#142027] p-6 text-white sm:p-8 lg:p-10">
            <Badge className="rounded-full bg-[#62ffd5] px-4 py-2 text-[#142027] hover:bg-[#62ffd5]">Choose your clean</Badge>
            <h2 className="font-display mt-7 max-w-2xl text-4xl font-black leading-[1.02] tracking-normal sm:text-5xl">
              Match the clean to the way your apartment lives.
            </h2>
            <p className="mt-5 max-w-xl text-base font-medium leading-7 text-white/68 sm:text-lg">
              Start with the closest fit, then add bedrooms, bathrooms, pets, access notes, or move-out details before you book.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center">
              {[
                ["2-3 hrs", "fresh reset"],
                ["4-5 hrs", "detail clean"],
                ["5-7 hrs", "turnover"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-lg font-black text-[#62ffd5]">{value}</p>
                  <p className="mt-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-white/45">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            {[
              ["Standard", "For normal weekly, bi-weekly, or one-time upkeep.", "$129+"],
              ["Deep", "For first visits, buildup, guests, pets, and neglected corners.", "$219+"],
              ["Move-in/out", "For empty units, deposit checks, cabinets, and appliances.", "$279+"],
            ].map(([title, text, price]) => (
              <div key={title} className="group flex items-center justify-between gap-5 rounded-[1.5rem] border border-[#dce7e8] bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#62ffd5]/80 hover:shadow-xl hover:shadow-[#16343a]/5">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#eefafa] text-[#00a885] transition-colors group-hover:bg-[#62ffd5] group-hover:text-[#142027]">
                      <Check className="size-5" />
                    </span>
                    <h3 className="text-xl font-black tracking-normal">{title}</h3>
                  </div>
                  <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-[#52616b]">{text}</p>
                </div>
                <div className="shrink-0 rounded-full bg-[#142027] px-4 py-2 text-sm font-black text-white">{price}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="grid w-full grid-cols-1 gap-2 rounded-[1.5rem] bg-[#e9f5f4] p-2 sm:grid-cols-3" role="tablist" aria-label="Apartment cleaning package type">
            {serviceTypes.map((type) => (
              <button
                key={type.id}
                id={`package-tab-${type.id}`}
                type="button"
                role="tab"
                aria-selected={activeTypeId === type.id}
                aria-controls={`package-panel-${type.id}`}
                onClick={() => setActiveTypeId(type.id)}
                className={`min-h-14 rounded-[1.15rem] px-4 py-4 text-base font-black transition-colors ${
                  activeTypeId === type.id
                    ? "bg-white text-[#142027] shadow-sm"
                    : "text-[#52616b] hover:bg-white/70 hover:text-[#142027]"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
          <div
            id={`package-panel-${activeType.id}`}
            role="tabpanel"
            aria-labelledby={`package-tab-${activeType.id}`}
            className="mt-6 grid overflow-hidden rounded-[2rem] border border-[#d8e5e6] bg-white shadow-xl shadow-[#16343a]/5 transition-shadow hover:shadow-2xl hover:shadow-[#16343a]/10 lg:grid-cols-[0.92fr_1.08fr]"
          >
            <div className="apartment-grid p-6 sm:p-9">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff6b57]">{activeType.time}</p>
              <h3 className="mt-3 text-5xl font-black tracking-normal">{activeType.price}</h3>
              <p className="mt-4 max-w-md text-lg leading-8 text-[#53616a]">{activeType.text}</p>
              <Button asChild className="mt-7 rounded-full bg-[#142027] px-6 font-black text-white hover:bg-[#ff6b57]">
                <a href={quoteUrl}>
                  Check availability
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
            <div className="grid gap-3 p-6 sm:p-9">
              {activeType.bullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-3 rounded-2xl border border-[#dbe7e8] bg-[#fbfdfd] p-4 text-base font-bold transition-transform hover:-translate-y-0.5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#62ffd5]">
                    <Check className="size-5" />
                  </span>
                  {bullet}
                </div>
              ))}
              <div className="rounded-2xl bg-[#142027] p-5 text-white">
                <p className="text-sm font-bold text-white/70">Best for</p>
                <p className="mt-1 text-xl font-black leading-snug">Renters, condo owners, busy professionals, pet homes, and apartment turnovers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Checklist() {
  return (
    <section id="checklist" className="bg-[#101820] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Badge className="rounded-full bg-[#62ffd5] px-4 py-2 text-[#101820]">Room-by-room checklist</Badge>
            <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-6xl">
              Built for apartments, not generic houses.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-white/72">
            Every clean follows a visible scope, so you know what gets handled before anyone arrives.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {rooms.map((room) => (
            <Card key={room.title} className="rounded-[1.5rem] border-white/12 bg-white/[0.06] text-white shadow-none transition-all hover:-translate-y-1 hover:border-[#62ffd5]/45 hover:bg-white/[0.09]">
              <CardContent className="p-6">
                <room.icon className="size-8 text-[#62ffd5]" />
                <h3 className="mt-6 text-2xl font-black">{room.title}</h3>
                <ul className="mt-5 grid gap-3 text-sm font-semibold text-white/72">
                  {room.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#62ffd5]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Badge className="rounded-full bg-[#ffe3de] px-4 py-2 text-[#a53625]">Fast booking flow</Badge>
            <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-6xl">
              From messy apartment to booked slot in four steps.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#52616b]">
              Clear choices, clear arrival details, and a support window keep the booking simple without making your home feel anonymous.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {process.map((step, index) => (
              <div key={step.title} className="rounded-[1.5rem] border border-[#dce7e8] bg-[#fbfdfd] p-6 transition-all hover:-translate-y-1 hover:border-[#62ffd5]/70 hover:bg-white">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-full bg-[#142027] text-white">
                    <step.icon className="size-6" />
                  </span>
                  <span className="text-sm font-black text-[#ff6b57]">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#52616b]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Coverage() {
  return (
    <section id="coverage" className="border-y border-[#dce7e8] bg-[#eefafa] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <Badge className="rounded-full bg-white px-4 py-2 text-[#142027]">Local service area</Badge>
          <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-6xl">
            Suburban apartments, condos, townhomes, and managed units.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#52616b]">
            Book apartment cleaning across select Chicagoland suburbs, with city-specific availability, access notes, and recurring schedules.
          </p>
          <div className="mt-7 grid gap-4 rounded-[1.5rem] border border-[#d2e3e4] bg-white/72 p-4 shadow-sm sm:p-5">
            {cityGroups.map((group) => (
              <div key={group.label} className="grid gap-3 sm:grid-cols-[56px_1fr]">
                <div className="flex h-8 w-fit items-center rounded-full bg-[#142027] px-3 text-xs font-black text-white sm:w-full sm:justify-center">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.cities.map((zone) => (
                    <Badge key={zone} variant="outline" className="rounded-full border-[#bdd0d2] bg-white px-3 py-1.5 text-xs font-bold sm:text-sm">
                      <MapPin className="size-3.5" />
                      {zone}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#142027] p-6 text-white shadow-2xl shadow-[#16343a]/10">
          <img src="/apartment-detail-new.jpg" alt="Sunlit modern apartment kitchen prepared for cleaning" className="h-72 w-full rounded-[1.5rem] object-cover" />
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              [ShieldCheck, "Insured"],
              [BadgeCheck, "Vetted"],
              [MessageCircle, "Text support"],
            ].map(([Icon, label]) => (
              <div key={label as string} className="rounded-2xl bg-white/10 p-4">
                <Icon className="size-6 text-[#62ffd5]" />
                <p className="mt-3 font-black">{label as string}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Guarantee() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-[#142027] p-8 text-white lg:col-span-2">
            <Star className="size-9 fill-[#62ffd5] text-[#62ffd5]" />
            <h2 className="font-display mt-6 text-4xl font-black leading-tight tracking-normal sm:text-6xl">
              If something feels off, it is easy to fix.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Text us within 24 hours. We review the note, make the next step clear, and send help back when a re-clean is needed.
            </p>
          </div>
          <div className="grid gap-4">
            <img
              src="/apartment-supplies-new.jpg"
              alt="Natural cleaning bottles and apartment-safe supplies"
              className="h-40 w-full rounded-[1.35rem] border border-[#dce7e8] object-cover shadow-sm"
            />
            {["No hidden apartment fees", "Supplies included", "Recurring discounts", "Move-out add-ons"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[1.35rem] border border-[#dce7e8] bg-[#fbfdfd] p-5 font-black transition-colors hover:border-[#62ffd5] hover:bg-[#eefafa]">
                <Check className="size-5 text-[#00a885]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="bg-[#fbfdfd] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <Badge className="rounded-full bg-[#142027] px-4 py-2 text-white">Apartment FAQ</Badge>
          <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            Questions renters ask before they book.
          </h2>
        </div>
        <Accordion type="single" collapsible className="rounded-[2rem] border border-[#dce7e8] bg-white px-4 sm:px-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.q} value={`item-${index}`}>
              <AccordionTrigger className="py-6 text-left text-lg font-black">{faq.q}</AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-7 text-[#52616b]">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="bg-[#101820] px-5 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Building2 className="mx-auto size-11 text-[#62ffd5]" />
        <h2 className="font-display mt-6 text-4xl font-black leading-tight tracking-normal sm:text-6xl">
          Make the apartment feel new again.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">
          Instant estimate, real checklist, trusted cleaners, easy recurring plan.
        </p>
        <Button asChild size="lg" className="mt-8 h-13 rounded-full bg-[#62ffd5] px-8 text-base font-black text-[#101820] hover:bg-white">
          <a href={quoteUrl}>
            Start booking
            <ArrowRight className="size-5" />
          </a>
        </Button>
      </div>
    </section>
  )
}

function SeoPage({ route }: { route: SeoRoute }) {
  if (route.type === "service") return <ServiceSeoPage service={route.service} />
  if (route.type === "city") return <CityHubPage city={route.city} />
  if (route.type === "cityService") return <CityServicePage city={route.city} service={route.service} />
  if (route.type === "lowIntent") return <LowIntentRoutePage city={route.city} page={route.page} />
  if (route.type === "pricing") return <PricingPage />
  if (route.type === "checklist") return <ChecklistPage />
  if (route.type === "serviceAreas") return <ServiceAreasPage />
  return <FaqPage />
}

function SeoShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfdfd] text-[#142027]">
      <SimpleHeader />
      {children}
      <Footer />
    </main>
  )
}

function SimpleHeader() {
  return (
    <header className="border-b border-[#dce7e8] bg-[#101820] px-5 py-5 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3" aria-label="Shynli Apartment Cleaning home">
          <span className="flex size-10 items-center justify-center rounded-full bg-[#62ffd5] text-[#101820]">
            <Sparkles className="size-5" />
          </span>
          <span className="font-display text-base font-black tracking-normal sm:text-lg">Shynli Apartment Cleaning</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-bold text-white/72 lg:flex">
          <a href="/apartment-cleaning/" className="hover:text-white">Services</a>
          <a href="/service-areas/" className="hover:text-white">Areas</a>
          <a href="/apartment-cleaning-pricing/" className="hover:text-white">Pricing</a>
          <a href="/faq/" className="hover:text-white">FAQ</a>
        </nav>
        <Button asChild className="rounded-full bg-white px-5 text-[#101820] hover:bg-[#62ffd5]">
          <a href={quoteUrl}>Get price</a>
        </Button>
      </div>
    </header>
  )
}

function ServiceSeoPage({ service }: { service: Service }) {
  return (
    <SeoShell>
      <SeoHero
        badge={service.time}
        title={service.headline}
        text={`${service.promise} Pricing starts at ${service.price}, with supplies included and a clear scope before the appointment.`}
        image="/apartment-detail-new.jpg"
        primaryHref={quoteUrl}
        secondaryHref="/apartment-cleaning-checklist/"
      />
      <ServiceValueSections service={service} />
      <LocalLinks title={`Book ${service.name.toLowerCase()} near you`} serviceSlug={cityServices.some((item) => item.slug === service.slug) ? service.slug : undefined} />
      <SeoFaq items={service.faqs.map((faq) => ({ q: faq.q(), a: faq.a() }))} />
      <SeoCta title={`Ready to price your ${service.shortName.toLowerCase()} clean?`} />
    </SeoShell>
  )
}

function CityHubPage({ city }: { city: (typeof cities)[number] }) {
  return (
    <SeoShell>
      <SeoHero
        badge="Local apartment cleaning"
        title={`Apartment cleaning in ${city.name} for real apartment life.`}
        text={`${city.localContext} Choose standard, deep, move-in, or move-out cleaning with supplies included and a clear estimate before you confirm.`}
        image="/apartment-hero-new.jpg"
        primaryHref={quoteUrl}
        secondaryHref="/apartment-cleaning-pricing/"
      />
      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge className="rounded-full bg-[#142027] px-4 py-2 text-white">Choose your clean</Badge>
            <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              Four ways to clean an apartment in {city.name}.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#52616b]">
              Each option is built around the same promise: clear scope, supplies included, careful access notes, and support if something is missed.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cityServices.map((service) => (
              <a key={service.slug} href={`/service-areas/${city.slug}/${service.slug}/`} className="group rounded-[1.4rem] border border-[#dce7e8] bg-[#fbfdfd] p-5 transition-all hover:-translate-y-1 hover:border-[#62ffd5] hover:bg-white">
                <service.icon className="size-7 text-[#00a885]" />
                <h3 className="mt-5 text-xl font-black">{service.name}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#52616b]">{service.fit}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#142027]">
                  See {city.name} page <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <LocalContext city={city} />
      <LocalTrust city={city.name} />
      <LowIntentLinks city={city} />
      <LocalLinks title={`Nearby apartment cleaning pages around ${city.name}`} centerCitySlug={city.slug} />
      <SeoFaq
        items={[
          {
            q: `Do you bring supplies for apartment cleaning in ${city.name}?`,
            a: "Yes. Cleaners bring supplies and equipment. Add product preferences, parking, building access, or pet notes before the visit.",
          },
          {
            q: `Can I book move-out cleaning in ${city.name}?`,
            a: "Yes. Move-out cleaning is available for empty apartments, final walkthroughs, landlords, renters, and property managers.",
          },
          {
            q: `Can I set recurring apartment cleaning in ${city.name}?`,
            a: "Yes. Weekly, bi-weekly, and monthly visits are available when route capacity allows.",
          },
        ]}
      />
      <SeoCta title={`Get an apartment cleaning estimate in ${city.name}.`} />
    </SeoShell>
  )
}

function CityServicePage({ city, service }: { city: (typeof cities)[number]; service: Service }) {
  return (
    <SeoShell>
      <SeoHero
        badge={`${service.price} · ${service.time}`}
        title={service.cityHeadline(city.name)}
        text={`${service.promise} ${city.localContext} Vetted cleaners bring supplies, and access notes are handled before arrival.`}
        image={service.slug.includes("move") ? "/apartment-supplies-new.jpg" : "/apartment-detail-new.jpg"}
        primaryHref={quoteUrl}
        secondaryHref="/apartment-cleaning-checklist/"
      />
      <ServiceValueSections service={service} city={city.name} />
      <LocalContext city={city} service={service.shortName} />
      <LocalTrust city={city.name} />
      <LocalLinks title={`More apartment cleaning options in ${city.name}`} activeCitySlug={city.slug} />
      <SeoFaq items={service.faqs.map((faq) => ({ q: faq.q(city.name), a: faq.a(city.name) }))} />
      <SeoCta title={`Book ${service.shortName.toLowerCase()} cleaning in ${city.name}.`} />
    </SeoShell>
  )
}

function LowIntentRoutePage({ city, page }: { city: (typeof cities)[number]; page: LowIntentPage }) {
  return (
    <SeoShell>
      <SeoHero
        badge={page.badge}
        title={page.h1(city.name)}
        text={`${page.intro(city.name, city.note)} ${city.localContext}`}
        image={page.image}
        primaryHref={quoteUrl}
        secondaryHref="/apartment-cleaning-pricing/"
      />
      <LocalContext city={city} service={page.shortName} />
      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge className="rounded-full bg-[#ffe3de] px-4 py-2 text-[#a53625]">{page.shortName}</Badge>
            <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              A focused page for the details that change the job.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#52616b]">
              This is not a generic cleaning quote. It connects the city, the apartment type, and the reason you are booking so the scope is easier to understand before anyone arrives.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.sections.map((section) => (
              <div key={section.title} className="rounded-[1.35rem] border border-[#dce7e8] bg-[#fbfdfd] p-6 transition-colors hover:border-[#62ffd5] hover:bg-white">
                <Check className="size-5 text-[#00a885]" />
                <h3 className="mt-4 text-xl font-black">{section.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#52616b]">{section.text}</p>
              </div>
            ))}
            <div className="rounded-[1.35rem] bg-[#142027] p-6 text-white">
              <h3 className="text-xl font-black">Good fit for</h3>
              <ul className="mt-4 grid gap-3 text-sm font-semibold text-white/72">
                {page.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#62ffd5]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <LocalTrust city={city.name} />
      <section className="bg-[#fbfdfd] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Badge className="rounded-full bg-[#142027] px-4 py-2 text-white">Related booking paths</Badge>
              <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
                Compare the main {city.name} cleaning options.
              </h2>
            </div>
            <a href={`/service-areas/${city.slug}/`} className="inline-flex items-center gap-2 text-sm font-black text-[#00a885]">
              Back to {city.name} <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {cityServices.map((service) => (
              <a key={service.slug} href={`/service-areas/${city.slug}/${service.slug}/`} className="group rounded-[1.25rem] border border-[#dce7e8] bg-white p-5 transition-all hover:-translate-y-1 hover:border-[#62ffd5]">
                <service.icon className="size-6 text-[#00a885]" />
                <h3 className="mt-4 text-lg font-black">{service.name}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#52616b]">{service.price} · {service.time}</p>
                <ArrowRight className="mt-4 size-4 text-[#00a885] transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <SeoFaq items={page.faqs.map((faq) => ({ q: faq.q(city.name), a: faq.a }))} />
      <SeoCta title={lowIntentCtaTitle(page, city.name)} />
    </SeoShell>
  )
}

function lowIntentCtaTitle(page: LowIntentPage, city: string) {
  if (page.slug === "apartment-cleaning-prices") return `Get a clear apartment cleaning estimate in ${city}.`
  if (page.slug === "tenant-move-out-cleaning") return `Plan your tenant move-out cleaning in ${city}.`
  return `Get the apartment turnover ready in ${city}.`
}

function PricingPage() {
  return (
    <SeoShell>
      <SeoHero
        badge="Transparent estimates"
        title="Apartment cleaning pricing without a guessing game."
        text="Start with the clean type, then adjust for bedrooms, bathrooms, condition, pets, access, and add-ons before you choose a time."
        image="/apartment-supplies-new.jpg"
        primaryHref={quoteUrl}
        secondaryHref="/apartment-cleaning-checklist/"
      />
      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <a key={service.slug} href={`/${service.slug}/`} className="rounded-[1.4rem] border border-[#dce7e8] bg-[#fbfdfd] p-6 transition-all hover:-translate-y-1 hover:border-[#62ffd5] hover:bg-white">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[#ff6b57]">{service.time}</p>
                <h2 className="mt-3 text-2xl font-black">{service.name}</h2>
                <p className="mt-4 text-4xl font-black">{service.price}</p>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#52616b]">{service.fit}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-[#dce7e8] bg-[#eefafa] py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <Badge className="rounded-full bg-white px-4 py-2 text-[#142027]">What changes the price</Badge>
            <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              The estimate follows the apartment, not a mystery fee.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#52616b]">
              The clean type sets the starting point. The final estimate changes when the apartment needs more rooms, more bathrooms, deeper buildup work, special access, or move timing.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Bedrooms and bathrooms", "More rooms add surface area, floors, fixtures, mirrors, trash, and reset time."],
              ["Apartment condition", "Heavy buildup, pet hair, dust, grease, or neglected corners need a deeper scope."],
              ["Move-in or move-out timing", "Empty units often include cabinets, drawers, appliance options, and walkthrough-minded detail."],
              ["Add-ons", "Fridge, oven, laundry area, baseboards, interior windows, and extra detail can be added before booking."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.35rem] border border-[#d2e3e4] bg-white p-6">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#52616b]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SeoCta title="Build your apartment cleaning estimate." />
    </SeoShell>
  )
}

function ChecklistPage() {
  return (
    <SeoShell>
      <SeoHero
        badge="Room-by-room scope"
        title="An apartment cleaning checklist you can read before booking."
        text="Know what gets handled in the kitchen, bathroom, living spaces, bedrooms, floors, access notes, and move-out details before the cleaner arrives."
        image="/apartment-detail-new.jpg"
        primaryHref={quoteUrl}
        secondaryHref="/apartment-cleaning-pricing/"
      />
      <Checklist />
      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <Badge className="rounded-full bg-[#142027] px-4 py-2 text-white">Before you choose a clean</Badge>
            <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              Use the checklist to choose the right level, not to decode a vague package.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#52616b]">
              Standard, deep, move-in, and move-out cleaning all share the same goal: make the apartment feel handled. The difference is how much detail time the kitchen, bathrooms, floors, cabinets, appliances, and buildup need.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Standard reset", "Best when the apartment is lived in but maintained: kitchen, bath, floors, dusting, trash, and surfaces."],
              ["Deep detail", "Best for first visits, pets, heavier dust, grease, bathroom buildup, baseboards, and corners."],
              ["Move-in clean", "Best before furniture and boxes arrive, when cabinets, drawers, floors, and appliance areas are easier to reach."],
              ["Move-out clean", "Best after belongings are removed, with walkthrough-minded attention to cabinets, floors, doors, and add-ons."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.35rem] border border-[#dce7e8] bg-[#fbfdfd] p-6 transition-colors hover:border-[#62ffd5] hover:bg-white">
                <Check className="size-5 text-[#00a885]" />
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#52616b]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SeoCta title="Choose the checklist that fits your apartment." />
    </SeoShell>
  )
}

function ServiceAreasPage() {
  return (
    <SeoShell>
      <SeoHero
        badge={`${cities.length} local service areas`}
        title="Apartment cleaning across the western Chicago suburbs."
        text={`Browse ${cities.length} city pages and choose apartment cleaning, deep cleaning, move-in cleaning, or move-out cleaning near you.`}
        image="/apartment-hero-new.jpg"
        primaryHref={quoteUrl}
        secondaryHref="/apartment-cleaning/"
      />
      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <Badge className="rounded-full bg-[#142027] px-4 py-2 text-white">Local coverage</Badge>
              <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
                Find apartment cleaning near your city.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-[#52616b]">
              Each local page helps you choose the right clean, compare move-in and move-out options, and start with a clear estimate.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cities.map((city) => (
              <a key={city.slug} href={`/service-areas/${city.slug}/`} className="rounded-[1.4rem] border border-[#dce7e8] bg-[#fbfdfd] p-5 transition-all hover:-translate-y-1 hover:border-[#62ffd5] hover:bg-white">
                <MapPin className="size-6 text-[#00a885]" />
                <h3 className="mt-4 text-2xl font-black">Apartment cleaning in {city.name}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#52616b]">Local cleaning for {city.note}.</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-[#dce7e8] bg-[#eefafa] py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <Badge className="rounded-full bg-white px-4 py-2 text-[#142027]">Local fit</Badge>
            <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              Coverage is organized around real apartment logistics.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#52616b]">
              City pages are grouped around access notes, parking, building entry, move timing, pets, recurring schedules, and whether the appointment is for a renter, owner, landlord, or property manager.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Access before arrival", "Lockbox, smart lock, concierge, leasing office, elevator, driveway, and parking notes can be added before booking."],
              ["Service by scenario", "Choose standard, deep, move-in, move-out, pricing, tenant move-out, or turnover pages based on why the apartment needs cleaning."],
              ["Nearby city paths", "Local pages link into nearby suburbs and service-specific options so customers can move naturally through the site."],
              ["Estimate-first booking", "Every page points back to a clear estimate path instead of leaving the visitor with generic service copy."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.35rem] border border-[#d2e3e4] bg-white p-6">
                <Check className="size-5 text-[#00a885]" />
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#52616b]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SeoShell>
  )
}

function FaqPage() {
  return (
    <SeoShell>
      <SeoHero
        badge="Apartment cleaning answers"
        title="Questions renters ask before booking apartment cleaning."
        text="Clear answers about supplies, access, recurring cleaning, move-in and move-out work, pricing, timing, and re-clean support."
        image="/apartment-supplies-new.jpg"
        primaryHref={quoteUrl}
        secondaryHref="/apartment-cleaning-pricing/"
      />
      <Faq />
      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-3">
          {[
            ["Pricing", "Compare starting estimates and what changes the final apartment cleaning price.", "/apartment-cleaning-pricing/"],
            ["Checklist", "See what gets cleaned in the kitchen, bathrooms, bedrooms, living areas, and floors.", "/apartment-cleaning-checklist/"],
            ["Service areas", "Find your local apartment cleaning page and nearby move-in or move-out options.", "/service-areas/"],
            ["Booking", "Start with bedrooms, bathrooms, clean type, pets, access notes, and preferred timing for a cleaner quote.", quoteUrl],
          ].map(([title, text, href]) => (
            <a key={title} href={href} className="group rounded-[1.4rem] border border-[#dce7e8] bg-[#fbfdfd] p-6 transition-all hover:-translate-y-1 hover:border-[#62ffd5] hover:bg-white">
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 text-sm font-semibold leading-6 text-[#52616b]">{text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#00a885]">
                Open page <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </section>
      <SeoCta title="Ready to turn the answers into a price?" />
    </SeoShell>
  )
}

function SeoHero({
  badge,
  title,
  text,
  image,
  primaryHref,
  secondaryHref,
}: {
  badge: string
  title: string
  text: string
  image: string
  primaryHref: string
  secondaryHref: string
}) {
  return (
    <section className="relative overflow-hidden bg-[#101820] px-5 py-20 text-white sm:px-8 sm:py-28">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-34" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101820] via-[#101820]/88 to-[#101820]/45" />
      <div className="relative mx-auto max-w-7xl">
        <Badge className="rounded-full border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/10">{badge}</Badge>
        <h1 className="font-display mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/76">{text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-13 rounded-full bg-[#62ffd5] px-7 text-base font-black text-[#101820] hover:bg-white">
            <a href={primaryHref}>See instant estimate</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-white/35 bg-white/10 px-7 text-base font-bold text-white hover:bg-white hover:text-[#101820]">
            <a href={secondaryHref}>Review checklist</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ServiceValueSections({ service, city }: { service: Service; city?: string }) {
  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <Badge className="rounded-full bg-[#ffe3de] px-4 py-2 text-[#a53625]">{service.price} starting estimate</Badge>
          <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            What your {city ? `${city} ` : ""}{service.shortName.toLowerCase()} clean covers.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#52616b]">
            {service.fit} The appointment is scoped before arrival so the cleaner has the right time, supplies, and access notes.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {service.checklist.map((item) => (
            <div key={item} className="rounded-[1.35rem] border border-[#dce7e8] bg-[#fbfdfd] p-5 transition-colors hover:border-[#62ffd5] hover:bg-white">
              <Check className="size-5 text-[#00a885]" />
              <p className="mt-4 font-bold leading-7 text-[#40505a]">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-6 grid max-w-7xl gap-3 px-5 sm:grid-cols-3 sm:px-8">
        {service.proof.map((item) => (
          <div key={item} className="rounded-[1.2rem] bg-[#eefafa] p-5 font-black text-[#142027]">
            <BadgeCheck className="mb-3 size-5 text-[#00a885]" />
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}

function LocalTrust({ city }: { city: string }) {
  return (
    <section className="border-y border-[#dce7e8] bg-[#eefafa] py-16">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-3">
        {[
          ["Access notes", `Concierge, lockbox, smart lock, leasing office, or stay-home access in ${city}.`],
          ["Apartment-safe scope", "Kitchens, baths, floors, surfaces, pets, and move timing are handled before booking."],
          ["Support window", "Text support is available after the visit if anything in the booked scope feels missed."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[1.35rem] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">{title}</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-[#52616b]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function LocalContext({ city, service }: { city: (typeof cities)[number]; service?: string }) {
  return (
    <section className="bg-[#fbfdfd] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <Badge className="rounded-full bg-[#142027] px-4 py-2 text-white">Local fit</Badge>
          <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            Built around how {city.name} apartments are actually booked.
          </h2>
        </div>
        <div className="rounded-[1.5rem] border border-[#dce7e8] bg-white p-6 shadow-sm sm:p-8">
          <p className="text-lg font-semibold leading-8 text-[#52616b]">
            {city.localContext} {service ? `${service} cleaning` : "Apartment cleaning"} works best when the cleaner knows the access path, apartment condition, pets, move timing, and any building instructions before arrival.
          </p>
        </div>
      </div>
    </section>
  )
}

function LowIntentLinks({ city }: { city: (typeof cities)[number] }) {
  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Badge className="rounded-full bg-[#142027] px-4 py-2 text-white">Planning pages</Badge>
            <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              More specific {city.name} apartment cleaning help.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-[#52616b]">
            Use these pages when the job is about price planning, tenant move-out timing, or getting a vacant unit ready.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {lowIntentPages.map((item) => (
            <a key={item.slug} href={`/service-areas/${city.slug}/${item.slug}/`} className="group rounded-[1.25rem] border border-[#dce7e8] bg-[#fbfdfd] p-5 transition-all hover:-translate-y-1 hover:border-[#62ffd5] hover:bg-white">
              <h3 className="text-xl font-black">{item.shortName}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#52616b]">{item.meta(city.name)}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#00a885]">
                Open page <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocalLinks({ title, activeCitySlug, serviceSlug, centerCitySlug }: { title: string; activeCitySlug?: string; serviceSlug?: string; centerCitySlug?: string }) {
  const cityItems = centerCitySlug ? getNearbyCities(centerCitySlug, 9) : cities.slice(0, 12)
  return (
    <section className="bg-[#fbfdfd] py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Badge className="rounded-full bg-[#142027] px-4 py-2 text-white">Connected pages</Badge>
            <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">{title}</h2>
          </div>
          <a href="/service-areas/" className="inline-flex items-center gap-2 text-sm font-black text-[#00a885]">
            All service areas <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {(activeCitySlug ? cityServices : serviceSlug ? cityItems : cities.slice(0, 9)).map((item) => {
            const isService = "price" in item
            const href = isService
              ? `/service-areas/${activeCitySlug}/${item.slug}/`
              : serviceSlug
                ? `/service-areas/${item.slug}/${serviceSlug}/`
                : `/service-areas/${item.slug}/`
            const label = isService ? item.name : `Apartment cleaning in ${item.name}`
            return (
              <a key={href} href={href} className="group rounded-[1.25rem] border border-[#dce7e8] bg-white p-5 font-black transition-all hover:-translate-y-1 hover:border-[#62ffd5]">
                <span>{label}</span>
                <ArrowRight className="mt-4 size-4 text-[#00a885] transition-transform group-hover:translate-x-1" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SeoFaq({ items }: { items: Array<{ q: string; a: string }> }) {
  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <Badge className="rounded-full bg-[#142027] px-4 py-2 text-white">Before you book</Badge>
          <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">Good answers before a cleaner shows up.</h2>
        </div>
        <Accordion type="single" collapsible className="rounded-[2rem] border border-[#dce7e8] bg-[#fbfdfd] px-4 sm:px-6">
          {items.map((item, index) => (
            <AccordionItem key={item.q} value={`seo-faq-${index}`}>
              <AccordionTrigger className="py-6 text-left text-lg font-black">{item.q}</AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-7 text-[#52616b]">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function SeoCta({ title }: { title: string }) {
  return (
    <section className="bg-[#101820] px-5 py-18 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Sparkles className="mx-auto size-10 text-[#62ffd5]" />
        <h2 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-6xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">
          Pick the clean type, share apartment details, and get a clear estimate before you choose a time.
        </p>
        <Button asChild size="lg" className="mt-8 h-13 rounded-full bg-[#62ffd5] px-8 text-base font-black text-[#101820] hover:bg-white">
          <a href={quoteUrl}>Start booking</a>
        </Button>
      </div>
    </section>
  )
}

function LegalPage({ page }: { page: (typeof legalPages)[keyof typeof legalPages] }) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfdfd] text-[#142027]">
      <header className="border-b border-[#dce7e8] bg-[#101820] px-5 py-5 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3" aria-label="Shynli Apartment Cleaning home">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#62ffd5] text-[#101820]">
              <Sparkles className="size-5" />
            </span>
            <span className="font-display text-base font-black tracking-normal sm:text-lg">Shynli Apartment Cleaning</span>
          </a>
          <Button asChild className="rounded-full bg-white px-5 text-[#101820] hover:bg-[#62ffd5]">
            <a href="/">Back home</a>
          </Button>
        </div>
      </header>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside>
            <Badge className="rounded-full bg-[#142027] px-4 py-2 text-white">Legal</Badge>
            <h1 className="font-display mt-5 text-4xl font-black leading-tight tracking-normal sm:text-6xl">{page.title}</h1>
            <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-[#66747d]">{page.updated}</p>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#52616b]">{page.intro}</p>
            <a href={page.sourceUrl} className="mt-6 inline-flex text-sm font-black text-[#00a885] underline underline-offset-4">
              Source policy
            </a>
          </aside>

          <div className="grid gap-4">
            {page.sections.map((section) => (
              <section key={section.title} className="rounded-[1.5rem] border border-[#dce7e8] bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-black tracking-normal">{section.title}</h2>
                <ul className="mt-5 grid gap-3 text-base font-semibold leading-7 text-[#52616b]">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-1 size-4 shrink-0 text-[#00a885]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1218] px-5 py-12 text-white sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
        <div>
          <a href="/" className="flex items-center gap-3" aria-label="Shynli Apartment Cleaning home">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#62ffd5] text-[#101820]">
              <Sparkles className="size-5" />
            </span>
            <span className="font-display text-lg font-black tracking-normal">Shynli Apartment Cleaning</span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
            Apartment cleaning for renters, condo owners, property managers, and busy homes across the western Chicago suburbs.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Insured", "Vetted cleaners", "Supplies included"].map((item) => (
              <Badge key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-white hover:bg-white/10">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <FooterColumn title="Services" items={footerServiceLinks} />
        <FooterColumn title="Service areas" items={footerServiceAreas} />

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white/45">Contact</h3>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-white/72">
            <a href="tel:+16305550142" className="flex items-center gap-3 transition-colors hover:text-[#62ffd5]">
              <Phone className="size-4" />
              (630) 555-0142
            </a>
            <a href="mailto:hello@shynliapartmentcleaning.com" className="flex items-center gap-3 transition-colors hover:text-[#62ffd5]">
              <Mail className="size-4" />
              hello@shynliapartmentcleaning.com
            </a>
            <a href="/service-areas/" className="flex items-center gap-3 transition-colors hover:text-[#62ffd5]">
              <MapPin className="size-4" />
              Western suburbs
            </a>
          </div>
          <Button asChild className="mt-6 rounded-full bg-[#62ffd5] px-6 font-black text-[#101820] hover:bg-white">
            <a href={quoteUrl}>
              Book online
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Shynli Apartment Cleaning. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="/privacy-policy/" className="hover:text-white">Privacy</a>
          <a href="/terms-of-service/" className="hover:text-white">Terms</a>
          <a href="/cancellation-policy/" className="hover:text-white">Cancellation</a>
          <a href="/#faq" className="hover:text-white">FAQ</a>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }: { title: string; items: Array<string | { label: string; href: string } | string[]> }) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white/45">{title}</h3>
      <ul className="mt-5 grid gap-3 text-sm font-semibold text-white/72">
        {items.map((item) => {
          const label = Array.isArray(item) ? item[0] : typeof item === "string" ? item : item.label
          const href = Array.isArray(item) ? item[1] : typeof item === "string" ? "#" : item.href
          return (
          <li key={label}>
            <a href={href} className="transition-colors hover:text-[#62ffd5]">
              {label}
            </a>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

function MobileBookBar({ estimate }: { estimate: number }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#dce7e8] bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold text-[#66747d]">Estimate</p>
          <p className="text-lg font-black">${estimate}+ apartment clean</p>
        </div>
        <Button asChild className="rounded-full bg-[#142027] px-5 font-black text-white">
          <a href={quoteUrl}>
            Book
            <Clock className="size-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}

export default App
