import { afterEach, describe, expect, it, vi } from "vitest"
import { getPost, listPosts } from "./posts"

const FIXTURES = "./test/fixtures/posts"

afterEach(() => {
  vi.unstubAllEnvs()
})

describe("listPosts", () => {
  it("returns posts sorted newest first", () => {
    const slugs = listPosts(FIXTURES).map((post) => post.slug)
    expect(slugs).toEqual(["second-post", "hello-world"])
  })

  it("hides playground and __ posts outside development", () => {
    const slugs = listPosts(FIXTURES).map((post) => post.slug)
    expect(slugs).not.toContain("playground")
    expect(slugs).not.toContain("__draft")
  })

  it("shows playground and __ posts in development", () => {
    vi.stubEnv("NODE_ENV", "development")
    const slugs = listPosts(FIXTURES).map((post) => post.slug)
    expect(slugs).toContain("playground")
    expect(slugs).toContain("__draft")
  })

  it("accepts every real post", () => {
    expect(() => listPosts()).not.toThrow()
  })
})

describe("getPost", () => {
  it("parses frontmatter into meta", () => {
    const { meta } = getPost("hello-world", FIXTURES)
    expect(meta).toEqual({
      slug: "hello-world",
      title: "Hello World",
      description: "First fixture post",
      date: "2026-01-02",
    })
  })

  it("strips frontmatter and applies the newline convention", () => {
    const { body } = getPost("hello-world", FIXTURES)
    expect(body).toBe("\nline one  \nline two\n\n<br/>\nafter gap\n")
  })

  it("throws on a post with missing frontmatter fields", () => {
    expect(() => getPost("no-date", "./test/fixtures/invalid")).toThrow(/missing "date"/)
  })
})
