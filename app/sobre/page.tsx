import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Target, Award } from "lucide-react"

export default function Sobre() {
  return (
    <>
      <section className="geometric-bg py-16 text-white md:py-24 relative overflow-hidden">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Grupo Angbu: Experiência e Diversificação</h1>
            <p className="text-lg md:text-xl">
              Conheça a nossa história, missão e visão como empresa angolana comprometida com a excelência e inovação.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background text-white">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6">A Nossa História</h2>
              <p className="mb-4 text-muted-foreground">
                O Grupo Angbu foi fundado a 18 de abril de 2017 pelo Engº Ângelo Gabriel Buanga, com a visão de criar
                uma empresa angolana que oferecesse serviços e produtos de excelência em diversos sectores.
              </p>
              <p className="mb-4 text-muted-foreground">
                Sediada em Cabinda, Angola, a empresa começou com um foco na área de informática e rapidamente expandiu
                para outros sectores, incluindo construção civil e obras públicas, formação profissional, fornecimento
                de internet, produção de ração animal, comércio e reparação electrónica.
              </p>
              <p className="mb-4 text-muted-foreground">
                Hoje, o Grupo Angbu é um conglomerado de empresas angolanas comprometidas com a excelência, oferecendo
                soluções completas para diversas áreas de atuação, sempre com o objetivo de contribuir para o
                desenvolvimento sustentável de Angola.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Calendar className="mb-4 h-10 w-10 text-angbu-orange" />
                    <h3 className="mb-2 font-bold">Fundação</h3>
                    <p className="text-sm text-muted-foreground">18 de abril de 2017</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Target className="mb-4 h-10 w-10 text-angbu-orange" />
                    <h3 className="mb-2 font-bold">Sectores</h3>
                    <p className="text-sm text-muted-foreground">7 áreas de atuação</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Award className="mb-4 h-10 w-10 text-angbu-orange" />
                    <h3 className="mb-2 font-bold">Compromisso</h3>
                    <p className="text-sm text-muted-foreground">Excelência e inovação</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-[400px] w-[400px] rounded-lg bg-muted flex items-center justify-center">
                <Award className="h-32 w-32 text-muted-foreground/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Missão, Visão e Valores</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Missão</h3>
                <p className="text-muted-foreground">
                  Fornecer serviços e produtos de excelência, agregar valor aos nossos clientes e contribuir para o
                  desenvolvimento sustentável de Angola.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Visão</h3>
                <p className="text-muted-foreground">
                  Ser uma empresa de referência em Angola e África, reconhecida pela qualidade dos seus serviços e
                  produtos, pela inovação e pelo compromisso com o desenvolvimento do país.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Valores</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Excelência em tudo o que fazemos</li>
                  <li>• Inovação constante</li>
                  <li>• Integridade e ética</li>
                  <li>• Compromisso com os clientes</li>
                  <li>• Responsabilidade social</li>
                  <li>• Valorização dos colaboradores</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="geometric-bg py-16 text-white md:py-24 relative overflow-hidden">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Descubra a Nova Angbu Comércio</h2>
            <p className="mb-8 text-lg">
              Conheça a nossa mais recente iniciativa: a Angbu Comércio, com loja física e virtual para produtos de
              informática e telecomunicações.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-angbu-orange text-white hover:bg-angbu-orange/90">
                <Link href="/loja">Visitar Loja Virtual</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-angbu-blue"
              >
                <Link href="/loja-fisica">Encontrar Loja Física</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
