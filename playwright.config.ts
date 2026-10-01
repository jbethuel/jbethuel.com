import { defineConfig, devices } from "@playwright/test"

const PORT = 8788

// End-to-end specs are named `*.e2e.ts` so that Vitest's default `*.test.ts` /
// `*.spec.ts` glob never picks them up.
export default defineConfig({
  testDir: "./e2e",
  testMatch: "**/*.e2e.ts",
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "on-first-retry",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    // The Mobile budget: 375px is the narrowest viewport every page must fit.
    {
      name: "mobile",
      use: { ...devices["Desktop Chrome"], viewport: { width: 375, height: 812 } },
    },
  ],
  // The specs run against the static export served the way production serves it -
  // Cloudflare Pages, locally - rather than against `next dev`, which only one
  // process per checkout may run and which renders pages that never ship.
  webServer: {
    command: `pnpm build && pnpm exec wrangler pages dev out --port ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
})
