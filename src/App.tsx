import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// ⬇️ 改這行：BrowserRouter -> HashRouter
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MeasuringGuide from "./pages/MeasuringGuide";
import OrderProcess from "./pages/OrderProcess";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
// ⬇️ 新增頁面
import Cases from "./pages/Cases";
import CaseDetail from "./pages/CaseDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* ⬇️ 這裡換成 HashRouter */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            {/* ⬇️ 新增兩條案例路由 */}
            <Route path="cases" element={<Cases />} />
            <Route path="cases/:id" element={<CaseDetail />} />
            <Route path="measuring-guide" element={<MeasuringGuide />} />
            <Route path="order-process" element={<OrderProcess />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
