import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Nav />

      {/* Hero — minimal, routing-focused */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.08] mb-6">
            Just Code It<span className="text-[var(--color-accent)]">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
            An AI-native dev studio + talent accelerator.
            We build software, train developers, and connect them.
          </p>
        </div>
      </section>

      {/* Audience Router — three cards */}
      <section className="pb-28 md:pb-36 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              label: "I Need Software Built",
              body: "AI-augmented development at ~50% below agency rates. Professional developers lead every project. Websites, MVPs, internal tools, AI integration.",
              cta: "For Clients",
              href: "/for-clients",
              icon: (
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-dark)] flex items-center justify-center mb-5">
                  <div className="w-4 h-4 border-2 border-white rounded-sm" />
                </div>
              ),
            },
            {
              label: "My Child Wants Real Skills",
              body: "Real projects with real developers. AI tools from day one. Two tracks: paid internship or immersive learning. They graduate with a deployed product, not a certificate.",
              cta: "For Families",
              href: "/for-students",
              icon: (
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center mb-5">
                  <div className="w-4 h-0.5 bg-white rounded-full" />
                </div>
              ),
            },
            {
              label: "I Want to Partner",
              body: "Pre-vetted graduates trained in modern AI workflows. Affordable MVP development for your portfolio companies. Seattle-area talent pipeline.",
              cta: "For Partners",
              href: "/for-partners",
              icon: (
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center mb-5">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-2 h-2 bg-[var(--color-text)] rounded-sm" />
                    <div className="w-2 h-2 bg-[var(--color-text)] rounded-sm" />
                    <div className="w-2 h-2 bg-[var(--color-text)] rounded-sm" />
                    <div className="w-2 h-2 bg-[var(--color-text)] rounded-sm" />
                  </div>
                </div>
              ),
            },
          ].map(({ label, body, cta, href, icon }) => (
            <a
              key={href}
              href={href}
              className="group bg-white rounded-2xl p-8 md:p-10 border border-[var(--color-border)] flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
            >
              {icon}
              <h2 className="font-display text-xl font-semibold mb-3">{label}</h2>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed flex-1 mb-6">
                {body}
              </p>
              <span className="inline-flex items-center gap-2 text-[var(--color-text)] font-medium text-sm group-hover:text-[var(--color-accent)] transition-colors duration-200">
                {cta}
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Credibility strip */}
        <div className="max-w-5xl mx-auto mt-12 mb-8 text-center">
          <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-wide">
            Built on{" "}
            <a href="https://codingmind.com" className="text-[var(--color-accent)] hover:underline" target="_blank" rel="noopener noreferrer">
              CodingMind Academy
            </a>
            {" "}&middot; Redmond, WA
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
