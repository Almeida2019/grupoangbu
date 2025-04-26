"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-angbu-orange/20 bg-angbu-blue/95 backdrop-blur supports-[backdrop-filter]:bg-angbu-blue/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo%20Angbu%20Logo-z6UW9QLTrQWAgOEdOFpD3yVLXtJqvB.webp"
            alt="Grupo Angbu Logo"
            width={180}
            height={48}
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-8">
          <Link
            href="/"
            className={cn(
              "text-base font-medium transition-colors relative",
              isActive("/") ? "text-angbu-orange" : "text-white/80 hover:text-angbu-orange",
            )}
          >
            Início
            {isActive("/") && <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-angbu-orange" />}
          </Link>
          <Link
            href="/sobre"
            className={cn(
              "text-base font-medium transition-colors relative",
              isActive("/sobre") ? "text-angbu-orange" : "text-white/80 hover:text-angbu-orange",
            )}
          >
            Sobre
            {isActive("/sobre") && <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-angbu-orange" />}
          </Link>
          <Link
            href="/empresas"
            className={cn(
              "text-base font-medium transition-colors relative",
              isActive("/empresas") ? "text-angbu-orange" : "text-white/80 hover:text-angbu-orange",
            )}
          >
            Empresas
            {isActive("/empresas") && <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-angbu-orange" />}
          </Link>
          <Link
            href="/contacto"
            className={cn(
              "text-base font-medium transition-colors relative",
              isActive("/contacto") ? "text-angbu-orange" : "text-white/80 hover:text-angbu-orange",
            )}
          >
            Contacto
            {isActive("/contacto") && <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-angbu-orange" />}
          </Link>
          <Button
            asChild
            variant="secondary"
            className={cn(
              "bg-angbu-orange text-white hover:bg-angbu-orange/80 font-medium text-base px-6 py-2.5 shadow-md transition-transform hover:scale-105",
              isActive("/loja") && "ring-2 ring-white",
            )}
          >
            <Link href="/loja">Loja</Link>
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      <div className={cn("fixed inset-0 z-50 bg-angbu-blue md:hidden", isMenuOpen ? "flex flex-col" : "hidden")}>
        <div className="flex items-center justify-between border-b px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo%20Angbu%20Logo-z6UW9QLTrQWAgOEdOFpD3yVLXtJqvB.webp"
              alt="Grupo Angbu Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <X className="h-6 w-6" />
            <span className="sr-only">Fechar menu</span>
          </Button>
        </div>
        <nav className="flex flex-col space-y-6 p-6">
          <Link
            href="/"
            className={cn(
              "text-lg font-medium transition-colors",
              isActive("/") ? "text-angbu-orange" : "text-white/80 hover:text-angbu-orange",
            )}
            onClick={toggleMenu}
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className={cn(
              "text-lg font-medium transition-colors",
              isActive("/sobre") ? "text-angbu-orange" : "text-white/80 hover:text-angbu-orange",
            )}
            onClick={toggleMenu}
          >
            Sobre
          </Link>
          <Link
            href="/empresas"
            className={cn(
              "text-lg font-medium transition-colors",
              isActive("/empresas") ? "text-angbu-orange" : "text-white/80 hover:text-angbu-orange",
            )}
            onClick={toggleMenu}
          >
            Empresas
          </Link>
          <Link
            href="/contacto"
            className={cn(
              "text-lg font-medium transition-colors",
              isActive("/contacto") ? "text-angbu-orange" : "text-white/80 hover:text-angbu-orange",
            )}
            onClick={toggleMenu}
          >
            Contacto
          </Link>
          <Button
            asChild
            variant="secondary"
            className="bg-angbu-orange text-white hover:bg-angbu-orange/90 w-full text-lg font-medium"
          >
            <Link href="/loja" onClick={toggleMenu}>
              Loja
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
