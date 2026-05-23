import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ChevronRight, AlertTriangle, Terminal } from "lucide-react";
import { PageShell } from "../components/site-chrome";

const SITE_URL = "https://argonaddon.com";
const DOWNLOAD_URL =
  "https://github.com/https00780-cloud/argonnn/releases/download/zdxc/Argon.Addon.1.21.11.jar";

export const Route = createFileRoute("/install")({
  component: InstallPage,
  head: () => ({
    meta: [
      { title: "How To Install Argon Addon On DonutSMP — Step-By-Step Guide (1.21.11)" },
      {
        name: "description",
        content:
          "Argon Addon install guide for DonutSMP. Step-by-step: Fabric 1.21.11 + Meteor Client + Argon .jar download. Fixes for the 5 most common install errors.",
      },
      {
        name: "keywords",
        content:
          "argon addon install, argon addon download, how to install argon addon, argon addon donutsmp install, meteor client addon install donutsmp, fabric 1.21.11",
      },
      { property: "og:title", content: "How To Install Argon Addon On DonutSMP" },
      {
        property: "og:description",
        content:
          "The full Argon Addon install guide — Fabric, Meteor Client, and the Argon .jar in under 5 minutes.",
      },
      { property: "og:url", content: `${SITE_URL}/install` },
      { property: "og:type", content: "article" },
      { property: "og:image", content: `${SITE_URL}/og-card.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/install` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How To Install Argon Addon On DonutSMP",
          description:
            "Install Fabric Loader 1.21.11, Meteor Client, and the Argon Addon .jar to play on DonutSMP.",
          totalTime: "PT5M",
          tool: ["Minecraft Java 1.21.11", "Fabric Loader", "Meteor Client", "Java 21+"],
          step: [
            {
              "@type": "HowToStep",
              name: "Install Fabric Loader for 1.21.11",
              text: "Download and run the Fabric Installer. Pick Minecraft 1.21.11 and the latest Fabric Loader. Install.",
              url: `${SITE_URL}/install#fabric`,
            },
            {
              "@type": "HowToStep",
              name: "Install Meteor Client",
              text: "Download the latest Meteor Client .jar for 1.21.11 and place it in your mods folder.",
              url: `${SITE_URL}/install#meteor`,
            },
            {
              "@type": "HowToStep",
              name: "Drop Argon Addon into mods",
              text: "Download Argon.Addon.1.21.11.jar and drop it into the same mods folder. Launch Minecraft with the Fabric profile.",
              url: `${SITE_URL}/install#argon`,
            },
            {
              "@type": "HowToStep",
              name: "Open the GUI",
              text: "Press Right Shift in-game. The Meteor GUI opens — Argon's modules are in the same categories alongside Meteor's built-in ones.",
              url: `${SITE_URL}/install#open`,
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Install", item: `${SITE_URL}/install` },
          ],
        }),
      },
    ],
  }),
});

