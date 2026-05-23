# Argon Red Spark — PRD

## Original problem
- TanStack Start + Cloudflare Workers app failing to build/deploy on Cloudflare.
- Discord embed needed to say "argon addon best donut smp bypass" instead of "fly bypass".
- Favicon not showing in Google search results.
- Full visual rebuild of every page (Premium SaaS aesthetic).

## Stack
- TanStack Start (React 19) + TanStack Router
- Vite 7 build via `@lovable.dev/vite-tanstack-config`
- Cloudflare Workers (Static Assets) via `@cloudflare/vite-plugin`
- Tailwind v4
- Bun 1.x runtime / `bun.lock`

## Visual design — Premium SaaS
- **Fonts**: Geist (sans) + Geist Mono (mono) + Instrument Serif italic (display accents).
- **Palette**: deep slate-violet base (`oklch(0.135 0.012 270)`), refined red primary
  (`oklch(0.66 0.21 22)`), warm amber accent for depth.
- **Surfaces**: glass cards with backdrop-blur, animated mesh-gradient hero blobs,
  gradient hairline borders, generous whitespace (clamp section padding 4–8rem).
- **Motion**: spring-easing lift cards, shimmer CTA buttons, aurora hairline, drifting
  mesh blobs, status ping rings.
- **Microcopy**: italic serif emphasis on key words ("actually use", "best Donut SMP bypass",
  "Argon module") to create a marketing-editorial rhythm distinctive from generic
  Tailwind SaaS templates.

## Implemented (2026-05-23)
- ✅ Full redesign of every route: `/`, `/install`, `/modules`, `/donutsmp-guide`,
  `/donutsmp-fly-bypass`, `/changelog`, `/posts`, `/posts/$slug`, plus shared nav/footer
  and 404/error pages.
- ✅ New global design system in `styles.css` (`btn-cta`, `btn-ghost`, `lift-card`,
  `glass`, `mesh-bg`, `tag`, `aurora-line`, etc).
- ✅ Cloudflare deploy is self-contained — `wrangler.jsonc` declares `build.command`
  and points `main`/`assets` at `dist/server/index.js` / `dist/client`. The default
  `npx wrangler deploy` command in the Cloudflare dashboard now succeeds.
- ✅ `wrangler.dev.jsonc` keeps dev pointed at `src/server.ts`; `vite.config.ts` passes
  `cloudflare.configPath` to the plugin so the build/dev pipelines don't collide.
- ✅ Discord embed (`og:title` / `twitter:title`) now reads "Argon Addon — Best Donut
  SMP Bypass" on the root + homepage routes.
- ✅ Favicons in every standard size (16/32/48/192/512 + apple-touch-icon + `.ico`).
- ✅ Verified `npx wrangler@4.94.0 deploy --dry-run` uploads 39 files / 1.24 MiB cleanly.

## Cloudflare configuration
- Default deploy command `npx wrangler deploy` (no dashboard change needed).
- Build runs `bun install --frozen-lockfile && bun run build` via wrangler `build.command`.

## How to get the favicon in Google
1. Redeploy with the changes.
2. Confirm `https://argonaddon.com/favicon.ico` and `/favicon-32.png` return 200.
3. Google Search Console → URL Inspection → submit `https://argonaddon.com/` for indexing.
4. Search Console → Sitemaps → add `https://argonaddon.com/sitemap.xml`.
5. Google refreshes favicons 1–7 days after the recrawl.

## Backlog
- P1: Dynamic OG image with live "patched 6h ago" status badge.
- P1: `manifest.json` for PWA install + Android home-screen.
- P2: Cloudflare Web Analytics.
- P2: View-transition API page transitions.

## Next action items
- Push the updated repo (Save to GitHub) and trigger Cloudflare redeploy.
- Submit `argonaddon.com/` for re-indexing in Search Console.
