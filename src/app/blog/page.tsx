import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { listPosts } from "@/lib/posts"
import { Fragment } from "react"

export default function IndexPage() {
  const posts = listPosts()

  return (
    <Fragment>
      <Intro title="blog" subTitle="random things here and there" />
      {posts.map((postPreview, i) => {
        const { slug, title, description, date } = postPreview
        return (
          <article key={i} className="mb-6">
            <h2 className="font-semibold underline underline-offset-8 decoration-gray-700">
              <CustomLink href={`/blog/${slug}`}>{title}</CustomLink>
            </h2>
            <p className="font-light text-sm mt-2 mb-2">{date}</p>
            <p className="font-medium">{description}...</p>
          </article>
        )
      })}
    </Fragment>
  )
}
