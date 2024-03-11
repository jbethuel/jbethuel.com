export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunkedArray: T[][] = [];

  let index = 0;

  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + chunkSize));

    index += chunkSize;
  }

  return chunkedArray;
}

export const portalId = 'portal';

type Image = {
  slug: string;
  url: string;
  alt: string;
};

const imageUrls: Image[] = [
  {
    slug: '1',
    url: 'https://assets.jbethuel.com/IMG_8817.jpeg',
    alt: 'wtf',
  },
  {
    slug: '2',
    url: 'https://assets.jbethuel.com/IMG_8824.jpeg',
    alt: 'falls',
  },
  {
    slug: '3',
    url: 'https://assets.jbethuel.com/IMG_8864.jpeg',
    alt: 'oslob',
  },
  {
    slug: '4',
    url: 'https://assets.jbethuel.com/IMG_8948.jpeg',
    alt: 'ruins',
  },
  {
    slug: '5',
    url: 'https://assets.jbethuel.com/IMG_9738.jpeg',
    alt: 'old player',
  },
  {
    slug: '6',
    url: 'https://assets.jbethuel.com/IMG_9439.jpeg',
    alt: 'foggy morning',
  },
];

const dummy = Array.from({ length: 100 }).map(() => ({
  url: 'https://placehold.co/315x315',
  alt: Math.random.toString(),
}));

export const isDevelopment = process.env.NODE_ENV === 'development';
export const galleryData = imageUrls;
