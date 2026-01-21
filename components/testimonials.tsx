import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Lucas Oliveira",
      role: "Atleta de Crossfit",
      image: "/fitness-man-athlete-portrait-muscular.jpg",
      content:
        "Os produtos da SANTFIT são incríveis! Meu desempenho melhorou muito desde que comecei a usar. Recomendo demais!",
      rating: 5,
    },
    {
      name: "Mariana Costa",
      role: "Personal Trainer",
      image: "/fitness-woman-trainer-portrait-athletic.jpg",
      content:
        "Indico para todos os meus alunos. Qualidade excepcional e preço justo. O atendimento também é impecável.",
      rating: 5,
    },
    {
      name: "Rafael Santos",
      role: "Bodybuilder",
      image: "/bodybuilder-man-portrait-muscular-gym.jpg",
      content: "Já testei várias marcas e a SANTFIT é disparada a melhor. Entrega rápida e produtos top de linha.",
      rating: 5,
    },
  ]

  return (
    <section id="depoimentos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O que nossos clientes dizem</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milhares de atletas confiam na SANTFIT para alcançar seus objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background border border-border rounded-xl p-6 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{`"${testimonial.content}"`}</p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
