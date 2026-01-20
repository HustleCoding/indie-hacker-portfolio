import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Florin - Product Engineer & Indie Hacker",
  description:
    "High-velocity builder focused on AI, SaaS infrastructure, and Productivity tools.",
  generator: "v0.app",
  icons: {
    icon: "/florin-profile.png",
    apple: "/florin-profile.png",
  },
  openGraph: {
    title: "Florin - Product Engineer & Indie Hacker",
    description:
      "High-velocity builder focused on AI, SaaS infrastructure, and Productivity tools.",
    images: [
      {
        url: "/florin-profile.png",
        width: 1200,
        height: 630,
        alt: "Florin - Product Engineer & Indie Hacker",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Florin - Product Engineer & Indie Hacker",
    description:
      "High-velocity builder focused on AI, SaaS infrastructure, and Productivity tools.",
    images: ["/florin-profile.png"],
    creator: "@florin_dev",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
