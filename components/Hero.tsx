export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Redmond, WA · Now Enrolling
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          We&apos;re Not Building a School.
          <br />
          <span className="text-blue-600">We&apos;re Building a New Category.</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
          Real projects. Real skills. Real AI. Just Code It Academy is an AI-native dev studio
          combined with a talent accelerator — students learn by shipping actual products
          for real clients, not classroom simulations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors text-center"
          >
            Enroll a Student
          </a>
          <a
            href="#contact"
            className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-center"
          >
            Hire for a Project
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-100 pt-10 max-w-2xl">
          {[
            { stat: "AI-First", label: "from day one, on every project" },
            { stat: "~50%", label: "less than traditional agency rates" },
            { stat: "Real", label: "clients, real users, real impact" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold text-gray-900">{stat}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
