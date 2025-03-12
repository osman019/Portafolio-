import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Osman Johandry | Portfolio",
  description: "Professional portfolio of Osman Johandry - Software Developer",
<<<<<<< HEAD
  generator: "v0.dev",
=======
    generator: 'v0.dev'
>>>>>>> 259c63f05b1927fb7ae608c89267cf9e972086b8
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}

<<<<<<< HEAD
import "./globals.css"

=======
>>>>>>> 259c63f05b1927fb7ae608c89267cf9e972086b8


import './globals.css'