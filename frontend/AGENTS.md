<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Frontend Structure

- `app/layout.tsx` is the global HTML shell and metadata entry point.
- `app/(marketing)/` contains the public landing page and its route; `components/marketing/` holds its reusable sections.
- `app/(auth)/patient-login/` contains the patient login/demo entry screen.
- `app/(portal)/patient/` contains patient dashboard routes for appointments, cases, exercises, documents, messages, profile, and progress.
- `app/(portal)/provider/` contains provider routes for cases, patients, appointments, assessments, documents, exercises, messages, programs, progress, reports, sessions, settings, billing, and detail pages.
- Parenthesized folders are Next.js route groups and do not appear in URLs; `[id]` folders are dynamic routes generated from mock records.
- `components/layout/` contains the shared portal shell, navigation, badges, progress bars, and application UI.
- `data/marketing/` contains public-site content; `data/mock/` contains temporary portal records.
- `lib/` contains shared frontend helpers; `styles/` and `app/globals.css` contain design tokens and global styles.
- `public/assets/` contains browser-served images and brand assets organized by category.
- `next.config.mjs` configures the static export with an empty base path so assets resolve from `/`.

## Frontend Conventions

- Use the `@/*` path alias for shared imports.
- Preserve existing routes when moving files; Next.js route groups use parentheses and do not add URL segments.
- Keep business logic out of presentational components.
- Do not duplicate assets or hard-code asset paths outside `public/assets/`.
- Do not create a component file for trivial markup; split only at meaningful UI boundaries.
