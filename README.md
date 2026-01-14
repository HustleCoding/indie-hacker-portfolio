# Indie Hacker Portfolio (Next.js)

A simple, single-page portfolio built with Next.js App Router + Tailwind CSS.

## Quickstart
Prereqs: Node.js (latest LTS recommended) + `pnpm`.

```bash
pnpm install
pnpm dev
```

Other useful commands:
- `pnpm build`: production build (`next build`)
- `pnpm start`: serve the production build (`next start`)

## Make It Your Own
Most edits are simple find/replace in a few files:
- Name, bio, “Technical Toolkit”, and GitHub username: `app/page.tsx`
- Shipping/projects list: `components/shipping-log.tsx`
- Footer links (GitHub/X/Email) and the “Copy for AI” button: `components/agent-footer.tsx` and `public/llms.txt`
- Status pill text: `components/status-badge.tsx`
- Social preview + favicon/OG image: `app/layout.tsx` and assets in `public/` (e.g. replace `public/florin-profile.png`)
- Analytics: `app/layout.tsx` includes `@vercel/analytics` (remove if you don’t use Vercel Analytics)

## GitHub Activity (Required Token)
The GitHub activity chart uses the GitHub GraphQL API via `app/api/github/route.ts`, which requires a token.

1. Create a GitHub Personal Access Token (classic) with `read:user`.
2. Copy `.env.example` to `.env.local` and set `GITHUB_TOKEN`:

```bash
# .env.local (do not commit)
GITHUB_TOKEN=ghp_your_token_here
```

For Vercel, add `GITHUB_TOKEN` in your project’s Environment Variables.

Don’t want this feature? Remove the “GitHub Activity” section from `app/page.tsx`.

## Notes
- This repo was originally generated/synced via v0.app; you can continue using it, or just edit code directly.
- See `AGENTS.md` for contributor guidelines and project conventions.
