import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"

export function Products() {
  const products = [
    {
      name: "Whey Protein Isolado",
      price: "R$ 189,90",
      originalPrice: "R$ 229,90",
      image: "/whey-protein-powder-container-white-green-fitness-.jpg",
      rating: 4.9,
      reviews: 324,
      badge: "Mais Vendido",
    },
    {
      name: "Creatina Monohidratada",
      price: "R$ 89,90",
      originalPrice: null,
      image: "/creatine-supplement-container-black-green-fitness-.jpg",
      rating: 4.8,
      reviews: 256,
      badge: null,
    },
    {
      name: "Pré-Treino Extreme",
      price: "R$ 129,90",
      originalPrice: "R$ 159,90",
      image: "/pre-workout-supplement-container-neon-green-energy.jpg",
      rating: 4.7,
      reviews: 189,
      badge: "Promoção",
    },
    {
      name: "BCAA 2:1:1",
      price: "R$ 79,90",
      originalPrice: null,
      image: "/bcaa-amino-acid-supplement-capsules-container-gree.jpg",
      rating: 4.6,
      reviews: 142,
      badge: null,
    },
    {
      name: "Glutamina Pura",
      price: "R$ 69,90",
      originalPrice: "R$ 89,90",
      image: "/glutamine-supplement-powder-container-white-fitnes.jpg",
      rating: 4.8,
      reviews: 198,
      badge: "Novo",
    },
    {
      name: "Multivitamínico Sport",
      price: "R$ 59,90",
      originalPrice: null,
      image: "/multivitamin-supplement-bottle-capsules-green-heal.jpg",
      rating: 4.9,
      reviews: 276,
      badge: null,
    },
  ]

  return (
    <section id="produtos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Produtos em Destaque</h2>
            <p className="text-muted-foreground max-w-xl">
              Seleção especial dos nossos produtos mais populares e bem avaliados
            </p>
          </div>
          <Button variant="outline" className="border-border text-foreground hover:bg-secondary w-fit bg-transparent">
            Ver Todos
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-square bg-secondary/50 p-4">
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{product.badge}</Badge>
                )}
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-foreground">{product.name}</h3>

                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Adicionar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
