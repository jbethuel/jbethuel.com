# Domain glossary

- **Post** — an `.mdx` file in `src/_posts`. Its filename (minus extension) is its **slug** and its URL under `/blog/`.
- **PostMeta** — the frontmatter of a Post: `title`, `description`, `date`. Required; a Post with missing or invalid meta fails the build.
- **Newline convention** — how Post bodies treat whitespace: a single newline renders as a hard line break; a run of 3+ newlines renders as extra vertical space. Owned by the posts module (`src/lib/posts.ts`), pinned by its tests.
- **Dev-only Post** — `playground.mdx` and any `__`-prefixed file. Visible only when `NODE_ENV` is `development`; never listed or built in production.

The posts module (`listPosts()` / `getPost(slug)`) is the only interface to these rules — pages render, they don't parse.

- **Project** — a side project, hand-curated as an entry in the `projects` array in `src/lib/projects.ts`. Every Project has a `repoUrl`; `liveUrl` is optional and present only for the ones that are actually deployed somewhere. A Project with no `liveUrl` renders its source link alone — the absence is not labelled. The data lives in `src/lib` rather than the page because the page is a server component (it owns the route's `metadata`) while the list that filters them is a client component.
- **AI assist** — how much of a Project's code AI wrote: `preAi` (built before AI was in the workflow at all), `assisted`, or `built`. Required on every Project and always rendered as a coloured tag, so an untagged Project is impossible and a missing tag can never be read as a claim. `preAi` deliberately dates the work rather than describing its authorship — later commits to an old project may well be AI-assisted.
- **Role** — a job, hand-curated the same way in `src/app/work/page.tsx`. Roles and Projects are deliberately plain arrays, not content files: there are few of them and they change rarely.