const Step = ({
  n,
  id,
  title,
  children,
}: {
  n: number;
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="relative scroll-mt-32">
    <div className="flex items-start gap-5">
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand font-mono text-base font-semibold text-primary-foreground shadow-glow ring-1 ring-primary/40">
        {n}
      </div>
      <div className="flex-1 pt-1">
        <h2 className="font-display text-3xl leading-tight md:text-4xl">{title}</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  </section>
);

function InstallPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[11px] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <span className="text-foreground">Install</span>
        </nav>
        <div className="tag">
          <Terminal className="h-3 w-3" /> Install guide
        </div>
        <h1 className="font-display mt-4 text-5xl leading-[1.05] md:text-7xl">
          Install <em className="text-gradient-brand not-italic">Argon</em>
          <br /> in five minutes.
        </h1>
        <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-muted-foreground">
          Five minutes, four steps, one .jar. Same setup every DonutSMP player who runs Argon uses.
          No launcher, no installer script, no Discord verification.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card/50 p-5 backdrop-blur sm:grid-cols-4">
          {[
            ["Minecraft", "1.21.11"],
            ["Loader", "Fabric"],
            ["Requires", "Meteor Client"],
            ["Java", "21+"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                {k}
              </div>
              <div className="mt-2 font-mono text-sm font-semibold text-foreground">{v}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 space-y-14">
          <Step n={1} id="fabric" title="Install Fabric Loader 1.21.11">
            <p>
              Argon is a Fabric mod, not Forge. Grab the Fabric Installer from{" "}
              <a
                className="text-foreground underline decoration-primary/40 underline-offset-4"
                href="https://fabricmc.net/use/installer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                fabricmc.net/use/installer
              </a>
              , run it, pick Minecraft version <span className="font-mono">1.21.11</span> and the
              latest stable Loader version. Hit Install.
            </p>
            <p>
              Restart the Minecraft launcher. You'll see a new{" "}
              <span className="font-mono">fabric-loader-1.21.11</span> profile in the dropdown.
              Don't launch it yet.
            </p>
          </Step>

          <Step n={2} id="meteor" title="Drop Meteor Client into mods">
            <p>
              Argon is a <strong className="text-foreground">Meteor Client addon</strong>. It needs
              Meteor to function — same way a Forge mod needs Forge.
            </p>
            <p>
              Download the latest Meteor Client .jar from{" "}
              <a
                className="text-foreground underline decoration-primary/40 underline-offset-4"
                href="https://meteorclient.com/download"
                target="_blank"
                rel="noopener noreferrer"
              >
                meteorclient.com/download
              </a>{" "}
              (pick the 1.21.11 dev build). Open your mods folder:
            </p>
            <ul className="list-inside space-y-1 font-mono text-[12px]">
              <li>
                <span className="text-muted-foreground/70">Windows ·</span>{" "}
                <span className="text-foreground">%appdata%\.minecraft\mods</span>
              </li>
              <li>
                <span className="text-muted-foreground/70">macOS ·</span>{" "}
                <span className="text-foreground">
                  ~/Library/Application Support/minecraft/mods
                </span>
              </li>
              <li>
                <span className="text-muted-foreground/70">Linux ·</span>{" "}
                <span className="text-foreground">~/.minecraft/mods</span>
              </li>
            </ul>
            <p>If the folder doesn't exist, create it. Drop the Meteor .jar inside.</p>
          </Step>

          <Step n={3} id="argon" title="Download Argon Addon and add it">
            <p>In the same mods folder, drop the Argon Addon .jar next to Meteor.</p>
            <a
              href={DOWNLOAD_URL}
              download
              className="btn-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium"
              data-testid="install-download-btn"
            >
              <Download className="h-4 w-4" /> Download Argon.Addon.1.21.11.jar
            </a>
            <p>
              Order in the folder doesn't matter, but version does. If you put a 1.21.4 build of
              Argon next to Meteor 1.21.11, Minecraft will crash on launch with a mismatched loader
              version error. Double-check both files say 1.21.11.
            </p>
          </Step>

          <Step n={4} id="open" title="Launch and press Right Shift">
            <p>
              Pick the <span className="font-mono">fabric-loader-1.21.11</span> profile in the
              launcher. Hit play. Once you're in the main menu, press{" "}
              <kbd className="rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-xs">
                Right Shift
              </kbd>{" "}
              — Meteor's click GUI opens. Argon's modules are mixed into the existing categories
              (Combat, Movement, Render, etc.) plus a new "Argon" tab.
            </p>
            <p>
              First-time setup: open Combat → CrystalAura → Argon profile. That gives you the
              DonutSMP-tuned defaults. For fly, Movement → Fly → toggle "Donut Bypass" mode.
            </p>
          </Step>
        </div>

        <section className="mt-20 rounded-3xl border border-border glass p-8">
          <div className="tag">
            <AlertTriangle className="h-3 w-3" /> Common install issues
          </div>
          <h2 className="font-display mt-4 text-3xl leading-tight md:text-4xl">
            It didn't work. <em className="text-gradient-brand not-italic">Now what?</em>
          </h2>
          <div className="mt-7 space-y-6 text-[15px] leading-relaxed text-muted-foreground">
            <div>
              <div className="font-semibold text-foreground">
                Crash on launch — "incompatible loader version"
              </div>
              <p className="mt-1">
                You're mixing 1.21.4 / 1.21.6 mods with 1.21.11. Open the mods folder and delete
                anything that isn't tagged 1.21.11.
              </p>
            </div>
            <div>
              <div className="font-semibold text-foreground">"Fabric API not found"</div>
              <p className="mt-1">
                You need Fabric API — separate from Fabric Loader. Grab it from{" "}
                <a
                  className="text-foreground underline decoration-primary/40 underline-offset-4"
                  href="https://modrinth.com/mod/fabric-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  modrinth.com/mod/fabric-api
                </a>{" "}
                and drop the .jar into mods.
              </p>
            </div>
            <div>
              <div className="font-semibold text-foreground">
                Argon modules don't show up in the GUI
              </div>
              <p className="mt-1">
                Meteor Client probably failed to load Argon as an addon. Check your{" "}
                <span className="font-mono">latest.log</span> in{" "}
                <span className="font-mono">.minecraft/logs</span> — look for "[Argon]" lines. 9
                times out of 10 it's a duplicate Meteor .jar still in mods.
              </p>
            </div>
            <div>
              <div className="font-semibold text-foreground">Java version error</div>
              <p className="mt-1">
                1.21.11 needs Java 21. The Minecraft launcher ships its own JRE these days, but if
                you launch through MultiMC/Prism, point it at a Java 21 install.
              </p>
            </div>
            <div>
              <div className="font-semibold text-foreground">
                Fly toggles but the server kicks me
              </div>
              <p className="mt-1">
                You're on the default Meteor fly. Switch the Mode to{" "}
                <span className="font-mono">Donut Bypass</span> and turn speed down to 1.2. The
                default Vanilla mode is detection bait on DonutSMP.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/donutsmp-guide"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-medium text-foreground"
          >
            Next · DonutSMP setup guide <ChevronRight className="h-4 w-4" />
          </Link>
          <Link
            to="/changelog"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-medium text-foreground"
          >
            Changelog <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
