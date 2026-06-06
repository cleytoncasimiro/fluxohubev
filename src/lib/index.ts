export const ROUTE_PATHS = {
  HOME: "/",
  PRODUTOS: "/produtos",
  APLICATIVO: "/aplicativo",
  SOBRE: "/sobre",
  CONTATO: "/contato",
} as const;

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: "DC Fast" | "DC Comercial" | "AC Comercial" | "Residencial";
  image: string;
  power: string;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
  color: "primary" | "secondary" | "accent";
}

export interface AppFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
}