import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="mesh-bg" aria-hidden />
      <div className="relative max-w-md text-center">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Error · 404
        </div>
        <h1 className="font-display mt-3 text-7xl leading-none text-foreground">
          Lost in the <em className="text-gradient-brand not-italic">void</em>.
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          That page doesn't exist, or it got patched out of the build. Head back to the homepage.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="btn-cta inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium"
          >
            Go home
          </Link>
          <Link
            to="/modules"
            className="btn-ghost inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-foreground"
          >
            Browse modules
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="mesh-bg" aria-hidden />
      <div className="relative max-w-md text-center">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Runtime · Error
        </div>
        <h1 className="font-display mt-3 text-5xl leading-tight text-foreground">
          Something didn't <em className="text-gradient-brand not-italic">load</em>.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Refresh or head back home. If it persists, ping us on Discord.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-cta inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium"
          >
            Try again
          </button>
          <a
            href="/"
            className="btn-ghost inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "msvalidate.01", content: "2F5FBB210D978E81CF8D081D87F0921F" },
      { title: "Argon Addon — Best Meteor Client Addon for DonutSMP (Free Download)" },
      {
        name: "description",
        content:
          "Argon Addon — the best Donut SMP bypass. Free Meteor Client addon with 90+ modules for DonutSMP and Minecraft 1.21.11. Free .jar download for Crystal PvP, base finding, and AH sniping.",
      },
      {
        name: "keywords",
        content:
          "argon addon, argon addon download, argon addon donutsmp, best addon donut smp, meteor client addons donutsmp, donutsmp fly bypass, meteor client donutsmp",
      },
      { name: "author", content: "Argon Addon" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "application-name", content: "Argon Addon" },
      { name: "apple-mobile-web-app-title", content: "Argon Addon" },
      { property: "og:site_name", content: "Argon Addon" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: "Argon Addon — Best Donut SMP Bypass" },
      {
        property: "og:description",
        content:
          "Argon Addon — the best Donut SMP bypass. 90+ Meteor Client modules for DonutSMP. Free .jar download for Minecraft 1.21.11.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://argonaddon.com" },
      { property: "og:image", content: "https://argonaddon.com/og-card.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:secure_url", content: "https://argonaddon.com/og-card.png" },
      {
        property: "og:image:alt",
        content:
          "Argon Addon — best Donut SMP bypass. Free Meteor Client addon for Minecraft 1.21.11.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@argonaddon" },
      { name: "twitter:title", content: "Argon Addon — Best Donut SMP Bypass" },
      {
        name: "twitter:description",
        content:
          "Argon Addon — the best Donut SMP bypass. 90+ Meteor Client modules. Free download.",
      },
      { name: "twitter:image", content: "https://argonaddon.com/og-card.png" },
      { name: "twitter:image:alt", content: "Argon Addon — best Donut SMP bypass." },
      { name: "theme-color", content: "#d83a30" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon-512.png" },
      { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Argon Addon",
          alternateName: ["Argon Meteor Client Addon", "Argon DonutSMP Addon"],
          url: "https://argonaddon.com",
          image: "https://argonaddon.com/og-card.png",
          logo: "https://argonaddon.com/favicon.png",
          description:
            "Argon Addon — the Meteor Client addon for DonutSMP and Minecraft 1.21.11. Best Donut SMP bypass, 90+ modules, free .jar download.",
          inLanguage: "en",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://argonaddon.com/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Argon Addon",
          url: "https://argonaddon.com",
          logo: "https://argonaddon.com/favicon.png",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
