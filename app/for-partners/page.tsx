import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Partnerships",
  description:
    "Pre-vetted graduates trained in modern AI workflows. Affordable MVP development for portfolio companies. Seattle-area talent pipeline. Redmond, WA.",
};

const partnerCards = [
  {
    icon: (
      <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
        <rect x="7" y="7" width="10" height="10" rx="1" strokeWidth={1.5} />
      </svg>
    ),
    title: "MVP Development",
    subtitle: "Affordable dev for your portfolio.",
    body: "Seed-stage companies in your portfolio need an MVP but can\u2019t afford a traditional agency. We build at ~50% below agency rates with professional developers leading every project. AI-first. Quality guaranteed.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeWidth={1.5} d="M4 12h16M4 6h10M4 18h13" />
      </svg>
    ),
    title: "Talent Pipeline",
    subtitle: "Hire graduates you\u2019ve already vetted.",
    body: "Our students train on real client projects with real AI tools. By the time they graduate, you\u2019ve seen their work quality, communication style, and technical skills. First-look access before they hit the job market.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth={1.5} />
        <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth={1.5} />
        <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth={1.5} />
        <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth={1.5} />
      </svg>
    ),
    title: "Campus Programs",
    subtitle: "Bring the model to your institution.",
    body: "Want to offer real-project training at your school or accelerator? We\u2019ll work with you to adapt the JCIA model to your context. From curriculum partnership to full program deployment.",
  },
];

const pipelineSteps = [
  { label: "CodingMind Academy", detail: "K-12 foundation" },
  { label: "JCIA Training", detail: "3 months, AI tools, real codebases" },
  { label: "Real Client Projects", detail: "Supervised by senior devs" },
  { label: "Hire-Ready Graduates", detail: "AI-fluent, project-tested, referenced" },
];

const stats = [
  { value: "7th startup", label: "Serial entrepreneur" },
  { value: "15+ years", label: "Development experience" },
  { value: "Redmond, WA", label: "Seattle-area, local talent" },
];

export default function ForPartnersPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            For Partners
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Pre-trained talent.<br />
            Affordable dev.<br />
            <span className="text-[var(--color-accent)]">One partner.</span>
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            We train developers on real client projects using modern AI workflows.
            You get access to hire-ready graduates, affordable studio development
            for your portfolio companies, or both.
          </p>
        </div>
      </section>

      {/* Three Ways to Partner */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-subtle)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            Partnership Models
          </p>
          <h2 className="font-display text-4xl font-semibold mb-16">
            Three ways to partner.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerCards.map(({ icon, title, subtitle, body }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-8 border border-[var(--color-border)] hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex flex-col"
              >
                <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-1">{title}</h3>
                <p className="text-[var(--color-accent)] text-sm font-medium mb-4">{subtitle}</p>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Model */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            The Pipeline
          </p>
          <h2 className="font-display text-4xl font-semibold mb-12">
            How we produce hire-ready developers.
          </h2>

          {/* Flow diagram */}
          <div className="flex flex-col md:flex-row items-stretch gap-4 mb-12">
            {pipelineSteps.map(({ label, detail }, i) => (
              <div key={label} className="flex-1 flex items-center gap-4">
                <div className="flex-1 border border-[var(--color-border)] rounded-xl p-5 bg-white">
                  <div className="font-display font-semibold text-sm mb-1">{label}</div>
                  <div className="text-[var(--color-text-muted)] text-xs">{detail}</div>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          <p className="text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            Students come to us from CodingMind Academy&apos;s advanced programs. We train
            them on the AI tools and workflows professional teams use. They work on real
            client projects under senior developer supervision. By graduation, they&apos;ve
            shipped real code, worked with real clients, and built with real AI tools.
            That&apos;s the pipeline you get access to.
          </p>
        </div>
      </section>

      {/* Who's Behind This */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-subtle)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            Leadership
          </p>
          <h2 className="font-display text-4xl font-semibold mb-12">
            Who&apos;s behind this.
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Colin Li</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Just Code It Academy is Colin&apos;s 7th startup. He has 15+ years of
                development experience with a Math and Computer Science background.
                He founded CodingMind Academy, a K-12 programming and AI school
                operating in the Seattle area, and is now building JCIA as the
                next step: a studio that trains developers on real client projects
                using AI-native workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={value}
                  className="border border-[var(--color-border)] rounded-xl p-5 bg-white text-center"
                >
                  <div className="font-display font-semibold text-lg mb-1">{value}</div>
                  <div className="text-[var(--color-text-muted)] text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        defaultAudience="partner"
        headline="Let&#8217;s explore a partnership."
        subtitle="Tell us about your organization and what you&#8217;re looking for. We&#8217;ll follow up within 1-2 business days."
      />

      <Footer />
    </main>
  );
}
