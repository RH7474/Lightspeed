"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Workshops", href: "#workshops" },
  { label: "Experience", href: "#experience" },
  { label: "For Students", href: "#for-students" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/lightspeed-logo.png"
              alt="Lightspeed Optical Workshops"
              width={44}
              height={44}
              className="h-9 w-9 lg:h-11 lg:w-11"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Lightspeed
              </span>
              <span className="ml-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Optical
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              className="bg-brand-cyan text-primary-foreground font-medium hover:bg-brand-cyan/90 transition-colors"
              asChild
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden rounded-md p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                className="w-full bg-brand-cyan text-primary-foreground font-medium"
                asChild
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
