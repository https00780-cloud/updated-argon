// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Cloudflare Pages mode:
// - prerender every route to static HTML at build time → Discord/Google see OG tags
//   in the initial response, no SSR worker required.
// - point the @cloudflare/vite-plugin at `wrangler.dev.jsonc` so it can still find
//   `src/server.ts` during the build pipeline (the runtime worker isn't shipped,
//   but the plugin needs a valid main during prerender).
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
      failOnError: false,
    },
    pages: [
      { path: "/" },
      { path: "/install" },
      { path: "/modules" },
      { path: "/donutsmp-guide" },
      { path: "/donutsmp-fly-bypass" },
      { path: "/changelog" },
      { path: "/posts" },
      { path: "/posts/best-meteor-client-addons-for-donutsmp" },
      { path: "/posts/how-to-fly-on-donutsmp" },
      { path: "/posts/donutsmp-ah-sniper-guide" },
      { path: "/posts/how-to-find-bases-on-donutsmp" },
    ],
  },
  cloudflare: {
    configPath: "./wrangler.dev.jsonc",
    viteEnvironment: { name: "ssr" },
  },
});
