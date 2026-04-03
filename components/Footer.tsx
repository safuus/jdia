export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text-muted)]">
        <div>
          <span className="font-display font-semibold text-[var(--color-text)]">Just Code It Academy</span>
          {" "}&middot; Redmond, WA &middot; Affiliated with{" "}
          <a href="https://codingmind.com" className="text-[var(--color-accent)] hover:underline" target="_blank" rel="noopener noreferrer">
            CodingMind Academy
          </a>
        </div>
        <div className="flex gap-6 font-mono text-xs">
          <a href="mailto:wa@codingmind.com" className="hover:text-[var(--color-text)] transition-colors duration-200">Contact</a>
          <a href="https://ygn.ngo" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)] transition-colors duration-200">YGN Partner</a>
        </div>
      </div>
    </footer>
  );
}
