import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Plane, Radar, Coins, Swords, Check, X } from "lucide-react";
import { PageShell } from "../components/site-chrome";

const SITE_URL = "https://argonaddon.com";

export const Route = createFileRoute("/donutsmp-guide")({
  component: GuidePage,
  head: () => ({
    meta: [
      { title: "Argon Addon On DonutSMP — Full Guide, Fly Bypass & Best Modules (2026)" },
      {
        name: "description",
        content:
          "The complete Argon Addon DonutSMP guide. Working fly bypass, AH sniping, base finding, Crystal PvP setup. Why Argon is the best Meteor Client addon for DonutSMP in 2026.",
      },
      {
        name: "keywords",
        content:
          "argon addon donutsmp, best addon donut smp, meteor client addons donutsmp, donutsmp fly bypass, donutsmp ah sniper, argon donutsmp guide, donutsmp base finder, meteor client donutsmp",
      },
      { property: "og:title", content: "Argon Addon On DonutSMP — Full Guide" },
      {
        property: "og:description",
        content:
          "Working fly bypass, AH sniper setup, base finding, Crystal PvP — the complete Argon Addon DonutSMP guide.",
      },
      { property: "og:url", content: `${SITE_URL}/donutsmp-guide` },
      { property: "og:type", content: "article" },
      { property: "og:image", content: `${SITE_URL}/og-card.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/donutsmp-guide` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Argon Addon On DonutSMP — Full Guide, Fly Bypass & Best Modules",
          description:
            "The complete Argon Addon DonutSMP guide. Working fly bypass, AH sniping, base finding, Crystal PvP setup.",
          datePublished: "2026-05-02",
          dateModified: "2026-05-02",
          author: { "@type": "Organization", name: "Argon Addon" },
          publisher: {
            "@type": "Organization",
            name: "Argon Addon",
            logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
          },
          mainEntityOfPage: `${SITE_URL}/donutsmp-guide`,
          image: `${SITE_URL}/og-card.png`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "DonutSMP Guide",
              item: `${SITE_URL}/donutsmp-guide`,
            },
          ],
        }),
      },
    ],
  }),
});

const Pill = ({ icon: Icon, children }: { icon: typeof Plane; children: React.ReactNode }) => (
  <div className="tag">
    <Icon className="h-3 w-3" /> {children}
  </div>
);

