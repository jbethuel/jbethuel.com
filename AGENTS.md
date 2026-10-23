<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# GitHub CLI

This repo belongs to the `jbethuel` GitHub account, but the machine's active `gh` account may be a different one without access. Run every `gh` command as `jbethuel` by passing its token for that one command:

```sh
GH_TOKEN=$(gh auth token --user jbethuel) gh pr create ...
```

Don't run `gh auth switch`. It changes the active account for every other repo on the machine.
