# Domain glossary

- **Post** — an `.mdx` file in `src/_posts`. Its filename (minus extension) is its **slug** and its URL under `/blog/`.
- **PostMeta** — the frontmatter of a Post: `title`, `description`, `date`. Required; a Post with missing or invalid meta fails the build.
- **Newline convention** — how Post bodies treat whitespace: a single newline renders as a hard line break; a run of 3+ newlines renders as extra vertical space. Owned by the posts module (`src/lib/posts.ts`), pinned by its tests.
- **Dev-only Post** — `playground.mdx` and any `__`-prefixed file. Visible only when `NODE_ENV` is `development`; never listed or built in production.

The posts module (`listPosts()` / `getPost(slug)`) is the only interface to these rules — pages render, they don't parse.
