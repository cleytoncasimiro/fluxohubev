import { IMAGES } from "@/assets/images";
import { Product, AppFeature, CompanyValue } from "@/lib/index";

export const products: Product[] = [
  {
    id: "dc-fast-max",
    name: "Fluxo Max DC",
    subtitle: "Ultra Velocidade para Rodovias",
    description: "A solução definitiva para infraestrutura de alta potência. Projetado para rodovias e hubs de logística que exigem o máximo desempenho e confiabilidade industrial.",
    category: "DC Fast",
    image: IMAGES.CARREGADOR_ALTA_POTENCIA_01_43,
    power: "60kW - 350kW",
    specs: [
      { label: "Conector", value: "Dual CCS2 / CHAdeMO" },
      { label: "Eficiência", value: "> 95.5%" },
      { label: "Proteção", value: "IP55 / IK10" }
    ],
    features: ["Carga simultânea inteligente", "Interface Touch de 15 polegadas", "Pagamento via NFC integrado"],
    color: "primary"
  },
  {
    id: "ac-business-hub",
    name: "Fluxo Hub DC",
    subtitle: "DC Rápido para Ambientes Comerciais",
    description: "Carregador DC de 40kW ideal para frotas corporativas, shopping centers e estacionamentos comerciais. Oferece gestão completa de usuários e balanceamento dinâmico de carga.",
    category: "DC Comercial",
    image: IMAGES.CARREGADOR_PAREDE_COMPACTO_01_45,
    power: "40kW",
    specs: [
      { label: "Conector", value: "Tipo 2 (T2)" },
      { label: "Comunicação", value: "4G / Wi-Fi / Ethernet" },
      { label: "Protocolo", value: "OCPP 1.6J / 2.0.1" }
    ],
    features: ["Controle de acesso via RFID", "Gestão remota em tempo real", "Design robusto e antivandalismo"],
    color: "accent"
  },
  {
    id: "wallbox-residential",
    name: "Fluxo Home Wallbox",
    subtitle: "Carregamento Inteligente Residencial",
    description: "Elegância e praticidade para sua residência. Integre o carregamento do seu veículo elétrico à sua rotina com total segurança e economia.",
    category: "Residencial",
    image: IMAGES.WALLBOX_RESIDENCIAL_01_44,
    power: "7.4kW / 11kW",
    specs: [
      { label: "Instalação", value: "Monofásica ou Trifásica" },
      { label: "Segurança", value: "RCD Tipo A + DC 6mA" },
      { label: "Garantia", value: "24 Meses" }
    ],
    features: ["Agendamento de carga pelo App", "Controle dinâmico de potência", "Resistente a sol e chuva"],
    color: "secondary"
  }
];

export const appFeatures: AppFeature[] = [
  {
    id: "map-navigation",
    title: "Mapa de Eletropostos",
    description: "Encontre a estação de recarga mais próxima com navegação integrada e status de disponibilidade em tempo real.",
    iconName: "MapPin"
  },
  {
    id: "secure-payments",
    title: "Pagamento Facilitado",
    description: "Realize o pagamento de suas recargas de forma rápida e segura diretamente pelo aplicativo, sem burocracia.",
    iconName: "CreditCard"
  },
  {
    id: "real-time-status",
    title: "Acompanhamento ao Vivo",
    description: "Monitore a velocidade de carga, porcentagem da bateria e tempo estimado para conclusão de onde você estiver.",
    iconName: "Activity"
  },
  {
    id: "smart-history",
    title: "Gestão de Consumo",
    description: "Acesse o histórico completo de suas recargas, custos mensais e economia de emissões de CO2.",
    iconName: "BarChart3"
  }
];

export const companyValues: CompanyValue[] = [
  {
    id: "reliability",
    title: "Confiabilidade",
    description: "Operamos infraestrutura crítica onde a disponibilidade é nossa prioridade absoluta para garantir sua mobilidade.",
    iconName: "ShieldCheck"
  },
  {
    id: "innovation",
    title: "Inovação Técnica",
    description: "Desenvolvemos hardware e software proprietários para liderar a vanguarda tecnológica do setor elétrico.",
    iconName: "Zap"
  },
  {
    id: "sustainability",
    title: "Sustentabilidade",
    description: "Comprometidos com um futuro limpo, nossa rede utiliza energia proveniente de fontes 100% renováveis.",
    iconName: "Leaf"
  }
];

export const stats = [
  {
    title: "Eletropostos",
    value: "500+",
    description: "Pontos de recarga estrategicamente localizados em todo o Brasil."
  },
  {
    title: "Uptime da Rede",
    value: "99.9%",
    description: "Garantia de disponibilidade operacional constante para nossos usuários."
  },
  {
    title: "Usuários Ativos",
    value: "25k+",
    description: "Motoristas conectados que utilizam nossa rede diariamente."
  },
  {
    title: "Energia Limpa",
    value: "100%",
    description: "Toda a energia fornecida é proveniente de fontes renováveis certificadas."
  }
];
