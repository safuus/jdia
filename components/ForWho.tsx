"use client";

import { useInView } from "@/lib/useInView";

const Check = () => (
  <svg className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function ForWho() {
  const { ref, hasAnimated } = useInView();

  const audiences = [
    {
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-dark)] flex items-center justify-center">
          <div className="w-3 h-3 border-2 border-white rounded-sm" />
        </div>
      ),
      title: "Clients",
      subtitle: "Get quality work done",
      points: [
        "~50% below traditional agency pricing",
        "Websites, MVPs, internal tools, data analysis",
        "AI-augmented development \u2014 faster iterations",
        "Flexible timelines: 1 to 12 months by scope",
        "Talent pipeline: hire the developers you worked with",
      ],
      cta: "Start a Project",
    },
    {
      icon: (
        <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)] flex items-center justify-center">
          <div className="w-3 h-0.5 bg-white rounded-full" />
        </div>
      ),
      title: "Students",
      subtitle: "Ship real things. Build a real career.",
      points: [
        "High school juniors/seniors or college students",
        "Ship real features on live products \u2014 not toy projects",
        "Get paid or go deep \u2014 two tracks, one standard",
        "Learn AI tools professionals actually use, from day one",
        "Graduate with a deployed product, a paycheck, and a real reference",
      ],
      cta: "Apply Now",
    },
    {
      icon: (
        <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-1.5 h-1.5 bg-[var(--color-text)] rounded-sm" />
            <div className="w-1.5 h-1.5 bg-[var(--color-text)] rounded-sm" />
            <div className="w-1.5 h-1.5 bg-[var(--color-text)] rounded-sm" />
            <div className="w-1.5 h-1.5 bg-[var(--color-text)] rounded-sm" />
          </div>
        </div>
      ),
      title: "Enterprise & Incubators",
      subtitle: "Build your talent pipeline",
      points: [
        "Pre-vetted graduates trained in modern AI workflows",
        "Affordable MVP development for portfolio companies",
        "Support Seattle-area AI technical education",
        "Early access to top-performing student talent",
      ],
      cta: "Partner With Us",
    },
  ];

  return (
    <section id="for-who" className="py-28 md:py-36 px-6 bg-[var(--color-bg)]">
      <div ref={ref} className="max-w-5xl mx-auto">
        <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">Who It&apos;s For</p>
        <h2 className={`font-display text-4xl font-semibold mb-16 ${hasAnimated ? "animate-fade-up" : ""}`}>
          Three ways in.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map(({ icon, title, subtitle, points, cta }, i) => (
            <div
              key={title}
              className={`bg-white rounded-xl p-8 border border-[var(--color-border)] flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 ${
                hasAnimated ? `animate-fade-up stagger-${i + 1}` : ""
              }`}
            >
              <div className="mb-5">{icon}</div>
              <h3 className="font-display font-semibold text-xl mb-1">{title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm mb-6">{subtitle}</p>
              <ul className="space-y-3 flex-1 mb-8">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)]">
                    <Check />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="bg-[var(--color-text)] text-white text-sm font-medium px-5 py-3 rounded-lg hover:bg-[var(--color-accent)] transition-colors duration-200 text-center"
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
