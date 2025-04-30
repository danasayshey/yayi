import { useState } from "react";
import { ProductCard, Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// ------- 1. 資料 ---------

// 統一加一個 category 欄位，之後真的接 API 也照此 shape
const mockProducts: Product[] = [
  {
    id: "cabinet-1",
    name: "高身收納系統櫃",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    height: "高180cm",
    doorType: "滑門式",
    drawerCount: 3,
    category: "滑門式衣櫃",
  },
  {
    id: "cabinet-2",
    name: "臥室衣櫃系統",
    image: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?auto=format&fit=crop&w=800&q=80",
    height: "高210cm",
    doorType: "開門式",
    drawerCount: 2,
    category: "開門式衣櫃",
  },
  // ……略，其餘產品自己補上對應 category
];

// ❶ 只有三個先行類別；日後加入「鞋櫃」→ 直接 push 進這個陣列
const categoryOptions = ["開門式衣櫃", "滑門式衣櫃", "其他"] as const;

// ------- 2. Component ---------

const Products = () => {
  const [products] = useState<Product[]>(mockProducts);

  // 篩選狀態
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);

  // 分頁狀態
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  // 篩選後結果
  const filtered = checkedCategories.length
    ? products.filter(p => checkedCategories.includes(p.category))
    : products;

  // 分頁切片
  const start = (currentPage - 1) * itemsPerPage;
  const pageItems = filtered.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  // ------ handlers ------
  const toggleCategory = (c: string) =>
    setCheckedCategories(prev =>
      prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c],
    );

  const resetFilter = () => {
    setCheckedCategories([]);
    setCurrentPage(1);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-yayi-brown">產品總覽</h1>

        {/* 篩選面板（直接展開，若想保留 accordion 也可簡易包一層） */}
        <div className="mb-8 p-4 border rounded-lg border-yayi-beige bg-white shadow-md">
          <div className="flex items-center gap-2 mb-4 text-yayi-brown font-medium">
            <Filter size={18} />
            產品篩選
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
            {categoryOptions.map(c => (
              <label key={c} className="flex items-center space-x-2 cursor-pointer">
                <Checkbox
                  checked={checkedCategories.includes(c)}
                  onCheckedChange={() => toggleCategory(c)}
                />
                <span className="text-sm">{c}</span>
              </label>
            ))}
          </div>

          <div className="space-x-3">
            <Button
              className="bg-yayi-gold text-white"
              onClick={() => setCurrentPage(1)}            // 只套用即可
            >
              套用
            </Button>
            <Button variant="outline" onClick={resetFilter} className="border-yayi-brown text-yayi-brown">
              重設
            </Button>
          </div>
        </div>

        {/* 產品列表 */}
        {pageItems.length ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageItems.map(p => <ProductCard key={p.id} product={p} />)}
            </div>

            {/* 分頁器 */}
            {totalPages > 1 && (
              <div className="mt-10 flex justify-center items-center space-x-4">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(p => p - 1)}
                >
                  上一頁
                </Button>
                <span>
                  {currentPage}/{totalPages}
                </span>
                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(p => p + 1)}
                >
                  下一頁
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">沒有符合條件的產品</h3>
            <Button onClick={resetFilter} className="bg-yayi-gold text-white">
              重設篩選
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;