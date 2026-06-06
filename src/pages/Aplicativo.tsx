import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Download, CheckCircle2, Map, CreditCard, ShieldCheck } from "lucide-react";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { ROUTE_PATHS } from "@/lib/index";
import { appFeatures } from "@/data/index";
import { FeatureCard } from "@/components/Cards.tsx";
import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { springPresets, fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
const APPLE_STORE_URL = "https://apps.apple.com/br/app/fluxo-hub/id6754165717";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=br.com.voltbras.fluxohub&pcampaignid=web_share";
export default function Aplicativo() {
  return <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
              <motion.div variants={fadeInUp}>
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Tecnologia na Palma da Mão
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Controle Total da Sua <br />
                  <span className="text-primary">Recarga Elétrica</span>
                </h1>
                <p className="mt-6 text-xl text-muted-foreground max-w-xl leading-relaxed">
                  O App FLUXO HUB é o seu centro de comando para mobilidade elétrica. Encontre estações, acompanhe o carregamento em tempo real e gerencie seus pagamentos com segurança industrial.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 bg-foreground text-background hover:bg-foreground/90">
                  <a href={APPLE_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <SiAppstore className="text-xl" />
                    <div className="text-left">
                      <p className="text-[10px] leading-none opacity-70 uppercase">Baixar na</p>
                      <p className="text-base font-semibold">App Store</p>
                    </div>
                  </a>
                </Button>
                <Button asChild size="lg" className="rounded-full h-14 px-8 bg-foreground text-background hover:bg-foreground/90">
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <SiGoogleplay className="text-xl" />
                    <div className="text-left">
                      <p className="text-[10px] leading-none opacity-70 uppercase">Disponível no</p>
                      <p className="text-base font-semibold">Google Play</p>
                    </div>
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full object-cover" />
                    </div>)}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">+25.000</span> motoristas já utilizam a rede
                </p>
              </motion.div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            scale: 0.9,
            x: 50
          }} animate={{
            opacity: 1,
            scale: 1,
            x: 0
          }} transition={springPresets.gentle} className="relative">
              <div className="relative z-10 max-w-[320px] mx-auto">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full z-0" />
                <img src="/images/WhatsApp Image 2026-01-28 at 12.54.03.jpeg" alt="Fluxo Hub App Interface" className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-foreground/5 h-[472px] object-cover" />
              </div>
              {/* Floating element 1 */}
              <motion.div animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="absolute top-1/4 -left-4 lg:-left-12 z-20 bg-card p-4 rounded-2xl shadow-xl border border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Status da Carga</p>
                  <p className="text-sm font-bold">Concluído 100%</p>
                </div>
              </motion.div>
              {/* Floating element 2 */}
              <motion.div animate={{
              y: [0, 10, 0]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }} className="absolute bottom-1/4 -right-4 lg:-right-12 z-20 bg-card p-4 rounded-2xl shadow-xl border border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Map size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Próximo Ponto</p>
                  <p className="text-sm font-bold">2.4 km de distância</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Funcionalidades Inteligentes</h2>
            <p className="text-muted-foreground text-lg">
              Desenvolvemos cada detalhe para que sua única preocupação seja aproveitar a viagem.
            </p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appFeatures.map(feature => <motion.div key={feature.id} variants={staggerItem}>
                <FeatureCard feature={feature} />
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Interface Showcase */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img src={IMAGES.EV_CHARGING_6} alt="Charging Experience" className="rounded-3xl shadow-lg brightness-90" />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-primary/20 rounded-full pointer-events-none" />
                <div className="absolute top-10 left-10 p-8 bg-background/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl max-w-xs">
                  <h3 className="text-xl font-bold mb-2">Conectividade sem Falhas</h3>
                  <p className="text-sm text-muted-foreground">
                    Nossa tecnologia de nuvem garante que você esteja sempre conectado ao seu carregador, não importa a distância.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Uma Experiência Fluida de Ponta a Ponta</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  O FLUXO HUB foi projetado para ser intuitivo. Desde a reserva do plugue até o pagamento automático via carteira digital, cada etapa foi simplificada.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Interface Minimalista</h4>
                    <p className="text-muted-foreground">Navegação limpa e direta para que você encontre o que precisa em segundos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Pagamento Integrado</h4>
                    <p className="text-muted-foreground">Cadastre seu cartão uma única vez e pague suas recargas com um clique.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Segurança de Dados</h4>
                    <p className="text-muted-foreground">Criptografia de ponta a ponta para proteger suas informações pessoais e bancárias.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Download */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-primary text-primary-foreground rounded-[2.5rem] p-12 lg:p-24 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <Download className="mx-auto mb-8 w-16 h-16 opacity-30" />
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Pronto para começar sua jornada elétrica?</h2>
              <p className="text-xl opacity-90 mb-12">
                Junte-se a milhares de motoristas e faça parte da maior rede de recarga inteligente do Brasil.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="secondary" size="lg" className="rounded-full h-14 px-8 text-foreground">
                  <a href={APPLE_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <SiAppstore className="text-xl" />
                    <span>App Store</span>
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="rounded-full h-14 px-8 text-foreground">
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <SiGoogleplay className="text-xl" />
                    <span>Google Play</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Animated backgrounds */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 blur-[120px] translate-x-1/3 translate-y-1/3 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Screenshot Slider Mockup (Simple Grid) */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Visualização do App</h2>
            <p className="text-muted-foreground text-lg">Conheça as principais funcionalidades do aplicativo FLUXO HUB</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <motion.div whileHover={{
            y: -10,
            scale: 1.05
          }} className="rounded-2xl overflow-hidden shadow-lg border border-border bg-white">
              <img src="/images/WhatsApp Image 2026-01-28 at 12.54.03.jpeg" alt="Ferramenta para Veículos Elétricos" className="w-full h-auto" />
            </motion.div>
            <motion.div whileHover={{
            y: -10,
            scale: 1.05
          }} className="rounded-2xl overflow-hidden shadow-lg border border-border bg-white">
              <img src="/images/WhatsApp Image 2026-01-28 at 12.54.02 (3).jpeg" alt="Mapa de Eletropostos" className="w-full h-auto" />
            </motion.div>
            <motion.div whileHover={{
            y: -10,
            scale: 1.05
          }} className="rounded-2xl overflow-hidden shadow-lg border border-border bg-white">
              <img src="/images/WhatsApp Image 2026-01-28 at 12.54.02 (2).jpeg" alt="Detalhes da Estação" className="w-full h-auto" />
            </motion.div>
            <motion.div whileHover={{
            y: -10,
            scale: 1.05
          }} className="rounded-2xl overflow-hidden shadow-lg border border-border bg-white">
              <img src="/images/WhatsApp Image 2026-01-28 at 12.54.02 (1).jpeg" alt="Acompanhamento em Tempo Real" className="w-full h-auto" />
            </motion.div>
            <motion.div whileHover={{
            y: -10,
            scale: 1.05
          }} className="rounded-2xl overflow-hidden shadow-lg border border-border bg-white">
              <img src="/images/WhatsApp Image 2026-01-28 at 12.54.02.jpeg" alt="Desbloqueio Digital" className="w-full h-auto" />
            </motion.div>
            <motion.div whileHover={{
            y: -10,
            scale: 1.05
          }} className="rounded-2xl overflow-hidden shadow-lg border border-border bg-white">
              <img src="/images/WhatsApp Image 2026-01-28 at 12.54.01.jpeg" alt="Controle Total da Recarga" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
}