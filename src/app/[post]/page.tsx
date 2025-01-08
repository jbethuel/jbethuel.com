import { Intro } from "@/components/intro"
import A from "@/components/mdx/A"
import { H1, H2, H3, H4 } from "@/components/mdx/Headings"
import P from "@/components/mdx/P"
import { Pre } from "@/components/mdx/Pre"
import { getAllMdxFiles, readMdxFile } from "@/config/mdxFileHelper"
import { Post } from "@/types/post"
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc"
import { Fragment } from "react"

export function generateStaticParams() {
  const paths = getAllMdxFiles({ includeFileExtension: false }).map((file) => ({
    post: file,
  }))

  return paths
}

export default async function PostPage(props: { params: Promise<{ post: string }> }) {
  const { params } = props

  const { post } = await params
  const file = readMdxFile({ fileName: post })
  const mdxSource = await compileMDX<Post>({ source: file, options: { parseFrontmatter: false } })

  const { title, date } = mdxSource.frontmatter

  const frontmatterRemoved = file.replace(/---[\s\S]*?---/, "")

  return (
    <Fragment>
      <Intro title={title} subTitle={date} />
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
            img: (props) => {
              if (props.alt?.includes("IMG")) {
                // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                return <img {...props} />
              }
              return (
                <video width="100%" height="100%" muted controls>
                  <source src={props.src} type="video/mp4" />
                </video>
              )
            },
          }}
        />
      ) : null}
    </Fragment>
  )
}
