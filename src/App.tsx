// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

// ✅ 頁面
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MeasuringGuide from "./pages/MeasuringGuide";
import OrderProcess from "./pages/OrderProcess";
import AboutUs from "./pages/AboutUs";
import Cases from "./pages/Cases";              // ⬅️ 新增
import CaseDetail from "./pages/CaseDetail";    // ⬅️ 新增
import NotFound from "./pages/NotFound";

// ✅ 捲動到頁首（避免切頁停在中間）
function ScrollToTop() {
  import("react").then(({ useEffect }) => {
    /* no-op for type only */
  });
  // 簡版（不引入 hooks file）：用原生事件監聽 history
  window.scrollTo(0, 0);
  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter /* 若 GitHub Pages 直開路由還 404，改用 HashRouter */>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="measuring-guide" element={<MeasuringGuide />} />
            <Route path="order-process" element={<OrderProcess />} />
            <Route path="about-us" element={<AboutUs />} />

            {/* ⬇️ 案例分享路由 */}
            <Route path="cases" element={<Cases />} />
            <Route path="cases/:id" element={<CaseDetail />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
