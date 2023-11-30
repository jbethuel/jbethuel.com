import { Intro } from '@/components/Intro';
import { H1, H2, H3, H4 } from '@/components/mdx/Headings';
import P from '@/components/mdx/P';
import { Pre } from '@/components/mdx/Pre';
import { seoConfig } from '@/config/seo';
import { Post } from '@/types/post';
import fs from 'fs';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
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

  const { title, description, date } = frontmatter;

  return (
    <Fragment>
      <NextSeo {...seoConfig} title={`${title} - ${description}`} />
      <Intro title={title} subTitle={date} />
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
