import { H1, H2, H3, H4 } from '@/components/mdx/Headings';
import P from '@/components/mdx/P';
import { Pre } from '@/components/mdx/Pre';
import { Post } from '@/types/post';
import fs from 'fs';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import { Fragment } from 'react';

export async function getStaticProps(
  ctx: GetStaticPropsContext<{
    slug: string;
  }>,
) {
  const { slug } = ctx.params!;

  const postFile = fs.readFileSync(`./_posts/${slug}.mdx`);
  const mdxSource = await serialize(postFile, { parseFrontmatter: true });
  return {
    props: {
      source: mdxSource,
      frontmatter: mdxSource.frontmatter as Post,
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}

export default function PostPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { source, frontmatter } = props;

  if (!frontmatter) return null;

  const { title, date } = frontmatter;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="text-center">
        <p className="font-light text-sm">{date}</p>
        <H1>{title}</H1>
      </div>
      <hr className="mt-4 mb-4" />
      {source ? (
        <MDXRemote
          {...props.source}
          components={{
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            p: P,
            pre: Pre,
          }}
        />
      ) : null}
    </Fragment>
  );
}
