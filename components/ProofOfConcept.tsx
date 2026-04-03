"use client";

import { useInView } from "@/lib/useInView";

export default function ProofOfConcept() {
  const { ref, hasAnimated } = useInView();

  const metrics = [
    { label: "Timeline", value: "4 months" },
    { label: "Team", value: "1 dev \u00b7 3 teachers \u00b7 7 students" },
    { label: "Deliverable", value: "Live website, real users" },
    { label: "Student work", value: "Testing, docs, UI components" },
    { label: "Client satisfaction", value: "Professional quality" },
    { label: "Key learning", value: "6 months is the right target" },
  ];

  return (
    <section id="proof" className="py-28 md:py-36 px-6 bg-[var(--color-bg-subtle)]">
      <div ref={ref} className="max-w-5xl mx-auto">
        <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">Proof of Concept</p>
        <h2 className={`font-display text-4xl font-semibold mb-4 ${hasAnimated ? "animate-fade-up" : ""}`}>
          We&apos;ve already done it.
        </h2>
        <p className={`text-[var(--color-text-muted)] text-lg mb-12 max-w-2xl ${hasAnimated ? "animate-fade-up" : ""}`}
           style={{ animationDelay: "100ms" }}>
          We validated this model rebuilding the Coerver NW website — a real soccer training
          organization with real users. One developer led, seven students participated,
          project delivered on spec.
        </p>

        <div className={`bg-[var(--color-bg-dark)] rounded-2xl p-8 md:p-12 text-white ${hasAnimated ? "animate-fade-up" : ""}`}
             style={{ animationDelay: "200ms" }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[var(--color-accent)] rounded-lg flex items-center justify-center text-white font-mono text-sm font-medium">
              NW
            </div>
            <div>
              <div className="font-display font-semibold">Coerver NW</div>
              <div className="text-gray-500 text-sm">Soccer training organization &middot; Website rebuild</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {metrics.map(({ label, value }) => (
              <div key={label} className="bg-white/5 border border-[var(--color-border-dark)] rounded-lg p-4">
                <div className="font-mono text-gray-500 text-[11px] uppercase tracking-[0.15em] mb-1">{label}</div>
                <div className="text-white font-medium text-sm">{value}</div>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-[var(--color-accent)] pl-4 text-gray-400 italic text-sm leading-relaxed">
            &ldquo;This case established a repeatable delivery playbook now being standardized
            for future projects. We&apos;re ready to scale with refined processes and realistic timelines.&rdquo;
          </blockquote>
        </div>

        {/* Backed by CodingMind */}
        <div className="mt-10 flex items-start gap-5 p-7 border border-[var(--color-border)] rounded-xl bg-white">
          <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center text-[var(--color-text)] font-mono text-sm font-medium shrink-0">
            CM
          </div>
          <div>
            <div className="font-display font-semibold mb-1">Backed by CodingMind Academy</div>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
              Just Code It Academy is built on the infrastructure of CodingMind Academy — an
              established K-12 programming and AI school in Redmond, WA. Trained teachers,
              proven curriculum, and a direct pipeline of advanced students. We didn&apos;t
              start from scratch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
