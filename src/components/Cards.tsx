import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  Smartphone, 
  MapPin, 
  CreditCard, 
  History, 
  Navigation, 
  ChevronRight,
  Activity,
  Layers,
  Maximize
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product, AppFeature, CompanyValue } from "@/lib/index";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";

const iconMap: Record<string, any> = {
  Zap, Shield, Globe, Users, Smartphone, MapPin, CreditCard, History, Navigation, Activity, Layers, Maximize
};

const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = iconMap[name] || Zap;
  return <IconComponent className={className} />;
};

export function ProductCard({ product }: { product: Product }) {
  const colorClasses = {
    primary: "border-primary/20 hover:border-primary shadow-[0_0_20px_oklch(var(--primary)/0.1)]",
    secondary: "border-secondary/20 hover:border-secondary shadow-[0_0_20px_oklch(var(--secondary)/0.1)]",
    accent: "border-accent/20 hover:border-accent shadow-[0_0_20px_oklch(var(--accent)/0.1)]"
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col overflow-hidden border-2 transition-all duration-300 ${colorClasses[product.color]}`}>
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader className="space-y-1">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="outline" className="font-mono uppercase tracking-wider text-[10px]">
              {product.category}
            </Badge>
            <span className="text-sm font-mono font-medium text-primary">{product.power}</span>
          </div>
          <CardTitle className="text-2xl">{product.name}</CardTitle>
          <CardDescription className="line-clamp-2">{product.subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2">
            {product.specs.slice(0, 3).map((spec, idx) => (
              <li key={idx} className="flex justify-between text-sm border-b border-border/50 pb-1">
                <span className="text-muted-foreground">{spec.label}</span>
                <span className="font-medium">{spec.value}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full group" variant={product.color === 'primary' ? 'default' : 'outline'}>
            <Link to={`${ROUTE_PATHS.PRODUTOS}?id=${product.id}`}>
              Ver Detalhes
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function FeatureCard({ feature }: { feature: AppFeature }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
          <IconRenderer name={feature.iconName} className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export function ValueCard({ value }: { value: CompanyValue }) {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-background rounded-3xl border border-border/50 hover:shadow-lg transition-all duration-300">
      <div className="mb-6 p-4 bg-accent/20 rounded-full">
        <IconRenderer name={value.iconName} className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-4">{value.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
    </div>
  );
}

export function StatCard({ title, value, description }: { title: string, value: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 bg-card border border-border rounded-2xl text-center relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <dt className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-2">
        {title}
      </dt>
      <dd className="text-4xl md:text-5xl font-mono font-bold text-foreground mb-4 tracking-tighter">
        {value}
      </dd>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
