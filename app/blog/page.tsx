import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on AI-native education, building real products with students, and the future of technical training.",
};

type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

function getBlogPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), "content/blog");

  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");
    const content = fs.readFileSync(path.join(postsDir, file), "utf-8");

    // Matched-quote regex to avoid mismatched open/close quotes
    const titleMatch = content.match(/export const title = (["'])(.+?)\1/);
    const dateMatch = content.match(/export const date = (["'])(.+?)\1/);
    const summaryMatch = content.match(/export const summary = (["'])(.+?)\1/);

    return {
      slug,
      title: titleMatch?.[2] || slug,
      date: dateMatch?.[2] || "Unknown",
      summary: summaryMatch?.[2] || "",
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Nav />

      <section className="pt-40 pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            Blog
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Ideas, updates, and lessons.
          </h1>
          <p className="text-[var(--color-text-muted)] text-lg mb-16 max-w-xl">
            Thoughts on AI-native education, building real products with students, and what
            we&apos;re learning along the way.
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-16 border border-[var(--color-border)] rounded-xl">
              <p className="text-[var(--color-text-muted)] text-lg mb-2">No posts yet.</p>
              <p className="text-[var(--color-text-muted)] text-sm">Check back soon — we&apos;re working on it.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map(({ slug, title, date, summary }) => (
                <a
                  key={slug}
                  href={`/blog/${slug}`}
                  className="block p-6 border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)]/40 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                >
                  <div className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-[0.15em] mb-2">{date}</div>
                  <h2 className="font-display text-xl font-semibold mb-2">{title}</h2>
                  {summary && <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{summary}</p>}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
