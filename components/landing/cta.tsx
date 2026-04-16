import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            See Light Differently
          </h2>

          {/* Description */}
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Ready to book a workshop, schedule a school visit, or just ask a question? 
            Get in touch.
          </p>

          {/* Primary CTA */}
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-brand-cyan text-primary-foreground font-semibold hover:bg-brand-cyan/90 transition-colors px-8"
              asChild
            >
              <Link href="mailto:Rayhuda85@gmail.com?subject=Workshop Inquiry">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
          </div>

          {/* Contact details */}
          <div className="mt-10 pt-6 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-sm">
              <a 
                href="mailto:Rayhuda85@gmail.com" 
                className="text-foreground hover:text-brand-cyan transition-colors"
              >
                Rayhuda85@gmail.com
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <span className="text-muted-foreground">
                Ottawa, Ontario
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
