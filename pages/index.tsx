import { CustomLink } from '@/components/CustomLink';
import { PostPreview } from '@/types/post';
import fs from 'fs';
import { InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { postPreviews } = props;

  return (
    <div>
      <h2>Latest</h2>
      <h3>My latest thoughts or whatever I am thinking about</h3>
      <hr className="mt-4 mb-4" />
      <ul>
        {postPreviews.map((postPreview, i) => (
          <li key={i} className="mb-4">
            <article>
              <h2>
                <CustomLink href={`/${postPreview.slug}`}>{postPreview.title}</CustomLink>
              </h2>
              <p>May 5, 2023</p>
              <p>{postPreview.description}...</p>
            </article>
            {postPreviews.length - 1 !== i ? <hr className="mt-4" /> : null}
          </li>
        ))}
      </ul>
    </div>
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
