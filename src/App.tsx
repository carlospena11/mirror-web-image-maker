
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Planes from "./pages/Planes";
import SmartHome from "./pages/SmartHome";
import Contacto from "./pages/Contacto";
import MiCuenta from "./pages/MiCuenta";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/smart-home" element={<SmartHome />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/mi-cuenta" element={<MiCuenta />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
