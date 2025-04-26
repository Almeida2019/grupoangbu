"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import useEmblaCarousel from "embla-carousel-react"

const featuredProducts = [
  {
    id: 1,
    name: "Router WIFI 300Mbps N 2× Antenas Fixas",
    description: "Router wireless de alta velocidade com duas antenas fixas",
    price: "17.500,04 AKZ",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Router%20WIFI%20300Mbps%20N%202%C3%97%20Antenas%20Fixas-WCsgkQ2sjfI97ht0VZdQzw66E455wt.webp",
    link: "/loja/router-wifi-300mbps",
  },
  {
    id: 2,
    name: "Rato com Fio 800DPI",
    description: "Rato ergonómico com fio para uso diário",
    price: "5.622,48 AKZ",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rato%20com%20Fio%20800DPI-wtZyDWh1UxBeMlCGn8ihAYrKI3qkOv.webp",
    link: "/loja/rato-com-fio-800dpi",
  },
  {
    id: 3,
    name: "Papel Para Fotocopiadora - A4",
    description: "Papel de alta qualidade para impressão e fotocópias",
    price: "4.301,85 AKZ",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Papel%20Para%20Fotocopiadora%20-%20A4-nge0r0iDWeGszOX8KxBqoFolqRxsNk.webp",
    link: "/loja/papel-fotocopiadora-a4",
  },
  {
    id: 4,
    name: "Auscultadores Airbuds 8 Preto",
    description: "Auscultadores sem fios com estojo de carregamento",
    price: "21.090,00 AKZ",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Auscultadores%20Airbuds%208%20Preto-OGpRvCoVdJBygccl8xQdGDTAhW1T3p.webp",
    link: "/loja/auscultadores-airbuds-8",
  },
  {
    id: 5,
    name: "Tinteiro 305 3ym61ae preto 2720",
    description: "Tinteiro original HP para impressoras da série 2720",
    price: "14.390,22 AKZ",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tinteiro%20305%203ym61ae%20preto%202720-3XtKqbImlLPQ51DakJsCxLji3tr1xU.webp",
    link: "/loja/tinteiro-hp-305",
  },
  // Novos produtos adicionados
  {
    id: 6,
    name: "Cabo hdmi m/m 1.8 mt preto",
    description: "Cabo HDMI macho-macho de 1,8 metros, cor preta.",
    price: "1.800,26 AKZ",
    image: "/images/Cabo hdmi m:m 1.8 mt preto.webp",
    link: "/loja/cabo-hdmi-18mt",
  },
  {
    id: 7,
    name: "Toner w1500a preto lj m111/m141",
    description: "Toner preto compatível com impressoras LaserJet M111/M141.",
    price: "62.000,00 AKZ",
    image: "/images/Toner w1500a preto lj m111:m141.webp",
    link: "/loja/toner-w1500a-preto",
  },
  {
    id: 8,
    name: "Toner 59a laserjet pro preto",
    description: "Toner 59A preto para impressoras LaserJet Pro.",
    price: "150.000,00 AKZ",
    image: "/images/Toner 59a laserjet pro preto.webp",
    link: "/loja/toner-59a-preto",
  },
]

export function FeaturedProductsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  return (
    <section className="py-16 md:py-24 fluid-bg text-white">
      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Produtos em Destaque na Angbu Comércio</h2>
          <p className="mx-auto max-w-3xl text-lg text-white/80 leading-relaxed">
            Descubra os nossos produtos mais populares de informática e telecomunicações
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl px-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 pr-4"
                >
                  <Card className="overflow-hidden h-full border-angbu-orange/20 card-fluid flex flex-col shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative aspect-square bg-white w-full flex items-center justify-center p-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="max-h-full max-w-full object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-sm text-white/80 mb-2 leading-relaxed">{product.description}</p>
                      <div className="text-lg font-bold text-angbu-orange mb-4">{product.price}</div>
                      <div className="mt-auto">
                        <Button
                          asChild
                          className="w-full bg-angbu-orange text-white hover:bg-angbu-orange/90 font-medium text-base hover:scale-105 transition-transform"
                        >
                          <Link href={product.link}>Ver na Loja Virtual</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-angbu-orange text-white hover:bg-angbu-orange/80 border-none shadow-lg rounded-full p-2"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Produto anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-angbu-orange text-white hover:bg-angbu-orange/80 border-none shadow-lg rounded-full p-2"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Próximo produto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer transition-colors ${
                  index === selectedIndex ? "bg-angbu-orange" : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Ir para produto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
