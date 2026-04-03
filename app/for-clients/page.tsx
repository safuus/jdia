import Nav from "@/components/Nav";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { clientFaqs } from "@/lib/faq-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development",
  description:
    "AI-augmented dev studio. Professional delivery at ~50% below agency rates. Websites, MVPs, internal tools, AI integration. Redmond, WA.",
};

const offerings = [
  {
    tag: "Web",
    title: "Websites & Web Apps",
    description:
      "Marketing sites, customer portals, SaaS front-ends, e-commerce.",
    timeline: "2-4 months",
  },
  {
    tag: "Startup",
    title: "MVPs for Startups",
    description:
      "Product prototypes, investor demos, beta launches.",
    timeline: "3-6 months",
  },
  {
    tag: "Enterprise",
    title: "Internal Tools",
    description:
      "Ops dashboards, admin panels, workflow automation.",
    timeline: "1-3 months",
  },
  {
    tag: "AI",
    title: "AI Integration",
    description:
      "Chatbots, document analysis, automation pipelines.",
    timeline: "1-2 months",
  },
];

const steps = [
  {
    number: 1,
    title: "Scope",
    description:
      "We discuss your project, timeline, and budget. You get a clear proposal with no surprises.",
  },
  {
    number: 2,
    title: "Build",
    description:
      "Professional devs lead every sprint. AI-accelerated development. You get regular updates and demos.",
  },
  {
    number: 3,
    title: "Deliver",
    description:
      "Deployed, documented, and yours. We hand off clean code with full ownership transfer.",
  },
];

export default function ForClientsPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            For Clients
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            You need software built.
            <br />
            We build it better and cheaper.
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            AI-augmented development studio with professional developers leading
            every project. ~50% below traditional agency rates — not because we
            cut corners, because AI makes us faster.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-subtle)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            What We Build
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-12">
            From first line to production.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[var(--color-border)] rounded-xl p-8 flex flex-col"
              >
                <span className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-3">
                  {item.tag}
                </span>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed flex-1">
                  {item.description}
                </p>
                <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {item.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-dark)] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
                Why We&rsquo;re Different
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                AI makes us faster.
                <br />
                We pass the savings to you.
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                Every developer on our team uses AI-first workflows — GitHub
                Copilot, Cursor, Claude — from the first line of code. This
                isn&rsquo;t a gimmick. It means faster iteration, fewer bugs,
                and dramatically lower costs.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                But AI doesn&rsquo;t replace judgment. Senior developers lead
                every project, make architecture decisions, review every line,
                and own the outcome. You get the speed of AI with the quality
                of experienced engineers.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { stat: "~50%", label: "Below agency rates" },
                { stat: "1-12 mo", label: "Flexible timelines" },
                { stat: "Senior-led", label: "Every project" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-[var(--color-border-dark)] rounded-xl p-6"
                >
                  <div className="font-display text-3xl font-semibold text-[var(--color-accent)] mb-1">
                    {item.stat}
                  </div>
                  <div className="text-[var(--color-text-muted)] text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            Proof
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-12">
            Real work. Real results.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Case Study Card */}
            <div className="bg-[var(--color-bg-dark)] text-white rounded-2xl p-8 md:p-10">
              <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-6">
                Case Study
              </p>
              <h3 className="font-display text-2xl font-semibold mb-6">
                Coerver NW
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Timeline", value: "4 months" },
                  { label: "Team", value: "1 dev + 3 teachers + 7 students" },
                  { label: "Deliverable", value: "Live website" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="flex justify-between items-baseline border-b border-[var(--color-border-dark)] pb-3"
                  >
                    <span className="text-[var(--color-text-muted)] text-sm">
                      {metric.label}
                    </span>
                    <span className="font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="flex flex-col justify-center">
              <blockquote className="text-lg leading-relaxed text-[var(--color-text-muted)] mb-6">
                &ldquo;They delivered a professional website on time and on
                budget. The fact that students were involved made zero
                difference to the quality — it was indistinguishable from any
                agency work I&rsquo;ve seen.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--color-bg-subtle)] rounded-full flex items-center justify-center font-semibold text-sm text-[var(--color-text-muted)]">
                  TR
                </div>
                <div>
                  <div className="font-semibold text-sm">T.R.</div>
                  <div className="text-[var(--color-text-muted)] text-sm">
                    Coerver NW
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backed by strip */}
          <div className="border-t border-[var(--color-border)] pt-6 text-center text-sm text-[var(--color-text-muted)]">
            Backed by{" "}
            <a
              href="https://codingmind.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              CodingMind Academy
            </a>{" "}
            — 5+ years training developers in Redmond, WA.
          </div>
        </div>
      </section>

      {/* How Engagement Works */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-subtle)]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            How It Works
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-12">
            Three steps to launch.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="font-display text-5xl font-semibold text-[var(--color-accent)] opacity-30 mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={clientFaqs} heading="Questions from clients." />

      {/* CTA */}
      <CTA
        defaultAudience="client"
        headline="Ready to start a project?"
        subtitle="Tell us about your project. We'll scope it and get back to you within 1-2 business days."
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
