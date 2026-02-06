"use client"

import { Navigation } from "@/components/navigation"

export default function About() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#f5f5f5' }}>
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-6 md:px-12 pt-20">
        <div className="max-w-2xl w-full">
          <div className="space-y-8">
            <h1 style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="font-light text-5xl md:text-6xl text-black text-center">About</h1>

            <div className="space-y-6">
              <p style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="text-base leading-relaxed text-black/90 text-center">
                SOV Solutions, d.b.a. <em style={{ fontStyle: 'italic', fontWeight: 400 }}>SOVINC</em>, was founded & incorporated in the United Arab Emirates by Emmanuel Alamu in 2024.
              </p>

              <p style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="text-base leading-relaxed text-black/90 text-center">
                The company specialises in consulting companies at the intersection of information & finance technology infrastructure, with a particular focus on peer-to-peer electronic transactions, overlay payment networks, and on-chain virtual asset protocols.
              </p>

              <p style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="text-base leading-relaxed text-black/90 text-center">
                The core mission is to both enable & accelerate the integration of MSMEs with the coming '<em style={{ fontStyle: 'italic', fontWeight: 400 }}>cybereconomy</em>' at the fruition of the Information Age, and pave the way for a new paradigm built on novel web3 technologies; an era established with greater sovereignty for small businesses and ultimately, the individual.
              </p>
            </div>
          </div>
        </div>
      </div>
            <footer className="w-full py-4 text-center">
        <p className="font-montserrat text-black/60" style={{ fontWeight: 200, fontSize: '0.75rem' }}>
          © 2026 SOV Solutions FZE LLC - All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}