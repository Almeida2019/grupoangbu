"use client"

import Image from "next/image"
import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

const partners = [
  {
    id: 1,
    name: "YSAM",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-G2FWUV49k5G8qv6pxhEkaUNHxwk8Ov.png",
    alt: "YSAM - Organizações YSAM Prestação e Serviços",
  },
  {
    id: 2,
    name: "DSTV",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-y4NaPaSNpwJkGTMe00oKtzXurMK3ci.png",
    alt: "DSTV",
  },
  {
    id: 3,
    name: "Paratus",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-kwkZaZiVCbVpcPVTil1sxIqoIu8hk8.png",
    alt: "Paratus - Always Prepared",
  },
  {
    id: 4,
    name: "MSByte",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-NojSp1n8t7ddtwtm1O4dJ3sndtCAyL.png",
    alt: "MSByte Solutions, LDA",
  },
  {
    id: 5,
    name: "Angola Telecom",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-6aE86hrfFol0PvkTLZYg7eJkAjOLGX.png",
    alt: "Angola Telecom",
  },
  {
    id: 6,
    name: "Agrogebil",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-JQU767unpCUEuLwvvdmbbqQIA6D7JS.png",
    alt: "Agrogebil - Soluções Agronegócios",
  },
  {
    id: 7,
    name: "SMAUT",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-Yg0uIZYHNJYIE0HBSiwprtfx9L2LJp.png",
    alt: "SMAUT - Your Network, Our Passion",
  },
  {
    id: 8,
    name: "Plando Business",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-vKhWpuJdD2PBR7Kte3t25AQcYrE84b.png",
    alt: "PLB Plando Business - Prestação de Serviços",
  },
  {
    id: 9,
    name: "CJB - Tchiowa Serviços",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-HYtNRe32qnmyM8O2MBzBoHHrRU5d7z.png",
    alt: "CJB - Tchiowa Serviços LDA",
  },
  {
    id: 10,
    name: "Stylus",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-M4oXg3ddWBCLkZHHhk28FtXRWmwbKI.png",
    alt: "Stylus",
  },
  {
    id: 11,
    name: "Apolonia Complexus",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-ClFyAb4mGvVmieTeeMnM6Tppg2NRpe.png",
    alt: "Apolonia Complexus",
  },
  {
    id: 12,
    name: "LM Entretenimentos",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-SKWpuavuoDQSUD2wPsGJeNr2hIgv1G.png",
    alt: "LM Entretenimentos - Comércio Geral, Prestação de Serviços",
  },
  {
    id: 13,
    name: "CMA CGM",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-s38kB4bTFbi12KIX90YtdTgYUGDc9N.png",
    alt: "CMA CGM",
  },
  {
    id: 14,
    name: "Baker Hughes",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-27lMPtfLiqR2JjyPJ5gQy0wVt9xf7X.png",
    alt: "Baker Hughes",
  },
  {
    id: 15,
    name: "KixiCrédito",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-5mcvpbMWWvbRzmGi0gK6sH2ioTMDYg.png",
    alt: "KixiCrédito - Parceira nos Negócios",
  },
  {
    id: 16,
    name: "INEFOP",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-j8Z6Tpugch80ly8Tu2aMgDAtNhpvIC.png",
    alt: "INEFOP",
  },
  {
    id: 17,
    name: "Projecto de Desenvolvimento",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-iErx7ezns1rJtblxwtwUNPK1U6BTxr.png",
    alt: "Projecto de Desenvolvimento das Cadeias de Valor Agrícola da Província de Cabinda",
  },
  {
    id: 18,
    name: "Movicel",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-WE1K6HSnj0zmyvIh2o6EaXclOYwmwz.png",
    alt: "Movicel",
  },
  {
    id: 19,
    name: "World Vision",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-hJMDnOrVVnnhE8q0yYF1oxVWfBbYfw.png",
    alt: "World Vision",
  },
  {
    id: 20,
    name: "INACOM",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-X6DNH1DCV48LWHjzCezwvbZjHiU7y4.png",
    alt: "INACOM",
  },
]

// Group partners into sets of 5
const partnerGroups = []
for (let i = 0; i < partners.length; i += 5) {
  partnerGroups.push(partners.slice(i, i + 5))
}

export function PartnersSlider() {
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
    <section className="py-16 md:py-24 fluid-bg-muted text-white">
      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Os Nossos Parceiros de Confiança</h2>
          <p className="mx-auto max-w-3xl text-lg text-white/80 leading-relaxed">
            Trabalhamos com as melhores empresas para garantir a qualidade dos nossos serviços
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl px-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {partnerGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="flex-[0_0_100%] min-w-0">
                  <div className="flex justify-center items-center gap-4 flex-wrap py-4">
                    {group.map((partner) => (
                      <div
                        key={partner.id}
                        className="flex justify-center items-center h-24 w-40 bg-white rounded-lg p-4 card-fluid m-2 shadow-md transition-transform hover:scale-105"
                      >
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.alt}
                          width={120}
                          height={60}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-angbu-orange text-white hover:bg-angbu-orange/80 border-none shadow-lg rounded-full p-2"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Parceiros anteriores"
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
            aria-label="Próximos parceiros"
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
            {partnerGroups.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer transition-colors ${
                  index === selectedIndex ? "bg-angbu-orange" : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Ir para grupo de parceiros ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
