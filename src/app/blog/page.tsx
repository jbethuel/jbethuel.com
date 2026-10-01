import type { Metadata } from "next"
import { CustomLink } from "@/components/custom-link"
import { PageHeading } from "@/components/markdown"
import { listPosts } from "@/lib/posts"
import { Fragment } from "react"

export const metadata: Metadata = {
  title: "JBethuel - Writing",
  description: "Notes by Joseph Bethuel Dela Cruz, mostly about the gear he uses.",
}

export default function BlogPage() {
  const posts = listPosts()

  return (
    <Fragment>
      <PageHeading title="writing" subTitle="Notes, mostly about the gear I use." />
      {/* A folder listing: one row per Post, named as the file it is. */}
      <div className="overflow-hidden rounded-lg border">
        {posts.map(({ slug, description, date }) => (
          <CustomLink
            key={slug}
            href={`/blog/${slug}`}
            className="group grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1 border-b px-[18px] py-3.5 transition-colors last:border-b-0 hover:bg-brand-tint"
          >
            <span className="font-bold [overflow-wrap:anywhere] group-hover:text-brand">
              <span className="text-brand">▸ </span>
              {slug}.md
            </span>
            <span className="text-muted-foreground">{date}</span>
            <span className="col-span-full text-muted-foreground">{description}</span>
          </CustomLink>
        ))}
      </div>
    </Fragment>
  )
}
