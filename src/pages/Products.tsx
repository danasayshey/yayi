// src/pages/Products.tsx
import { useState, useMemo } from "react";
import { ProductCard, Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// 真實資料：由 fetch-products.mjs 產生
import productsJson from "@/data/products.json";

const ITEMS_PER_PAGE = 9;

export default function Products() {
  // 全部產品
  const allProducts = useMemo(
    () => (productsJson as (Product & { category: string })[]),
    []
  );

  // 動態抓所有分類（去重）
  const CATEGORY_OPTIONS = useMemo(
    () =>
      Array.from(
        new Set(allProducts.map((p) => p.category).filter(Boolean))
      ),
    [allProducts]
  );

  // 篩選 & 分頁 state
  const [checked, setChecked] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  // 篩選後的產品
  const filtered = useMemo(() => {
    return checked.length > 0
      ? allProducts.filter((p) => checked.includes(p.category))
      : allProducts;
  }, [allProducts, checked]);

  // 分頁計算
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const pageItems = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // 切換分類勾選
  const toggleCat = (c: string) => {
    setChecked((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
    setPage(1); // 勾選後自動跳回第一頁
  };
  // 重設篩選
  const reset = () => {
    setChecked([]);
    setPage(1);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-yayi-brown">
          產品總覽
        </h1>

        {/* ── 篩選手風琴 ── */}
        <details className="mb-8 border rounded-lg border-yayi-beige bg-white shadow-md">
          <summary className="flex items-center gap-2 p-4 text-yayi-brown font-medium cursor-pointer">
            <Filter size={18} />
            產品篩選
          </summary>
          <div className="px-4 pb-4 pt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
              {CATEGORY_OPTIONS.map((c) => (
                <label
                  key={c}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Checkbox
                    checked={checked.includes(c)}
                    onCheckedChange={() => toggleCat(c)}
                  />
                  <span className="text-sm">{c}</span>
                </label>
              ))}
            </div>
            <Button
              variant="outline"
              onClick={reset}
              className="border-yayi-brown text-yayi-brown"
            >
              重設
            </Button>
          </div>
        </details>

        {/* ── 產品列表 ── */}
        {pageItems.length ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageItems.map((p) => {
                // 優先拿 images[0]，fallback 回舊的 p.image
                const coverImage = (p as any).images?.[0] ?? p.image;
                return (
                  <ProductCard
                    key={p.id}
                    product={{ ...p, image: coverImage }}
                  />
                );
              })}
            </div>

            {/* 分頁器 */}
            {totalPages > 1 && (
              <div className="mt-10 flex justify-center items-center space-x-4">
                <Button
                  variant="outline"
                  disabled={page === 1}
                  onClick={() => setPage((v) => v - 1)}
                >
                  上一頁
                </Button>
                <span>
                  {page}/{totalPages}
                </span>
                <Button
                  variant="outline"
                  disabled={page === totalPages}
                  onClick={() => setPage((v) => v + 1)}
                >
                  下一頁
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">
              沒有符合條件的產品
            </h3>
            <Button onClick={reset} className="bg-yayi-gold text-white">
              重設篩選
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
