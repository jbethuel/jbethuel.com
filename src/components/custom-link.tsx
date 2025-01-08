import type { LinkProps } from "next/link"
import Link from "next/link"
import { AnchorHTMLAttributes } from "react"

export function CustomLink(props: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href, ...rest } = props

  const isInternalLink = href && href.startsWith("/")
  const isAnchorLink = href && href.startsWith("#")

  if (isInternalLink) {
    return <Link href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}
