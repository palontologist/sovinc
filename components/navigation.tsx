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
        <div className="px-6 md:px-12 py-4 flex items-center justify-between w-full">
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
            <span className={`font-montserrat text-lg font-bold tracking-wide ${textColorBase} hidden sm:inline`} style={{ letterSpacing: '0.05em' }}>SOVINC</span>
          </Link>

          <div className="flex gap-8 md:gap-12 items-center">
            <Link
              href="/"
              className={`hover:opacity-80 transition-opacity duration-300 flex items-center justify-center ${
                isActive("/")
                  ? `opacity-100`
                  : `opacity-70`
              }`}
              aria-label="Home"
              aria-current={isActive("/") ? "page" : undefined}
            >
              <svg className={`w-5 h-5 ${textColorBase}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </Link>
            <Link
              href="/about"
              className={`text-xs uppercase tracking-widest font-medium transition-all duration-300 pb-2 border-b-2 ${
                isActive("/about")
                  ? `${textColorBase} border-[#008080]`
                  : `${textColorMuted} border-transparent hover:${textColorBase} hover:border-[#008080]`
              }`}
              className="font-montserrat"
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
              className="font-montserrat"
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
