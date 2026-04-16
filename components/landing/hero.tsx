"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import { HeroScene } from "./hero-scene"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_50%,rgba(0,180,220,0.08),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            {/* Location Tag */}
            <p className="text-sm font-medium text-brand-cyan mb-4">
              Hands-on workshops in Ottawa, ON
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-foreground leading-[1.08]">
              What happens when you bend a beam of light?
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Find out for yourself. Build lenses, split light into rainbows,
              and discover why fiber optics can carry the internet halfway
              around the world.
            </p>

            {/* Dual CTA */}
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-brand-cyan text-primary-foreground font-semibold hover:bg-brand-cyan/90 transition-colors group"
                  asChild
                >
                  <Link href="#experience">
                    Explore the Labs
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted/50"
                  asChild
                >
                  <Link href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Book a Workshop
                  </Link>
                </Button>
              </div>

              {/* Path clarification */}
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-foreground/70">Students:</span> See what
                you'll build
                <span className="mx-2 text-border">|</span>
                <span className="text-foreground/70">Parents & Educators:</span>{" "}
                Book or request info
              </p>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div
              id="three-canvas-container"
              className="relative w-full max-w-md h-[420px]"
              aria-label="Interactive light visualization"
            >
              <HeroScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}