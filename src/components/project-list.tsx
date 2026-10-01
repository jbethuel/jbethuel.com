"use client"

import { AI_ASSIST_TAG, filterProjects, projects, type ProjectFilter } from "@/lib/projects"
import { cn } from "@/lib/utils"
import { Fragment, useState } from "react"
import { AiAssistTag } from "./ai-assist-tag"
import { CustomLink } from "./custom-link"
import { PageHeading, Section, SectionHeading } from "./markdown"

const FILTERS: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "all" },
  { value: "preAi", label: AI_ASSIST_TAG.preAi.label },
  { value: "assisted", label: AI_ASSIST_TAG.assisted.label },
  { value: "built", label: AI_ASSIST_TAG.built.label },
]

const countFor = (value: ProjectFilter) => filterProjects(projects, value).length

const LINK = "text-brand-700 underline underline-offset-4"

export function ProjectList() {
  const [filter, setFilter] = useState<ProjectFilter>("all")

  const visible = filterProjects(projects, filter)

  return (
    <Fragment>
      <div className="flex flex-col gap-3">
        <PageHeading title="projects" subTitle="things I build outside of work" />
        <div className="mt-1 flex flex-wrap gap-2">
          {FILTERS.map(({ value, label }) => {
            const isActive = filter === value
            return (
              <button
                key={value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFilter(value)}
                className={cn(
                  "cursor-pointer rounded-md border px-3 py-1 leading-normal transition-colors",
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "hover:border-foreground",
                )}
              >
                {label} ({countFor(value)})
              </button>
            )
          })}
        </div>
      </div>
      {/* The last project is stretched to fill the screen below its scroll margin
          (112px), the status bar (26px), and main's bottom padding (56px), so a
          `/projects#id` link lands with it at the top like every other project
          rather than wherever the page happens to run out. */}
      {visible.map((project) => (
        <Section
          key={project.id}
          id={project.id}
          className="gap-2.5 last:min-h-[calc(100dvh-194px)]"
        >
          <SectionHeading aside={<AiAssistTag value={project.aiAssist} />}>
            <CustomLink href={project.repoUrl} className="underline-offset-4 hover:underline">
              {project.name}
            </CustomLink>
          </SectionHeading>
          <p className="text-muted-foreground">{project.stack.join(" · ")}</p>
          <p className="max-w-[680px] text-pretty">{project.description}</p>
          <div className="flex gap-4">
            {project.liveUrl ? (
              <CustomLink href={project.liveUrl} className={LINK}>
                live ↗
              </CustomLink>
            ) : null}
            <CustomLink href={project.repoUrl} className={LINK}>
              source ↗
            </CustomLink>
          </div>
        </Section>
      ))}
    </Fragment>
  )
}
