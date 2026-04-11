import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { WorkshopExperience } from "@/components/landing/workshop-experience"
import { Audience } from "@/components/landing/audience"
import { Outcomes } from "@/components/landing/outcomes"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <WorkshopExperience />
      <Audience />
      <Outcomes />
      <CTA />
      <Footer />
    </main>
  )
}
