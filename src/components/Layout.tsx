import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronRight, MapPin, Mail, Phone, ExternalLink, Infinity, Download } from 'lucide-react';
import { SiApple, SiGoogleplay, SiInstagram, SiLinkedin } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ROUTE_PATHS } from '@/lib/index';
import { IMAGES } from '@/assets/images';
interface LayoutProps {
  children: React.ReactNode;
}
const APP_STORE_URL = "https://apps.apple.com/br/app/fluxo-hub/id6754165717";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=br.com.voltbras.fluxohub";
const Logo = ({
  className = "h-10 w-auto"
}: {
  className?: string;
}) => <img src={IMAGES.FLUXO_HUB_LOGO} alt="FLUXO HUB" className={className} />;
export function Layout({
  children
}: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);
  const navLinks = [{
    name: 'Início',
    path: ROUTE_PATHS.HOME
  }, {
    name: 'Produtos',
    path: ROUTE_PATHS.PRODUTOS
  }, {
    name: 'Aplicativo',
    path: ROUTE_PATHS.APLICATIVO
  }, {
    name: 'Sobre Nós',
    path: ROUTE_PATHS.SOBRE
  }, {
    name: 'Contato',
    path: ROUTE_PATHS.CONTATO
  }];
  return <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-lg' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to={ROUTE_PATHS.HOME}>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <NavLink key={link.path} to={link.path} className={({
            isActive
          }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-primary/70'}`}>
                {link.name}
              </NavLink>)}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                <SiApple className="mr-2 h-4 w-4" /> App Store
              </a>
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                <SiGoogleplay className="mr-2 h-4 w-4" /> Google Play
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-foreground p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="fixed inset-0 z-40 bg-background md:hidden pt-24 px-6">
            <nav className="flex flex-col gap-6">
              {navLinks.map(link => <NavLink key={link.path} to={link.path} className={({
            isActive
          }) => `text-2xl font-semibold transition-colors ${isActive ? 'text-primary' : 'text-primary/70'}`}>
                  {link.name}
                </NavLink>)}
              <Separator className="my-4" />
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Baixe o Aplicativo</p>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full" asChild>
                    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                      <SiApple className="mr-2 h-5 w-5" /> iOS
                    </a>
                  </Button>
                  <Button className="w-full bg-primary" asChild>
                    <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                      <SiGoogleplay className="mr-2 h-5 w-5" /> Android
                    </a>
                  </Button>
                </div>
              </div>
            </nav>
          </motion.div>}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <Logo />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Liderando a infraestrutura de mobilidade elétrica no Brasil com soluções inteligentes, sustentáveis e de alta performance para o futuro da energia.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/fluxohub.ev/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiInstagram size={20} />
                </a>
                <a href="https://www.linkedin.com/company/fluxohub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Navegação</h4>
              <ul className="space-y-4">
                {navLinks.map(link => <li key={link.path}>
                    <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                      <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>)}
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Soluções</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link to={ROUTE_PATHS.PRODUTOS} className="hover:text-primary transition-colors">Carregadores DC Fast</Link></li>
                <li><Link to={ROUTE_PATHS.PRODUTOS} className="hover:text-primary transition-colors">Carregadores AC Comercial</Link></li>
                <li><Link to={ROUTE_PATHS.PRODUTOS} className="hover:text-primary transition-colors">Wallbox Residencial</Link></li>
                <li><Link to={ROUTE_PATHS.APLICATIVO} className="hover:text-primary transition-colors">Gestão de Eletropostos</Link></li>
                <li><Link to={ROUTE_PATHS.APLICATIVO} className="hover:text-primary transition-colors">App do Usuário</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Contato</h4>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary shrink-0" />
                  <span>Av. Brás de Aguiar, 676, Nazaré Belém - PA </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <span>91 99112-8771</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  <span>contato@fluxohubev.com.br</span>
                </div>
              </div>
              <div className="pt-4 flex flex-col gap-2">
                <p className="text-xs font-semibold text-foreground">BAIXE O APP</p>
                <div className="flex gap-2">
                  <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                    <div className="bg-foreground text-background rounded-md px-3 py-1.5 flex items-center gap-2">
                      <SiApple size={18} />
                      <div className="flex flex-col leading-none">
                        <span className="text-[8px]">Download on the</span>
                        <span className="text-[12px] font-bold">App Store</span>
                      </div>
                    </div>
                  </a>
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                    <div className="bg-foreground text-background rounded-md px-3 py-1.5 flex items-center gap-2">
                      <SiGoogleplay size={16} />
                      <div className="flex flex-col leading-none">
                        <span className="text-[8px]">GET IT ON</span>
                        <span className="text-[12px] font-bold">Google Play</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© 2026 FLUXO HUB. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Compliance</a>
            </div>
            <div className="flex items-center gap-1 opacity-60">
              <span>Desenvolvido por</span>
              <span className="font-bold text-foreground">FLUXO HU</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button for Mobile App Store (Visible on scroll) */}
      <AnimatePresence>
        {isScrolled && <motion.div initial={{
        scale: 0,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0,
        opacity: 0
      }} className="fixed bottom-6 right-6 z-40 md:hidden">
            <Button className="rounded-full w-14 h-14 shadow-2xl bg-primary text-primary-foreground">
              <Link to={ROUTE_PATHS.APLICATIVO}>
                <Download size={24} />
              </Link>
            </Button>
          </motion.div>}
      </AnimatePresence>
    </div>;
}