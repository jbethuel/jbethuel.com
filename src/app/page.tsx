import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { getAllMdxFiles, readMdxFile } from "@/lib/mdxFileHelper"
import { Post } from "@/types/post"
import { serialize } from "next-mdx-remote/serialize"
import { Fragment } from "react"

async function getPosts() {
  const postPreviews: Post[] = []

  for (const fileName of getAllMdxFiles({ includeFileExtension: false })) {
    const file = readMdxFile({ fileName })
    const serializedPost = await serialize(file, { parseFrontmatter: true })

    postPreviews.push({
      ...serializedPost.frontmatter,
      slug: fileName,
    } as Post)
  }

  return postPreviews.sort(
    // sort by oldest to newest
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export default async function IndexPage() {
  const posts = await getPosts()

  return (
    <Fragment>
      <Intro title="Latest" subTitle="Random Thoughts" />
      {posts.map((postPreview, i) => {
        const { slug, title, description, date } = postPreview
        return (
          <article key={i} className="mb-6">
            <h2 className="font-semibold underline underline-offset-8">
              <CustomLink href={`/${slug}`}>{title}</CustomLink>
            </h2>
            <p className="font-light text-sm mt-2 mb-2">{date}</p>
            <p className="font-medium">{description}...</p>
          </article>
        )
      })}
    </Fragment>
  )
}
