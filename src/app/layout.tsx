import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Header } from "@/components/header"

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
  title: "JBethuel - Software Engineer",
  description: "JBethuel - Software Engineer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jbethuel.com/",
    title: "JBethuel - Software Engineer",
    description: "JBethuel - Software Engineer",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-4xl mx-auto pt-10 px-4">
            <Header />
            <main className="mt-2">{children}</main>
            <div className="mt-10" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
