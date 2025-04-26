"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wheat, Wrench, GraduationCapIcon, Wifi, Building } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

const companies = [
  {
    id: 1,
    name: "Cab-Ração",
    description: "Produção e comercialização de rações para animais.",
    icon: Wheat,
    link: "/empresas/cab-racao",
  },
  {
    id: 2,
    name: "Angbu Telecomunicação e Electrónica",
    description: "Serviços de reparação e manutenção de equipamentos eletrónicos.",
    icon: Wrench,
    link: "/empresas/angbu-telecomunicacao",
  },
  {
    id: 3,
    name: "Angbu Training Center (ATC)",
    description: "Centro de formação profissional com diversos cursos técnicos.",
    icon: GraduationCapIcon,
    link: "/empresas/atc",
  },
  {
    id: 4,
    name: "Tchiowa Net",
    description: "Fornecimento de serviços de Internet em Cabinda e Soyo.",
    icon: Wifi,
    link: "/empresas/tchiowa-net",
  },
  {
    id: 5,
    name: "Angbu Empreitada",
    description: "Serviços de construção civil e obras públicas.",
    icon: Building,
    link: "/empresas/angbu-empreitada",
  },
]

export function CompaniesSlider() {
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
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Conheça as Empresas do Grupo Angbu</h2>
          <p className="mx-auto max-w-3xl text-lg">
            Um conglomerado de empresas angolanas comprometidas com a excelência
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl px-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {companies.map((company) => {
                const Icon = company.icon

                return (
                  <div
                    key={company.id}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 pr-4"
                  >
                    <Card className="overflow-hidden h-full border-none bg-angbu-blue/50 card-fluid flex flex-col">
                      <CardContent className="p-8 flex flex-col items-center text-center h-full">
                        <div className="rounded-full bg-angbu-blue/80 p-6 mb-6">
                          <Icon className="h-12 w-12 text-angbu-orange" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                        <p className="text-white/80 mb-6 flex-grow">{company.description}</p>
                        <div className="w-full mt-auto">
                          <Button
                            asChild
                            variant="outline"
                            className="border-angbu-orange text-angbu-orange hover:bg-angbu-orange hover:text-white w-full"
                          >
                            <Link href={company.link}>Saber Mais</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-angbu-orange text-white hover:bg-angbu-orange/80 border-none shadow-lg rounded-full p-2"
            onClick={() => emblaApi?.scrollPrev()}
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
            <span className="sr-only">Previous slide</span>
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-angbu-orange text-white hover:bg-angbu-orange/80 border-none shadow-lg rounded-full p-2"
            onClick={() => emblaApi?.scrollNext()}
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
            <span className="sr-only">Next slide</span>
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {companies.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer transition-colors ${
                  index === selectedIndex ? "bg-angbu-orange" : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
