import { GraduationCap, Users, School } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    subtitle: "Grades 9-12",
    description:
      "You like knowing how things actually work. You&apos;ve wondered why the sky is blue, how cameras capture images, or what happens inside a laser. Here, you&apos;ll find out.",
    cta: "Explore the labs",
    ctaHref: "#experience",
    ctaVariant: "default" as const,
  },
  {
    icon: Users,
    title: "Parents",
    subtitle: "Supporting curious learners",
    description:
      "You want more than screen time for your student. Our workshops offer real scientific exploration—the kind of experience that can shape how they see the world.",
    cta: "Book a session",
    ctaHref: "#contact",
    ctaVariant: "outline" as const,
  },
  {
    icon: School,
    title: "Educators",
    subtitle: "Schools & programs",
    description:
      "Bring your class for a field trip, or arrange an enrichment session. We provide hands-on learning that reinforces physics curriculum with practical application.",
    cta: "Request info",
    ctaHref: "#contact",
    ctaVariant: "outline" as const,
  },
]

export function Audience() {
  return (
    <section id="for-students" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-cyan mb-3">
            Who It&apos;s For
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Students, Parents, and Educators
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Different reasons to be here—same goal: understanding how light works.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="flex flex-col p-6 rounded-xl border border-border bg-card"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-muted border border-border mb-4">
                <audience.icon className="w-5 h-5 text-brand-cyan" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {audience.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {audience.description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-5 pt-4 border-t border-border">
                <Button
                  variant={audience.ctaVariant}
                  size="sm"
                  className={audience.ctaVariant === "default" 
                    ? "bg-brand-cyan text-primary-foreground hover:bg-brand-cyan/90 w-full" 
                    : "w-full"
                  }
                  asChild
                >
                  <Link href={audience.ctaHref}>
                    {audience.cta}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
