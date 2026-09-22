export type AiAssist = "preAi" | "assisted" | "built"

export type Project = {
  name: string
  description: string
  stack: string[]
  repoUrl: string
  liveUrl?: string
  aiAssist: AiAssist
}

// Class strings are written out in full - Tailwind only sees literals, not built-up names.
export const AI_ASSIST_TAG: Record<AiAssist, { label: string; className: string }> = {
  preAi: { label: "pre-AI", className: "border text-tag-pre-ai border-tag-pre-ai-border" },
  assisted: { label: "AI-assisted", className: "tag-ai tag-ai-part" },
  built: { label: "AI-built", className: "tag-ai tag-ai-full" },
}

export const projects: Project[] = [
  {
    name: "shouldi",
    description:
      "A Chrome extension, published as Should I Apply?, that reads the job posting on the current page and scores your resume against it: one encouraging overall match, then a level each for skills, tasks, experience, industry, and education, judged by TypeSafe's Jev model. The resume lives only in Chrome's local storage and is sent only when you press Assess, with your name, emails, phone numbers, and links stripped first. A small Vercel Function holds the API key, enforces per-install and per-IP daily limits in Upstash Redis, and stores none of the text.",
    stack: ["WXT", "React", "TypeScript", "Vercel Functions", "Upstash Redis", "Vitest"],
    repoUrl: "https://github.com/jbethuel/shouldi",
    liveUrl:
      "https://chromewebstore.google.com/detail/should-i-apply/ghpgfojflbhaakbbkjgmlbnnfhfpboej",
    aiAssist: "built",
  },
  {
    name: "squares",
    description:
      "A habit tracker that borrows the shape of the GitHub contribution graph - a year of small squares, filled in one tap at a time, so progress is something you can see at a glance. Mark today or yesterday and the record settles behind you, which means the year you are looking at is one you actually earned. Everything stays on the device: no account, no backend, no analytics.",
    stack: ["Next.js", "TypeScript", "PWA", "Vitest", "Playwright"],
    repoUrl: "https://github.com/jbethuel/squares",
    liveUrl: "https://squares.jbethuel.com",
    aiAssist: "built",
  },
  {
    name: "pnpm-monorepo",
    description:
      "A pnpm workspace scaffold I keep reaching for: a Hono API, a Vite + React web app, and shared TypeScript packages consumed directly as source, so there is no build step sitting between a package and the apps that use it.",
    stack: ["pnpm", "TypeScript", "Hono", "Vite", "React"],
    repoUrl: "https://github.com/jbethuel/pnpm-monorepo",
    aiAssist: "assisted",
  },
  {
    name: "jbethuel.com",
    description:
      "This site. Next.js App Router compiled to a static export, blog posts authored in MDX, Tailwind and shadcn/ui for the front end, shipped to Cloudflare Pages by GitHub Actions on every push to main.",
    stack: ["Next.js", "TypeScript", "Tailwind", "MDX", "Cloudflare Pages"],
    repoUrl: "https://github.com/jbethuel/jbethuel.com",
    liveUrl: "https://jbethuel.com",
    aiAssist: "preAi",
  },
  {
    name: "url-shortener",
    description:
      "A link shortener with a dashboard behind a login. A .NET API over MongoDB handles the links, with scope-based JWT authorization and xUnit tests, and a React + Vite front end talks to it through React Query. Containerised and shipped to Azure by GitHub Actions.",
    stack: ["React", "TypeScript", "Vite", ".NET", "MongoDB", "Docker", "Azure"],
    repoUrl: "https://github.com/jbethuel/url-shortener",
    aiAssist: "preAi",
  },
]
