import '@/css/tailwind.css';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
