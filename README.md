## Stack

- Next.js 16 (App Router, static export / SSG)
- React 19, TypeScript
- Tailwind CSS 4, shadcn/ui (`new-york` style, Radix primitives)
- MDX via `next-mdx-remote` — blog posts (`src/_posts`)
- next-themes (dark/light mode), lucide-react (icons)

## Infra

- Hosting: Cloudflare Workers (static assets), serving the static export (`out/`); config in `wrangler.jsonc`
- Images/icons: served from a separate asset host, `assets.jbethuel.com` (see `remotePatterns` in `next.config.ts`)
- Runtime/tooling: Node 24 (`.nvmrc`), pnpm 11 (`packageManager` in `package.json`, config in `pnpm-workspace.yaml`)
- CI/CD: GitHub Actions (see Deploy below)

## Development

- `pnpm install`
- `pnpm dev` — dev server (Turbopack)
- `pnpm build` — static export to `out/`
- `pnpm precheck` — Prettier, oxlint, and typecheck (also runs in CI)
- `pnpm test` — unit tests (Vitest, `*.test.ts`)
- `pnpm test:e2e` — end-to-end tests (Playwright, `e2e/*.e2e.ts`) at desktop and 375px widths, against the static export served by `wrangler dev`; run `pnpm exec playwright install chromium` once first
- `pnpm lint:check` — oxlint
- `pnpm lint:fix` — oxlint with autofix

## Deploy

Pushing a tag builds and deploys via GitHub Actions (`.github/workflows/deploy.yml`) to Cloudflare Workers using `wrangler deploy`. The workflow writes `out/version.json` (`{ version, commit }`) into the build, then polls `https://website.jbethuel.workers.dev/version.json` (the `website` Worker's workers.dev URL) until it reports the tagged commit, failing the run if it isn't live within 5 minutes.

Wrangler is a pinned devDependency rather than installed ad-hoc by `wrangler-action`, since pnpm blocks postinstall scripts by default. Its native build steps (`esbuild`, `workerd`) are allow-listed in `pnpm-workspace.yaml` under `allowBuilds`. If a `pnpm install` ever reports ignored build scripts for a new dependency, add it there rather than running `pnpm approve-builds` locally (CI is non-interactive).
