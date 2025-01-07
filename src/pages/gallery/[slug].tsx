import { Intro } from "@/components/Intro"
import { galleryData } from "@/config/helpers"
import { seoConfig } from "@/config/seo"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { NextSeo } from "next-seo"
import { Fragment } from "react"

export async function getStaticProps(
  ctx: GetStaticPropsContext<{
    slug: string
  }>,
) {
  const { slug } = ctx.params!

  return {
    props: {
      image: galleryData.find((e) => e.slug === slug),
    },
  }
}

export async function getStaticPaths() {
  const paths = galleryData.map((e) => ({ params: { slug: e.slug } }))

  return { paths, fallback: false }
}

export default function GalleryItem(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { image } = props

  return (
    <Fragment>
      <NextSeo {...seoConfig} title={`${seoConfig.title} - Gallery`} />
      <Intro title="Gallery" subTitle="random photos" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {image?.url ? <img src={image?.url} alt={image.slug} /> : null}
    </Fragment>
  )
}
