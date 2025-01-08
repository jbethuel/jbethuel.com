import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { galleryData } from "@/config/helpers"
import { seoConfig } from "@/config/seo"
import { NextSeo } from "next-seo"
import { Fragment } from "react"

export default function Gallery() {
  return (
    <Fragment>
      <NextSeo {...seoConfig} title={`${seoConfig.title} - Gallery`} />
      <Intro title="Gallery" subTitle="random photos" />
      <section>
        <div className="grid grid-cols-3 gap-2">
          {galleryData.map(({ slug, url, alt }, index) => {
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
