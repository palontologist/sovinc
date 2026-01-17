"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useState } from "react"

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden relative">
      <Navigation />

      <div className="absolute inset-0 z-0">
        <img
          src="/video.gif"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 pt-20">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p
            style={{ fontFamily: "Montserrat" }}
            className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-6 animate-fade-in"
          >
            Web3 Infrastructure Consulting
          </p>

          {/* Main Heading */}
          <h1
            style={{ fontFamily: "Playfair Display", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            className="font-medium text-white mb-8 leading-tight animate-fade-in animation-delay-100"
          >
            Sovereign infrastructure for the cybereconomy.
          </h1>

          {/* Description Paragraphs */}
          <p className="text-base text-white/90 mb-6 leading-relaxed max-w-lg animate-fade-in animation-delay-200">
            Helping MSMEs move from legacy payment networks to web3‑native, on‑chain infrastructure with greater sovereignty.
          </p>

 

          {/* CTA Button */}
          <Link
            href="/contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`inline-block px-8 py-3 border-2 rounded-sm font-semibold uppercase text-xs tracking-widest transition-all duration-300 animate-fade-in animation-delay-400 ${
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
