'use client';

import { ThemeProvider as Container } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <Container attribute="class" defaultTheme="system" enableSystem>
      {children}
    </Container>
  );
}
