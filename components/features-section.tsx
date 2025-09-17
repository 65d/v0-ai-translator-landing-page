import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, Shield, Globe2, MessageSquare, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Context Understanding",
    description:
      "Advanced AI that comprehends cultural nuances, idioms, and contextual meaning for accurate translations.",
  },
  {
    icon: Zap,
    title: "Real-time Translation",
    description: "Instant translation as you type with sub-second response times and seamless user experience.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and privacy protection for sensitive documents and communications.",
  },
  {
    icon: Globe2,
    title: "100+ Languages",
    description: "Support for over 100 languages with continuous expansion and dialect recognition.",
  },
  {
    icon: MessageSquare,
    title: "Smart Suggestions",
    description: "AI-powered alternative translations and tone adjustments for perfect communication.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Shared glossaries, translation memories, and collaborative workflows for teams.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Intelligent Translation Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our AI understands context, culture, and intent to deliver translations that feel natural and accurate.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-accent" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
