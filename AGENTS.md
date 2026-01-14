# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router source (`app/page.tsx`, `app/layout.tsx`, `app/api/*` route handlers).
- `components/`: Reusable React components (kebab-case files like `shipping-log.tsx`).
- `lib/`: Shared utilities and helpers (e.g. `lib/utils.ts`).
- `public/`: Static assets (images, `llms.txt`).
- Styling: global styles live in `app/globals.css` (Tailwind); avoid duplicating globals elsewhere.

## Build, Test, and Development Commands
Use `pnpm` (lockfile: `pnpm-lock.yaml`).
- Install: `pnpm install`
- Dev server: `pnpm dev` (runs `next dev`)
- Production build: `pnpm build` (runs `next build`)
- Serve build: `pnpm start` (runs `next start`)
- Lint: `pnpm lint` (ESLint; if it’s not set up yet, call it out in the PR)

## Coding Style & Naming Conventions
- TypeScript + React (Next.js). Prefer named exports for components, default export for pages/layouts.
- Indentation: 2 spaces. Keep changes minimal and avoid drive-by reformatting.
- File naming: App Router uses `page.tsx`, `layout.tsx`; components use kebab-case (`agent-footer.tsx`).
- Imports: use path aliases from `tsconfig.json` (e.g. `@/components/status-badge`).

## Testing Guidelines
- No dedicated test suite is configured in this repo yet. Validate changes by running `pnpm dev` and sanity-checking the UI, routes, and build (`pnpm build`).

## Commit & Pull Request Guidelines
- Commit messages follow Conventional Commits (seen in history): `feat: ...`, `fix: ...`, `chore: ...`.
- PRs: include a clear description, screenshots for UI changes, and note any v0.app chat/deploy that produced the change (this repo is synced from v0.app/Vercel).

## Security & Configuration Tips
- Do not commit secrets. Keep local env in `.env.local` (if added) and document required keys in the PR.
