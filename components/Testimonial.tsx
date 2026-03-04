export default function Testimonial() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-12">What Clients Say</p>

        <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 relative">
          {/* Quote mark */}
          <div className="absolute top-8 left-10 text-6xl text-blue-100 font-serif leading-none select-none">&ldquo;</div>

          <blockquote className="relative z-10">
            <p className="text-gray-800 text-xl leading-relaxed font-medium mb-8">
              Working with Just Code It Academy was unlike any vendor relationship we&apos;ve had.
              The cost was a fraction of what agencies quoted us, the team moved faster than we
              expected, and they were genuinely flexible — adapting to our timeline and priorities
              as the project evolved. Every concern we raised was addressed immediately.
              We felt taken care of from start to finish.
            </p>

            <footer className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                TR
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">T.R.</div>
                <div className="text-gray-500 text-sm">Owner, Coerver NW</div>
              </div>
            </footer>
          </blockquote>
        </div>

        <p className="text-gray-400 text-xs mt-6 italic">
          Coerver NW is a premier soccer training organization serving the Greater Seattle area.
        </p>
      </div>
    </section>
  );
}
