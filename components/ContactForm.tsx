"use client";

import { useActionState, useState } from "react";
import { submitContactForm, type FormState } from "@/lib/actions";

const initialState: FormState = { success: false };

const inputClass =
  "w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm bg-white focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] outline-none transition-all duration-200";

const labelClass = "block text-sm font-medium text-[var(--color-text)] mb-1.5";

type ContactFormProps = {
  defaultAudience?: "client" | "student" | "partner";
};

export default function ContactForm({ defaultAudience }: ContactFormProps = {}) {
  const [audience, setAudience] = useState<"client" | "student" | "partner">(defaultAudience || "client");
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="border border-green-200 bg-green-50/50 rounded-xl p-8 text-center">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold text-green-800 mb-2">Message sent!</h3>
        <p className="text-green-700 text-sm">
          We&apos;ll get back to you within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.error && (
        <div className="border border-red-200 bg-red-50/50 rounded-lg p-4">
          <p className="text-red-700 text-sm">{state.error}</p>
          <p className="text-red-500 text-xs mt-1">
            Or email us directly:{" "}
            <a href="mailto:wa@codingmind.com" className="underline">
              wa@codingmind.com
            </a>
          </p>
        </div>
      )}

      {/* Audience selector — hidden when defaultAudience is set */}
      {!defaultAudience && (
        <div>
          <label className={labelClass}>I&apos;m a...</label>
          <div className="grid grid-cols-3 gap-2">
            {(
              [
                { value: "client", label: "Client" },
                { value: "student", label: "Student" },
                { value: "partner", label: "Partner" },
              ] as const
            ).map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setAudience(value)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  audience === value
                    ? "bg-[var(--color-text)] text-white"
                    : "bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)] hover:bg-[var(--color-border)] border border-[var(--color-border)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
      <input type="hidden" name="audience" value={audience} />

      {/* Student redirect */}
      {audience === "student" && (
        <div className="border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 rounded-lg p-4">
          <p className="text-[var(--color-text)] text-sm">
            Students — apply through our dedicated application page for a better experience.
          </p>
          <a
            href="/apply"
            className="inline-flex items-center gap-1.5 mt-2 bg-[var(--color-text)] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[var(--color-accent)] transition-colors duration-200"
          >
            Go to Application
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      )}

      {/* Common fields */}
      {audience !== "student" && (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className={labelClass}>Name *</label>
              <input type="text" id="name" name="name" required className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email *</label>
              <input type="email" id="email" name="email" required className={inputClass} placeholder="you@example.com" />
            </div>
          </div>

          {/* Client-specific fields */}
          {audience === "client" && (
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="projectType" className={labelClass}>Project type</label>
                <select id="projectType" name="projectType" className={inputClass}>
                  <option value="">Select...</option>
                  <option value="website">Website / Web App</option>
                  <option value="mvp">MVP for Startup</option>
                  <option value="internal">Internal Tool</option>
                  <option value="ai">AI Integration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className={labelClass}>Timeline</label>
                <select id="timeline" name="timeline" className={inputClass}>
                  <option value="">Select...</option>
                  <option value="1-2months">1-2 months</option>
                  <option value="3-4months">3-4 months</option>
                  <option value="5-6months">5-6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          )}

          {/* Partner-specific fields */}
          {audience === "partner" && (
            <div>
              <label htmlFor="orgName" className={labelClass}>Organization name</label>
              <input type="text" id="orgName" name="orgName" className={inputClass} placeholder="Your organization" />
            </div>
          )}

          <div>
            <label htmlFor="message" className={labelClass}>Message *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              maxLength={2000}
              className={`${inputClass} resize-none`}
              placeholder={
                audience === "client"
                  ? "Tell us about your project..."
                  : "Tell us about your organization and how you\u2019d like to partner..."
              }
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-[var(--color-text)] text-white font-medium py-3.5 rounded-lg hover:bg-[var(--color-accent)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Sending..." : "Send Message"}
          </button>

          <p className="text-[var(--color-text-muted)] text-xs text-center">
            Or email us directly at{" "}
            <a href="mailto:wa@codingmind.com" className="text-[var(--color-accent)] hover:underline">
              wa@codingmind.com
            </a>
          </p>
        </>
      )}
    </form>
  );
}
