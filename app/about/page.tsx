import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Just Code It Academy. Founded by Colin Li, built on CodingMind Academy's proven infrastructure. Redmond, WA.",
};

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            About
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Built by builders.
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            Just Code It Academy exists because the gap between what schools teach and what
            the industry needs has never been wider — and AI is making it wider every month.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-dark)] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-semibold">
              CL
            </div>
            <div>
              <div className="font-semibold text-lg">Colin Li</div>
              <div className="text-[var(--color-text-muted)] text-sm">Founder</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-semibold mb-6">
                Serial entrepreneur.
                <br />
                <span className="text-[var(--color-accent)]">Builder at heart.</span>
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                Colin has a Math and Computer Science background with 15+ years of development
                experience. Just Code It Academy is his 7th startup — built on the infrastructure
                and lessons of his 6th, CodingMind Academy.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The core belief: the best way to learn to build is to build. Not simulations.
                Not toy projects. Real products, for real clients, with real consequences.
                AI makes this model possible at a scale that wasn&apos;t feasible even two
                years ago.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  stat: "7th startup",
                  detail: "Serial entrepreneur — each venture informed the next",
                },
                {
                  stat: "15+ years",
                  detail: "Development experience across full-stack, AI, and education",
                },
                {
                  stat: "Math + CS",
                  detail: "Rigorous technical foundation",
                },
                {
                  stat: "AI-first",
                  detail: "Every project uses AI tools from the first commit",
                },
              ].map(({ stat, detail }) => (
                <div key={stat} className="border border-[var(--color-border-dark)] rounded-lg p-4">
                  <div className="text-[var(--color-accent)] font-semibold text-sm">{stat}</div>
                  <div className="text-[var(--color-text-muted)] text-sm mt-1">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CodingMind Connection */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center text-[var(--color-text)] font-semibold">
              CM
            </div>
            <div>
              <div className="font-semibold text-lg">Built on CodingMind Academy</div>
              <div className="text-[var(--color-text-muted)] text-sm">codingmind.com</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-semibold mb-6">We didn&apos;t start from scratch.</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                CodingMind Academy is an established K-12 AI and programming school in Redmond, WA.
                It provides trained teaching staff, a proven curriculum, and a direct pipeline of
                advanced students ready for real project work.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Just Code It Academy builds on that foundation — taking CodingMind&apos;s most
                advanced students and placing them in professional development environments where
                they ship real products for real clients.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Trained teaching staff ready to deploy",
                "Proven curriculum foundation in AI and programming",
                "Student pipeline: CodingMind advanced students feed directly in",
                "Operational infrastructure: admin, comms, and logistics already built",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 border border-[var(--color-border)] rounded-lg">
                  <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 shrink-0" />
                  <p className="text-[var(--color-text-muted)] text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-subtle)]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            Our Mission
          </p>
          <h2 className="font-display text-4xl font-semibold mb-6">
            Make AI-native technical education financially sustainable.
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
            Not a charity. Not a CSR play. A business model where clients get quality work,
            students get real experience, and the economics work for everyone. Youth Growth
            Network (ygn.ngo) taught us that youth development can&apos;t scale on goodwill
            alone. Just Code It Academy is built to be self-sustaining.
          </p>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
