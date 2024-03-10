import { CustomLink } from '@/components/CustomLink';
import { Intro } from '@/components/Intro';
import { galleryData } from '@/config/helpers';
import { seoConfig } from '@/config/seo';
import { NextSeo } from 'next-seo';
import { Fragment, useCallback } from 'react';

const paths = galleryData.map((e) => e.url);
console.log('paths', paths);

export default function Gallery() {
  const onClickImage = useCallback((imageUrl: string) => {
    window.open(imageUrl);
  }, []);

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
                  // onClick={() => onClickImage(url)}
                />
              </CustomLink>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
}
