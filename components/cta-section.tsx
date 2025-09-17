import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-4xl border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10">
          <CardContent className="p-12 text-center">
            <Sparkles className="mx-auto h-12 w-12 text-accent mb-6" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-4">
              Ready to Transform Your Global Communication?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
              Join thousands of teams using LinguaAI to break language barriers and connect with audiences worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
