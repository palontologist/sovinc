import { Navigation } from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SOVINC | Web3 Infrastructure Consulting",
  description: "About SOVINC - Enabling small businesses to operate on sovereign, on‑chain infrastructure instead of legacy financial rails.",
}

export default function About() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#f5f5f5' }}>
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-6 md:px-12 pt-20">
        <div className="max-w-4xl w-full text-center">
          <div className="space-y-12">
            <h1 className="font-montserrat font-light text-5xl md:text-6xl text-black">About</h1>

            <div className="space-y-8 max-w-3xl mx-auto">
              <p className="font-avenir text-base leading-relaxed text-black/90 text-center">
                SOV Solutions, doing business as <em>SOVINC</em>, was founded & incorporated in the United Arab Emirates by Emmanuel Alamu in 2024.
              </p>

              <p className="font-avenir text-base leading-relaxed text-black/90 text-center">
                The company specialises in consulting companies at the intersection of information & finance technology infrastructure, with a particular focus on peer-to-peer electronic transactions, overlay payment networks, and on-chain virtual asset protocols.
              </p>

              <p className="font-avenir text-base leading-relaxed text-black/90 text-center">
                The core mission is to both enable & accelerate the integration of MSMEs with the coming <em>cybereconomy</em> at the fruition of the Information Age, and pave the way for a new paradigm built on novel web3 technologies; an era established with greater sovereignty for small businesses and ultimately, the individual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
