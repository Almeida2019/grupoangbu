"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react"
import "../../styles/contact-form.css"

export default function Contacto() {
  const [formState, setFormState] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio do formulário
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      })

      // Reset do estado de submissão após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <>
      <section className="geometric-bg py-16 text-white md:py-24 relative overflow-hidden">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Contacte-nos</h1>
            <p className="text-lg md:text-xl">
              Estamos disponíveis para responder às suas questões e ajudá-lo com os nossos serviços.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background text-white">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6">Informações de Contacto</h2>

              <div className="mb-8 grid gap-6">
                <Card>
                  <CardContent className="flex items-start p-6">
                    <MapPin className="mr-4 h-6 w-6 shrink-0 text-angbu-orange" />
                    <div>
                      <h3 className="mb-1 font-semibold">Morada</h3>
                      <p className="text-muted-foreground">Bairro Deolinda Rodrigues, Rua Gago Coutinho, Cabinda</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start p-6">
                    <Phone className="mr-4 h-6 w-6 shrink-0 text-angbu-orange" />
                    <div>
                      <h3 className="mb-1 font-semibold">Telefone</h3>
                      <p className="text-muted-foreground">
                        +244 946 503 710
                        <br />
                        +244 913 226 684
                        <br />
                        +244 927 919 117
                        <br />
                        +244 990 919 117
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start p-6">
                    <Mail className="mr-4 h-6 w-6 shrink-0 text-angbu-orange" />
                    <div>
                      <h3 className="mb-1 font-semibold">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:angbu@grupoangbu.com" className="hover:text-angbu-orange">
                          angbu@grupoangbu.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="h-[300px] overflow-hidden rounded-lg bg-muted">
                {/* Aqui seria inserido um mapa do Google Maps */}
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Mapa do Google será carregado aqui</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6">Envie-nos uma Mensagem</h2>

              {isSubmitted ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                    <h3 className="mb-2 text-2xl font-bold">Mensagem Enviada!</h3>
                    <p className="text-muted-foreground">
                      Obrigado pelo seu contacto. Responderemos o mais brevemente possível.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome</Label>
                        <Input id="nome" name="nome" value={formState.nome} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" name="telefone" value={formState.telefone} onChange={handleChange} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="assunto">Assunto</Label>
                      <Input id="assunto" name="assunto" value={formState.assunto} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        rows={5}
                        value={formState.mensagem}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-angbu-orange text-white hover:bg-angbu-orange/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>A enviar...</>
                      ) : (
                        <>
                          Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
