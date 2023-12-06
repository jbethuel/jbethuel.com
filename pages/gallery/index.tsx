import { Intro } from '@/components/Intro';
import { portalId } from '@/config/helpers';
import { seoConfig } from '@/config/seo';
import { NextSeo } from 'next-seo';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Image = {
  url: string;
  alt: string;
};

const imageUrls: Image[] = [
  {
    url: 'https://assets.jbethuel.com/IMG_8817.jpeg',
    alt: 'wtf',
  },
  {
    url: 'https://assets.jbethuel.com/IMG_8824.jpeg',
    alt: 'falls',
  },
  {
    url: 'https://assets.jbethuel.com/IMG_9720.jpeg',
    alt: 'mountains',
  },
  {
    url: 'https://assets.jbethuel.com/IMG_8864.jpeg',
    alt: 'oslob',
  },
  {
    url: 'https://assets.jbethuel.com/IMG_8948.jpeg',
    alt: 'ruins',
  },
  {
    url: 'https://assets.jbethuel.com/IMG_9738.jpeg',
    alt: 'old player',
  },
  {
    url: 'https://assets.jbethuel.com/IMG_9439.jpeg',
    alt: 'foggy morning',
  },
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
            {imageUrls.map(({ url, alt }, index) => {
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="hover-images cursor-pointer"
                  loading="lazy"
                  key={index}
                  src={url}
                  alt={alt}
                  onClick={() => onClickImage(url)}
                />
              );
            })}
          </div>
        </section>
      </ClientPortal>
    </Fragment>
  );
}
