"use client";

import { useInView } from "@/lib/useInView";

export default function WhatWeAre() {
  const { ref, hasAnimated } = useInView();

  return (
    <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-dark)] text-white">
      <div ref={ref} className="max-w-5xl mx-auto">
        <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-6">
          What We Are
        </p>
        <h2 className={`font-display text-4xl md:text-5xl font-semibold leading-tight mb-14 ${hasAnimated ? "animate-fade-up" : ""}`}>
          An AI-native dev studio <br className="hidden md:block" />
          + talent accelerator.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Not a bootcamp",
              body: "No simulated projects. No fake clients. Every line of code ships to a real product with real users.",
            },
            {
              title: "Not a charity",
              body: "Financially self-sustaining. Clients pay for quality work. Students pay for professional training. The economics work.",
            },
            {
              title: "Not a school",
              body: "No credential-first, no textbook-first. If you haven\u2019t shipped something real, you haven\u2019t graduated.",
            },
          ].map(({ title, body }, i) => (
            <div
              key={title}
              className={`border border-[var(--color-border-dark)] rounded-xl p-7 hover:border-[var(--color-accent)]/30 transition-colors duration-300 ${
                hasAnimated ? `animate-fade-up stagger-${i + 1}` : ""
              }`}
            >
              <div className="text-[var(--color-accent)] font-display font-semibold mb-2">{title}</div>
              <p className="text-gray-400 leading-relaxed text-sm">{body}</p>
            </div>
          ))}
        </div>

        {/* AI-First efficiency callout */}
        <div className={`mt-12 p-8 rounded-xl border border-[var(--color-border-dark)] bg-gradient-to-r from-[var(--color-bg-dark)] to-[#151820] ${hasAnimated ? "animate-fade-up" : ""}`}
             style={{ animationDelay: "400ms" }}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[var(--color-accent)] rounded-lg flex items-center justify-center shrink-0 mt-1">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-display font-semibold text-lg mb-2">
                Why our rates beat traditional consultancies
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Every developer on our team works AI-first — GitHub Copilot, Cursor, Claude — from the first line of code.
                AI-augmented teams ship faster, catch issues earlier, and iterate in hours instead of days.
                That efficiency is real, and we pass it directly to clients — at roughly half the cost of
                a traditional agency, without compromising on quality. You get senior developer judgment
                with AI-accelerated throughput.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-7 border border-[var(--color-border-dark)] rounded-xl">
          <p className="text-gray-400 leading-relaxed text-sm">
            Traditional agencies still bill for hours spent fighting their own tooling. We don&apos;t.
            Our developers use the latest AI tools as a force multiplier — focusing human expertise
            on what AI can&apos;t replicate: system architecture, nuanced client requirements, and
            creative problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}
