import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BHS Billing | Medical Billing & Revenue Cycle Management",
  description:
    "BHS Billing provides comprehensive medical billing services, revenue cycle management, provider credentialing, and financial assistance for healthcare providers.",
  keywords:
    "medical billing, revenue cycle management, provider credentialing, healthcare billing, medical practice management",
  openGraph: {
    title: "BHS Billing | Medical Billing & Revenue Cycle Management",
    description: "Comprehensive medical billing services for healthcare providers",
    url: "https://bhshealthcares.com",
    siteName: "BHS Billing",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BHS Billing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
