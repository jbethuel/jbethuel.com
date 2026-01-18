import { BackButton } from "@/components/back-button"
import { Intro } from "@/components/intro"
import A from "@/components/mdx/A"
import { Blockquote, H1, H2, H3, H4 } from "@/components/mdx/Headings"
import P from "@/components/mdx/P"
import { Pre } from "@/components/mdx/Pre"
import { getAllMdxFiles, readMdxFile } from "@/lib/mdxFileHelper"
import { Post } from "@/types/post"
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc"
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
  const frontmatterRemoved = file.replace(/---[\s\S]*?---/, "")

  return (
    <Fragment>
      <Intro title={title} subTitle={date} />
      <BackButton link="/gallery" />
      {mdxSource ? (
        <MDXRemote
          source={frontmatterRemoved}
          components={{
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            p: P,
            pre: Pre,
            a: A,
            blockquote: Blockquote,
          }}
        />
      ) : null}
    </Fragment>
  )
}
