import { Tag } from '@/components/Tag';
import { siteMetadata } from '@/data/siteMetadata';
import { Post } from '@/models/Post';
import Link from 'next/link';

const posts: Post[] = [
  {
    id: '1',
    slug: 'example-post-1',
    date: '2023-10-31',
    title: 'Sample Blog Post 1',
    summary: 'This is the first sample blog post with a brief summary of its content.',
    tags: ['technology', 'programming', 'sample'],
  },
  {
    id: '2',
    slug: 'example-post-2',
    date: '2023-10-30',
    title: 'Sample Blog Post 2',
    summary: "Here's the second sample blog post with a different topic and summary.",
    tags: ['science', 'research', 'sample'],
  },
  {
    id: '3',
    slug: 'example-post-3',
    date: '2023-10-29',
    title: 'Sample Blog Post 3',
    summary: 'The third sample blog post covers yet another interesting subject.',
    tags: ['art', 'culture', 'sample'],
  },
  {
    id: '4',
    slug: 'example-post-4',
    date: '2023-10-28',
    title: 'Sample Blog Post 4',
    summary: 'A fourth sample blog post with additional information and insights.',
    tags: ['business', 'economics', 'sample'],
  },
  {
    id: '5',
    slug: 'example-post-5',
    date: '2023-10-27',
    title: 'Sample Blog Post 5',
    summary: 'The fifth sample blog post explores a fascinating topic in detail.',
    tags: ['history', 'education', 'sample'],
  },
];

function Item(props: { post: Post }) {
  const { post } = props;

  const { slug, date, title, summary, tags } = post;

  return (
    <li key={slug} className="py-12">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{date}</time>
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                    {title}
                  </Link>
                </h2>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
            </div>
            <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map((post) => (
            <Item key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </>
  );
}
