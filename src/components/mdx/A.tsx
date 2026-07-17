import React from "react"

export default function A(props: { href?: string; children?: React.ReactNode }) {
  return (
    <a
      className="underline cursor-pointer underline-offset-4 transition-colors hover:text-brand"
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
    >
      {props.children}
    </a>
  )
}
