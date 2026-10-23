# Apartment site migration

Version: 2026-10-23.1.

The 528-URL source site is retained in this repository for rollback. Its original React source, sitemap, robots file and static build remain available. The public domain is served by the existing `miralitys/shynlicom` Node service on Render, `srv-d80u9tnlk1mc739ucneg`.

`redirects.mjs` defines the requested apartment mappings and query preservation. Its byte-identical deployed copy is `apartment-redirects.mjs` in `miralitys/shynlicom`. The Node handler returns an empty HTTP 301 before static files or API handlers, scoped to the apartment apex and www hostnames. `/__apartment_redirect/` on `shynlicom.onrender.com` is a reserved origin verification endpoint.

Move the apex and www custom domain bindings from the retained Static Site `srv-d812br6gvqtc73e16bag` to the Node service. Keep DNS unchanged. Render's automatic HTTP upgrade and www normalization may add hops before the final application 301. The canonical HTTPS apex goes directly to the final main site URL.

The retained static origin continues publishing `dist` with `X-Robots-Tag: noindex` on `/*`. This header belongs only to the retained origin. Public migration responses do not add noindex.

## Verification

- `npm run test:redirects` verifies mappings for all 528 source URLs, all 42 cities, the specialist city exceptions, all 16 matched articles, aliases and query strings.
- `npm run audit:redirects` writes full CSV and JSON chains for the source sitemap, 10 additional paths, sitemap.xml, robots.txt and all four root host variants. It fails on any required non-301, incorrect Location, non-200 destination or extra hop from the canonical source.
- `AUDIT_ORIGIN=http://127.0.0.1:4188 AUDIT_HOST=shynliapartmentcleaning.com AUDIT_PHASE=local npm run audit:redirects` audits the shared Node server locally while checking real final destinations.
- Build remains the full source site: `npm ci && npm run build`.

## Rollback

1. Remove apartment apex and www custom domain bindings from the shared Node service.
2. Reattach the apex to the retained apartment Static Site and verify www, keeping existing DNS unchanged.
3. Wait for both TLS certificates to be issued.
4. Remove the retained Static Site's `X-Robots-Tag: noindex` header rule.
5. Verify the old pages return 200.

The pre-migration source revision is `8f09040044c8c0a8a781fc369e1487fc0bc1ea73`. Shared Node handlers for shynli.com and Airbnb remain independent. `APARTMENT_REDIRECT_ENABLED=false` disables the apartment handler, but restoring old content requires reattaching the retained Static Site.
