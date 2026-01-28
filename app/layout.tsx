import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SOVINC | Sovereign Web3 Infrastructure",
  description:
    "Enabling small businesses to operate on sovereign, on‑chain infrastructure instead of legacy financial rails.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
          @import url('https://fonts.cdnfonts.com/css/avenir-next-lt-pro');
        `}</style>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
