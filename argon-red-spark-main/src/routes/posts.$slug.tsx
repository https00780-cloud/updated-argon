import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Download, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { PageShell } from "../components/site-chrome";
import { POSTS, postBySlug } from "../lib/posts";
import { ARTICLES } from "../lib/post-content";

const SITE_URL = "https://argonaddon.com";
const DOWNLOAD_URL =
  "https://github.com/https00780-cloud/argonnn/releases/download/zdxc/Argon.Addon.1.21.11.jar";

export const Route = createFileRoute("/posts/$slug")({
  component: PostPage,
  beforeLoad: ({ params }) => {
    if (!postBySlug(params.slug) || !ARTICLES[params.slug]) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const meta = postBySlug(params.slug);
    if (!meta) return {};
    const url = `${SITE_URL}/posts/${meta.slug}`;
    return {
      meta: [
        { title: meta.title },
        { name: "description", content: meta.description },
        { name: "keywords", content: meta.keywords },
        { name: "article:published_time", content: meta.date },
        { property: "og:title", content: meta.title },
        { property: "og:description", content: meta.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: meta.date },
        { property: "article:section", content: meta.category },
        { property: "og:image", content: `${SITE_URL}/og-card.png` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: meta.title },
        { name: "twitter:description", content: meta.description },
        { name: "twitter:image", content: `${SITE_URL}/og-card.png` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: meta.title,
            description: meta.description,
            datePublished: meta.date,
            dateModified: meta.date,
            wordCount: meta.wordCount,
            keywords: meta.keywords,
            articleSection: meta.category,
            author: { "@type": "Organization", name: "Argon Addon", url: SITE_URL },
            publisher: {
              "@type": "Organization",
              name: "Argon Addon",
              logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
            },
            mainEntityOfPage: url,
            image: `${SITE_URL}/og-card.png`,
            url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/posts` },
              { "@type": "ListItem", position: 3, name: meta.title, item: url },
            ],
          }),
        },
      ],
    };
  },
});

function PostPage() {
  const { slug } = Route.useParams();
  const meta = postBySlug(slug);
  const body = ARTICLES[slug];
  if (!meta || !body) return null;

  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[11px] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <Link to="/posts" className="hover:text-foreground">
            Blog
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <span className="text-foreground">{meta.category}</span>
        </nav>

        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
          <span>{meta.category}</span>
          <span className="opacity-50">·</span>
          <span>{meta.date}</span>
          <span className="opacity-50">·</span>
          <span className="inline-flex items-center gap-1 normal-case tracking-normal">
            <Clock className="h-3 w-3" /> {meta.readMinutes} min read
          </span>
        </div>

        <h1 className="font-display reveal mt-5 text-5xl leading-[1.04] tracking-tight md:text-7xl">
          {meta.title}
        </h1>
        <p className="reveal reveal-delay-1 mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          {meta.description}
        </p>

        <div className="aurora-line mt-10" />

        <div className="prose-article mt-10">{body}</div>

        <section className="mt-16 overflow-hidden rounded-3xl border border-primary/25 bg-gradient-brand-soft p-8">
          <h2 className="font-display text-2xl leading-tight md:text-3xl">
            Want the .jar? <em className="text-gradient-brand not-italic">It's free.</em>
          </h2>
          <p className="mt-2 text-[14px] text-muted-foreground">
            Everything in this guide ships in the one Argon Addon .jar. Drop it in your Fabric mods
            folder.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={DOWNLOAD_URL}
              download
              className="btn-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px] font-semibold"
              data-testid="post-download-btn"
            >
              <Download className="h-4 w-4" /> Download Argon Addon
            </a>
            <Link
              to="/install"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px] font-medium text-foreground"
            >
              Install guide
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <div className="tag">Read next</div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/posts/$slug"
                params={{ slug: r.slug }}
                className="lift-card group rounded-2xl border border-border bg-card/50 p-5 backdrop-blur"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {r.category} · {r.readMinutes} min
                </div>
                <div className="font-display mt-3 text-lg leading-snug text-foreground">
                  {r.title}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-[12px] text-primary opacity-0 transition group-hover:opacity-100">
                  Read <ChevronRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
          <Link
            to="/posts"
            className="mt-7 inline-flex items-center gap-1.5 text-[13.5px] text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All posts
          </Link>
        </section>
      </article>
    </PageShell>
  );
}

export function ProseArticle({ children }: { children: ReactNode }) {
  return <div className="prose-article">{children}</div>;
}
