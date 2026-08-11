"use client"

import { AI_ASSIST_TAG, projects, type AiAssist } from "@/lib/projects"
import { cn } from "@/lib/utils"
import { Fragment, useState } from "react"
import { CustomLink } from "./custom-link"

type Filter = AiAssist | "all"

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "all" },
  { value: "preAi", label: AI_ASSIST_TAG.preAi.label },
  { value: "assisted", label: AI_ASSIST_TAG.assisted.label },
  { value: "built", label: AI_ASSIST_TAG.built.label },
]

const countFor = (value: Filter) =>
  value === "all" ? projects.length : projects.filter((p) => p.aiAssist === value).length

export function ProjectList() {
  const [filter, setFilter] = useState<Filter>("all")

  const visible = filter === "all" ? projects : projects.filter((p) => p.aiAssist === filter)

  return (
    <Fragment>
      <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8 text-sm">
        {FILTERS.map(({ value, label }) => {
          const isActive = filter === value
          return (
            <button
              key={value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(value)}
              className={cn(
                "font-light transition-colors hover:text-brand",
                isActive && "text-brand underline underline-offset-8 decoration-brand decoration-2",
              )}
            >
              {label} <span className="text-xs">({countFor(value)})</span>
            </button>
          )
        })}
      </div>
      <section>
        {visible.map((project, i) => (
          <article key={i} className="mb-8">
            <h2 className="font-bold text-xl">
              <CustomLink
                href={project.repoUrl}
                className="underline underline-offset-8 decoration-gray-700 transition-colors hover:text-brand hover:decoration-brand"
              >
                {project.name}
              </CustomLink>
              <span
                className={cn(
                  "ml-3 align-middle text-xs font-light rounded px-1.5 py-0.5",
                  AI_ASSIST_TAG[project.aiAssist].className,
                )}
              >
                {AI_ASSIST_TAG[project.aiAssist].label}
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
