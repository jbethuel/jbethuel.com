import { describe, expect, it } from "vitest"
import { AI_ASSIST_TAG, filterProjects, projects, type Project } from "./projects"

const project = (id: string, aiAssist: Project["aiAssist"]): Project => ({
  id,
  name: id,
  blurb: "",
  description: "",
  stack: [],
  repoUrl: `https://github.com/jbethuel/${id}`,
  aiAssist,
})

const sample = [project("a", "preAi"), project("b", "built"), project("c", "built")]

describe("filterProjects", () => {
  it("returns every project for 'all'", () => {
    expect(filterProjects(sample, "all")).toEqual(sample)
  })

  it("keeps only projects with the chosen AI assist", () => {
    expect(filterProjects(sample, "built").map((p) => p.id)).toEqual(["b", "c"])
    expect(filterProjects(sample, "assisted")).toEqual([])
  })
})

describe("projects", () => {
  it("gives every project a unique id, since ids are page anchors", () => {
    const ids = projects.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it("tags every project with a known AI assist", () => {
    for (const p of projects) expect(AI_ASSIST_TAG[p.aiAssist]).toBeDefined()
  })
})