function GuidePage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[11px] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <span className="text-foreground">DonutSMP Guide</span>
        </nav>

        <div className="tag">DonutSMP Guide · Updated May 2026</div>
        <h1 className="font-display mt-4 text-5xl leading-[1.02] md:text-7xl">
          Argon on DonutSMP — the{" "}
          <em className="text-gradient-brand not-italic">complete guide.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-muted-foreground">
          Everything Argon does specifically for DonutSMP — the fly bypass, the AH sniper, the base
          finder stack, and which Crystal PvP modules to actually toggle. Updated May 2026 for the
          1.21.11 anti-cheat push.
        </p>

        <figure className="mt-12 overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur">
          <img
            src="/screenshots/base-finder-argon-addon.png"
            alt="Argon Addon's base finder and StorageESP locating a hidden DonutSMP base through walls"
            className="aspect-[16/10] w-full object-cover"
            loading="lazy"
            width={1280}
            height={800}
          />
          <figcaption className="border-t border-border px-5 py-3 font-mono text-[11px] text-muted-foreground">
            Argon's Base Finder rendering a buried storage room on DonutSMP via StorageESP.
          </figcaption>
        </figure>

        <section className="mt-16">
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Why people call it the{" "}
            <em className="text-gradient-brand not-italic">best addon for DonutSMP.</em>
          </h2>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              DonutSMP runs a heavily-modified anti-cheat that hard-flags most public Meteor Client
              modules. If you've tried plain Meteor on Donut, you already know — toggle Speed and
              you're kicked in three seconds. Toggle Fly and you're banned in twenty.
            </p>
            <p>
              Argon's whole reason for existing is the gap between "Meteor modules" and "Meteor
              modules that survive Donut's anti-cheat". Every Argon module shipped to DonutSMP
              players is tested against the live Donut anti-cheat before release. If it gets
              flagged, it doesn't ship — or it ships as a separate "Donut Bypass" mode that trades
              raw power for stealth.
            </p>
          </div>
        </section>

        <section id="fly" className="mt-14 rounded-3xl border border-primary/25 bg-primary/[0.04] p-8">
          <Pill icon={Plane}>The fly bypass</Pill>
          <h2 className="font-display mt-4 text-3xl leading-tight md:text-5xl">
            The only working <em className="text-gradient-brand not-italic">fly</em> on DonutSMP.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              This is what most people are downloading Argon for, so let's be direct about it. Argon
              ships a custom Fly mode called{" "}
              <span className="font-mono text-foreground">Donut Bypass</span> that imitates
              legitimate movement packets — slowfall potion motion, elytra cancels, gradient
              velocity. It doesn't look like vanilla creative flight to the server because it isn't
              sent that way.
            </p>
            <p>Recommended settings for staying under the radar:</p>
            <ul className="ml-1 list-inside space-y-1.5 font-mono text-[12.5px]">
              <li>· Mode · <span className="text-foreground">Donut Bypass</span></li>
              <li>· Speed · <span className="text-foreground">1.2 (do not push past 1.6)</span></li>
              <li>· Glide · <span className="text-foreground">true</span></li>
              <li>· Motion Smoothing · <span className="text-foreground">High</span></li>
              <li>· Anti-Kick · <span className="text-foreground">true</span></li>
              <li>· Y-Speed Cap · <span className="text-foreground">2.4</span></li>
            </ul>
            <p>
              When Donut pushes an anti-cheat update (which usually happens every 2-3 weeks), the
              bypass might flag for a few hours. Keep an eye on the Argon GitHub releases — patches
              drop within 24 hours, usually closer to 6.
            </p>
            <p className="text-[13.5px]">
              <strong className="text-foreground">Disclaimer:</strong> any utility module on a
              server with rules against them carries risk. Argon minimises detection — it doesn't
              eliminate it.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <Pill icon={Coins}>Auction house</Pill>
          <h2 className="font-display mt-4 text-3xl leading-tight md:text-5xl">
            AH Sniper — how to actually{" "}
            <em className="text-gradient-brand not-italic">make money.</em>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              The DonutSMP auction house is where Argon users print. AH Sniper watches every new
              listing as it appears, compares against your price filters, and clicks buy with
              sub-110ms latency. Most flips are gone in under 300ms, so anything slower than that
              misses every good listing.
            </p>
            <p>The setup most regulars use:</p>
            <ul className="ml-1 list-inside space-y-1.5 font-mono text-[12.5px]">
              <li>· Set max bid per item type (netherite block, talisman, etc.)</li>
              <li>· Whitelist categories you actually flip — don't snipe everything</li>
              <li>· Set "min profit margin" to 25% — anything lower isn't worth inventory slots</li>
              <li>
                · Pair with TpaDisconnect so a danger-listed player can't catch you AFK at /ah
              </li>
            </ul>
            <p>
              Realistic numbers: a half-tuned AH Sniper run overnight pulls 80-200k Donut coins. A
              well-tuned one with a custom item list does 5-10× that. The module is the
              second-most-used reason people stay on Argon after fly.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <Pill icon={Radar}>Base finding</Pill>
          <h2 className="font-display mt-4 text-3xl leading-tight md:text-5xl">
            Finding bases — the{" "}
            <em className="text-gradient-brand not-italic">Argon stack.</em>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              No single module finds bases. Argon's approach stacks five modules that each catch one
              thing the others miss:
            </p>
            <ol className="ml-1 list-inside list-decimal space-y-1.5">
              <li>
                <span className="text-foreground">ChunkFinder</span> — flags chunks loaded outside
                spawn radius (someone's online there).
              </li>
              <li>
                <span className="text-foreground">ClusterFinder</span> — detects unnatural block
                density (man-made structures).
              </li>
              <li>
                <span className="text-foreground">HoleTunnelESP</span> — renders mining tunnels
                through stone.
              </li>
              <li>
                <span className="text-foreground">StorageESP</span> — chests/barrels/shulkers
                through walls once you're close.
              </li>
              <li>
                <span className="text-foreground">ShulkerHole ESP</span> — buried shulkers in 1x1s
                and walls.
              </li>
            </ol>
            <p>
              Workflow: fly out 5-10k blocks from spawn with ChunkFinder on. Hit a flagged chunk,
              drop in, toggle ClusterFinder + HoleTunnelESP. Follow the cluster. Once you're within
              64 blocks of the build, StorageESP and ShulkerHole ESP do the rest.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <Pill icon={Swords}>Crystal PvP</Pill>
          <h2 className="font-display mt-4 text-3xl leading-tight md:text-5xl">
            Crystal PvP modules worth{" "}
            <em className="text-gradient-brand not-italic">toggling.</em>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Crystal PvP on DonutSMP is fast — fights end in under 8 seconds against good players.
              You don't want a CrystalAura that places its own crystals (instant flag), you want one
              that times your manual placements better. Argon's CrystalAura defaults to "Manual+" —
              you place, it breaks at frame-perfect tick.
            </p>
            <p>The minimum loadout:</p>
            <ul className="ml-1 list-inside space-y-1.5 font-mono text-[12.5px]">
              <li>· Combat · <span className="text-foreground">CrystalAura (Manual+)</span></li>
              <li>· Combat · <span className="text-foreground">AutoTotem (offhand)</span></li>
              <li>· Combat · <span className="text-foreground">Hover Totem</span></li>
              <li>· Combat · <span className="text-foreground">Anchor Macro (for nether fights)</span></li>
              <li>· Movement · <span className="text-foreground">Wind Pearl Macro (gap-closer)</span></li>
              <li>· Render · <span className="text-foreground">Target HUD</span></li>
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Argon vs other{" "}
            <em className="text-gradient-brand not-italic">Meteor addons</em> on DonutSMP.
          </h2>
          <p className="mt-3 text-[14px] text-muted-foreground">
            The honest, no-corporate-buzzword table.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card/40 backdrop-blur">
            <table className="w-full text-[14px]">
              <thead className="border-b border-border bg-card/60 text-left">
                <tr>
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Capability
                  </th>
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                    Argon
                  </th>
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Other public addons
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["DonutSMP fly bypass", true, false],
                  ["1.21.11 day-one support", true, false],
                  ["AH Sniper sub-150ms latency", true, false],
                  ["Base-finder module stack", true, false],
                  ["Crystal PvP Manual+ rotation", true, true],
                  ["Free, no paid tier", true, true],
                ].map(([label, a, b], i) => (
                  <tr key={String(label)} className={i % 2 ? "bg-card/30" : ""}>
                    <td className="px-5 py-3.5 text-foreground">{label as string}</td>
                    <td className="px-5 py-3.5">
                      {a ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/60" />
                      )}
                    </td>
                    <td className="px-5 py-3.5">
                      {b ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/60" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] border border-primary/25 bg-gradient-brand-soft p-10 text-center sm:p-14">
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Ready to install <em className="text-gradient-brand not-italic">Argon?</em>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[14.5px] text-muted-foreground">
            Free .jar. Five-minute install. Works on DonutSMP today.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              hash="download"
              className="btn-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px] font-semibold"
              data-testid="guide-download-btn"
            >
              <Download className="h-4 w-4" /> Download Argon Addon
            </Link>
            <Link
              to="/install"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px] font-medium text-foreground"
            >
              Read the install guide
            </Link>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
