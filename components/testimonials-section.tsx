import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Global Marketing Director",
    company: "TechCorp",
    avatar: "/professional-woman-diverse.png",
    content:
      "LinguaAI has revolutionized our international campaigns. The context-aware translations capture our brand voice perfectly across 15 markets.",
    rating: 5,
  },
  {
    name: "Miguel Rodriguez",
    role: "Lead Developer",
    company: "StartupXYZ",
    avatar: "/professional-man.png",
    content:
      "The API integration was seamless, and the real-time translation quality is outstanding. Our global user base loves the instant communication.",
    rating: 5,
  },
  {
    name: "Dr. Aisha Patel",
    role: "Research Director",
    company: "MedTech Solutions",
    avatar: "/professional-woman-doctor.png",
    content:
      "For medical documentation, accuracy is critical. LinguaAI's context understanding ensures our research papers maintain scientific precision.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Trusted by Global Teams</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            See how organizations worldwide use LinguaAI to break language barriers
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-base leading-relaxed mb-6">"{testimonial.content}"</blockquote>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
