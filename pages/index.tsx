import { CustomLink } from '@/components/CustomLink';
import { Intro } from '@/components/Intro';
import { Post } from '@/types/post';
import fs from 'fs';
import { InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { postPreviews } = props;

  return (
    <section>
      <Intro title="Latest" subTitle="My latest thoughts or whatever I am thinking about" />
      <ul>
        {postPreviews.map((postPreview, i) => {
          const { slug, title, description, date } = postPreview;
          return (
            <li key={i} className="mb-6">
              <article>
                <h2 className="font-semibold">
                  <CustomLink href={`/${slug}`}>{title}</CustomLink>
                </h2>
                <p className="font-light text-sm mb-2">{date}</p>
                <p className="font-medium">{description}...</p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export async function getStaticProps() {
  const postFilePaths = fs.readdirSync('_posts').filter((postFilePath) => {
    return path.extname(postFilePath).toLowerCase() === '.mdx';
  });

  const postPreviews: Post[] = [];

  for (const postFilePath of postFilePaths) {
    const postFile = fs.readFileSync(`./_posts/${postFilePath}`, 'utf8');

    const serializedPost = await serialize(postFile, {
      parseFrontmatter: true,
    });

    postPreviews.push({
      ...serializedPost.frontmatter,
      // add the slug to the frontmatter info
      slug: postFilePath.replace('.mdx', ''),
    } as Post);
  }

  return {
    props: {
      postPreviews: postPreviews.sort(
        // sort by oldest to newest
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    },
  };
}
