import Layout from '@/components/Layout';
import { seoConfig } from '@/config/seo';
import '@/css/tailwind.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <Layout>
      <NextSeo {...seoConfig} />
      <Component {...pageProps} />
    </Layout>
  );
}
