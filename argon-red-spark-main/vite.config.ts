// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// We also point the @cloudflare/vite-plugin at `wrangler.dev.jsonc` (which still references
// `src/server.ts` as `main`). The root `wrangler.jsonc` is reserved for `wrangler deploy`
// and instead points at the built artefacts in `dist/`.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  cloudflare: {
    configPath: "./wrangler.dev.jsonc",
    viteEnvironment: { name: "ssr" },
  },
});
