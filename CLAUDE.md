# CLAUDE.md — Just Code It Academy Website

## Project
Next.js 15 + Tailwind CSS marketing site for Just Code It Academy (JCIA).
Pre-launch. Deploys to Vercel.

## Commands
- `npm run dev` — local dev server (port 3000)
- `npm run build` — production build
- `npm run lint` — ESLint
- `npx vitest run` — unit tests
- `npx playwright test` — E2E tests

## Testing
- **Unit tests:** Vitest — `__tests__/` directory
- **E2E tests:** Playwright — `e2e/` directory
- When writing new functions, write a corresponding test
- When fixing a bug, write a regression test
- When adding error handling, write a test that triggers the error

## Architecture
- Static site (SSG) — no database, no auth
- Server Actions for form handling (Resend email API)
- MDX blog via @next/mdx
- Vercel Analytics for tracking

## Key Files
- `lib/actions.ts` — Server Actions for contact + application forms
- `components/ContactForm.tsx` — audience-routed contact form
- `components/FAQ.tsx` — accordion FAQ section
- `app/about/page.tsx`, `app/apply/page.tsx`, `app/blog/` — content pages

## Environment Variables
- `RESEND_API_KEY` — Resend API key (server-side only)
- `CONTACT_EMAIL` — email to receive form submissions (default: max@justcodeit.academy)
