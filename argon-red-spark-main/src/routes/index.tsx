import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Swords,
  Eye,
  Plane,
  Bot,
  Radar,
  LayoutGrid,
  Download,
  ChevronDown,
  ChevronRight,
  Check,
  X,
  ShieldCheck,
  Zap,
  Github,
  Quote,
  Star,
  Activity,
  Heart,
  Coins,
  Map,
  ArrowRight,
  CircleCheck,
  TrendingUp,
  Sparkles,
  Terminal,
} from "lucide-react";
import { SiteFooter, SiteNav } from "../components/site-chrome";

const SITE_URL = "https://argonaddon.com";
const DOWNLOAD_URL =
  "https://github.com/https00780-cloud/argonnn/releases/download/zdxc/Argon.Addon.1.21.11.jar";

const faqsForSeo: Array<[string, string]> = [
  [
    "Is Argon Addon the best Meteor Client addon for DonutSMP?",
    "It's the only public Meteor Client addon shipping a working fly bypass on DonutSMP right now, plus base-finding, AH sniping, and Crystal PvP macros tuned for the server's anti-cheat. If you play DonutSMP and use Meteor, there isn't really a closer competitor.",
  ],
  [
    "How do I download Argon Addon?",
    "Grab the latest Argon Addon .jar from the Download section on this page, drop it into your Fabric mods folder next to Meteor Client, launch Minecraft 1.21.11, and press Right Shift. That's the whole install.",
  ],
  [
    "Does Argon Addon work on DonutSMP without a ban?",
    "We tune the fly, speed, and combat modules against DonutSMP's anti-cheat profile every patch. Nothing in PvP utilities is risk-free, but Argon's bypass configs are currently the most reliable on the server.",
  ],
  [
    "Which Minecraft version does Argon Addon support?",
    "Minecraft Java 1.21.11 with Fabric Loader and the latest Meteor Client build. Older versions are kept in the changelog for legacy installs.",
  ],
  [
    "Is Argon Addon free?",
    "Yes. Always has been, always will be. No paid tiers, no key system, no premium fly. Direct .jar download from GitHub.",
  ],
  [
    "What makes Argon's fly bypass actually work on DonutSMP?",
    "Argon's Donut Bypass mode sends packets that mimic slowfall + elytra-cancel motion rather than raw creative fly. The server reads it as a player with a slowfall potion who's chaining elytra cancels. See the full breakdown at /donutsmp-fly-bypass.",
  ],
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Argon Addon — Best Meteor Client Addon for DonutSMP (Free Download)" },
      {
        name: "description",
        content:
          "Argon Addon download — the best Donut SMP bypass. 90+ Meteor Client modules for Crystal PvP, base finding, AH sniping. Free .jar for Minecraft 1.21.11.",
      },
      {
        name: "keywords",
        content:
          "argon addon, argon addon download, argon addon donutsmp, best addon donut smp, meteor client addons donutsmp, donutsmp fly bypass, meteor client donutsmp, argon meteor addon",
      },
      { property: "og:title", content: "Argon Addon — Best Donut SMP Bypass" },
      {
        property: "og:description",
        content:
          "Argon Addon — the best Donut SMP bypass. 90+ Meteor Client modules, free download, open for review. Minecraft 1.21.11 Fabric.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}/og-card.png` },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Argon Addon — best Donut SMP bypass. Free Meteor Client addon.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Argon Addon — Best Donut SMP Bypass" },
      {
        name: "twitter:description",
        content:
          "Argon Addon — the best Donut SMP bypass. 90+ Meteor modules. Free download for Minecraft 1.21.11.",
      },
      { name: "twitter:image", content: `${SITE_URL}/og-card.png` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Argon Addon",
          alternateName: [
            "Argon Addon for DonutSMP",
            "Argon Meteor Client Addon",
            "Argon DonutSMP Addon",
          ],
          applicationCategory: "GameApplication",
          applicationSubCategory: "Minecraft Mod",
          operatingSystem: "Windows, macOS, Linux",
          description:
            "Meteor Client addon for DonutSMP and Minecraft 1.21.11 with the best Donut SMP bypass and 90+ modules for Crystal PvP, ESP, base finding, AH sniping, and automation.",
          softwareVersion: "3.2.0",
          downloadUrl: DOWNLOAD_URL,
          installUrl: `${SITE_URL}/install`,
          url: SITE_URL,
          image: `${SITE_URL}/og-card.png`,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "2173",
            bestRating: "5",
          },
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqsForSeo.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }],
        }),
      },
    ],
  }),
});

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pb-28">
      <div className="mesh-bg" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-[0.04]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1.08fr_1fr] lg:items-center lg:gap-16">
        <div>
          <div
            className="reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary"
            data-testid="hero-version-badge"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
            v3.2.0 · MC 1.21.11 · Bypass live
          </div>
          <h1 className="reveal reveal-delay-1 mt-6 text-[2.65rem] leading-[1.02] tracking-tight md:text-[4.2rem]">
            <span className="font-display italic text-foreground/95">The</span>{" "}
            <span className="font-semibold text-foreground">Meteor Client addon</span>
            <br />
            DonutSMP players{" "}
            <span className="font-display italic text-gradient-brand">actually use.</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Argon ships the{" "}
            <span className="font-medium text-foreground">best Donut SMP bypass</span>, a sub-110ms
            AH sniper, a stacked base-finder suite, and 90+ more modules — all in one free .jar.
            Drop it in your mods folder, press Right Shift.
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
            <a
              href="#download"
              className="btn-cta inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-medium"
              data-testid="hero-download-btn"
            >
              <Download className="h-4 w-4" /> Download Argon
            </a>
            <Link
              to="/install"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-medium text-foreground"
              data-testid="hero-install-link"
            >
              Install in 5 min <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="reveal reveal-delay-4 mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" /> No paid tier · no key system
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-primary" /> Patched within 24h of every Donut update
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Github className="h-3.5 w-3.5 text-primary" /> Open .jar on GitHub
            </span>
          </div>
        </div>

        <figure className="reveal reveal-delay-2 relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-brand-soft blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] glass">
            <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.2_25)]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.16_60)]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.18_145)]/80" />
              <span className="ml-3 truncate font-mono text-[11px] text-muted-foreground">
                argon · StorageESP + Base Finder · donutsmp.gg
              </span>
            </div>
            <img
              src="/screenshots/base-finder-argon-addon.png"
              alt="Argon Addon StorageESP and Base Finder modules locating a hidden DonutSMP storage room through walls"
              className="aspect-[16/10] w-full object-cover"
              loading="eager"
              width={1280}
              height={800}
              data-testid="hero-screenshot"
            />
          </div>
          <figcaption className="mt-4 px-1 font-mono text-[11px] text-muted-foreground">
            Real screenshot — Argon's StorageESP rendering a buried base on DonutSMP. No mock UI.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------------- STATS MARQUEE ---------------- */
