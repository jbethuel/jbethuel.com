import { CustomLink } from "./custom-link"
import { HeaderItem } from "./header-item"
import { ThemeSwitch } from "./theme-switch"

export function Header() {
  return (
    <header className="flex flex-row justify-between">
      <h1 className="font-bold text-2xl">
        <CustomLink href="/">jbethuel</CustomLink>
      </h1>
      <nav className="flex flex-row justify-between space-x-4 place-items-center">
        <CustomLink className="font-bold" href="/">
          <HeaderItem label="home" route="/" />
        </CustomLink>
        <CustomLink className="font-bold" href="/blog">
          <HeaderItem label="blog" route="/blog" />
        </CustomLink>
        <CustomLink className="font-bold" href="/gallery">
          <HeaderItem label="gallery" route="/gallery" />
        </CustomLink>
        <ThemeSwitch />
      </nav>
    </header>
  )
}
