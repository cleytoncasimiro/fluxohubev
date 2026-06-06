import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock, Settings2, Cpu, Globe, BatteryCharging } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/index";
import { ProductCard } from "@/components/Cards";
import { IMAGES } from "@/assets/images";
import { ROUTE_PATHS } from "@/lib/index";

const hardwareHighlights = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Hardware Proprietário",
    description: "Placas de controle e firmware desenvolvidos internamente para máxima compatibilidade e segurança."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Certificação Industrial",
    description: "Equipamentos testados sob as mais rigorosas normas internacionais de proteção elétrica e mecânica."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Conectividade Total",
    description: "Suporte nativo a protocolos OCPP 1.6 e 2.0, garantindo integração com qualquer software de gestão."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Alta Disponibilidade",
    description: "Arquitetura modular que facilita a manutenção preventiva e corretiva, minimizando o downtime."
  }
];

export default function Produtos() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.EV_CHARGING_5} 
            alt="Produtos Fluxo Hub"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Tecnologia de Ponta
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Infraestrutura de <span className="text-primary">Elite</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Do carregamento residencial à ultra velocidade em rodovias, oferecemos a linha mais completa de carregadores inteligentes do Brasil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Nosso Portfólio</h2>
              <p className="text-muted-foreground">
                Cada carregador Fluxo Hub é projetado com foco em durabilidade, eficiência energética e facilidade de uso para o usuário final.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground bg-muted/50 p-3 rounded-lg border border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span>Pronto para Operar</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
              <img 
                src={IMAGES.EV_CHARGING_1} 
                alt="Tecnologia Interna"
                className="relative rounded-2xl border border-border shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl border border-border shadow-lg hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <BatteryCharging className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Monitoramento 24/7</p>
                    <p className="text-xs text-muted-foreground">Via Centro de Operações Fluxo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Excelência em Engenharia</h2>
                <p className="text-muted-foreground mb-8">
                  Não apenas vendemos carregadores; construímos os sistemas que sustentam a transição energética do país. Nossos componentes são selecionados para resistir ao clima tropical e ao uso intenso em espaços públicos.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {hardwareHighlights.map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex flex-col gap-3 p-4 rounded-xl hover:bg-background transition-colors"
                  >
                    <div className="text-primary">
                      {item.icon}
                    </div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Settings2 className="text-primary" />
                <h2 className="text-2xl font-bold">Qual a solução ideal para você?</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-muted/50 border border-border/50">
                  <h4 className="text-lg font-bold mb-2">Frotas & Rodovias</h4>
                  <p className="text-sm text-muted-foreground mb-4">Para quem precisa de giro rápido e alta potência em locais de passagem.</p>
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">Recomendado: Fluxo Max DC</span>
                </div>
                <div className="p-6 rounded-2xl bg-muted/50 border border-border/50">
                  <h4 className="text-lg font-bold mb-2">Negócios & Serviços</h4>
                  <p className="text-sm text-muted-foreground mb-4">Para shoppings, condomínios e empresas que desejam monetizar a recarga.</p>
                  <span className="text-xs font-bold text-accent tracking-widest uppercase">Recomendado: Fluxo Hub AC</span>
                </div>
                <div className="p-6 rounded-2xl bg-muted/50 border border-border/50">
                  <h4 className="text-lg font-bold mb-2">Uso Particular</h4>
                  <p className="text-sm text-muted-foreground mb-4">Conforto e segurança para carregar seu veículo durante a noite em casa.</p>
                  <span className="text-xs font-bold text-secondary tracking-widest uppercase">Recomendado: Fluxo Home</span>
                </div>
              </div>
            </div>
            
            <div className="bg-primary p-8 text-center">
              <p className="text-primary-foreground font-medium mb-4">
                Precisa de um projeto personalizado para sua rede de eletropostos?
              </p>
              <Link
                to={ROUTE_PATHS.CONTATO}
                className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-all"
              >
                Falar com Especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Visual */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.EV_CHARGING_2} 
            alt="Futuro da Mobilidade"
            className="w-full h-full object-cover opacity-10 grayscale"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Construa o Futuro Conosco</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Junte-se às centenas de empresas que já estão eletrificando suas operações com a tecnologia Fluxo Hub.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full border border-border">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Suporte Técnico Nacional</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full border border-border">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Garantia Estendida</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full border border-border">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Treinamento de Equipes</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
