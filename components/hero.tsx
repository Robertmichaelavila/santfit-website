import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Frete grátis acima de R$ 199</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Potencialize seus <span className="text-primary">resultados</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Suplementos de alta qualidade para atletas e entusiastas fitness. Sua evolução começa aqui.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                Ver Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary text-lg px-8 bg-transparent"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
            <img src="/fitness-athlete-muscular-person-with-supplements-p.jpg" alt="Atleta SANTFIT" className="relative w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
