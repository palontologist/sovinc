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
      icon: "/gmail.png",
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
    <div className="w-full h-screen flex flex-col overflow-hidden bg-background">
      <Navigation />

      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 pt-20">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-12">
            <h1 style={{ fontFamily: "Playfair Display", fontSize: "2.5rem" }} className="font-medium text-foreground">
              Contact
            </h1>
            <p className="text-sm text-muted-foreground mt-3 tracking-wide">
              Reach out to discuss your web3 infrastructure needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.link}
                target={method.id !== "email" ? "_blank" : undefined}
                rel={method.id !== "email" ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHoveredChip(method.id)}
                onMouseLeave={() => setHoveredChip(null)}
                className={`p-6 rounded-lg border-2 transition-all duration-300 text-center group ${
                  hoveredChip === method.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                }`}
              >
                <img src={method.icon} alt={method.label} className="w-12 h-12 mx-auto mb-3 opacity-75 group-hover:opacity-100 transition-opacity" />
                <p
                  className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-300 ${
                    hoveredChip === method.id ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {method.label}
                </p>
                <p
                  className={`text-base font-medium mt-3 transition-colors duration-300 ${
                    hoveredChip === method.id ? "text-accent" : "text-foreground"
                  }`}
                >
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
