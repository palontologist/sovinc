"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { VideoHero } from "@/components/video-hero"
import { useState } from "react"

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden relative">
      <Navigation />

      <div className="fixed inset-0 z-0">
        <VideoHero />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 pt-20">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p
            className="font-montserrat text-xs uppercase tracking-widest font-semibold text-white/80 mb-6 animate-fade-in"
          >
            Web3 Strategy & Operations Consulting
          </p>

          {/* Main Heading */}
            <h1
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            className="font-avenir font-medium text-white mb-8 leading-tight animate-fade-in animation-delay-100"
            >
            Facilitating greater sovereignty <br /> in a decentralised future.
            </h1>

          {/* Description Paragraphs */}
          <p className="font-avenir text-base text-white/90 mb-6 leading-relaxed max-w-lg animate-fade-in animation-delay-200">
            Helping MSMEs shift from legacy systems to Web3‑native, on‑chain infrastructure for greater ownership & sovereignty.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`inline-block px-8 py-3 border-2 rounded-sm font-avenir font-semibold uppercase text-xs tracking-widest transition-all duration-300 animate-fade-in animation-delay-400 ${
              isHovered
                ? "bg-accent text-white border-accent shadow-lg shadow-accent/20"
                : "bg-transparent text-white border-white hover:border-accent/80"
            }`}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
