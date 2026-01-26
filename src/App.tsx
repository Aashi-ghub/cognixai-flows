import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSmoothScroll } from "./hooks/use-smooth-scroll";
import { ContactPopupProvider } from "./contexts/ContactPopupContext";
import { ContactPopup } from "./components/ContactPopup";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Services from "./pages/Services";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useSmoothScroll();
  
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ContactPopupProvider>
        <Toaster />
        <Sonner />
        <ContactPopup />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContactPopupProvider>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
