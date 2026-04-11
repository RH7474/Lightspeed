import { Beaker, Eye, Users, Wrench } from "lucide-react"

const experiences = [
  {
    icon: Eye,
    title: "See Light in Action",
    details: [
      "Watch laser beams trace visible paths through optical systems",
      "Observe how prisms split white light into full color spectrums",
      "See total internal reflection—the principle behind fiber optics",
    ],
  },
  {
    icon: Beaker,
    title: "Run Real Experiments",
    details: [
      "Measure focal lengths using lenses and light sources",
      "Test reflection angles with mirrors and protractors",
      "Compare how different materials bend light",
    ],
  },
  {
    icon: Wrench,
    title: "Build Working Devices",
    details: [
      "Construct a periscope using angled mirrors",
      "Assemble a simple spectroscope from everyday materials",
      "Create a pinhole camera that captures real images",
    ],
  },
  {
    icon: Users,
    title: "Learn in Small Groups",
    details: [
      "8-12 students per workshop session",
      "Direct access to instructors for questions",
      "Collaborative problem-solving with peers",
    ],
  },
]

export function WorkshopExperience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-cyan mb-3">
            Inside the Workshop
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            What Actually Happens
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Each 2-hour session mixes short explanations with hands-on lab time. 
            You won&apos;t just hear about optics—you&apos;ll work with light directly.
          </p>
        </div>

        {/* Experience Grid - More detailed */}
        <div className="grid md:grid-cols-2 gap-5">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="p-5 rounded-xl border border-border bg-card"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted border border-border">
                  <exp.icon className="w-5 h-5 text-brand-cyan" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {exp.title}
                  </h3>
                  <ul className="space-y-2">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-brand-cyan mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note for parents/educators */}
        <div className="mt-10 p-5 rounded-xl border border-border bg-card max-w-2xl">
          <p className="text-sm font-medium text-foreground mb-2">A note for parents and educators</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our workshops are designed to complement classroom physics. Students gain practical 
            experience with concepts like reflection, refraction, and wave behavior—and often 
            leave asking questions their teachers love to hear.
          </p>
        </div>
      </div>
    </section>
  )
}
