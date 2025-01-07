import { portalId } from "@/config/helpers"
import React from "react"
import { Header } from "./Header"
import { ThemeProvider } from "./ThemeProvider"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="max-w-4xl mx-auto pt-10 px-4">
        <Header />
        <main className="mt-2">{props.children}</main>
        <div className="mt-10" />
      </div>
      <div className="px-4 md:px-4 lg:px-8 mx-auto" id={portalId} />
    </ThemeProvider>
  )
}
