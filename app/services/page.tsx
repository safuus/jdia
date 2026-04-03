import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional software development for clients and hands-on training for students. Websites, MVPs, internal tools, AI integration — at roughly 50% below agency rates.",
};

const clientServices = [
  {
    tag: "Websites & Web Apps",
    headline: "From landing page to full-stack product.",
    description:
      "Marketing sites, customer portals, SaaS front-ends, e-commerce. We handle architecture, design, development, and deployment — AI-augmented throughout.",
    timeline: "2\u20134 months",
    examples: ["Business websites", "Customer portals", "SaaS front-ends", "E-commerce"],
  },
  {
    tag: "MVPs for Startups",
    headline: "Get to market before your runway runs out.",
    description:
      "We scope lean, build fast, and cut nothing that matters. AI-first workflows mean you get a shippable product in months, not years — at roughly half the cost of a traditional agency.",
    timeline: "3\u20136 months",
    examples: ["Product prototypes", "Investor demos", "Beta launches", "Feature spikes"],
  },
  {
    tag: "Internal Tools",
    headline: "The dashboard your team will actually use.",
    description:
      "Operations dashboards, admin panels, workflow automation, client portals. Built to fit your exact process — not a generic template with your logo on it.",
    timeline: "1\u20133 months",
    examples: ["Ops dashboards", "Data pipelines", "Workflow automation", "Admin panels"],
  },
  {
    tag: "AI Integration",
    headline: "Add AI to what you already have.",
    description:
      "We integrate LLMs, document analysis, and AI-powered workflows into your existing products. Every developer on our team ships AI-augmented code daily — we know what actually works.",
    timeline: "1\u20132 months",
    examples: ["Chatbots & copilots", "Document analysis", "Automation pipelines", "Smart search"],
  },
];

const studentPrograms = [
  {
    phase: "Phase 1 \u2014 Training",
    duration: "Months 1\u20133",
    track: "All students",
    headline: "Learn the tools professionals actually use.",
    description:
      "AI development tools, modern frameworks, professional code review, and real dev workflows. You won\u2019t touch a toy project. From week one, you\u2019re learning against real codebases.",
    details: [
      "AI-first development: GitHub Copilot, Cursor, Claude",
      "Modern stacks: React, Next.js, TypeScript, Python",
      "Git, code review, and professional PR workflows",
      "Debugging, testing, and documentation standards",
    ],
    format: "Tuition-based \u00b7 small cohort \u00b7 supervised by professional devs",
  },
  {
    phase: "Path A \u2014 Paid Internship",
    duration: "Months 4+",
    track: "Employment track",
    headline: "Get paid to ship real features.",
    description:
      "You become a paid intern on a live client project. Real responsibilities: QA, UI components, bug fixes, documentation \u2014 work that ships. You\u2019re on the critical path. The paycheck is real.",
    details: [
      "Paid at WA State minimum wage",
      "~10% of project work \u2014 real contribution",
      "Formal employment: resume, reference, W-2",
      "Mentored by professional developers daily",
    ],
    format: "Employment contract \u00b7 WA labor law \u00b7 paid bi-weekly",
  },
  {
    phase: "Path B \u2014 Supervised Learning",
    duration: "Months 4+",
    track: "Deep learning track",
    headline: "Go deep without the pressure of delivery.",
    description:
      "Stay enrolled as a learner. Observe real project work, participate in code reviews, and run parallel exercises on real problems. Lower stakes, higher depth.",
    details: [
      "Code reviews on live client work",
      "Parallel exercises on real project problems",
      "Closer 1-on-1 mentorship time",
      "Portfolio-quality projects at your own pace",
    ],
    format: "Tuition-based \u00b7 educational law \u00b7 no client delivery obligation",
  },
];

