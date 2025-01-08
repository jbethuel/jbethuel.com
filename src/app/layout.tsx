import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Header } from "@/components/header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
