import { ThemeSwitch } from './ThemeSwitch';
import { CustomLink } from './CustomLink';

export function Header() {
  return (
    <header className="flex flex-row justify-between">
      <h1 className="font-bold">
        <CustomLink href="/">JBethuel</CustomLink>
      </h1>
      <nav className="flex flex-row justify-between space-x-4 place-items-center">
        <CustomLink className="font-medium" href="/">
          Home
        </CustomLink>
        <CustomLink className="font-medium" href="/gallery">
          Gallery
        </CustomLink>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
