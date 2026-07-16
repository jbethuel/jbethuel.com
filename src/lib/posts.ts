import fs from "fs"
import path from "path"

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
}

const POSTS_DIR = "./src/_posts"

const isDevelopment = () => process.env.NODE_ENV === "development"

function parseFrontmatter(raw: string, slug: string): PostMeta {
  const match = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!match) {
    throw new Error(`post "${slug}" has no frontmatter block`)
  }

  const fields: Record<string, string> = {}
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":")
    if (separator === -1) continue
    const key = line.slice(0, separator).trim()
    fields[key] = line
      .slice(separator + 1)
      .trim()
      .replace(/^['"]|['"]$/g, "")
  }

  const { title, description, date } = fields
  for (const [key, value] of Object.entries({ title, description, date })) {
    if (!value) {
      throw new Error(`post "${slug}" is missing "${key}" in its frontmatter`)
    }
  }
  if (Number.isNaN(Date.parse(date))) {
    throw new Error(`post "${slug}" has an invalid date: "${date}"`)
  }

  return { slug, title, description, date }
}

// newline convention: a single newline becomes a hard break, runs of 3+
// newlines become extra vertical space
function applyNewlineConvention(raw: string) {
  return raw
    .replace(/---[\s\S]*?---/, "")
    .replace(/([^\n])\n([^\n])/g, "$1  \n$2")
    .replace(/\n{3,}/g, (match) => "\n\n" + "<br/>\n".repeat(match.length - 2))
}

export function listPosts(dir: string = POSTS_DIR): PostMeta[] {
  let files = fs.readdirSync(dir).filter((file) => path.extname(file).toLowerCase() === ".mdx")

  // playground.mdx and __(xx).mdx are dev-only posts
  if (!isDevelopment()) {
    files = files.filter((file) => !file.includes("playground") && !file.startsWith("__"))
  }

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "")
      return parseFrontmatter(fs.readFileSync(path.join(dir, file), "utf8"), slug)
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string, dir: string = POSTS_DIR) {
  const raw = fs.readFileSync(path.join(dir, `${slug}.mdx`), "utf8")

  return {
    meta: parseFrontmatter(raw, slug),
    body: applyNewlineConvention(raw),
  }
}
