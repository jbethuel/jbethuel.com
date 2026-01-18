import { BackButton } from "@/components/back-button"
import { Intro } from "@/components/intro"
import A from "@/components/mdx/A"
import { H1, H2, H3, H4 } from "@/components/mdx/Headings"
import P from "@/components/mdx/P"
import { Pre } from "@/components/mdx/Pre"
import { getAllMdxFiles, readMdxFile } from "@/lib/mdxFileHelper"
import { Post } from "@/types/post"
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc"
import { Fragment } from "react"

export function generateStaticParams() {
  const paths = getAllMdxFiles({ folderName: "_posts", includeFileExtension: false }).map(
    (file) => ({
      post: file,
    }),
  )

  return paths
}

export default async function PostPage(props: { params: Promise<{ post: string }> }) {
  const { params } = props

  const { post } = await params
  const file = readMdxFile({ folderName: "_posts", fileName: post })
  const mdxSource = await compileMDX<Post>({ source: file, options: { parseFrontmatter: true } })

  const { title, date } = mdxSource.frontmatter
  const frontmatterRemoved = file
    .replace(/---[\s\S]*?---/, "")
    .replace(/([^\n])\n([^\n])/g, "$1  \n$2")
    .replace(/\n{3,}/g, (match) => "\n\n" + "<br/>\n".repeat(match.length - 2))

  return (
    <Fragment>
      <Intro title={title} subTitle={date} />
      <BackButton link="/" />
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
