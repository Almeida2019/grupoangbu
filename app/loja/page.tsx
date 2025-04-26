"use client"; // Keep this directive

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Truck, CreditCard } from "lucide-react";
import * as React from "react";

export default function Loja() {
  // Restore the products array
  const products = [
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
    {
      id: 9,
      name: "Tablet TAB60 KIDS 4GB/128GB AZUL",
      description: "Tablet infantil resistente, ideal para crianças, com capa protetora azul.",
      price: "119 000,00 AKZ",
      image: "/images/TABLET TAB60 KIDS 4GB:128GB AZUL.webp",
      link: "/loja/tablet-tab60-kids-azul",
    },
    {
      id: 10,
      name: "Auscultadores Airbuds 8 Branco",
      description: "Auscultadores sem fios, cor branca, com estojo de carregamento e display digital.",
      price: "20 000,00 AKZ",
      image: "/images/Auscultadores Airbuds 8 Branco.webp",
      link: "/loja/airbuds-8-branco",
    },
    {
      id: 11,
      name: "Tinteiro 903xl ciano (t6m03ae)",
      description: "Tinteiro HP 903XL cor ciano, alta capacidade, referência T6M03AE.",
      price: "26 000,00 AKZ",
      image: "/images/Tinteiro 903xl ciano (t6m03ae).webp",
      link: "/loja/tinteiro-903xl-ciano",
    },
    {
      id: 12,
      name: "Tinteiro 903xl Magenta (t6m07ae)",
      description: "Tinteiro HP 903XL cor magenta, alta capacidade, referência T6M07AE.",
      price: "27 100,00 AKZ",
      image: "/images/Tinteiro 903xl Magenta (t6m07ae).webp",
      link: "/loja/tinteiro-903xl-magenta",
    },
    {
      id: 13,
      name: "Tinteiro 903xl amarelo (t6m11ae)",
      description: "Tinteiro HP 903XL cor amarela, alta capacidade, referência T6M11AE.",
      price: "27 100,00 AKZ",
      image: "/images/Tinteiro 903xl amarelo (t6m11ae).webp",
      link: "/loja/tinteiro-903xl-amarelo",
    },
    {
      id: 14,
      name: "TV STICK MI ANDROID 4K 8GB",
      description: "High-quality Android TV stick with 4K support and 8GB storage.",
      price: "78 000,00 AKZ",
      image: "/images/TV STICK MI ANDROID 4K 8GB.webp",
      link: "/loja/tv-stick-mi-android-4k",
    },
    {
      id: 15,
      name: "Smartwatch R50 Preto",
      description: "Stylish and functional smartwatch with multiple features.",
      price: "16 587,00 AKZ",
      image: "/images/Smartwatch R50 Preto.webp",
      link: "/loja/smartwatch-r50-preto",
    },
    {
      id: 16,
      name: "Tablet Tab30 Kids 10\" Wifi 2GB+64GB Rosa",
      description: "Kid-friendly tablet with robust features and parental controls.",
      price: "77 406,00 AKZ",
      image: "/images/Tablet Tab30 Kids 10\" Wifi 2GB+64GB Rosa.webp",
      link: "/loja/tablet-tab30-kids-rosa",
    }
  ];

  // Removed the test useEffect hook

  return (
    // Restore the main page structure
    <>
      {/* You might want to add back the hero section here if you had one */}
      {/* Example Hero Section:
      <section className="fluid-bg py-16 text-white md:py-24 relative overflow-hidden">
         ... hero content ...
      </section>
      */}

      {/* Products Grid Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center">
            Produtos em Destaque
          </h2>
          {/* Uncomment the product grid section below */}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden flex flex-col">
                <Link href={product.link} className="block group">
                  <Image
                    alt={product.name}
                    className="aspect-square object-cover w-full group-hover:opacity-80 transition-opacity"
                    height={300}
                    src={product.image}
                    width={300}
                  />
                </Link>
                <CardContent className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg truncate group-hover:underline">
                    <Link href={product.link}>{product.name}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 flex-grow">
                    {product.description}
                  </p>
                  <p className="font-semibold text-base mt-2">{product.price}</p>
                  <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                    <Link href={product.link}>
                      Ver detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
           {/* Remove this placeholder paragraph */}
           {/* 
           <p className="text-center text-muted-foreground mt-8">
             (Product grid will appear here once UI components are available)
           </p> 
           */}
        </div>
      </section>
    </>
  );
}