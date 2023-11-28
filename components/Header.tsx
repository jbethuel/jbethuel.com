import { ThemeSwitch } from './ThemeSwitch';
import { CustomLink } from './CustomLink';

export function Header() {
  return (
    <header className="flex flex-row justify-between">
      <h1>JBethuel</h1>
      <nav className="flex flex-row justify-between space-x-4 place-items-center">
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/about">About</CustomLink>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
