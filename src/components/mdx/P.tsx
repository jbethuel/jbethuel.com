import React from "react"

export default function P({ children }: { children?: React.ReactNode }) {
  return <p className="max-w-[680px] text-pretty">{children}</p>
}
