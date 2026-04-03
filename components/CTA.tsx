import ContactForm from "@/components/ContactForm";

type CTAProps = {
  defaultAudience?: "client" | "student" | "partner";
  headline?: string;
  subtitle?: string;
};

export default function CTA({
  defaultAudience,
  headline = "Let\u2019s build something real.",
  subtitle = "Whether you need software built, want to train your next developer, or are looking for a talent pipeline \u2014 we\u2019d love to hear from you.",
}: CTAProps) {
  return (
    <section id="contact" className="py-28 md:py-36 px-6 bg-[var(--color-bg)]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            {headline}
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            {subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 border border-[var(--color-border)]">
          <ContactForm defaultAudience={defaultAudience} />
        </div>

        <p className="text-[var(--color-text-muted)] text-sm text-center mt-6">
          Redmond, WA &middot;{" "}
          <a href="mailto:wa@codingmind.com" className="text-[var(--color-accent)] hover:underline">
            wa@codingmind.com
          </a>
        </p>
      </div>
    </section>
  );
}
