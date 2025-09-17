import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Copy, Volume2 } from "lucide-react"

export function DemoSection() {
  return (
    <section className="py-20 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            See Context-Aware Translation in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Watch how our AI understands context and delivers nuanced translations
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Card className="border-border/50 bg-card/80 backdrop-blur">
            <CardContent className="p-8">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">English</span>
                    <Button variant="ghost" size="sm">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="rounded-lg bg-secondary/50 p-4">
                    <p className="text-lg leading-relaxed">
                      "The bank is closed today, but you can still make a deposit at the river bank where we're having
                      our picnic."
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">Context: Financial institution vs. riverbank</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Spanish</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Volume2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
                    <p className="text-lg leading-relaxed">
                      "El banco está cerrado hoy, pero aún puedes hacer un depósito en la orilla del río donde estamos
                      haciendo nuestro picnic."
                    </p>
                  </div>
                  <div className="text-sm text-accent">
                    ✓ Context preserved: "banco" (institution) vs "orilla" (riverbank)
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button className="gap-2">
                  Try Your Own Text
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
