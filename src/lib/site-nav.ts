export type Tab = {
  label: string
  href: string
  // A folder (the blog index) gets the disclosure glyph; a single page gets the file glyph.
  folder?: boolean
}

export const TABS: Tab[] = [
  { label: "about", href: "/" },
  { label: "work", href: "/work" },
  { label: "projects", href: "/projects" },
  { label: "stack", href: "/stack" },
  { label: "writing", href: "/blog", folder: true },
]

export function activeTab(pathname: string): Tab | undefined {
  return TABS.find((tab) =>
    tab.href === "/"
      ? pathname === "/"
      : pathname === tab.href || pathname.startsWith(tab.href + "/"),
  )
}

const POST_PATH = /^\/blog\/([^/]+)\/?$/

// What the title bar shows: the open tab, or for a single post, its file name.
export function documentName(pathname: string): string {
  const post = pathname.match(POST_PATH)
  if (post) return `${post[1]}.md`
  return activeTab(pathname)?.label ?? pathname.replace(/^\/|\/$/g, "")
}

// What the status bar reports the open document as: an index page is a folder of
// files, everything else - pages and single posts alike - is Markdown.
export function documentLanguage(pathname: string): "Folder" | "Markdown" {
  const tab = activeTab(pathname)
  const isIndex = tab?.folder === true && pathname.replace(/\/$/, "") === tab.href
  return isIndex ? "Folder" : "Markdown"
}
