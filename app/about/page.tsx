"use client"

import { Navigation } from "@/components/navigation"

export default function About() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#f5f5f5' }}>
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-6 md:px-12 pt-20">
        <div className="max-w-2xl w-full">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-10 rounded-full" style={{ backgroundColor: '#008080' }} />
              <span className="text-center text-xs uppercase tracking-widest font-semibold text-black" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>About SOVINC</span>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-relaxed text-black/90" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                SOV Solutions, doing business as <em>SOVINC</em>, was founded & incorporated in the United Arab Emirates by
                Emmanuel Alamu in 2024.
              </p>

              <p className="text-base leading-relaxed text-black/90" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                The company specialises in consulting companies at the intersection of information & finance technology infrastructure, with a particular focus on peer-to-peer electronic transactions, overlay payment networks, and on-chain virtual asset protocols.
              </p>

              <p className="text-base leading-relaxed text-black/90" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                The core mission is to both enable & accelerate the integration of MSMEs with the coming <em>'cybereconomy'</em> at the fruition of the Information Age, and pave the way for a new paradigm built on novel web3 technologies; an era established with greater sovereignty for small businesses and ultimately, the individual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}