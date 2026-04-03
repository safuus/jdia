"use client";

import { useState } from "react";
import { useInView } from "@/lib/useInView";
import { allFaqs, type FAQItem } from "@/lib/faq-data";

type FAQProps = {
  items?: FAQItem[];
  heading?: string;
};

export default function FAQ({ items, heading = "Common questions." }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, hasAnimated } = useInView();
  const faqs = items || allFaqs;

  return (
    <section className="py-28 md:py-36 px-6 bg-[var(--color-bg-subtle)]">
      <div ref={ref} className="max-w-3xl mx-auto">
        <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">FAQ</p>
        <h2 className={`font-display text-4xl font-semibold mb-12 ${hasAnimated ? "animate-fade-up" : ""}`}>
          {heading}
        </h2>

        <div className="space-y-2">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={question}
              className={`border border-[var(--color-border)] rounded-xl overflow-hidden bg-white ${
                hasAnimated ? "animate-fade-up" : ""
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-sm text-[var(--color-text)]">{question}</span>
                <svg
                  className={`w-4 h-4 text-[var(--color-text-muted)] shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
