## Stack

- Next.js 16 (App Router, static export / SSG)
- React 19, TypeScript
- Tailwind CSS 4, shadcn/ui (`new-york` style, Radix primitives)
- MDX via `next-mdx-remote` — blog posts (`src/_posts`)
- next-themes (dark/light mode), lucide-react (icons)

## Infra

- Hosting: Cloudflare Pages, serving the static export (`out/`)
- Images/icons: served from a separate asset host, `assets.jbethuel.com` (see `remotePatterns` in `next.config.ts`)
- Runtime/tooling: Node 24 (`.nvmrc`), pnpm 11 (`packageManager` in `package.json`, config in `pnpm-workspace.yaml`)
- CI/CD: GitHub Actions (see Deploy below)

## Development

- `pnpm install`
- `pnpm dev` — dev server (Turbopack)
- `pnpm build` — static export to `out/`
- `pnpm precheck` — Prettier check (also runs in CI)
- `pnpm lint:check` — ESLint

## Deploy

Pushes to `main` build and deploy via GitHub Actions (`.github/workflows/actions.yml`) to Cloudflare Pages using Wrangler.

Wrangler is a pinned devDependency rather than installed ad-hoc by `wrangler-action`, since pnpm blocks postinstall scripts by default. Its native build steps (`esbuild`, `workerd`) are allow-listed in `pnpm-workspace.yaml` under `allowBuilds`. If a `pnpm install` ever reports ignored build scripts for a new dependency, add it there rather than running `pnpm approve-builds` locally (CI is non-interactive).
