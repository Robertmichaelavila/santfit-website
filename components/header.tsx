"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart, User } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">SANTFIT</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">
              Produtos
            </a>
            <a href="#categorias" className="text-muted-foreground hover:text-primary transition-colors">
              Categorias
            </a>
            <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Comprar Agora</Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">
                Produtos
              </a>
              <a href="#categorias" className="text-muted-foreground hover:text-primary transition-colors">
                Categorias
              </a>
              <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">
                Benefícios
              </a>
              <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
                Depoimentos
              </a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">Comprar Agora</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
