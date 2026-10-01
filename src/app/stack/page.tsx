import type { Metadata } from "next"
import { ChipList, PageHeading } from "@/components/markdown"
import { Fragment } from "react"

export const metadata: Metadata = {
  title: "JBethuel - Stack",
  description: "The tools Joseph Bethuel Dela Cruz uses day to day.",
}

const stack: { group: string; items: string[] }[] = [
  { group: "languages", items: ["TypeScript", "C#"] },
  { group: "frontend", items: ["React", "React Native", "Electron", "Next.js"] },
  { group: "backend", items: ["Node", ".NET", "Firebase", "MongoDB"] },
  { group: "testing", items: ["TDD", "Playwright"] },
  { group: "ai tooling", items: ["Claude Code", "MCP"] },
]

export default function StackPage() {
  return (
    <Fragment>
      <PageHeading title="stack" subTitle="Tools I use day to day." />
      <section className="grid grid-cols-[110px_minmax(0,1fr)] items-start gap-x-4 gap-y-2.5">
        {stack.map(({ group, items }) => (
          <Fragment key={group}>
            <span className="text-muted-foreground">{group}</span>
            <ChipList items={items} />
          </Fragment>
        ))}
      </section>
    </Fragment>
  )
}
