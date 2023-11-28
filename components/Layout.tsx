import React from 'react';
import { Header } from './Header';
import { ThemeProvider } from './ThemeProvider';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="max-w-2xl mx-auto py-10 px-4">
        <Header />
        <main className="mt-2">{props.children}</main>
      </div>
    </ThemeProvider>
  );
}
