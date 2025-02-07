import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { Button } from "@/components/ui/button"
import { galleryData } from "@/lib/constants"
import { ArrowLeft } from "lucide-react"
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
      <CustomLink href="/gallery">
        <Button className="mb-2" variant="outline">
          <ArrowLeft />
          Go Back
        </Button>
      </CustomLink>
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
