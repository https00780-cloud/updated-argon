import { Link } from "@tanstack/react-router";
import { Download, Github } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const ArgonLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand font-mono text-[13px] font-bold text-primary-foreground shadow-glow ring-1 ring-primary/50">
      <span className="relative z-10">A</span>
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/25 to-transparent" />
    </div>
    <span className="font-display text-xl tracking-tight">Argon</span>
  </div>
);

const navLinks: Array<{ to: string; label: string; testid: string }> = [
  { to: "/modules", label: "Modules", testid: "nav-modules" },
  { to: "/install", label: "Install", testid: "nav-install" },
  { to: "/donutsmp-guide", label: "Guide", testid: "nav-guide" },
  { to: "/donutsmp-fly-bypass", label: "Bypass", testid: "nav-fly" },
  { to: "/posts", label: "Blog", testid: "nav-blog" },
  { to: "/changelog", label: "Changelog", testid: "nav-changelog" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-3 pt-3 transition-all duration-300 sm:pt-5`}
      data-testid="site-nav"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-300 sm:px-4 ${
          scrolled
            ? "border-border/80 bg-card/85 shadow-card backdrop-blur-xl"
            : "border-white/[0.06] bg-card/40 backdrop-blur-md"
        }`}
      >
        <Link to="/" className="contents" data-testid="nav-home-link">
          <ArgonLogo />
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3.5 py-1.5 text-[13.5px] text-muted-foreground transition hover:bg-white/[0.04] hover:text-foreground"
              data-testid={l.testid}
              activeProps={{
                className:
                  "rounded-full px-3.5 py-1.5 text-[13.5px] bg-white/[0.06] text-foreground",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/"
          hash="download"
          className="btn-cta inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium"
          data-testid="nav-download-btn"
        >
          <Download className="h-3.5 w-3.5" /> Download
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card/30 py-16">
      <div className="aurora-line absolute inset-x-0 top-0" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex max-w-md flex-col gap-3">
          <ArgonLogo />
          <p className="text-[13.5px] leading-relaxed text-muted-foreground">
            Argon Addon is a community Meteor Client addon for DonutSMP and Minecraft 1.21.11 — the
            best Donut SMP bypass plus 90+ modules for Crystal PvP, base finding, and AH sniping.
            Not affiliated with Mojang, Microsoft, Meteor Development, or DonutSMP.
          </p>
          <a
            href="https://github.com/https00780-cloud/argonnn"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" /> github.com/argonnn
          </a>
        </div>
        <FooterCol
          title="Product"
          links={[
            { to: "/modules", label: "Modules" },
            { to: "/install", label: "Install" },
            { to: "/changelog", label: "Changelog" },
            { to: "/", hash: "download", label: "Download" },
          ]}
        />
        <FooterCol
          title="DonutSMP"
          links={[
            { to: "/donutsmp-guide", label: "Setup guide" },
            { to: "/donutsmp-fly-bypass", label: "Fly bypass" },
            { to: "/posts", label: "Strategy blog" },
          ]}
        />
        <FooterCol
          title="Resources"
          links={[
            { to: "/posts", label: "Blog" },
            { href: "https://meteorclient.com", label: "Meteor Client" },
            { href: "https://fabricmc.net", label: "Fabric Loader" },
          ]}
        />
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-border px-6 pt-6 text-[11.5px] text-muted-foreground sm:flex-row sm:items-center">
        <div className="font-mono">© 2026 Argon Addon · Built by players, for players.</div>
        <div className="font-mono opacity-70">v3.2.0 · MC 1.21.11 · Fabric</div>
      </div>
    </footer>
  );
}

type FooterLink = { label: string } & ({ to: string; hash?: string } | { href: string });

function FooterCol({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/70">
        {title}
      </div>
      <div className="mt-3.5 flex flex-col gap-2 text-[13.5px] text-muted-foreground">
        {links.map((l) =>
          "href" in l ? (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit transition hover:text-foreground"
            >
              {l.label}
            </a>
          ) : (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="w-fit transition hover:text-foreground"
            >
              {l.label}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-32 sm:pt-36">{children}</main>
      <SiteFooter />
    </div>
  );
}