const Check = () => (
  <svg className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function ServicesPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            Services
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            What we build.<br />
            <span className="text-[var(--color-accent)]">Who we build it for.</span>
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            Two sides of the same studio: professional software development for clients who need
            real work done, and hands-on training for students who want to do it.
          </p>
        </div>
      </section>

      {/* Client Services */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-subtle)]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--color-accent)] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em]">For Clients</p>
          </div>
          <h2 className="font-display text-4xl font-semibold mb-4">We build software for real businesses.</h2>
          <p className="text-[var(--color-text-muted)] mb-16 max-w-2xl">
            Professional developers lead every project. AI-augmented from the first commit. Quality
            guaranteed — ~50% below what a traditional agency charges.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {clientServices.map(({ tag, headline, description, timeline, examples }) => (
              <div key={tag} className="bg-white rounded-xl p-8 border border-[var(--color-border)] hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                <div className="inline-flex items-center bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-medium px-3 py-1 rounded-lg mb-4">
                  {tag}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{headline}</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">{description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {examples.map((ex) => (
                    <span key={ex} className="bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)] text-xs px-3 py-1 rounded-lg">
                      {ex}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Typical timeline: {timeline}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing callout */}
          <div className="mt-10 p-8 bg-[var(--color-bg-dark)] text-white rounded-xl flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="font-display text-3xl font-semibold text-[var(--color-accent)] mb-2">~50% below agency rates.</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Not because we cut corners — because AI-augmented teams ship faster and our model
                doesn&apos;t carry the overhead of a traditional consultancy. Professional developers
                lead every project. Quality is non-negotiable.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 bg-white text-[var(--color-text)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--color-accent)] hover:text-white transition-colors text-center text-sm"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>

      {/* Student Programs */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-dark)] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--color-accent)] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em]">For Students</p>
          </div>
          <h2 className="font-display text-4xl font-semibold mb-4">Three stages. One standard.</h2>
          <p className="text-gray-400 mb-16 max-w-2xl">
            Everyone starts with training. After three months, you choose your path. Either way,
            you graduate with real work in your portfolio — not classroom projects.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {studentPrograms.map(({ phase, duration, track, headline, description, details, format }) => (
              <div key={phase} className="border border-[var(--color-border-dark)] rounded-xl p-6 flex flex-col">
                <div className="mb-4">
                  <div className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.15em] mb-1">{phase}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-500 bg-white/10 px-2 py-0.5 rounded">{duration}</span>
                    <span className="text-xs text-gray-500 bg-white/10 px-2 py-0.5 rounded">{track}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{headline}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                </div>
                <ul className="space-y-2 flex-1 mb-6 mt-4">
                  {details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-gray-400">
                      <Check />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-gray-500 border-t border-[var(--color-border-dark)] pt-4 font-mono">{format}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-white text-[var(--color-text)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--color-accent)] hover:text-white transition-colors text-center text-sm"
            >
              Apply as a Student
            </a>
            <a
              href="#how-it-works"
              className="border border-[var(--color-border-dark)] text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-gray-500 transition-colors text-center text-sm"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Enterprise / Incubator */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg)]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[var(--color-accent)] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em]">For Enterprise & Incubators</p>
          </div>
          <h2 className="font-display text-4xl font-semibold mb-6">Build a pipeline, not just a project.</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                If you run an incubator, accelerator, or have a portfolio of early-stage companies — we can
                be your dev partner. Affordable MVP development for your portfolio. Pre-vetted graduates
                trained in modern AI workflows available for direct hire. Early access to top student talent
                before they hit the job market.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                We&apos;re based in the Seattle area and actively building partnerships with local accelerators and
                enterprise partners who want to support AI-native technical education while solving their
                own development needs.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: "MVP development for portfolio companies", desc: "Below-agency rates. Professional quality. Ideal for seed-stage startups." },
                { title: "Talent pipeline access", desc: "First look at top graduates trained in modern AI dev workflows before they go to market." },
                { title: "Campus programs", desc: "Bring the JCIA model to your institution. We\u2019ll discuss structure." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3 p-5 border border-[var(--color-border)] rounded-xl">
                  <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 shrink-0" />
                  <div>
                    <div className="font-display font-semibold text-sm mb-1">{title}</div>
                    <div className="text-[var(--color-text-muted)] text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
