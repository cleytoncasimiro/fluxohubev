import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/assets/images";
import { companyValues } from "@/data/index";
import { ValueCard } from "@/components/Cards";
import { Shield, Target, Eye, Leaf } from "lucide-react";

export default function Sobre() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.SMART_CITY_2}
            alt="Cidades Inteligentes"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            A Infraestrutura por trás da <span className="text-primary">Mobilidade Elétrica no Brasil</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A Fluxo HUB desenvolve, implanta e opera soluções completas de recarga para veículos elétricos, conectando tecnologia, energia e oportunidades de negócio em um mercado em rápida expansão.
          </motion.p>
        </div>
      </section>

      {/* Quem Somos / Narrativa */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Uma Visão Além do Horizonte</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nascemos da necessidade de transformar a maneira como as pessoas e empresas se relacionam com a energia e o transporte. Na FLUXO HUB, não apenas instalamos carregadores; nós construímos ecossistemas inteligentes que garantem que nenhum motorista elétrico fique parado.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nossa abordagem é baseada em infraestrutura crítica. Entendemos que a recarga de um veículo elétrico é um serviço essencial que exige 100% de disponibilidade, segurança industrial e integração tecnológica total.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Missão</h4>
                    <p className="text-sm text-muted-foreground">Construir a rede de recarga mais confiável da América Latina.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Visão</h4>
                    <p className="text-sm text-muted-foreground">Ser a plataforma líder em gestão de energia para mobilidade.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-muted">
                <img
                  src={IMAGES.CARREGADORES_LINEUP_01_41}
                  alt="Linha de Carregadores Fluxo Hub"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl border border-border shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <Leaf className="text-primary w-10 h-10" />
                  <div>
                    <p className="text-sm font-medium">Energia Limpa</p>
                    <p className="text-xs text-muted-foreground">100% Fontes Renováveis</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nossos Valores Fundamentais</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os pilares que sustentam cada decisão e cada carregador instalado em nossa rede nacional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyValues.map((value) => (
              <ValueCard key={value.id} value={value} />
            ))}
          </div>
        </div>
      </section>


      {/* Futuro e Tecnologia */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl overflow-hidden border border-border relative">
            <div className="absolute inset-0 z-0">
              <img
                src={IMAGES.EV_CHARGING_10}
                alt="Tecnologia de Recarga"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-transparent" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 md:p-20 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Compromisso com o Amanhã</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Estamos expandindo nossa rede para cobrir todos os estados brasileiros até o final de 2026. Nosso compromisso é com a transição energética global, oferecendo uma experiência de recarga intuitiva, rápida e, acima de tudo, sustentável.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3 text-primary">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium">Segurança de Nível Industrial</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-[10px] font-bold">✓</div>
                    <span className="font-medium">Operação 24/7 Monitorada</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="p-8 bg-background/50 backdrop-blur rounded-2xl border border-primary/20">
                  <blockquote className="text-xl italic text-foreground font-light leading-relaxed">
                    "A FLUXO HUB não entrega apenas energia. Entregamos a liberdade de ir e vir sem emissões, com a certeza de que sempre haverá um hub pronto para você."
                  </blockquote>
                  <div className="mt-6">
                    <p className="font-bold text-primary">Equipe Executiva FLUXO HUB</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Liderança em Mobilidade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
