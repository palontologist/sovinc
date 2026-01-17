import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SOVINC | Sovereign Web3 Infrastructure",
  description:
    "SOVINC is a UAE-founded consultancy working at the intersection of information systems, finance infrastructure, and web3-native payment rails.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap');
        `}</style>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
