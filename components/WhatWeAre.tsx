export default function WhatWeAre() {
  return (
    <section className="py-24 px-6 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-6">What We Are</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
          An AI-native dev studio <br className="hidden md:block" />
          + talent accelerator.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
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
              body: "No credential-first, no textbook-first. If you haven't shipped something real, you haven't graduated.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="border border-gray-800 rounded-xl p-6">
              <div className="text-red-400 font-semibold mb-2">{title}</div>
              <p className="text-gray-400 leading-relaxed text-sm">{body}</p>
            </div>
          ))}
        </div>

        {/* AI-First efficiency callout */}
        <div className="mt-12 p-8 border border-blue-900 bg-blue-950 rounded-xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Why our rates beat traditional consultancies</h3>
              <p className="text-blue-200 leading-relaxed">
                Every developer on our team works AI-first — GitHub Copilot, Cursor, Claude — from the first line of code.
                AI-augmented teams ship faster, catch issues earlier, and iterate in hours instead of days.
                That efficiency is real, and we pass it directly to clients — at roughly half the cost of
                a traditional agency, without compromising on quality. You get senior developer judgment
                with AI-accelerated throughput.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-6 border border-gray-800 rounded-xl">
          <p className="text-gray-400 leading-relaxed">
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
