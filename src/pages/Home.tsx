import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Download, Send, ArrowRight, Zap, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { IMAGES } from "@/assets/images";
import { ROUTE_PATHS } from "@/lib/index";
import { products, appFeatures, companyValues } from "@/data/index";
import { ProductCard, ValueCard } from "@/components/Cards";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true
  },
  transition: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1]
  }
};
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: {
    once: true
  }
};
export default function Home() {
  return <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.ELETROPOSTO_AMBIENTE_01_42} alt="Electric Vehicle Charging" className="w-full h-full object-cover brightness-[0.4]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-3xl" initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }}>
            <motion.span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }}>
              Construindo a nova era da mobilidade elétrica
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              A Infraestrutura do <span className="text-primary">Amanhã</span>, Começa Agora.
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Estamos criando uma rede inteligente de recarga para um Brasil que já mudou. Energia limpa, tecnologia e eficiência para quem está à frente do seu tempo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:shadow-[0_0_20px_oklch(var(--primary)/0.4)]">
                <Link to={ROUTE_PATHS.PRODUTOS}>
                  Explorar Soluções <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10">
                <Link to={ROUTE_PATHS.APLICATIVO}>
                  Baixar o App
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Sobre Section */}
      <section id="sobre" className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
Fluxo HUB — Conectando energia, tecnologia e movimento
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A FLUXO HUB é a espinha dorsal da infraestrutura de recarga no Brasil, unindo tecnologia de ponta e energia renovável para mover o país
              </p>
              <div className="space-y-6">
                {companyValues.map(value => <div key={value.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>)}
              </div>
              <Button asChild variant="link" className="mt-8 p-0 text-primary group">
                <Link to={ROUTE_PATHS.SOBRE}>
                  Conheça nossa história <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            <motion.div className="relative" initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src={IMAGES.SUSTAINABLE_MOBILITY_1} alt="Sustainability" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card p-8 rounded-2xl shadow-xl border border-border hidden md:block max-w-xs">
                <p className="text-primary font-bold text-4xl mb-1">100%</p>
                <p className="text-sm font-medium text-foreground">Energia Renovável</p>
                <p className="text-xs text-muted-foreground mt-2">Nossa rede é alimentada exclusivamente por fontes limpas certificadas.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções de Recarga</h2>
            <p className="text-muted-foreground">
              Equipamentos de alta tecnologia projetados para cada necessidade, do carregamento ultra-rápido em rodovias à praticidade residencial.
            </p>
          </div>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{
          once: true
        }}>
            {products.map(product => <ProductCard key={product.id} product={product} />)}
          </motion.div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to={ROUTE_PATHS.PRODUTOS}>Ver Todos os Modelos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* App CTA Section */}
      <section id="app" className="py-24 bg-foreground text-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div className="relative flex justify-center" initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <img src={IMAGES.WHATSAPP_IMAGE_2026_01_28_AT_12_54_01_46} alt="Fluxo Hub App" className="w-[300px] md:w-[400px] drop-shadow-[0_0_50px_rgba(10,205,162,0.3)] h-[600px] object-cover" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
            </motion.div>
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Sua Recarga na <span className="text-primary">Palma da Mão</span>
              </h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Com o app Fluxo Hub, você localiza estações, navega com precisão, gerencia pagamentos e acompanha o status da sua recarga em tempo real. Tudo intuitivo, rápido e seguro.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {appFeatures.slice(0, 4).map(feature => <div key={feature.id} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-white/90 font-medium">{feature.title}</p>
                  </div>)}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="https://apps.apple.com/br/app/fluxo-hub/id6754165717" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                  <SiAppstore className="text-2xl" />
                  <div className="text-left">
                    <p className="text-[10px] leading-none opacity-70">Download on the</p>
                    <p className="text-lg font-bold leading-tight">App Store</p>
                  </div>
                </a>
                <a href="https://play.google.com/store/details?id=br.com.voltbras.fluxohub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                  <SiGoogleplay className="text-2xl" />
                  <div className="text-left">
                    <p className="text-[10px] leading-none opacity-70">GET IT ON</p>
                    <p className="text-lg font-bold leading-tight">Google Play</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para o Futuro?</h2>
                <p className="text-lg text-muted-foreground mb-10">
                  Dúvidas sobre nossos produtos, interesse em parcerias ou deseja levar a Fluxo Hub para o seu condomínio ou empresa? Nossa equipe técnica está à disposição.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Globe className="h-5 w-5" />
                    </div>
                    <p className="font-medium">Atuação Nacional - Sede em Belém/PA</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Shield className="h-5 w-5" />
                    </div>
                    <p className="font-medium">Suporte Técnico Especializado 24/7</p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="bg-card p-8 rounded-3xl border border-border shadow-lg" initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }}>
                <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Seu nome completo" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" className="h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input id="subject" placeholder="Como podemos ajudar?" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" placeholder="Descreva sua solicitação..." className="min-h-[120px] resize-none" />
                  </div>
                  <Button className="w-full h-12 text-lg">
                    Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}