import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { getAllMdxFiles, readMdxFile } from "@/lib/mdxFileHelper"
import { Post } from "@/types/post"
import { serialize } from "next-mdx-remote/serialize"
import { Fragment } from "react"

const folderName = "_gallery"

async function getGalleryItems() {
  const postPreviews: Post[] = []

  for (const fileName of getAllMdxFiles({ folderName, includeFileExtension: false })) {
    const file = readMdxFile({ folderName, fileName })
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

export default async function GalleryPage() {
  const items = await getGalleryItems()

  return (
    <Fragment>
      <Intro title="gallery" subTitle="random photos" />
      {items.map((postPreview, i) => {
        const { slug, title, description, date } = postPreview
        return (
          <article key={i} className="mb-6">
            <h2 className="font-semibold underline underline-offset-8 decoration-gray-700">
              <CustomLink href={`/gallery/${slug}`}>{title}</CustomLink>
            </h2>
            <p className="font-light text-sm mt-2 mb-2">{date}</p>
            <p className="font-medium">{description}...</p>
          </article>
        )
      })}
    </Fragment>
  )
}
