import Nav from "@/components/Nav";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { studentFaqs } from "@/lib/faq-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Programs",
  description:
    "Real projects, real developers, real AI tools. Students ship actual products for real clients. Paid internship or immersive learning track. Redmond, WA.",
};

export default function ForStudentsPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            For Parents &amp; Students
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Your child deserves more than simulations.
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            Just Code It Academy puts students on real development teams, building real
            products for real clients. They learn the AI tools professionals use, ship code
            that matters, and graduate with something better than a certificate.
          </p>
        </div>
      </section>

      {/* What They'll Learn */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-subtle)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            Curriculum
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-16">
            What they&apos;ll learn.
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                title: "AI Development Tools",
                desc: "GitHub Copilot, Cursor, Claude — the tools professional teams use daily.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                ),
                title: "Modern Tech Stacks",
                desc: "React, Next.js, TypeScript, Python — real industry frameworks.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                ),
                title: "Professional Workflows",
                desc: "Git, code review, PR processes — how real teams ship.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                  </svg>
                ),
                title: "Real Problem Solving",
                desc: "Debugging, testing, documentation — skills that transfer everywhere.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's Teaching */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            Leadership
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-16">
            Who&apos;s teaching.
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Colin Li */}
            <div className="border border-[var(--color-border)] rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  CL
                </div>
                <div>
                  <div className="font-semibold text-lg">Colin Li</div>
                  <div className="text-[var(--color-text-muted)] text-sm">Founder</div>
                </div>
              </div>
              <div className="flex gap-6 mb-6">
                <div>
                  <div className="font-mono text-2xl font-semibold">7th</div>
                  <div className="text-[var(--color-text-muted)] text-xs">startup</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-semibold">15+</div>
                  <div className="text-[var(--color-text-muted)] text-xs">years dev</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-semibold">Math+CS</div>
                  <div className="text-[var(--color-text-muted)] text-xs">background</div>
                </div>
              </div>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                Serial entrepreneur who&apos;s built six companies and is now building the
                development studio he wished existed when he started.
              </p>
            </div>

            {/* CodingMind Academy */}
            <div className="border border-[var(--color-border)] rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  CM
                </div>
                <div>
                  <div className="font-semibold text-lg">Built on CodingMind Academy</div>
                  <div className="text-[var(--color-text-muted)] text-sm">Established K-12 School</div>
                </div>
              </div>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                An established K-12 programming and AI school in Redmond, WA. Trained
                teachers, proven curriculum, and a direct pipeline of advanced students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Tracks */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-dark)] text-white">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            Two Paths
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-16">
            Choose your track.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Paid Professional Track */}
            <div className="border-l-4 border-[var(--color-accent)] bg-white/5 rounded-r-xl p-8">
              <h3 className="font-display text-xl font-semibold mb-2">
                Paid Professional Track
              </h3>
              <p className="text-[var(--color-accent)] text-sm font-medium mb-6">
                Earn while you learn.
              </p>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">--</span>
                  W-2 employment, WA State minimum wage
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">--</span>
                  ~10% of project work with real responsibilities
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">--</span>
                  Formal resume and professional references
                </li>
              </ul>
            </div>

            {/* Immersive Learning Track */}
            <div className="border border-white/10 rounded-xl p-8">
              <h3 className="font-display text-xl font-semibold mb-2">
                Immersive Learning Track
              </h3>
              <p className="text-white/60 text-sm font-medium mb-6">
                Go deep without delivery pressure.
              </p>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex gap-2">
                  <span className="text-white/40 flex-shrink-0">--</span>
                  Code reviews on live production work
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40 flex-shrink-0">--</span>
                  Parallel exercises with closer mentorship
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40 flex-shrink-0">--</span>
                  Portfolio-quality projects at your own pace
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What They Graduate With */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-subtle)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            Outcomes
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-16">
            What they graduate with.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Deployed Product",
                desc: "A real project in their portfolio, not a toy app.",
              },
              {
                title: "Professional References",
                desc: "From developers and clients who saw their work.",
              },
              {
                title: "AI Fluency",
                desc: "The tools every modern team uses, mastered from day one.",
              },
              {
                title: "Career Readiness",
                desc: "Or a paycheck — Paid Track students earn real wages.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-[var(--color-border)] rounded-xl p-6"
              >
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition & Structure */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg)]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            Investment
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            Tuition &amp; structure.
          </h2>
          <div className="border border-[var(--color-border)] rounded-xl p-10">
            <div className="font-display text-5xl md:text-6xl font-semibold mb-2">
              $3,000
            </div>
            <p className="text-[var(--color-text-muted)] text-lg mb-10">
              for the initial 3-month training phase.
            </p>

            <div className="border-t border-[var(--color-border)] pt-8">
              <p className="font-semibold mb-4">After training:</p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-[var(--color-bg-subtle)] rounded-lg p-5">
                  <p className="font-semibold text-sm mb-1">Paid Internship</p>
                  <p className="text-[var(--color-text-muted)] text-sm">
                    Minimum wage, real employment.
                  </p>
                </div>
                <div className="bg-[var(--color-bg-subtle)] rounded-lg p-5">
                  <p className="font-semibold text-sm mb-1">Continued Learning</p>
                  <p className="text-[var(--color-text-muted)] text-sm">
                    Reduced tuition rate.
                  </p>
                </div>
              </div>
              <p className="text-[var(--color-text-muted)] text-xs mt-6">
                For high school juniors/seniors and college students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={studentFaqs} heading="Questions parents ask." />

      {/* For Students Section */}
      <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-dark)] text-white">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            For Students
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            Here&apos;s what your day actually looks like.
          </h2>
          <div className="text-white/80 text-lg leading-relaxed space-y-4 mb-12">
            <p>
              You show up. You open your laptop. You pull the latest code from a real project
              with real users. Your senior dev left review comments on your PR from
              yesterday — you fix them. You use Claude to help debug a tricky API integration.
              By the end of the week, your feature is live.
            </p>
            <p>This isn&apos;t a simulation.</p>
          </div>
          <a
            href="/apply"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity duration-200"
          >
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
