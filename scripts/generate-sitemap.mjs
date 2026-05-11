import { writeFileSync } from "node:fs"
import { join } from "node:path"

const siteUrl = "https://shynliapartmentcleaning.com"

const cities = [
  "addison",
  "aurora",
  "bartlett",
  "batavia",
  "bolingbrook",
  "bristol",
  "burr-ridge",
  "carol-stream",
  "clarendon-hills",
  "darien",
  "downers-grove",
  "elmhurst",
  "geneva",
  "glen-ellyn",
  "hinsdale",
  "homer-glen",
  "itasca",
  "lemont",
  "lisle",
  "lockport",
  "lombard",
  "montgomery",
  "naperville",
  "north-aurora",
  "oak-brook",
  "oswego",
  "plainfield",
  "romeoville",
  "st-charles",
  "streamwood",
  "sugar-grove",
  "villa-park",
  "warrenville",
  "wayne",
  "west-chicago",
  "westmont",
  "wheaton",
  "willowbrook",
  "winfield",
  "wood-dale",
  "woodridge",
  "yorkville",
]

const coreServices = [
  "apartment-cleaning",
  "deep-apartment-cleaning",
  "move-out-apartment-cleaning",
  "move-in-apartment-cleaning",
]

const lowIntentPages = [
  "apartment-cleaning-prices",
  "tenant-move-out-cleaning",
  "apartment-turnover-cleaning",
]

const corePaths = [
  "/",
  "/apartment-cleaning/",
  "/deep-apartment-cleaning/",
  "/move-out-apartment-cleaning/",
  "/move-in-apartment-cleaning/",
  "/recurring-apartment-cleaning/",
  "/one-time-apartment-cleaning/",
  "/condo-cleaning/",
  "/townhouse-cleaning/",
  "/apartment-cleaning-pricing/",
  "/apartment-cleaning-checklist/",
  "/service-areas/",
  "/faq/",
  "/privacy-policy/",
  "/terms-of-service/",
  "/cancellation-policy/",
]

const paths = [
  ...corePaths,
  ...cities.map((city) => `/service-areas/${city}/`),
  ...cities.flatMap((city) => coreServices.map((service) => `/service-areas/${city}/${service}/`)),
  ...cities.flatMap((city) => lowIntentPages.map((page) => `/service-areas/${city}/${page}/`)),
]

const today = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "/" ? "1.0" : path.split("/").length <= 3 ? "0.8" : "0.7"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

writeFileSync(join(process.cwd(), "public", "sitemap.xml"), xml)
writeFileSync(join(process.cwd(), "public", "robots.txt"), robots)

console.log(`Generated ${paths.length} sitemap URLs.`)
