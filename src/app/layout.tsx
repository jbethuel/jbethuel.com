import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Header } from "@/components/header"
import { StatusBar } from "@/components/status-bar"
import { ThemeCrossfade } from "@/components/theme-crossfade"

const hackFont = localFont({
  src: [
    {
      path: "./Hack-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Hack-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Hack-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Hack-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
})

export const metadata: Metadata = {
  title: "JBethuel - Software Developer",
  description: "JBethuel - Software Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jbethuel.com/",
    title: "JBethuel - Software Developer",
    description: "JBethuel - Software Developer",
    siteName: "jbethuel.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${hackFont.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeCrossfade />
          <div className="flex min-h-dvh flex-col text-sm">
            <Header />
            <main className="mx-auto flex w-full max-w-[820px] flex-1 flex-col gap-10 px-[clamp(18px,5vw,48px)] pt-[clamp(24px,5vw,40px)] pb-14 leading-[1.75]">
              {children}
            </main>
            <StatusBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
