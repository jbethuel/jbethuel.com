import { Intro } from '@/components/Intro';
import { portalId } from '@/config/helpers';
import { seoConfig } from '@/config/seo';
import { NextSeo } from 'next-seo';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const imageUrls = [
  'https://s3.ap-southeast-1.amazonaws.com/w-assets.jbethuel.com/IMG_8817.jpeg',
  'https://s3.ap-southeast-1.amazonaws.com/w-assets.jbethuel.com/IMG_8824.jpeg',
  'https://s3.ap-southeast-1.amazonaws.com/w-assets.jbethuel.com/IMG_9720.jpeg',
  'https://s3.ap-southeast-1.amazonaws.com/w-assets.jbethuel.com/IMG_8864.jpeg',
  'https://s3.ap-southeast-1.amazonaws.com/w-assets.jbethuel.com/IMG_8948.jpeg',
  'https://s3.ap-southeast-1.amazonaws.com/w-assets.jbethuel.com/IMG_9738.jpeg',
  'https://s3.ap-southeast-1.amazonaws.com/w-assets.jbethuel.com/IMG_9439.jpeg',
];

const ClientPortal = ({ children, selector }: { children: React.ReactNode; selector: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.getElementById(selector)!) : null;
};

export default function Gallery() {
  const onClickImage = useCallback((imageUrl: string) => {
    window.open(imageUrl);
  }, []);

  return (
    <Fragment>
      <NextSeo {...seoConfig} title={`${seoConfig.title} - Gallery`} />
      <Intro title="Gallery" subTitle="random photos" />
      <ClientPortal selector={portalId}>
        <section>
          <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            {imageUrls.map((image, key) => {
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="hover-images cursor-pointer"
                  loading="lazy"
                  key={key}
                  src={image}
                  alt={image}
                  onClick={() => onClickImage(image)}
                />
              );
            })}
          </div>

          <div
            className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
            style={{ display: 'none' }}
          >
            {imageUrls.map((image, key) => (
              <div
                key={key}
                className="hover-images cursor-pointer"
                onClick={() => onClickImage(image)}
              >
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
      </ClientPortal>
    </Fragment>
  );
}
