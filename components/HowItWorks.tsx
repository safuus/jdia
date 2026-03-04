export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">The Model</p>
        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 text-lg mb-4 max-w-2xl">
          Professional developers lead every project. Students learn by doing — alongside real work,
          with real tools, for real clients.
        </p>
        <p className="text-gray-500 text-base mb-16 max-w-2xl">
          Projects run from <strong>1 to 12 months</strong> depending on scope. Student participation
          and structure adapt to fit — there&apos;s no fixed timeline that applies to every engagement.
        </p>

        {/* Two pillars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-950 text-white rounded-xl p-8">
            <div className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">For Clients</div>
            <h3 className="font-bold text-xl mb-4">Professional delivery, guaranteed</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Developers handle the critical path. Student involvement never compromises delivery.
              All code goes through mandatory review. You get what you scoped, on time.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Flexible project timelines: 1–12 months",
                "AI-accelerated development from day one",
                "~50% below traditional agency rates",
                "Senior developer oversight on every commit",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">For Students</div>
            <h3 className="font-bold text-xl mb-4">Learn by building real things</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Students enter a structured learning track alongside each project. Depth of participation
              scales with project length and the student&apos;s progress.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Train on AI tools professionals actually use",
                "Observe, contribute, and grow — in that order",
                "Choose paid internship or supervised learning",
                "Graduate with a deployed product and real references",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Student paths */}
        <h3 className="font-bold text-xl mb-2">Two tracks. One standard: build something real.</h3>
        <p className="text-gray-500 text-sm mb-6">
          Both tracks challenge students with real work. Senior developers and principals
          guard quality — so students can push hard without fear of breaking anything for the client.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="border-2 border-blue-200 bg-blue-50 rounded-xl p-6">
            <div className="font-semibold text-gray-900 mb-1">Paid Professional Track</div>
            <div className="text-xs text-blue-600 font-medium mb-3">You ship. You get paid. You build a career.</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Step into a real development team and own your slice of a live product.
              You&apos;ll make decisions, hit deadlines, and be held to professional standards —
              with experienced developers in your corner. Walk away with a paycheck,
              a portfolio piece, and a professional reference from an actual project.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="font-semibold text-gray-900 mb-1">Immersive Learning Track</div>
            <div className="text-xs text-gray-500 font-medium mb-3">Go deep. Build your foundation. Ship it anyway.</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Embedded alongside a real development team, you&apos;ll tackle challenges
              that no textbook assigns. Build features, break things in a safe environment,
              fix them with mentor guidance, and learn how senior engineers actually think.
              Your learning milestone is a deployed project — not a grade.
            </p>
          </div>
        </div>

        {/* AI-First tools */}
        <div className="bg-gray-950 text-white rounded-xl p-8">
          <h3 className="font-bold text-lg mb-3">AI-First, Not AI-Optional</h3>
          <p className="text-gray-400 leading-relaxed text-sm mb-4">
            GitHub Copilot, Cursor, Claude, ChatGPT — students learn these tools from day one
            because that&apos;s what professional teams use. We don&apos;t teach coding then add AI.
            AI-augmented development is the baseline. Every student graduates knowing how to
            work <em>with</em> AI, not just around it.
          </p>
          <p className="text-blue-300 text-sm font-medium">
            This is what makes our education relevant in 2026 — and what makes our developers
            faster and more affordable than agencies still working the old way.
          </p>
        </div>
      </div>
    </section>
  );
}
