"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const animFrameRef = useRef<number>(0);
  const mousePos = useRef({ x: 0, y: 0 });
  const orbPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    if (!isHovering) setIsHovering(true);
  }, [isMobile, isHovering]);

  // Smooth lerp animation — orb is faster, trail is slower
  useEffect(() => {
    if (isMobile) return;

    const animate = () => {
      // Orb: responsive follow
      orbPos.current.x += (mousePos.current.x - orbPos.current.x) * 0.12;
      orbPos.current.y += (mousePos.current.y - orbPos.current.y) * 0.12;
      // Trail: lazy follow
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.04;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.04;

      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${orbPos.current.x - 40}px, ${orbPos.current.y - 40}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x - 120}px, ${trailPos.current.y - 120}px)`;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isMobile]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
      className="relative pt-40 pb-32 px-6 bg-[var(--color-bg)] overflow-hidden"
    >
      {/* Ambient grid — subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Trail glow — large, lazy, atmospheric */}
      {!isMobile && (
        <div
          ref={trailRef}
          className="absolute w-[240px] h-[240px] rounded-full pointer-events-none z-0 transition-opacity duration-700"
          style={{
            background: "radial-gradient(circle, rgba(194,65,12,0.08) 0%, rgba(194,65,12,0.02) 50%, transparent 70%)",
            opacity: isHovering ? 1 : 0,
          }}
        />
      )}

      {/* Floating orb — solid, visible, follows cursor */}
      {!isMobile && (
        <div
          ref={orbRef}
          className="absolute w-[80px] h-[80px] rounded-full pointer-events-none z-[1] transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at 35% 35%, rgba(194,65,12,0.55), rgba(194,65,12,0.25) 50%, rgba(194,65,12,0.08) 70%, transparent 85%)",
            boxShadow: "0 0 40px rgba(194,65,12,0.15), 0 0 80px rgba(194,65,12,0.05)",
            opacity: isHovering ? 1 : 0,
          }}
        />
      )}

      {/* Static decorative orb — always visible on desktop, gives depth even before hover */}
      {!isMobile && (
        <div className="absolute top-32 right-[15%] w-[200px] h-[200px] rounded-full pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle at 40% 40%, rgba(194,65,12,0.12), rgba(194,65,12,0.04) 50%, transparent 70%)",
          }}
        />
      )}

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="animate-fade-up inline-flex items-center gap-2 text-[var(--color-text-muted)] text-sm font-mono px-3 py-1.5 border border-[var(--color-border)] rounded-lg mb-10">
          <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse" />
          Redmond, WA &middot; Now Enrolling
        </div>

        <h1
          className="animate-fade-up font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.08] mb-8"
          style={{ animationDelay: "100ms" }}
        >
          We&apos;re Not Building a School.
          <br />
          <span className="relative inline-block">
            We&apos;re Building a New Category.
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 400 8"
              fill="none"
              preserveAspectRatio="none"
              style={{ height: "6px" }}
            >
              <path
                d="M0 4 C80 0, 120 8, 200 4 C280 0, 320 8, 400 4"
                stroke="var(--color-accent)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.7"
              />
            </svg>
          </span>
        </h1>

        <p
          className="animate-fade-up text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mb-12 leading-relaxed"
          style={{ animationDelay: "200ms" }}
        >
          Real projects. Real skills. Real AI. Just Code It Academy is an AI-native dev studio
          combined with a talent accelerator — students learn by shipping actual products
          for real clients, not classroom simulations.
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row items-start gap-4"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#contact"
            className="group bg-[var(--color-text)] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[var(--color-accent)] transition-all duration-200 text-center hover:shadow-lg hover:shadow-[var(--color-accent)]/10"
          >
            Start a Project
          </a>
          <a
            href="/apply"
            className="group text-[var(--color-text-muted)] px-2 py-4 font-medium text-base hover:text-[var(--color-text)] transition-colors duration-200 flex items-center gap-2"
          >
            Enroll a Student
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div
          className="animate-fade-up mt-20 grid grid-cols-3 gap-8 border-t border-[var(--color-border)] pt-10 max-w-xl"
          style={{ animationDelay: "450ms" }}
        >
          {[
            { stat: "AI-First", label: "from day one, on every project" },
            { stat: "~50%", label: "less than traditional agency rates" },
            { stat: "Real", label: "clients, real users, real impact" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="font-mono text-xl font-medium text-[var(--color-text)]">{stat}</div>
              <div className="text-xs text-[var(--color-text-muted)] mt-1.5 leading-relaxed">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
