import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { oslob } from "@/lib/constants"
import { Images } from "@/types/image"
import Image from "next/image"
import { Fragment } from "react"

export type Gallery = {
  title: string
  items: Images
}

const gallery: Gallery[] = [
  {
    title: "Cebu - Oslob",
    items: oslob,
  },
]

export default function GalleryPage() {
  return (
    <Fragment>
      <Intro title="Gallery" subTitle="random photos" />
      <section>
        {gallery.map(({ title, items }, index) => (
          <div className="mb-2" key={index}>
            <h1 className="font-bold text-xl mb-2">{title}</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 [&:hover>a]:opacity-50">
              {items.map(({ slug, url, alt }) => (
                <CustomLink key={slug} href={`/gallery/${slug}`} className="hover:!opacity-100">
                  <Image key={url} src={url} width={800} height={600} quality={40} alt={alt} />
                </CustomLink>
              ))}
            </div>
            {index < gallery.length - 1 && <hr className="mt-4" />}
          </div>
        ))}
      </section>
    </Fragment>
  )
}
