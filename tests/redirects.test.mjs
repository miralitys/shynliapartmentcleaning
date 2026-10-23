import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { test } from "node:test"
import { BLOG_GROUPS, CITY_SLUGS, DESTINATION_ORIGIN, ROOT_REDIRECTS, getRedirect } from "../redirects.mjs"

const expect = (source, target) => assert.equal(getRedirect(source).location, `${DESTINATION_ORIGIN}${target}`, source)

test("explicit main pages and all 16 matching articles normalize aliases and keep tracking", () => {
  assert.deepEqual(BLOG_GROUPS.map(([, , slugs]) => slugs.length), [9, 4, 3])
  const cases = [["/", "/"], ["/index.html", "/"], ["/service-areas", "/service-areas"], ["/blog", "/blog"], ["/sitemap.xml", "/sitemap.xml"], ["/robots.txt", "/robots.txt"]]
  for (const [source, { target }] of ROOT_REDIRECTS) cases.push([source, target])
  for (const [source, target] of cases) {
    expect(source, target)
    expect(`${source.toUpperCase()}/`, target)
    const query = "?gclid=abc%2fDEF&utm_source=google+ads&x=1&x=2&empty=&flag"
    expect(`${source}${query}`, `${target}${query}`)
  }
})

test("all 42 cities and seven city services use the four specialist cities only", () => {
  assert.equal(CITY_SLUGS.length, 42)
  for (const city of CITY_SLUGS) {
    const target = `/${city.replaceAll("-", "")}`
    const specialist = ["naperville", "aurora", "plainfield", "bolingbrook"].includes(city)
    expect(`/service-areas/${city}`, target)
    const cases = [["deep-apartment-cleaning", specialist ? `${target}/deep-cleaning` : target]]
    for (const service of ["move-out-apartment-cleaning", "move-in-apartment-cleaning", "tenant-move-out-cleaning"]) cases.push([service, specialist ? `${target}/move-out-cleaning` : target])
    for (const service of ["apartment-cleaning", "apartment-cleaning-prices", "apartment-turnover-cleaning", "a/b/c", "unknown", "quote"]) cases.push([service, target])
    for (const [service, destination] of cases) {
      const source = `/service-areas/${city}/${service}`
      expect(source, destination)
      expect(`${source.toUpperCase()}/?gclid=test`, `${destination}?gclid=test`)
    }
  }
})

test("booking paths, other blog posts and unknown paths have the requested defaults", () => {
  for (const source of ["/quote", "/quote/step/2", "/booking", "/BOOKING/CONFIRM", "/book-now", "/request-a-quote", "/api/quote/submit", "/a/booking/b", "/get-a-quote", "/booking-confirmation", "/request/quote-form"]) expect(source, "/quote")
  for (const source of ["/nonexistent-xyz", "/assets/app.js", "/service-areas/not-a-city", "/%zz", "//evil.example/", "/quoted-text"]) expect(source, "/")
  expect("/service-areas/BURR%2DRIDGE/", "/burrridge")
  expect("/blog/any-other-post/", "/blog")
  expect("/blog/when-the-quote-changes-at-the-door/", "/blog")
})

test("all 528 old sitemap URLs are mapped, with the expected category counts", async () => {
  const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8")
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
  assert.equal(urls.length, 528)
  const counts = {}
  for (const source of urls) {
    const result = getRedirect(source)
    assert.notEqual(result.group, "fallback", source)
    counts[result.group] = (counts[result.group] || 0) + 1
    const target = new URL(result.location)
    assert.equal(target.origin, DESTINATION_ORIGIN)
    assert.ok(target.pathname === "/" || !target.pathname.endsWith("/"))
  }
  assert.equal(counts["city-deep-specialist"], 4)
  assert.equal(counts["city-move-specialist"], 12)
  assert.equal(counts["city-subpage"], 278)
  assert.equal(counts["blog-move-out"], 9)
  assert.equal(counts["blog-move-in"], 4)
  assert.equal(counts["blog-cost"], 3)
  assert.equal(counts["blog-other"], 159)
})
