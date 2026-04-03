"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/for-clients", label: "For Clients" },
  { href: "/for-students", label: "For Families" },
  { href: "/for-partners", label: "For Partners" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/apply", label: "Apply" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-semibold text-lg tracking-tight">
          Just Code It{" "}
          <span className="text-[var(--color-accent)]">Academy</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-text-muted)]">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative hover:text-[var(--color-text)] transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[var(--color-text)] after:transition-all after:duration-200 hover:after:w-full"
            >
              {label}
            </a>
          ))}
          <a
            href="/for-clients"
            className="bg-[var(--color-text)] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-accent)] transition-colors duration-200"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-[var(--color-border)] px-6 py-6 flex flex-col gap-5 text-sm font-medium text-[var(--color-text-muted)]">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="hover:text-[var(--color-text)]">
              {label}
            </a>
          ))}
          <a
            href="/for-clients"
            onClick={() => setOpen(false)}
            className="bg-[var(--color-text)] text-white px-5 py-2.5 rounded-lg text-center font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
