import { CustomLink } from '@/components/CustomLink';
import { PostPreview } from '@/types/post';
import fs from 'fs';
import { InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

export default function Home({ postPreviews }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul>
      {postPreviews.map((postPreview, i) => (
        <li key={i}>
          <CustomLink href={`/${postPreview.slug}`}>{postPreview.slug}</CustomLink>
          <br /> {postPreview.title}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const postFilePaths = fs.readdirSync('_posts').filter((postFilePath) => {
    return path.extname(postFilePath).toLowerCase() === '.mdx';
  });

  const postPreviews: PostPreview[] = [];

  for (const postFilePath of postFilePaths) {
    const postFile = fs.readFileSync(`./_posts/${postFilePath}`, 'utf8');

    const serializedPost = await serialize(postFile, {
      parseFrontmatter: true,
    });

    postPreviews.push({
      ...serializedPost.frontmatter,
      // add the slug to the frontmatter info
      slug: postFilePath.replace('.mdx', ''),
    } as PostPreview);
  }

  return {
    props: {
      postPreviews: postPreviews,
    },
  };
}
