# Argon Red Spark — PRD

## Original problem
- Cloudflare build failing (`SyntaxError (949:0)` in `src/routes/index.tsx`, then later
  `Could not detect a directory containing static files`).
- Discord embed showed "fly bypass" — user wants "argon addon best donut smp bypass".
- Favicon for Google search results using the icon already in `public/favicon.png`.
- Bolder visual polish.
- Project is a TanStack Start + Cloudflare Workers app (Vite + Bun).

## Stack
- TanStack Start (React 19) + TanStack Router
- Vite 7 build via `@lovable.dev/vite-tanstack-config`
- Cloudflare Workers (Static Assets) via `@cloudflare/vite-plugin`
- Tailwind v4
- Bun 1.x runtime / `bun.lock`

## Implemented (2026-05-22)
- ✅ Build verified to compile cleanly with `bun install --frozen-lockfile && bun run build`.
- ✅ Added `deploy` + `cf:deploy` scripts in `package.json` so Cloudflare's
  deploy command picks up the post-build `dist/server/wrangler.json` (this is
  what fixes "Could not detect a directory containing static files").
- ✅ Updated OG / Twitter title on `__root.tsx` and `index.tsx` to
  "Argon Addon — Best Donut SMP Bypass" (Discord embed).
- ✅ Generated favicon variants: `favicon.ico`, `favicon-{16,32,48,192,512}.png`,
  `apple-touch-icon.png`. Wired them into root `<head>` so Google picks one
  from the standard sizes.
- ✅ Refreshed `sitemap.xml` lastmod to today to encourage re-crawl.
- ✅ Visual polish: animated mesh-blob hero background, `btn-cta` shimmer + lift,
  `lift-card` hover for module/feature/testimonial cards, stronger focus ring.

## Cloudflare configuration (user must set this in dashboard)
- **Build command:**  `bun install --frozen-lockfile && bun run build`
- **Deploy command:** `npx wrangler deploy --config dist/server/wrangler.json`
  (or `bun run deploy`)
- **Root directory:** project root (default).

## How to get the favicon to show in Google search
1. Push the updated code to your repo + redeploy.
2. Hit `https://argonaddon.com/favicon.ico` and `/favicon-32.png` to confirm 200.
3. In Google Search Console → "URL Inspection" → enter `https://argonaddon.com/`
   → click "Request Indexing".
4. Also submit the sitemap once: GSC → Sitemaps → add `https://argonaddon.com/sitemap.xml`.
5. Google refreshes favicons on its own cadence (often 1–7 days after the page is
   recrawled). The icon must be a square PNG ≥ 48×48 served at a stable URL —
   both are now true.

## Backlog
- P1: Add an `apple-touch-icon-precomposed` and `manifest.json` for installable PWA badge.
- P2: Consider Cloudflare Image Resizing for the hero screenshots.
- P2: Add Plausible/Cloudflare Web Analytics tag.

## Next action items
- User: push code to GitHub, then update Cloudflare deploy command as above.
- User: in GSC, request indexing + submit sitemap.
