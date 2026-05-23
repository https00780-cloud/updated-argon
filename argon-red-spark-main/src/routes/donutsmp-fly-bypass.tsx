import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Plane, ShieldCheck, AlertTriangle, Check, Terminal } from "lucide-react";
import { PageShell } from "../components/site-chrome";

const SITE_URL = "https://argonaddon.com";
const DOWNLOAD_URL =
  "https://github.com/https00780-cloud/argonnn/releases/download/zdxc/Argon.Addon.1.21.11.jar";

export const Route = createFileRoute("/donutsmp-fly-bypass")({
  component: FlyBypassPage,
  head: () => ({
    meta: [
      { title: "DonutSMP Fly Bypass 2026 — The Only Working Fly On DonutSMP (Argon Addon)" },
      {
        name: "description",
        content:
          "How to fly on DonutSMP in 2026 without getting kicked or banned. Argon Addon ships the only working DonutSMP fly bypass. Recommended settings, anti-cheat notes, and free .jar download.",
      },
      {
        name: "keywords",
        content:
          "donutsmp fly bypass, fly bypass donutsmp, donutsmp fly, how to fly on donutsmp, meteor client fly donutsmp, argon fly bypass, donut smp fly hack",
      },
      { property: "og:title", content: "DonutSMP Fly Bypass — Argon Addon (Working in 2026)" },
      {
        property: "og:description",
        content:
          "The only working DonutSMP fly bypass in 2026. Free .jar, 5-minute install, re-tuned every anti-cheat update.",
      },
      { property: "og:url", content: `${SITE_URL}/donutsmp-fly-bypass` },
      { property: "og:type", content: "article" },
      { property: "og:image", content: `${SITE_URL}/og-card.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/donutsmp-fly-bypass` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "DonutSMP Fly Bypass — The Only Working Fly On DonutSMP",
          description:
            "How to fly on DonutSMP without getting flagged. Recommended Argon Addon settings, anti-cheat tuning notes, free download.",
          datePublished: "2026-05-02",
          dateModified: "2026-05-02",
          author: { "@type": "Organization", name: "Argon Addon" },
          publisher: {
            "@type": "Organization",
            name: "Argon Addon",
            logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
          },
          mainEntityOfPage: `${SITE_URL}/donutsmp-fly-bypass`,
          image: `${SITE_URL}/og-card.png`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is there a working fly bypass on DonutSMP in 2026?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Argon Addon's Donut Bypass fly mode is the only public Meteor Client fly that survives DonutSMP's anti-cheat as of May 2026. Every other public fly module gets flagged within seconds.",
              },
            },
            {
              "@type": "Question",
              name: "Will I get banned for using the Argon fly bypass on DonutSMP?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Argon's fly is tuned to mimic legitimate packets (slowfall, elytra cancel). It minimises detection risk but doesn't eliminate it. Keep speed under 1.6, motion smoothing on High, and watch the changelog for hotfixes after each DonutSMP anti-cheat update.",
              },
            },
            {
              "@type": "Question",
              name: "How long does the fly bypass stay working after a DonutSMP update?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "When DonutSMP pushes an anti-cheat update — usually every 2-3 weeks — the bypass may flag for a few hours. Argon ships a patched build within 24 hours, usually closer to 6.",
              },
            },
            {
              "@type": "Question",
              name: "Is the Argon fly bypass free?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The whole Argon Addon is free, including the fly bypass. No paid tier, no key system, no Discord verification. Direct .jar download from GitHub.",
              },
            },
          ],
        }),
      },
    ],
  }),
});

function FlyBypassPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[11px] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <Link to="/donutsmp-guide" className="hover:text-foreground">
            DonutSMP Guide
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <span className="text-foreground">Fly Bypass</span>
        </nav>

        <div className="tag">
          <Plane className="h-3 w-3" /> DonutSMP · Bypass · May 2026
        </div>
        <h1 className="font-display reveal mt-4 text-5xl leading-[1.02] md:text-7xl">
          The only working <em className="text-gradient-brand not-italic">DonutSMP fly bypass</em>{" "}
          in 2026.
        </h1>
        <p className="reveal reveal-delay-1 mt-6 max-w-2xl text-[16.5px] leading-relaxed text-muted-foreground">
          Short version: every public Meteor Client fly module gets flagged on DonutSMP within
          seconds. Argon Addon's <span className="font-mono text-foreground">Donut Bypass</span>{" "}
          mode is the one exception — and it's been the only working DonutSMP fly since spring 2025.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={DOWNLOAD_URL}
            download
            className="btn-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px] font-semibold"
            data-testid="fly-download-btn"
          >
            <Download className="h-4 w-4" /> Download Argon (bypass included)
          </a>
          <Link
            to="/install"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px] font-medium text-foreground"
          >
            Install guide
          </Link>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Why standard Meteor fly{" "}
            <em className="text-gradient-brand not-italic">doesn't work</em> on DonutSMP.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              DonutSMP runs a custom anti-cheat layered on top of Grim. It specifically inspects
              vertical motion packets, gravity consistency, and the difference between client
              position and what's physically possible in the last 20 ticks.
            </p>
            <p>
              Meteor's default Fly module sends "creative" motion — flat vertical velocity, zero
              gravity, instant direction changes. The second packet hits Donut's anti-cheat it's
              flagged. Same for every fork that's just rebranded Meteor's fly module.
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-primary/25 bg-primary/[0.04] p-8">
          <div className="tag">
            <Terminal className="h-3 w-3" /> How Argon's bypass works
          </div>
          <h2 className="font-display mt-4 text-3xl leading-tight md:text-4xl">
            Donut Bypass mode — <em className="text-gradient-brand not-italic">packet mimicry</em>,
            not raw fly.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Argon's <span className="font-mono text-foreground">Donut Bypass</span> doesn't send
              "fly" motion to the server. It sends a sequence of legitimate packets —
              slowfall-tinted vertical motion, elytra-cancel transitions, gradient velocity that
              respects the anti-cheat's gravity model.
            </p>
            <p>
              From the server's perspective, you look like someone with a slowfall potion who's also
              chaining elytra cancels. That's a real thing players do. Argon just does it perfectly
              every tick.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Recommended <em className="text-gradient-brand not-italic">settings.</em>
          </h2>
          <p className="mt-3 text-[14px] text-muted-foreground">
            Don't push these. The whole point is staying boring to the anti-cheat.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur">
            <table className="w-full text-[14px]">
              <tbody className="font-mono text-[12.5px]">
                {[
                  ["Module", "Movement → Fly"],
                  ["Mode", "Donut Bypass"],
                  ["Speed", "1.2 (max safe 1.6)"],
                  ["Glide", "true"],
                  ["Motion Smoothing", "High"],
                  ["Anti-Kick", "true"],
                  ["Y-Speed Cap", "2.4"],
                  ["Toggle key", "Right Shift → Movement → Fly"],
                ].map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-card/30" : ""}>
                    <td className="border-r border-border px-5 py-3.5 text-muted-foreground">{k}</td>
                    <td className="px-5 py-3.5 text-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-border glass p-8">
          <div className="tag">
            <AlertTriangle className="h-3 w-3" /> Reality check
          </div>
          <h2 className="font-display mt-4 text-3xl leading-tight md:text-4xl">
            When the bypass <em className="text-gradient-brand not-italic">flags.</em>
          </h2>
          <ul className="mt-5 space-y-2.5 text-[14.5px] leading-relaxed text-muted-foreground">
            <li>· DonutSMP pushes an anti-cheat update (usually every 2-3 weeks).</li>
            <li>· The bypass flags for 0-24 hours.</li>
            <li>· Argon ships a hotfix to GitHub releases.</li>
            <li>· You re-download the .jar, drop it in mods, you're back.</li>
          </ul>
          <p className="mt-5 text-[13.5px] text-muted-foreground">
            We monitor Donut's anti-cheat commits and ship patches usually within 6 hours of
            detection. Subscribe to the GitHub repo for release notifications.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            What about other &quot;DonutSMP fly&quot; downloads on{" "}
            <em className="text-gradient-brand not-italic">YouTube?</em>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>Three categories, all bad:</p>
            <ol className="ml-1 list-inside list-decimal space-y-2">
              <li>
                <span className="text-foreground">Reupload-scam .jars.</span> Random fork hosted on
                a sketchy file-share with a token-grabbing payload. Don't run unsigned .jars from
                anywhere except the Argon GitHub releases.
              </li>
              <li>
                <span className="text-foreground">Outdated Meteor forks.</span> A fly mode that
                worked on Donut nine months ago. Anti-cheat has moved on; you'll be kicked in 5
                seconds and flagged in 30.
              </li>
              <li>
                <span className="text-foreground">Paid "premium" clients.</span> $20-50 for a fly
                that's the same Meteor base as Argon, repackaged. We ship Argon free because the
                code matters, not the gatekeeping.
              </li>
            </ol>
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] border border-primary/25 bg-gradient-brand-soft p-10 text-center sm:p-14">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/[0.08] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            <ShieldCheck className="h-3.5 w-3.5" /> Working as of{" "}
            {new Date().toISOString().slice(0, 10)}
          </div>
          <h2 className="font-display mt-5 text-3xl leading-tight md:text-5xl">
            Get the <em className="text-gradient-brand not-italic">working bypass.</em>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[14.5px] text-muted-foreground">
            Free .jar. 5-minute install. Donut Bypass mode ready out of the box.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={DOWNLOAD_URL}
              download
              className="btn-cta inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold"
              data-testid="fly-cta-download-btn"
            >
              <Download className="h-4 w-4" /> Argon.Addon.1.21.11.jar
            </a>
            <Link
              to="/donutsmp-guide"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium text-foreground"
            >
              Full DonutSMP guide
            </Link>
          </div>
          <p className="mt-6 text-[12px] text-muted-foreground">
            <Check className="-mt-0.5 mr-1 inline h-3 w-3 text-primary" /> No paid tier ·{" "}
            <Check className="-mt-0.5 mx-1 inline h-3 w-3 text-primary" /> No key system ·{" "}
            <Check className="-mt-0.5 mx-1 inline h-3 w-3 text-primary" /> Updated within 24h of
            every Donut patch
          </p>
        </section>
      </article>
    </PageShell>
  );
}
