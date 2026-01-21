export function Stats() {
  const stats = [
    { value: "50K+", label: "Clientes Satisfeitos" },
    { value: "98%", label: "Taxa de Aprovação" },
    { value: "200+", label: "Produtos Premium" },
    { value: "24h", label: "Envio Rápido" },
  ]

  return (
    <section className="py-16 border-y border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