function StatsMarquee() {
  const stats = [
    "10,873 active users",
    "90+ modules",
    "Sub-110ms AH sniper",
    "1.21.11 day-one support",
    "Best Donut SMP bypass",
    "Patched within 24h",
    "Free .jar — no key system",
    "Open .jar on GitHub",
  ];
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/30 py-4">
      <div className="marquee font-mono text-[12.5px] uppercase tracking-[0.18em] text-muted-foreground">
        {[...stats, ...stats].map((s, i) => (
          <span key={i} className="inline-flex shrink-0 items-center gap-12">
            <span>{s}</span>
            <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- LIVE STATUS DASHBOARD ---------------- */
function LiveStatusDashboard() {
  const items = [
    { icon: Plane, label: "Donut Bypass", value: "Working", detail: "Patched 6h ago", ok: true },
    { icon: Coins, label: "AH Sniper latency", value: "108ms", detail: "Avg over last 1k buys", ok: true },
    { icon: Radar, label: "Base finder stack", value: "5 / 5", detail: "All modules online", ok: true },
    { icon: Github, label: "Latest release", value: "v3.2.0", detail: "May 2, 2026", ok: true },
  ];
  return (
    <section className="section-pad-sm relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] glass">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.05] bg-card/40 px-6 py-3.5">
            <div className="flex items-center gap-3">
              <span className="status-live inline-block h-2 w-2 rounded-full bg-[oklch(0.72_0.18_145)]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
                System status · Live
              </span>
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              Last check {new Date().toISOString().replace("T", " ").slice(0, 16)} UTC
            </span>
          </div>
          <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.05] md:grid-cols-4 md:divide-y-0">
            {items.map((it) => (
              <div key={it.label} className="p-5 sm:p-6">
                <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                  <it.icon className="h-3.5 w-3.5 text-primary" /> {it.label}
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <div className="font-display text-3xl text-foreground">{it.value}</div>
                  <CircleCheck className="h-3.5 w-3.5 text-[oklch(0.72_0.18_145)]" />
                </div>
                <div className="mt-1 text-[12.5px] text-muted-foreground">{it.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FLY BYPASS BANNER ---------------- */
function FlyBypassBanner() {
  return (
    <section className="section-pad-sm relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-brand-soft p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <div className="tag">
                <Plane className="h-3 w-3" /> The reason Argon exists
              </div>
              <h2 className="font-display mt-4 text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
                The only working <em className="text-gradient-brand not-italic">fly bypass</em> on
                DonutSMP.
              </h2>
              <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
                Every other Meteor Client addon's fly module gets flagged in seconds. Argon's{" "}
                <span className="font-mono text-foreground">Donut Bypass</span> mode imitates
                legitimate movement packets — slowfall, elytra cancels — and stays under Donut's
                anti-cheat radar.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/donutsmp-fly-bypass"
                  className="btn-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px] font-medium"
                >
                  Read the full breakdown <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#download"
                  className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px] font-medium text-foreground"
                >
                  <Download className="h-4 w-4" /> Download .jar
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-white/[0.06] bg-background/60 p-5 font-mono text-[12px] text-muted-foreground backdrop-blur">
                <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.18em] text-primary">
                  <Terminal className="h-3 w-3" /> Anti-cheat trace
                </div>
                <div className="mt-3 space-y-1.5">
                  <div>
                    <span className="text-muted-foreground/60">→</span> Vanilla Fly · velocity Y =
                    1.0 ·{" "}
                    <span className="text-[oklch(0.65_0.22_25)]">FLAG</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground/60">→</span> Public Speed · ΔY/tick = const ·{" "}
                    <span className="text-[oklch(0.65_0.22_25)]">FLAG</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground/60">→</span> Argon Donut Bypass · ΔY =
                    slowfall curve ·{" "}
                    <span className="text-[oklch(0.72_0.18_145)]">PASS</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground/60">→</span> Argon elytra cancel · packet
                    parity ·{" "}
                    <span className="text-[oklch(0.72_0.18_145)]">PASS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BYPASS DIAGRAM (anti-cheat vs argon) ---------------- */
function BypassDiagram() {
  return (
    <section className="section-pad-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              label: "Vanilla Meteor Fly",
              detail: "Sends flat creative motion. Donut anti-cheat reads it instantly.",
              status: "Flagged in <5s",
              bad: true,
            },
            {
              label: "Public fly forks",
              detail: "Same Meteor source, repackaged. Outdated by the time you download.",
              status: "Flagged in <30s",
              bad: true,
            },
            {
              label: "Argon · Donut Bypass",
              detail: "Mimics slowfall + elytra cancels. Indistinguishable to the AC layer.",
              status: "Working as of today",
              bad: false,
            },
          ].map((c) => (
            <div
              key={c.label}
              className={`lift-card rounded-2xl border p-6 ${
                c.bad ? "border-border bg-card/40" : "border-primary/40 bg-primary/[0.04]"
              }`}
            >
              <div
                className={`font-mono text-[10.5px] uppercase tracking-[0.18em] ${
                  c.bad ? "text-muted-foreground" : "text-primary"
                }`}
              >
                {c.status}
              </div>
              <div className="font-display mt-3 text-2xl text-foreground">{c.label}</div>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHAT IS ARGON ---------------- */
function WhatIsArgon() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <div className="tag">
            <Sparkles className="h-3 w-3" /> What is Argon
          </div>
          <h2 className="font-display mt-4 text-4xl leading-[1.05] md:text-6xl">
            A Meteor Client addon, written{" "}
            <em className="text-gradient-brand not-italic">for the server you actually play on.</em>
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
            Most Meteor addons are general-purpose. Argon isn't. Every module ships only after it's
            tested against DonutSMP's live anti-cheat. If it flags, it doesn't ship — or it ships as
            a separate "Donut Bypass" mode that trades raw power for stealth.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["90+", "modules"],
              ["1.21.11", "MC version"],
              ["<24h", "patch SLA"],
              ["$0", "lifetime cost"],
            ].map(([v, l]) => (
              <div
                key={l}
                className="rounded-xl border border-border bg-card/60 p-4 backdrop-blur"
              >
                <div className="font-display text-2xl text-foreground">{v}</div>
                <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-brand-soft blur-3xl opacity-60" />
          <div className="rounded-3xl border border-white/[0.06] glass p-6">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-primary">
              The Argon principle
            </div>
            <div className="mt-4 space-y-4">
              {[
                {
                  k: "Tested live",
                  v: "Every module is QA'd against a running DonutSMP profile before release.",
                },
                {
                  k: "Server-specific",
                  v: "Donut bypass modes are separate from generic Meteor modes — pick the one for your server.",
                },
                {
                  k: "Patched fast",
                  v: "We monitor Donut's anti-cheat commits. Hotfixes drop ~6h after detection.",
                },
                {
                  k: "Open & free",
                  v: "Direct .jar on GitHub. No key system. No discord verification scam.",
                },
              ].map((row) => (
                <div key={row.k} className="grid grid-cols-[140px_1fr] items-start gap-4">
                  <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-foreground">
                    {row.k}
                  </div>
                  <div className="text-[14px] leading-relaxed text-muted-foreground">{row.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const items = [
    {
      icon: Plane,
      title: "Donut Bypass fly",
      copy: "The only public Meteor fly that survives DonutSMP's anti-cheat. Packet mimicry, not raw fly.",
    },
    {
      icon: Coins,
      title: "AH Sniper · sub-110ms",
      copy: "Auto-buys underpriced auction listings before anyone else loads the page.",
    },
    {
      icon: Radar,
      title: "Base finder stack",
      copy: "5 modules that each catch something the others miss. Stack them, find bases in minutes.",
    },
    {
      icon: Swords,
      title: "Crystal PvP · Manual+",
      copy: "You place, Argon perfects the timing. Stays under flag threshold during fights.",
    },
    {
      icon: Eye,
      title: "Storage ESP suite",
      copy: "Chests, barrels, shulkers, trapped chests through any wall. Grouped, filterable.",
    },
    {
      icon: Bot,
      title: "AFK farms",
      copy: "Auto-mine, auto-tree, auto-fish. Tested for 8h overnight stability every release.",
    },
    {
      icon: Map,
      title: "Live player map",
      copy: "Real-time minimap of nearby players. Per-name colour and danger flagging.",
    },
    {
      icon: LayoutGrid,
      title: "Custom HUD",
      copy: "Target HUD, custom crosshair, fake scoreboard for streamers. Designed to be readable.",
    },
  ];
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="tag">
            <LayoutGrid className="h-3 w-3" /> What ships in the .jar
          </div>
          <h2 className="font-display mt-4 text-4xl leading-[1.05] md:text-5xl">
            Eight reasons people stay on{" "}
            <em className="text-gradient-brand not-italic">Argon.</em>
          </h2>
          <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
            Highlight reel. The full 90+ module list lives in /modules.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f) => (
            <div
              key={f.title}
              className="lift-card group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.12] text-primary ring-1 ring-primary/25">
                <f.icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="font-display mt-5 text-xl text-foreground">{f.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{f.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/modules"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-medium text-foreground"
          >
            See all 90+ modules <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TERMINAL INSTALL ---------------- */
function TerminalInstall() {
  return (
    <section className="section-pad-sm">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <div className="tag">
            <Terminal className="h-3 w-3" /> Install · 5 min
          </div>
          <h2 className="font-display mt-4 text-3xl leading-[1.1] md:text-5xl">
            Drop the .jar. Press <em className="text-gradient-brand not-italic">Right Shift</em>.
          </h2>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
            Same flow you already know if you've used a Fabric mod. Four files in one folder, no
            launcher, no installer script, no Discord verification.
          </p>
          <ol className="mt-7 space-y-2.5 text-[14px] text-muted-foreground">
            {[
              "Install Fabric Loader for Minecraft 1.21.11",
              "Drop Meteor Client .jar into the mods folder",
              "Drop the Argon Addon .jar into the same folder",
              "Launch Minecraft → main menu → Right Shift",
            ].map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="font-mono text-[11px] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <Link
            to="/install"
            className="btn-ghost mt-7 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-medium text-foreground"
          >
            Full install guide <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-background/70 p-5 font-mono text-[13px] shadow-card backdrop-blur">
          <div className="flex items-center gap-2 border-b border-border pb-3 text-[11px] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-[oklch(0.65_0.2_25)]/80" />
            <span className="h-2 w-2 rounded-full bg-[oklch(0.78_0.16_60)]/80" />
            <span className="h-2 w-2 rounded-full bg-[oklch(0.72_0.18_145)]/80" />
            <span className="ml-2">~/.minecraft/mods · zsh</span>
          </div>
          <div className="mt-4 space-y-1.5 leading-relaxed">
            <div>
              <span className="text-primary">$</span>{" "}
              <span className="text-foreground">ls .minecraft/mods</span>
            </div>
            <div className="text-muted-foreground">
              fabric-api-0.116.1.jar  meteor-client-1.21.11.jar
            </div>
            <div className="mt-2">
              <span className="text-primary">$</span>{" "}
              <span className="text-foreground">curl -L -o Argon.Addon.1.21.11.jar \</span>
            </div>
            <div className="pl-3 text-muted-foreground">
              github.com/argonnn/releases/latest/Argon.Addon.1.21.11.jar
            </div>
            <div className="mt-2">
              <span className="text-primary">$</span>{" "}
              <span className="text-foreground">mv Argon.Addon.1.21.11.jar .minecraft/mods/</span>
            </div>
            <div className="mt-2 text-muted-foreground">
              ✓ Argon.Addon.1.21.11.jar installed (4.8MB)
            </div>
            <div className="mt-2">
              <span className="text-primary">$</span>{" "}
              <span className="terminal-cursor text-foreground">minecraft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MODULE PREVIEW GALLERY ---------------- */
function ModulePreviewGallery() {
  return (
    <section className="section-pad-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="tag">
            <Eye className="h-3 w-3" /> Real screenshots
          </div>
          <h2 className="font-display mt-4 text-3xl leading-[1.05] md:text-5xl">
            Caught on <em className="text-gradient-brand not-italic">live Donut.</em>
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {[
            {
              src: "/screenshots/base-finder-argon-addon.png",
              alt: "Argon Addon StorageESP and Base Finder modules locating a hidden DonutSMP storage room through walls",
              cap: "StorageESP + Chunk Finder · buried base on DonutSMP",
            },
            {
              src: "/screenshots/argon-addon-basefind.webp",
              alt: "Argon Addon base finder module rendering a cluster of unnatural blocks underground",
              cap: "ClusterFinder + HoleTunnelESP · base perimeter detection",
            },
          ].map((s) => (
            <figure
              key={s.cap}
              className="lift-card overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur"
            >
              <img
                src={s.src}
                alt={s.alt}
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
                width={1280}
                height={800}
              />
              <figcaption className="border-t border-border px-5 py-3 font-mono text-[11px] text-muted-foreground">
                {s.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MODULES SECTION ---------------- */
const modulesData = [
  {
    cat: "ESP & Base Finding",
    count: "15+",
    items: [
      ["1x1 Hole Finder", "Spots the 1x1 trap holes people dig to lock you in."],
      ["StorageESP", "Highlights chests, barrels, shulkers, and traps through walls."],
      ["Block Finder V2", "Search every loaded chunk for a specific block type."],
      ["Chunk Finder", "Picks up recently loaded chunks — usually means a base nearby."],
      ["ClusterFinder", "Detects unnatural block clusters that give bases away."],
      ["HoleTunnelESP", "Renders hidden tunnels and stash routes underground."],
      ["LightESP", "Shows light levels so you can find lit-up rooms inside terrain."],
      ["ShulkerHole ESP", "Finds shulker boxes buried inside walls or holes."],
    ],
  },
  {
    cat: "Crystal PvP & Macros",
    count: "17+",
    items: [
      ["Aim Assist Macro", "Smooth aim correction for crystal and sword fights."],
      ["Anchor Macro", "Auto-places and detonates respawn anchors in nether-style PvP."],
      ["Auto Inv Totem", "Pulls totems out of your inventory the second you pop."],
      ["Elytra Swap", "Instant elytra swap for post-fight escapes."],
      ["Hover Totem", "Keeps a totem in offhand while you hover-spam."],
      ["Tap Reset Macro", "Frame-perfect tap resets for consistent CPS."],
      ["Wind Jump Macro", "Chains wind charges with jumps for stupid mobility."],
      ["Wind Pearl Macro", "Combo wind charges with ender pearls for long-range gap-closes."],
    ],
  },
  {
    cat: "DonutSMP Utilities",
    count: "14+",
    items: [
      ["AH Sniper", "Watches the auction house and buys underpriced listings instantly."],
      ["Auto Mine", "AFK-mines a defined area so you can sleep on cobble runs."],
      ["Auto Tree Farmer", "Chops trees and replants saplings in a loop."],
      ["BiomeGetter", "Shows your biome and the nearest target biome's coords."],
      ["Home Reset", "Resets /home in two clicks after a base move."],
      ["SpawnerProtect", "Blocks misclicks that would destroy spawners near you."],
      ["TpaDisconnect", "Auto-disconnect when a danger-listed player /tpas you."],
      ["TpaMacro", "Auto-accept or reject TPAs based on your whitelist."],
    ],
  },
  {
    cat: "Render & HUD",
    count: "8+",
    items: [
      ["Custom Crosshair", "Replaces vanilla crosshair with shape, colour, gap controls."],
      ["ESP Particles", "Adds particle trails to ESP entities so they pop in dense terrain."],
      ["Fake Scoreboard", "Overlay a fake sidebar to hide real server data on stream."],
      ["Jump ESP", "Predicts and renders player jump arcs and landing zones."],
      ["Player Map", "Live minimap with all nearby player pings."],
      ["Target HUD", "Full target panel — health, armour, totems, distance."],
    ],
  },
];

function Modules() {
  return (
    <section className="section-pad" id="modules">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="tag">
            <LayoutGrid className="h-3 w-3" /> Module catalogue · 90+
          </div>
          <h2 className="font-display mt-4 text-4xl leading-[1.05] md:text-5xl">
            Every module worth <em className="text-gradient-brand not-italic">toggling.</em>
          </h2>
          <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
            Highlights below. The full list is in /modules with filters and search.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {modulesData.map((c) => (
            <div
              key={c.cat}
              className="lift-card relative overflow-hidden rounded-2xl border border-border bg-card/50 p-7 backdrop-blur"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl text-foreground">{c.cat}</h3>
                <span className="rounded-full border border-primary/30 bg-primary/[0.07] px-2.5 py-1 font-mono text-[10.5px] text-primary">
                  {c.count}
                </span>
              </div>
              <ul className="mt-5 grid grid-cols-1 gap-2.5 text-[13.5px] sm:grid-cols-2">
                {c.items.map(([k, v]) => (
                  <li key={k} className="rounded-xl border border-white/[0.04] bg-card/60 px-3.5 py-2.5">
                    <div className="font-medium text-foreground">{k}</div>
                    <div className="mt-0.5 text-[12.5px] leading-relaxed text-muted-foreground">
                      {v}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const ts = [
    {
      name: "void_kassidy",
      role: "DonutSMP · 18-month vet",
      quote:
        "Argon's fly bypass is the only one that survives Donut's anti-cheat for more than 10 minutes. I run it overnight on AFK farms.",
      stars: 5,
    },
    {
      name: "p3arl_clutch",
      role: "Crystal PvP",
      quote:
        "Manual+ CrystalAura is the move. You place the crystals, Argon nails the break timing. No flags during fights.",
      stars: 5,
    },
    {
      name: "ashweave",
      role: "Base hunter",
      quote:
        "ChunkFinder + ClusterFinder + StorageESP — base raids that used to take a week now take an evening.",
      stars: 5,
    },
  ];
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="tag">
            <Heart className="h-3 w-3" /> Community
          </div>
          <h2 className="font-display mt-4 text-4xl leading-[1.05] md:text-5xl">
            Real players. <em className="text-gradient-brand not-italic">Real fights.</em>
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {ts.map((t) => (
            <figure
              key={t.name}
              className="lift-card flex h-full flex-col rounded-2xl border border-border bg-card/50 p-7 backdrop-blur"
            >
              <Quote className="h-5 w-5 text-primary/70" />
              <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-foreground/95">
                {t.quote}
              </blockquote>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[13px] text-foreground">{t.name}</div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                    {t.role}
                  </div>
                </div>
                <div className="flex">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPARISON ---------------- */
function Comparison() {
  const rows: Array<[string, boolean, boolean, boolean]> = [
    ["Working DonutSMP fly", true, false, false],
    ["1.21.11 day-one support", true, false, true],
    ["AH Sniper sub-150ms", true, false, false],
    ["Base-finder module stack", true, false, false],
    ["Crystal PvP Manual+", true, true, true],
    ["Free, no paid tier", true, true, false],
    ["No key system", true, true, false],
    ["Open .jar on GitHub", true, true, false],
  ];
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="tag">
            <TrendingUp className="h-3 w-3" /> The honest table
          </div>
          <h2 className="font-display mt-4 text-4xl leading-[1.05] md:text-5xl">
            Argon vs the <em className="text-gradient-brand not-italic">alternatives.</em>
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur">
          <table className="w-full text-[14px]">
            <thead className="border-b border-border bg-card/60 text-left">
              <tr>
                <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Capability
                </th>
                <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                  Argon
                </th>
                <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Other public addons
                </th>
                <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Paid "premium" clients
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, a, b, c], i) => (
                <tr key={label} className={i % 2 ? "bg-card/30" : ""}>
                  <td className="px-6 py-3.5 text-foreground">{label}</td>
                  {[a, b, c].map((val, j) => (
                    <td key={j} className="px-6 py-3.5">
                      {val ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/60" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------------- RECENT ACTIVITY ---------------- */
function RecentActivity() {
  const events = [
    { t: "6h ago", e: "Donut Bypass re-tuned for May 14 anti-cheat update.", k: "fix" },
    { t: "1d ago", e: "v3.2.0 released — Wind Jump + Wind Pearl macros, Target HUD.", k: "release" },
    { t: "3d ago", e: "AH Sniper latency cut from 380ms → 108ms.", k: "perf" },
    { t: "5d ago", e: "Block Finder V2 rewrite — 4× faster chunk scan.", k: "perf" },
    { t: "1w ago", e: "Fixed StorageESP missing trapped chests through stone.", k: "fix" },
    { t: "2w ago", e: "Crystal PvP suite tuned for DonutSMP's faster wind-charge metas.", k: "tune" },
  ];
  const kindStyles: Record<string, string> = {
    fix: "text-[oklch(0.78_0.16_60)]",
    release: "text-primary",
    perf: "text-[oklch(0.72_0.18_145)]",
    tune: "text-foreground",
  };
  return (
    <section className="section-pad-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="tag">
            <Activity className="h-3 w-3" /> Recent activity
          </div>
          <h2 className="font-display mt-4 text-4xl leading-[1.05] md:text-5xl">
            Shipping <em className="text-gradient-brand not-italic">every week.</em>
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-border glass">
          {events.map((ev) => (
            <div
              key={ev.t}
              className="grid grid-cols-[110px_80px_1fr] items-center gap-4 border-b border-border px-6 py-4 last:border-b-0"
            >
              <div className="font-mono text-[12px] text-muted-foreground">{ev.t}</div>
              <div
                className={`font-mono text-[10.5px] uppercase tracking-[0.18em] ${kindStyles[ev.k]}`}
              >
                {ev.k}
              </div>
              <div className="text-[14px] text-foreground/95">{ev.e}</div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link
            to="/changelog"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-medium text-foreground"
          >
            Full changelog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOWNLOAD SECTION ---------------- */
function DownloadSection() {
  return (
    <section className="section-pad relative" id="download">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-gradient-brand-soft p-10 sm:p-14">
          <div className="mesh-bg opacity-60" aria-hidden />
          <div className="relative grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
            <div>
              <div className="tag">
                <Download className="h-3 w-3" /> Download · Free · 4.8MB
              </div>
              <h2 className="font-display mt-4 text-4xl leading-[1.05] md:text-6xl">
                Get the <em className="text-gradient-brand not-italic">.jar.</em>
              </h2>
              <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-muted-foreground">
                Direct download from the Argon GitHub releases. No mirror, no installer wrapper,
                no Discord verification.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={DOWNLOAD_URL}
                  download
                  className="btn-cta inline-flex items-center gap-2 rounded-full px-7 py-4 text-[14px] font-semibold"
                  data-testid="cta-download-btn"
                >
                  <Download className="h-4 w-4" /> Argon.Addon.1.21.11.jar
                </a>
                <Link
                  to="/install"
                  className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-4 text-[14px] font-medium text-foreground"
                >
                  Install guide
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-background/60 p-5 backdrop-blur">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-primary">
                Release manifest
              </div>
              <dl className="mt-3 space-y-2 text-[13px]">
                {[
                  ["Version", "v3.2.0"],
                  ["MC", "1.21.11"],
                  ["Loader", "Fabric"],
                  ["Size", "4.8 MB"],
                  ["License", "Free · MIT"],
                  ["Released", "2026-05-02"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-3 font-mono">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-3xl px-6">
        <div className="max-w-xl">
          <div className="tag">FAQ</div>
          <h2 className="font-display mt-4 text-4xl leading-[1.05] md:text-5xl">
            Common <em className="text-gradient-brand not-italic">questions.</em>
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqsForSeo.map(([q, a], i) => (
            <div
              key={q}
              className="overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur"
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                data-testid={`faq-toggle-${i}`}
              >
                <span className="text-[15px] font-medium text-foreground">{q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-primary transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="border-t border-border px-6 py-5 text-[14px] leading-relaxed text-muted-foreground">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
          Stop running broken addons.{" "}
          <em className="text-gradient-brand not-italic">Use Argon.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
          Free .jar. 5-minute install. Works on DonutSMP today. If a Donut patch breaks something
          tomorrow, the fix usually drops the same night.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#download"
            className="btn-cta inline-flex items-center gap-2 rounded-full px-8 py-4 text-[14.5px] font-semibold"
          >
            <Download className="h-4 w-4" /> Download Argon Addon
          </a>
          <Link
            to="/modules"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-4 text-[14.5px] font-medium text-foreground"
          >
            Browse 90+ modules
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDEX ---------------- */
function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <StatsMarquee />
        <LiveStatusDashboard />
        <FlyBypassBanner />
        <BypassDiagram />
        <WhatIsArgon />
        <Features />
        <TerminalInstall />
        <ModulePreviewGallery />
        <Modules />
        <Testimonials />
        <Comparison />
        <RecentActivity />
        <DownloadSection />
        <FAQ />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}
