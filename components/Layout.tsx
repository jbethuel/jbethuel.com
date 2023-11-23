import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ThemeProvider } from './ThemeProvider';
import SectionContainer from './SectionProvider';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <ThemeProvider>
      <SectionContainer>
        <Header />
        <div className="flex h-screen flex-col justify-between font-sans">
          <main className="mb-auto">{props.children}</main>
        </div>
        <Footer />
      </SectionContainer>
    </ThemeProvider>
  );
}
