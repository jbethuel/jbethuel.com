import { BackButton } from "@/components/back-button"
import { PageHeading } from "@/components/markdown"
import A from "@/components/mdx/A"
import { H1, H2, H3, H4 } from "@/components/mdx/Headings"
import P from "@/components/mdx/P"
import { Pre } from "@/components/mdx/Pre"
import { getPost, listPosts } from "@/lib/posts"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Fragment, type ComponentPropsWithoutRef } from "react"

export function generateStaticParams() {
  return listPosts().map((post) => ({ post: post.slug }))
}

// MDX always yields a string `src`, unlike the DOM type which also allows a Blob.
type MdxImageProps = Omit<ComponentPropsWithoutRef<"img">, "src"> & { src?: string }

// MDX routes both images and videos through `img`; the alt text says which is which.
function MdxImage(props: MdxImageProps) {
  if (props.alt?.includes("IMG")) {
    // oxlint-disable-next-line nextjs/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  }
  return (
    <video width="100%" height="100%" muted controls>
      <source src={props.src} type="video/mp4" />
    </video>
  )
}

const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  pre: Pre,
  a: A,
  img: MdxImage,
}

export async function generateMetadata(props: {
  params: Promise<{ post: string }>
}): Promise<Metadata> {
  const { meta } = getPost((await props.params).post)
  return { title: `JBethuel - ${meta.title}`, description: meta.description }
}

export default async function PostPage(props: { params: Promise<{ post: string }> }) {
  const { params } = props

  const { post } = await params
  const { meta, body } = getPost(post)

  return (
    <Fragment>
      <div className="flex flex-col gap-4">
        <BackButton link="/blog" label="writing" />
        <PageHeading title={meta.title} subTitle={meta.date} />
      </div>
      <article className="flex flex-col gap-4">
        <MDXRemote source={body} components={mdxComponents} />
      </article>
    </Fragment>
  )
}
