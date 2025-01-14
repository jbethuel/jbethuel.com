import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { Image } from "@/types/image"
import { Fragment } from "react"

const imageUrls: Image[] = [
  {
    slug: "1",
    url: "https://assets.jbethuel.com/IMG_8817.jpeg",
    alt: "wtf",
  },
  {
    slug: "2",
    url: "https://assets.jbethuel.com/IMG_8824.jpeg",
    alt: "falls",
  },
  {
    slug: "3",
    url: "https://assets.jbethuel.com/IMG_8864.jpeg",
    alt: "oslob",
  },
  {
    slug: "4",
    url: "https://assets.jbethuel.com/IMG_8948.jpeg",
    alt: "ruins",
  },
  {
    slug: "5",
    url: "https://assets.jbethuel.com/IMG_9738.jpeg",
    alt: "old player",
  },
  {
    slug: "6",
    url: "https://assets.jbethuel.com/IMG_9439.jpeg",
    alt: "foggy morning",
  },
]

export default function GalleryPage() {
  return (
    <Fragment>
      <Intro title="Gallery" subTitle="random photos" />
      <section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {imageUrls.map(({ slug, url, alt }, index) => {
            return (
              <CustomLink key={slug} href={`/gallery/${slug}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="hover-images cursor-pointer"
                  loading="lazy"
                  key={index}
                  src={url}
                  alt={alt}
                />
              </CustomLink>
            )
          })}
        </div>
      </section>
    </Fragment>
  )
}
