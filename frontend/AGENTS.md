<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Frontend Structure

- `app/` contains routes, layouts, and route groups. Keep route files thin and use them as page orchestrators.
- `components/marketing/` contains reusable public-site sections.
- `components/layout/` contains portal layout, navigation, and shared portal UI.
- `data/marketing/` contains marketing content; `data/mock/` contains temporary portal data.
- `public/assets/` contains browser-served assets organized by category.
- `styles/` contains shared design tokens and application styles.

## Frontend Conventions

- Use the `@/*` path alias for shared imports.
- Preserve existing routes when moving files; Next.js route groups use parentheses and do not add URL segments.
- Keep business logic out of presentational components.
- Do not duplicate assets or hard-code asset paths outside `public/assets/`.
- Do not create a component file for trivial markup; split only at meaningful UI boundaries.
