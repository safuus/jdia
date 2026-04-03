"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a CSS class string.
 * Before intersection: content is visible (no opacity-0 gating).
 * After intersection: adds animate-fade-up for a smooth entrance.
 * The animation is progressive enhancement — content is NEVER hidden.
 */
export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, hasAnimated };
}
