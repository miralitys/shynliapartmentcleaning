import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"

const distDir = join(process.cwd(), "dist")
const indexHtml = readFileSync(join(distDir, "index.html"), "utf8")
const sitemapXml = readFileSync(join(distDir, "sitemap.xml"), "utf8")

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
