"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

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
              and discover why fiber optics can carry the internet halfway around the world.
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
                <span className="text-foreground/70">Students:</span> See what you&apos;ll build
                <span className="mx-2 text-border">|</span>
                <span className="text-foreground/70">Parents & Educators:</span> Book or request info
              </p>
            </div>
          </div>

          {/* Visual Container - Clean stage for future Three.js animation */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* 
              FUTURE THREE.JS ANIMATION STAGE
              
              Design intent:
              - Left-to-right particle/light flow
              - Clean container ready for canvas injection
              - Minimal visual presence now, full animation later
            */}
            <div 
              id="three-canvas-container"
              className="relative w-full max-w-md aspect-square"
              aria-label="Interactive light visualization"
            >
              {/* Stage container */}
              <div className="absolute inset-0 rounded-2xl border border-border/30 bg-muted/5 overflow-hidden">
                
                {/* Subtle horizontal flow suggestion */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Faint flow lines - left to right */}
                  <div className="absolute top-[40%] left-[5%] w-[60%] h-px bg-gradient-to-r from-brand-cyan/5 via-brand-cyan/15 to-transparent" />
                  <div className="absolute top-[50%] left-[8%] w-[50%] h-px bg-gradient-to-r from-brand-cyan/3 via-brand-cyan/10 to-transparent" />
                  <div className="absolute top-[60%] left-[3%] w-[55%] h-px bg-gradient-to-r from-brand-lime/3 via-brand-lime/8 to-transparent" />
                </div>

                {/* Minimal particles suggesting motion */}
                <div className="absolute top-[38%] left-[10%] w-1 h-1 rounded-full bg-brand-cyan/20" />
                <div className="absolute top-[50%] left-[15%] w-1.5 h-1.5 rounded-full bg-brand-cyan/15" />
                <div className="absolute top-[62%] left-[8%] w-1 h-1 rounded-full bg-brand-lime/15" />
                
                {/* Soft central glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-brand-cyan/5 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
