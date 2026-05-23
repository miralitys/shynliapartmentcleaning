import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"

const distDir = join(process.cwd(), "dist")
const indexPath = join(distDir, "index.html")
const rawIndexHtml = readFileSync(indexPath, "utf8")
const sitemapXml = readFileSync(join(distDir, "sitemap.xml"), "utf8")
const stylesheetPattern = /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/
const stylesheetMatch = rawIndexHtml.match(stylesheetPattern)
let indexHtml = rawIndexHtml

if (stylesheetMatch) {
  const cssPath = join(distDir, stylesheetMatch[1].replace(/^\//, ""))
  const css = readFileSync(cssPath, "utf8")
  indexHtml = rawIndexHtml.replace(
    stylesheetPattern,
    `<style data-inline-app-css>${css}</style>`,
  )
  writeFileSync(indexPath, indexHtml)
}

const paths = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname)
  .filter((pathname) => pathname !== "/")

let created = 0

for (const pathname of paths) {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, "")
  if (!cleanPath) continue

  const routeIndex = join(distDir, cleanPath, "index.html")
  mkdirSync(dirname(routeIndex), { recursive: true })
  writeFileSync(routeIndex, indexHtml)
  created += 1
}

console.log(`Generated ${created} static route index files.`)
if (stylesheetMatch) console.log("Inlined app CSS into route HTML.")
