import { expect, test, type Page } from "@playwright/test"

const PAGES = ["/", "/work", "/projects", "/stack", "/blog", "/blog/2026-gear", "/privacy/squares"]

const tabs = (page: Page) => page.getByRole("navigation", { name: "Pages" })
const statusBar = (page: Page) => page.getByRole("contentinfo")

// Where the sticky Header ends - anything scrolled to must land below it.
const headerBottom = (page: Page) =>
  tabs(page).evaluate((nav) => nav.getBoundingClientRect().bottom)

const topOf = (page: Page, id: string) =>
  page.locator(`#${id}`).evaluate((el) => el.getBoundingClientRect().top)

test.describe("navigation", () => {
  test("the tabs move between pages and mark the open one", async ({ page }) => {
    await page.goto("/")
    await expect(tabs(page).getByRole("link", { name: "about" })).toHaveAttribute(
      "aria-current",
      "page",
    )

    await tabs(page).getByRole("link", { name: "work" }).click()
    await expect(page).toHaveURL("/work")
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("# work")
    await expect(tabs(page).getByRole("link", { name: "work" })).toHaveAttribute(
      "aria-current",
      "page",
    )
    await expect(tabs(page).getByRole("link", { name: "about" })).not.toHaveAttribute(
      "aria-current",
    )
  })

  test("the status bar reports the blog index as a folder and posts as Markdown", async ({
    page,
  }) => {
    await page.goto("/blog")
    await expect(statusBar(page)).toContainText("Folder")

    await page.getByRole("link", { name: /2026-gear\.md/ }).click()
    await expect(page).toHaveURL("/blog/2026-gear")
    await expect(statusBar(page)).toContainText("Markdown")
  })
})

test.describe("projects", () => {
  for (const id of ["squares", "url-shortener"]) {
    test(`a project on the about page opens /projects scrolled to ${id}`, async ({ page }) => {
      await page.goto("/")
      await page.locator(`a[href="/projects#${id}"]`).click()
      await expect(page).toHaveURL(`/projects#${id}`)

      // Every project, the last included, lands just below the Header rather than
      // wherever the page happens to run out.
      await expect
        .poll(async () => (await topOf(page, id)) - (await headerBottom(page)))
        .toBeGreaterThanOrEqual(0)
      expect((await topOf(page, id)) - (await headerBottom(page))).toBeLessThan(60)
    })
  }

  test("the filters narrow the list to one AI assist", async ({ page }) => {
    await page.goto("/projects")
    const projectHeadings = page.getByRole("heading", { level: 2 })
    const all = await projectHeadings.count()

    await page.getByRole("button", { name: /^AI-built/ }).click()
    await expect(page.getByRole("button", { name: /^AI-built/ })).toHaveAttribute(
      "aria-pressed",
      "true",
    )
    const built = await projectHeadings.count()
    expect(built).toBeGreaterThan(0)
    expect(built).toBeLessThan(all)
    await expect(projectHeadings).toContainText(Array(built).fill("AI-built"))
  })
})

test.describe("theme", () => {
  test("the Theme switch and the status bar both change the theme", async ({ page }) => {
    await page.goto("/")
    const html = page.locator("html")

    await page.getByRole("button", { name: "Dark theme", exact: true }).click()
    await expect(html).toHaveClass(/\bdark\b/)
    await expect(page.getByRole("button", { name: "Dark theme", exact: true })).toHaveAttribute(
      "aria-pressed",
      "true",
    )

    await statusBar(page).getByRole("button", { name: "Switch to light theme" }).click()
    await expect(html).not.toHaveClass(/\bdark\b/)
    await expect(page.getByRole("button", { name: "Light theme", exact: true })).toHaveAttribute(
      "aria-pressed",
      "true",
    )
  })
})

test.describe("layout", () => {
  for (const path of PAGES) {
    test(`${path} never scrolls sideways`, async ({ page }) => {
      await page.goto(path)
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      )
      expect(overflow).toBe(0)
    })
  }
})

test.describe("icons", () => {
  test("every page links the favicons, touch icon, and manifest, and they all load", async ({
    page,
    request,
  }) => {
    await page.goto("/")
    const hrefs = await page
      .locator('link[rel="icon"], link[rel="apple-touch-icon"], link[rel="manifest"]')
      .evaluateAll((links) => links.map((link) => (link as HTMLLinkElement).href))
    expect(hrefs).toHaveLength(4)

    const urls = [...hrefs, "/icon-512.png"]
    const responses = await Promise.all(urls.map((url) => request.get(url)))
    expect(responses.map((response) => response.ok())).toEqual(urls.map(() => true))
  })
})
