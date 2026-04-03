import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display text-4xl font-semibold mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-2xl font-semibold mb-4 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-xl font-semibold mb-3 mt-6">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-[var(--color-text-muted)]">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-[var(--color-text-muted)]">{children}</ol>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-[var(--color-accent)] hover:underline">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[var(--color-accent)] pl-4 italic text-[var(--color-text-muted)] my-4">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-[var(--color-bg-subtle)] text-sm px-1.5 py-0.5 rounded font-mono">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-[var(--color-bg-dark)] text-gray-100 p-4 rounded-xl overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    ...components,
  };
}
