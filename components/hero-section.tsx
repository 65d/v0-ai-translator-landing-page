import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            The most intelligent
            <span className="text-accent"> translation platform </span>
            for global communication
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
            Experience context-aware translations powered by advanced AI. Break language barriers with real-time
            translation that understands nuance, culture, and intent.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="gap-2">
              Start Translating
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">Trusted by teams at</p>
            <div className="mt-6 flex items-center justify-center gap-8 opacity-60">
              <div className="text-lg font-semibold">TechCorp1</div>
              <div className="text-lg font-semibold">TechCorp2</div>
              <div className="text-lg font-semibold">TechCorp3</div>
              <div className="text-lg font-semibold">TechCorp4</div>
              <div className="text-lg font-semibold">TechCorp5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
