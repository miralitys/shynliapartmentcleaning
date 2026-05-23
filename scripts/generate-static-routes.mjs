import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"

const distDir = join(process.cwd(), "dist")
const indexPath = join(distDir, "index.html")
const rawIndexHtml = readFileSync(indexPath, "utf8")
const sitemapXml = readFileSync(join(distDir, "sitemap.xml"), "utf8")
const { render } = await import(`file://${join(distDir, "server/entry-server.js")}`)
const stylesheetPattern = /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/
const stylesheetMatch = rawIndexHtml.match(stylesheetPattern)
const moduleScriptPattern = /<script type="module" crossorigin src="([^"]+\.js)"><\/script>/
const moduleScriptMatch = rawIndexHtml.match(moduleScriptPattern)
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

if (moduleScriptMatch) {
  indexHtml = indexHtml.replace(moduleScriptPattern, "")
}

const paths = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname)
const routePaths = ["/", ...paths.filter((pathname) => pathname !== "/")]

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function safeJson(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c")
}

function withDeferredClientScript(html) {
  if (!moduleScriptMatch) return html

  const scriptSrc = moduleScriptMatch[1]
  const loader = `<script data-deferred-app-js>(()=>{let loaded=false;const shouldLoad=(event)=>{const target=event.target;if(!(target instanceof Element))return false;return !!target.closest("button,input,select,textarea,[data-hydrate-app]")};const load=(event)=>{if(loaded||!shouldLoad(event))return;loaded=true;cleanup();const s=document.createElement("script");s.type="module";s.src="${scriptSrc}";document.head.appendChild(s)};const events=["pointerdown","keydown","focusin","touchstart"];const cleanup=()=>events.forEach((event)=>window.removeEventListener(event,load,true));events.forEach((event)=>window.addEventListener(event,load,{passive:true,capture:true}))})();</script>`
  return html.replace("</body>", `${loader}</body>`)
}

function renderRoute(pathname) {
  const { appHtml, head } = render(pathname)
  const schema = `<script type="application/ld+json" data-seo-schema>${safeJson(head.schema)}</script>`
  return withDeferredClientScript(indexHtml)
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(head.title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(head.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]+"\s*\/>/, `<link rel="canonical" href="${escapeHtml(head.canonical)}" />`)
    .replace("</head>", `${schema}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
}

let created = 0

writeFileSync(indexPath, renderRoute("/"))

for (const pathname of routePaths.filter((pathname) => pathname !== "/")) {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, "")
  if (!cleanPath) continue

  const routeIndex = join(distDir, cleanPath, "index.html")
  mkdirSync(dirname(routeIndex), { recursive: true })
  writeFileSync(routeIndex, renderRoute(pathname))
  created += 1
}

rmSync(join(distDir, "server"), { recursive: true, force: true })

console.log(`Generated ${created} static route index files.`)
if (stylesheetMatch) console.log("Inlined app CSS into route HTML.")
if (moduleScriptMatch) console.log("Prerendered routes and deferred app JS.")
