import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

// The pages read as rendered Markdown: headings keep their `#` markers, in the
// brand colour, and every section sits under a hairline like a level-two heading.

export function Marker(props: { level: 1 | 2 }) {
  return <span className="text-brand">{"#".repeat(props.level)} </span>
}

export function PageHeading(props: { title: ReactNode; subTitle?: ReactNode }) {
  const { title, subTitle } = props

  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold leading-[1.3] [overflow-wrap:anywhere]">
        <Marker level={1} />
        {title}
      </h1>
      {subTitle ? <p className="text-muted-foreground">{subTitle}</p> : null}
    </section>
  )
}

export function SectionHeading(props: { children: ReactNode; aside?: ReactNode }) {
  const { children, aside } = props

  return (
    <h2 className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b pb-2 text-lg font-bold">
      <span className="min-w-0 [overflow-wrap:anywhere]">
        <Marker level={2} />
        {children}
      </span>
      {aside}
    </h2>
  )
}

export function Section(props: { id?: string; className?: string; children: ReactNode }) {
  const { id, className, children } = props

  return (
    <section id={id} className={cn("flex scroll-mt-28 flex-col gap-3", className)}>
      {children}
    </section>
  )
}

export function Chip(props: { children: ReactNode }) {
  return <code className="rounded-md bg-muted px-2">{props.children}</code>
}

export function ChipList(props: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {props.items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </div>
  )
}
