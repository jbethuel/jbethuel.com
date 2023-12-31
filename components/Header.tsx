import { useRouter } from 'next/router';
import { ThemeSwitch } from './ThemeSwitch';
import { CustomLink } from './CustomLink';
import { useCallback } from 'react';

export function Header() {
  const router = useRouter();

  const isCurrentRoute = useCallback(
    (route: string) => router.pathname === route,
    [router.pathname],
  );

  return (
    <header className="flex flex-row justify-between">
      <h1 className="font-bold">
        <CustomLink href="/">JBethuel</CustomLink>
      </h1>
      <nav className="flex flex-row justify-between space-x-4 place-items-center">
        <CustomLink className="font-medium" href="/">
          <span className={isCurrentRoute('/') ? 'underline underline-offset-8' : ''}>Home</span>
        </CustomLink>
        <CustomLink className="font-medium" href="/gallery">
          <span className={isCurrentRoute('/gallery') ? 'underline underline-offset-8' : ''}>
            Gallery
          </span>
        </CustomLink>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
