"use client"

import { Navigation } from "@/components/navigation"
import { useState } from "react"

interface ContactChip {
  id: string
  label: string
  value: string
  link: string
  icon: string
}

export default function Contact() {
  const [hoveredChip, setHoveredChip] = useState<string | null>(null)

  const contactMethods: ContactChip[] = [
    {
      id: "email",
      label: "",
      value: "hello@sovinc.co",
      link: "mailto:hello@sovinc.co",
      icon: "/mail.png",
    },
    {
      id: "linkedin",
      label: "",
      value: "Emmanuel Alamu",
      link: "https://linkedin.com/in/emmanuelalamu",
      icon: "/linkedin.png",
    },
    {
      id: "instagram",
       label: "", 
      value: "@mannysov",
      link: "https://instagram.com/mannysov",
      icon: "/instagram.png",
    },
  ]

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <Navigation />

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 pb-2 sm:pb-4">
        <div className="max-w-3xl w-full">
          <h1 style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="font-light text-3xl sm:text-5xl md:text-6xl text-black text-center mb-4 sm:mb-6 md:mb-8">Contact</h1>
          <p style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="text-xs sm:text-sm md:text-base text-black/90 text-center mb-4 sm:mb-6 md:mb-8">
              Message me to discuss your web3 infrastructure needs
            </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.link}
                target={method.id !== "email" ? "_blank" : undefined}
                rel={method.id !== "email" ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHoveredChip(method.id)}
                onMouseLeave={() => setHoveredChip(null)}
                className={`p-3 sm:p-4 md:p-6 rounded-lg border-2 transition-all duration-300 text-center group ${
                  hoveredChip === method.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                }`}
              >
                <img src={method.icon} alt={method.label} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1.5 sm:mb-2 md:mb-3 opacity-75 group-hover:opacity-100 transition-opacity" />
<p
                   className={`font-avenir text-xs uppercase tracking-widest font-semibold transition-colors duration-300 ${
                     hoveredChip === method.id ? "text-accent" : "text-black/50"
                   }`}
                 >
                   {method.label}
                 </p>
                 <p
                   style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                   className={`text-xs sm:text-sm md:text-base font-light mt-1.5 sm:mt-2 md:mt-3 transition-colors duration-300 ${
                     hoveredChip === method.id ? "text-accent" : "text-black/90"
                   }`}
                 >
                   {method.value}
                 </p>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <footer className="w-full py-3 sm:py-4 text-center shrink-0">
        <p className="font-montserrat text-black/60 text-xs sm:text-[0.65rem]" style={{ fontWeight: 200 }}>
          © 2026 SOV Solutions FZE LLC - All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}