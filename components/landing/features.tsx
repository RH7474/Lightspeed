import { Lightbulb, Radio, Zap } from "lucide-react"

const topics = [
  {
    icon: Lightbulb,
    title: "Reflection & Refraction",
    question: "Why do pools look shallower than they are?",
    description:
      "Discover how light bends when it moves between materials. You'll measure angles, trace beam paths, and understand why lenses can focus light to a point.",
  },
  {
    icon: Radio,
    title: "Waves & Color",
    question: "What makes a rainbow?",
    description:
      "See how white light contains every color, learn what wavelengths mean, and build a spectroscope to analyze light sources around you.",
  },
  {
    icon: Zap,
    title: "Lasers & Fiber Optics",
    question: "How does light carry data?",
    description:
      "Understand what makes laser light different, observe total internal reflection, and see how fiber optic cables use light to send information.",
  },
]

export function Features() {
  return (
    <section id="workshops" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-cyan mb-3">
            What You'll Explore
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Real Questions, Real Answers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Each workshop starts with a question you can answer by the end—through 
            experiments you run yourself.
          </p>
        </div>

        {/* Topic Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-brand-cyan/30 transition-colors"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted border border-border mb-4">
                  <topic.icon className="w-5 h-5 text-brand-cyan" />
                </div>

                {/* Question */}
                <p className="text-sm font-medium text-brand-cyan mb-2">
                  {topic.question}
                </p>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {topic.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
