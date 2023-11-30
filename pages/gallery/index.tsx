import { Intro } from '@/components/Intro';
import { seoConfig } from '@/config/seo';
import { NextSeo } from 'next-seo';
import { Fragment, useCallback } from 'react';

const imageUrls = [
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
];

export default function Gallery() {
  const onClickImage = useCallback((imageUrl: string) => {
    window.open(imageUrl);
  }, []);

  return (
    <Fragment>
      <NextSeo {...seoConfig} title={`${seoConfig.title} - Gallery`} />
      <Intro title="Gallery" subTitle="random photos" />
      <section>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imageUrls.map((image, key) => (
            <div key={key} className="cursor-pointer" onClick={() => onClickImage(image)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-auto max-w-full rounded-sm"
                loading="lazy"
                src={image}
                alt={image}
              />
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}
