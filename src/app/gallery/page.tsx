import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { gallery } from "@/lib/constants"
import Image from "next/image"
import { Fragment } from "react"

export default function GalleryPage() {
  return (
    <Fragment>
      <Intro title="Gallery" subTitle="random photos" />
      <section>
        {gallery.map(({ title, items }, galleryIndex) => (
          <div className="mb-2" key={galleryIndex}>
            <h1 className="font-bold text-xl mb-2">{title}</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {items.map(({ url, alt, slug }) => (
                <CustomLink
                  className="grid place-items-center bg-white"
                  key={slug}
                  href={`/gallery/${slug}`}
                >
                  <Image key={url} src={url} width={800} height={600} quality={40} alt={alt} />
                </CustomLink>
              ))}
            </div>
            {galleryIndex < gallery.length - 1 && <hr className="mt-4" />}
          </div>
        ))}
      </section>
    </Fragment>
  )
}
