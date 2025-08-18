// src/pages/Index.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard, Product } from "@/components/ProductCard";
import rawProducts from "@/data/products.json";
import rawCases from "@/data/cases.json";

/** 產品資料（scripts 生成） */
const PRODUCTS: (Product & { category: string })[] = rawProducts as any;
/** 熱門產品取前三 */
const FEATURED_PRODUCTS: Product[] = PRODUCTS.slice(0, 3);

/** 案例資料型別（scripts/fetch-cases.mjs 生成） */
type CaseItem = {
  id: string;
  doc_id?: string;
  meta_title?: string;
  meta_description?: string;
  cover_image?: string; // 可能是 Google Drive 檔案 id，或完整網址
};

const CASES: CaseItem[] = (rawCases as any) ?? [];
/** 熱門案例取前三 */
const FEATURED_CASES: CaseItem[] = CASES.slice(0, 3);

/** 將 Google Drive 檔案 id 轉為可直接顯示的圖片網址 */
const toCoverUrl = (id?: string) => {
  if (!id) return import.meta.env.BASE_URL + "placeholder.svg";
  if (/^https?:\/\//i.test(id)) return id;
  // 視窗寬度自適應的高畫質圖片
  return `https://lh3.googleusercontent.com/d/${id}=w1200`;
};

/** 小卡片：案例 */
function CaseCard({ item }: { item: CaseItem }) {
  const cover = toCoverUrl(item.cover_image);
  const title = item.meta_title || "案例分享";
  const desc =
    item.meta_description ||
    "看看我們如何協助大家改造他們的空間。";

  return (
    <Link to={`/cases/${item.id}`} className="group block">
      <div className="rounded-lg overflow-hidden border border-yayi-beige bg-white hover:shadow-md transition-shadow">
        <div className="aspect-[4/3] bg-gray-100">
          <img
            src={cover}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-yayi-brown truncate">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default function Index() {
  return (
    <div className="pt-16">
      {/* ───────────── Hero ───────────── */}
      <section className="relative h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}images/hero.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-yayi-brown/30" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">專業客製化系統櫃</h1>
            <p className="text-xl mb-8">
              雅藝系統櫃為您打造完美收納空間，從設計、選材到安裝，一應俱全。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-yayi-gold hover:bg-opacity-80 text-white" size="lg">
                <Link to="/products">瀏覽產品</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-yayi-gold hover:bg-white hover:text-yayi-brown"
                size="lg"
                onClick={() => window.open("https://line.me/R/ti/p/@YAYI", "_blank")}
              >
                LINE 下單
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Why Us ──────────── */}
      <section className="py-16 bg-yayi-beige/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-yayi-brown">
          為什麼選擇雅藝系統櫃
          </h2>

      {/* 三張卡片、置中 */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
         { title: "優質材料", icon: "✓", desc: "嚴選板材，兼顧美觀與耐用。" },
         { title: "專業安裝", icon: "✓", desc: "師傅到府安裝，穩固又安心。" },
          { title: "一年保固", icon: "✓", desc: "五金板材一年保固，放心使用。" },
        ].map((f) => (
          <div
            key={f.title}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-yayi-gold rounded-full flex items-center justify-center text-white text-xl mb-4">
             {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-yayi-brown">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
         </div>
         ))}
        </div>
        </div>
        </section>

      {/* ───────────── Featured Products ────────── */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-yayi-brown">熱門產品</h2>
            <Link to="/products" className="text-yayi-gold hover:underline font-medium">
              查看全部
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Featured Cases ────────── */}
      <section className="py-16 bg-yayi-beige/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-yayi-brown">案例分享</h2>
            <Link to="/cases" className="text-yayi-gold hover:underline font-medium">
              查看全部
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_CASES.map((c) => (
              <CaseCard key={c.id} item={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────  CTA  ───────────── */}
      <section className="py-16 bg-yayi-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">開始打造您的理想收納空間</h2>
          <p className="text-xl mb-8 text-yayi-beige max-w-2xl mx-auto">
            與我們聯繫，獲取專業建議和免費估價。讓雅藝系統櫃為您量身訂製完美收納方案。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-yayi-gold hover:bg-opacity-80 text-white" size="lg">
              <Link to="/products">瀏覽產品</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-yayi-gold hover:bg-white hover:text-yayi-brown"
              size="lg"
              onClick={() => window.open("https://line.me/R/ti/p/@YAYI", "_blank")}
            >
              LINE 下單
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
