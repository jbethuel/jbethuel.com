import { BackButton } from "@/components/back-button"
import { Intro } from "@/components/intro"
import { galleryData } from "@/lib/constants"
import Image from "next/image"
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
      <BackButton link="/gallery" />
      {image?.url ? (
        <Image
          key={image.url}
          src={image.url}
          width={800}
          height={600}
          quality={100}
          alt={image.alt}
        />
      ) : null}
    </Fragment>
  )
}
