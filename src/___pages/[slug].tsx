import { Intro } from "@/components/intro"
import A from "@/components/mdx/A"
import { H1, H2, H3, H4 } from "@/components/mdx/Headings"
import P from "@/components/mdx/P"
import { Pre } from "@/components/mdx/Pre"
import { getAllMdxFiles, readMdxFile } from "@/config/mdxFileHelper"
import { seoConfig } from "@/config/seo"
import { Post } from "@/types/post"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import { NextSeo } from "next-seo"
import { Fragment } from "react"

export async function getStaticProps(
  ctx: GetStaticPropsContext<{
    slug: string
  }>,
) {
  const { slug } = ctx.params!

  const file = readMdxFile({ fileName: slug })
  const mdxSource = await serialize(file, { parseFrontmatter: true })
  return {
    props: {
      source: mdxSource,
      frontmatter: mdxSource.frontmatter as Post,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllMdxFiles({ includeFileExtension: false }).map((file) => ({
    params: { slug: file },
  }))

  return { paths, fallback: false }
}

export default function PostPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { source, frontmatter } = props

  if (!frontmatter) return null

  const { title, description, date } = frontmatter

  return (
    <Fragment>
      <NextSeo {...seoConfig} title={`${title} - ${description}`} />
      <Intro title={title} subTitle={date} />
      {source ? (
        <MDXRemote
          {...props.source}
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
