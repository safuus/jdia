"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useActionState } from "react";
import { submitApplication, type FormState } from "@/lib/actions";

const initialState: FormState = { success: false };

export default function ApplyPage() {
  const [state, formAction, isPending] = useActionState(submitApplication, initialState);

  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Nav />

      <section className="pt-40 pb-28 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            Student Application
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight leading-tight mb-4">
            Ready to build something real?
          </h1>
          <p className="text-[var(--color-text-muted)] text-lg mb-12 max-w-xl leading-relaxed">
            Apply to Just Code It Academy. We&apos;ll review your application and get back
            to you within 3-5 business days.
          </p>

          {state.success ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Application submitted!</h3>
              <p className="text-green-700 text-sm">
                We&apos;ll review your application and get back to you within 3-5 business
                days. Check your email for a confirmation.
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-6">
              {state.error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700 text-sm">{state.error}</p>
                  <p className="text-red-500 text-xs mt-1">
                    Or email us directly:{" "}
                    <a href="mailto:max@justcodeit.academy" className="underline">
                      max@justcodeit.academy
                    </a>
                  </p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                    Full name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm bg-white focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm bg-white focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="gradeLevel" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                    Grade level *
                  </label>
                  <select
                    id="gradeLevel"
                    name="gradeLevel"
                    required
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm bg-white focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="hs-junior">High School Junior</option>
                    <option value="hs-senior">High School Senior</option>
                    <option value="college-freshman">College Freshman</option>
                    <option value="college-sophomore">College Sophomore</option>
                    <option value="college-junior">College Junior+</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                    Programming experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm bg-white focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="beginner">Beginner (learning basics)</option>
                    <option value="intermediate">Intermediate (built small projects)</option>
                    <option value="advanced">Advanced (shipped real apps)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                  What do you want to learn or build?
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  rows={3}
                  maxLength={1000}
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm bg-white focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none resize-none"
                  placeholder="Tell us about your interests, goals, or project ideas..."
                />
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                  Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm bg-white focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none"
                >
                  <option value="">Select...</option>
                  <option value="after-school">After school (weekdays)</option>
                  <option value="weekends">Weekends only</option>
                  <option value="summer">Summer (full-time)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-[var(--color-text)] text-white font-semibold py-3 rounded-lg hover:bg-[var(--color-accent)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "Submitting..." : "Submit Application"}
              </button>

              <p className="text-[var(--color-text-muted)] text-xs text-center">
                Questions? Email{" "}
                <a href="mailto:max@justcodeit.academy" className="text-[var(--color-accent)] hover:underline">
                  max@justcodeit.academy
                </a>
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
