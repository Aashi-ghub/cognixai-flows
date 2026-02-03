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
import FinancialOperations from "./pages/services/FinancialOperations";
import ProcessOrchestration from "./pages/services/ProcessOrchestration";
import EnterpriseGovernance from "./pages/services/EnterpriseGovernance";
import StrategyChange from "./pages/services/StrategyChange";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import BlogList from "./pages/blogs/BlogList";
import BlogPost from "./pages/blogs/BlogPost";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import WhyIStarted from "./pages/WhyIStarted";

const queryClient = new QueryClient();

const AppContent = () => {
  useSmoothScroll();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/financial-operations" element={<FinancialOperations />} />
      <Route path="/services/process-orchestration" element={<ProcessOrchestration />} />
      <Route path="/services/enterprise-governance" element={<EnterpriseGovernance />} />
      <Route path="/services/strategy-change" element={<StrategyChange />} />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blogs/:slug" element={<BlogPost />} />
      <Route path="/blog/why-i-started-cognixai-labs" element={<WhyIStarted />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ContactPopupProvider>
          <Toaster />
          <Sonner />
          <ContactPopup />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </ContactPopupProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
