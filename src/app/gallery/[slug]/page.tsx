import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { Button } from "@/components/ui/button"
import { galleryData } from "@/lib/helpers"
import { ArrowLeft } from "lucide-react"
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {image?.url ? <img src={image?.url} alt={image.slug} /> : null}
    </Fragment>
  )
}
