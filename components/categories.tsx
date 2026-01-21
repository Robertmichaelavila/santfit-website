import { Dumbbell, Pill, Apple, Heart } from "lucide-react"

export function Categories() {
  const categories = [
    {
      icon: Dumbbell,
      title: "Whey Protein",
      description: "Proteínas de alta qualidade para ganho muscular",
      count: "45 produtos",
    },
    {
      icon: Pill,
      title: "Pré-Treino",
      description: "Energia e foco para treinos intensos",
      count: "32 produtos",
    },
    {
      icon: Apple,
      title: "Vitaminas",
      description: "Suplementação completa para sua saúde",
      count: "58 produtos",
    },
    {
      icon: Heart,
      title: "Termogênicos",
      description: "Acelere seu metabolismo e queime gordura",
      count: "28 produtos",
    },
  ]

  return (
    <section id="categorias" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Categorias</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Encontre os suplementos ideais para seus objetivos</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
              <span className="text-xs text-primary font-medium">{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
