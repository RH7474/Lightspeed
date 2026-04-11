const understandings = [
  "How lenses bend light to focus images",
  "Why light splits into colors through a prism",
  "How mirrors work—and why some flip images",
  "What total internal reflection is and why it matters for fiber optics",
  "The difference between laser light and ordinary light",
  "How your eye (and cameras) form images",
]

const builds = [
  "A periscope to see around corners",
  "A spectroscope to analyze light sources",
  "A pinhole camera that captures real images",
]

export function Outcomes() {
  return (
    <section className="relative py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* What You'll Understand */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-brand-cyan mb-3">
              What You&apos;ll Walk Away With
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              Real Understanding
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              After the workshop, you&apos;ll be able to explain these concepts 
              clearly—because you tested them yourself.
            </p>

            <ul className="mt-6 space-y-2.5">
              {understandings.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You'll Build */}
          <div>
            <div className="lg:mt-10">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Projects You&apos;ll Build
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                Each workshop includes at least one take-home project. 
                You build it, you keep it, it actually works.
              </p>

              <div className="space-y-2.5">
                {builds.map((item) => (
                  <div 
                    key={item} 
                    className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-lime flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note for educators */}
            <div className="mt-8 p-4 rounded-lg border border-border bg-card">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">For educators:</span> Workshop 
                content aligns with Ontario high school physics curriculum covering waves, 
                light, and optics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
