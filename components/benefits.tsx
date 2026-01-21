import { Truck, Shield, RefreshCcw, Headphones } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: Truck,
      title: "Frete Grátis",
      description: "Em compras acima de R$ 199 para todo o Brasil",
    },
    {
      icon: Shield,
      title: "Produtos Originais",
      description: "100% autênticos com certificação de qualidade",
    },
    {
      icon: RefreshCcw,
      title: "Troca Fácil",
      description: "30 dias para trocar ou devolver sem complicação",
    },
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Atendimento especializado a qualquer hora",
    },
  ]

  return (
    <section id="beneficios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Por que escolher a SANTFIT?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compromisso com qualidade, preço justo e satisfação garantida
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
