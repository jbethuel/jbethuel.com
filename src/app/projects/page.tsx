import type { Metadata } from "next"
import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { Fragment } from "react"

export const metadata: Metadata = {
  title: "JBethuel - Projects",
  description: "Side projects and open source work by Joseph Bethuel Dela Cruz.",
}

type AiAssist = "none" | "part" | "full"

type Project = {
  name: string
  description: string
  stack: string[]
  repoUrl: string
  liveUrl?: string
  aiAssist: AiAssist
}

const AI_ASSIST_LABEL: Record<AiAssist, string> = {
  none: "hand-written",
  part: "AI-assisted",
  full: "AI-built",
}

const projects: Project[] = [
  {
    name: "squares",
    description:
      "A habit tracker that borrows the shape of the GitHub contribution graph - a year of small squares, filled in one tap at a time, so progress is something you can see at a glance. Mark today or yesterday and the record settles behind you, which means the year you are looking at is one you actually earned. Everything stays on the device: no account, no backend, no analytics.",
    stack: ["Next.js", "TypeScript", "PWA", "Vitest", "Playwright"],
    repoUrl: "https://github.com/jbethuel/squares",
    liveUrl: "https://squares.jbethuel.com",
    aiAssist: "full",
  },
  {
    name: "pnpm-monorepo",
    description:
      "A pnpm workspace scaffold I keep reaching for: a Hono API, a Vite + React web app, and shared TypeScript packages consumed directly as source, so there is no build step sitting between a package and the apps that use it.",
    stack: ["pnpm", "TypeScript", "Hono", "Vite", "React"],
    repoUrl: "https://github.com/jbethuel/pnpm-monorepo",
    aiAssist: "part",
  },
  {
    name: "jbethuel.com",
    description:
      "This site. Next.js App Router compiled to a static export, blog posts authored in MDX, Tailwind and shadcn/ui for the front end, shipped to Cloudflare Pages by GitHub Actions on every push to main.",
    stack: ["Next.js", "TypeScript", "Tailwind", "MDX", "Cloudflare Pages"],
    repoUrl: "https://github.com/jbethuel/jbethuel.com",
    liveUrl: "https://jbethuel.com",
    aiAssist: "none",
  },
]

export default function ProjectsPage() {
  return (
    <Fragment>
      <Intro title="projects" subTitle="things I build outside of work" />
      <section>
        {projects.map((project, i) => (
          <article key={i} className="mb-8">
            <h2 className="font-bold text-xl">
              <CustomLink
                href={project.repoUrl}
                className="underline underline-offset-8 decoration-gray-700 transition-colors hover:text-brand hover:decoration-brand"
              >
                {project.name}
              </CustomLink>
              <span className="ml-3 align-middle text-xs font-light border border-border rounded px-1.5 py-0.5 text-muted-foreground">
                {AI_ASSIST_LABEL[project.aiAssist]}
              </span>
            </h2>
            <p className="font-light text-sm mt-3 mb-2">{project.stack.join(" · ")}</p>
            <p className="font-medium">{project.description}</p>
            <p className="font-light text-sm mt-2 space-x-2">
              {project.liveUrl ? (
                <Fragment>
                  <CustomLink
                    href={project.liveUrl}
                    className="underline underline-offset-4 decoration-gray-700 transition-colors hover:text-brand hover:decoration-brand"
                  >
                    live
                  </CustomLink>
                  <span>·</span>
                </Fragment>
              ) : null}
              <CustomLink
                href={project.repoUrl}
                className="underline underline-offset-4 decoration-gray-700 transition-colors hover:text-brand hover:decoration-brand"
              >
                source
              </CustomLink>
            </p>
          </article>
        ))}
      </section>
    </Fragment>
  )
}
