"use client";

import { useInView } from "@/lib/useInView";

export default function Testimonial() {
  const { ref, hasAnimated } = useInView();

  return (
    <section className="py-28 md:py-36 px-6 bg-[var(--color-bg)]">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <div className={`${hasAnimated ? "animate-fade-up" : ""}`}>
          <div className="font-display text-[var(--color-accent)] text-7xl leading-none mb-6 select-none">&ldquo;</div>

          <blockquote className="font-display text-2xl md:text-3xl font-medium leading-snug text-[var(--color-text)] mb-10">
            Working with Just Code It Academy was unlike any vendor relationship we&apos;ve had.
            The cost was a fraction of what agencies quoted us, the team moved faster than we
            expected, and they were genuinely flexible — adapting to our timeline and priorities
            as the project evolved.
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-[var(--color-bg-dark)] rounded-full flex items-center justify-center text-white font-mono text-xs font-medium">
              TR
            </div>
            <div className="text-left">
              <div className="font-mono text-sm font-medium text-[var(--color-text)]">T.R.</div>
              <div className="text-xs text-[var(--color-text-muted)]">Owner, Coerver NW</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
