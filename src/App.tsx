import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Produtos from "@/pages/Produtos";
import Aplicativo from "@/pages/Aplicativo";
import Sobre from "@/pages/Sobre";
import Contato from "@/pages/Contato";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

/**
 * Componente raiz da FLUXO HUB configurado para 2026.
 * Gerencia o roteamento principal e provedores globais de estado e UI.
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" richColors />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route 
                path={ROUTE_PATHS.HOME} 
                element={<Home />} 
              />
              <Route 
                path={ROUTE_PATHS.PRODUTOS} 
                element={<Produtos />} 
              />
              <Route 
                path={ROUTE_PATHS.APLICATIVO} 
                element={<Aplicativo />} 
              />
              <Route 
                path={ROUTE_PATHS.SOBRE} 
                element={<Sobre />} 
              />
              <Route 
                path={ROUTE_PATHS.CONTATO} 
                element={<Contato />} 
              />
              {/* Redirecionamento padrão para Home em caso de rota não encontrada */}
              <Route 
                path="*" 
                element={<Home />} 
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
