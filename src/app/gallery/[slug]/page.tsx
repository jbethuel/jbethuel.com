import { Intro } from "@/components/intro"
import { galleryData } from "@/config/helpers"
import { Fragment } from "react"

export function generateStaticParams() {
  const paths = galleryData.map((e) => ({ slug: e.slug }))

  return paths
}

export default async function GalleryItem(props: { params: Promise<{ slug: string }> }) {
  const { params } = props

  const { slug } = await params

  const image = galleryData.find((e) => e.slug === slug)

  return (
    <Fragment>
      <Intro title="Gallery" subTitle="random photos" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {image?.url ? <img src={image?.url} alt={image.slug} /> : null}
    </Fragment>
  )
}
