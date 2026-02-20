import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Manrope } from "next/font/google"
import "./globals.css"
import { DynamicLines } from "@/components/dynamic-lines"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Erdal Gümüş — AI & Systems Entrepreneur",
  description:
    "Yapay zekâ, sistem mühendisliği ve ürün stratejisi ekseninde çalışan teknoloji girişimcisi. NQAI, HRAI ve NEEKO projelerinin kurucusu.",
  keywords: ["Erdal Gümüş", "yapay zeka", "AI entrepreneur", "NQAI", "NEEKO", "sistem mühendisliği"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${GeistSans.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">
        <DynamicLines />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
