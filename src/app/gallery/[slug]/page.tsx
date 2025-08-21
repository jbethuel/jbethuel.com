import { BackButton } from "@/components/back-button"
import { Intro } from "@/components/intro"
import { getAllMdxFiles, readMdxFile } from "@/lib/mdxFileHelper"
import { Post } from "@/types/post"
import { compileMDX } from "next-mdx-remote/rsc"
import { Fragment } from "react"

export function generateStaticParams() {
  const paths = getAllMdxFiles({ folderName: "_gallery", includeFileExtension: false }).map(
    (file) => ({
      slug: file,
    }),
  )

  return paths
}

export default async function GalleryItem(props: { params: Promise<{ slug: string }> }) {
  const { params } = props
  const { slug } = await params
  const file = readMdxFile({ folderName: "_gallery", fileName: slug })
  const mdxSource = await compileMDX<Post>({ source: file, options: { parseFrontmatter: true } })

  const { title, date } = mdxSource.frontmatter

  return (
    <Fragment>
      <Intro title={title} subTitle={date} />
      <BackButton link="/gallery" />
      {slug}
    </Fragment>
  )
}
