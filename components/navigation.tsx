"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href
  
  // Use white text on home (video background), black text on other pages
  const isHome = pathname === "/"
  const textColorBase = isHome ? "text-white" : "text-black"
  const textColorMuted = isHome ? "text-white/70" : "text-black/70"
  const bgColor = isHome ? "bg-white/5 backdrop-blur-xl border-b border-white/10" : "bg-transparent border-b border-black/10"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={bgColor}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
            aria-label="SOVINC Home"
          >
            <Image
              src="/logo.png"
              alt="SOV Logo"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
            <span className={`text-lg font-bold tracking-wide ${textColorBase} hidden sm:inline`} style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>SOV</span>
          </Link>

          <div className="flex gap-8 md:gap-12">
            <Link
              href="/"
              className={`text-xs uppercase tracking-widest font-medium transition-all duration-300 pb-2 border-b-2 ${
                isActive("/")
                  ? `${textColorBase} border-[#008080]`
                  : `${textColorMuted} border-transparent hover:${textColorBase} hover:border-[#008080]`
              }`}
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-xs uppercase tracking-widest font-medium transition-all duration-300 pb-2 border-b-2 ${
                isActive("/about")
                  ? `${textColorBase} border-[#008080]`
                  : `${textColorMuted} border-transparent hover:${textColorBase} hover:border-[#008080]`
              }`}
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              aria-current={isActive("/about") ? "page" : undefined}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-xs uppercase tracking-widest font-medium transition-all duration-300 pb-2 border-b-2 ${
                isActive("/contact")
                  ? `${textColorBase} border-[#008080]`
                  : `${textColorMuted} border-transparent hover:${textColorBase} hover:border-[#008080]`
              }`}
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              aria-current={isActive("/contact") ? "page" : undefined}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
