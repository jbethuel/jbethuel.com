import { describe, expect, it } from "vitest"
import { activeTab, documentLanguage, documentName } from "./site-nav"

describe("activeTab", () => {
  it("matches the about tab on the root only", () => {
    expect(activeTab("/")?.label).toBe("about")
    expect(activeTab("/unknown")).toBeUndefined()
  })

  it("matches a tab by its own path and anything beneath it", () => {
    expect(activeTab("/projects")?.label).toBe("projects")
    expect(activeTab("/blog/2026-gear")?.label).toBe("writing")
  })

  it("does not match a path that merely shares a prefix", () => {
    expect(activeTab("/workshop")).toBeUndefined()
  })
})

describe("documentName", () => {
  it("names a page after its tab", () => {
    expect(documentName("/")).toBe("about")
    expect(documentName("/stack")).toBe("stack")
  })

  it("names a single post as its Markdown file", () => {
    expect(documentName("/blog/2026-gear")).toBe("2026-gear.md")
  })

  it("falls back to the path for pages without a tab", () => {
    expect(documentName("/privacy/squares")).toBe("privacy/squares")
  })
})

describe("documentLanguage", () => {
  it("reports the blog index as a folder", () => {
    expect(documentLanguage("/blog")).toBe("Folder")
    expect(documentLanguage("/blog/")).toBe("Folder")
  })

  it("reports pages and single posts as Markdown", () => {
    expect(documentLanguage("/")).toBe("Markdown")
    expect(documentLanguage("/projects")).toBe("Markdown")
    expect(documentLanguage("/blog/2026-gear")).toBe("Markdown")
  })
})
