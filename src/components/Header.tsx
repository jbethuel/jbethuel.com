import { CustomLink } from "./custom-link"
import { HeaderItem } from "./header-item"
import { ThemeSwitch } from "./theme-switch"

export function Header() {
  return (
    <header className="flex flex-row justify-between">
      <h1 className="font-bold">
        <CustomLink href="/">JBethuel</CustomLink>
      </h1>
      <nav className="flex flex-row justify-between space-x-4 place-items-center">
        <CustomLink className="font-medium" href="/">
          <HeaderItem label="Home" route="/" />
        </CustomLink>
        <CustomLink className="font-medium" href="/gallery">
          <HeaderItem label="Gallery" route="/gallery" />
        </CustomLink>
        <ThemeSwitch />
      </nav>
    </header>
  )
}
