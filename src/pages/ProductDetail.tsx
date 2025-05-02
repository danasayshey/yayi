import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import products from "@/data/products.json";     // ← 由 fetch-products 產生
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = typeof products[number];

export default function ProductDetail() {
  const { id = "" } = useParams();
  const navigate     = useNavigate();

  /* -------------------------------------------------- */
  /* 1. 找到產品資料                                    */
  /* -------------------------------------------------- */
  const product: Product | undefined = useMemo(
    () => products.find(p => p.id === id),
    [id]
  );

  if (!product) {
    /* 如果打錯網址就導回產品列表 */
    return <Navigate to="/products" replace />;
  }

  /* -------------------------------------------------- */
  /* 2. 圖片輪播 (純 React，不依賴外部輪播套件)        */
  /* -------------------------------------------------- */
  const [index, setIndex] = useState(0);
  const total = product.images.length;

  const prev = () => setIndex(i => (i - 1 + total) % total);
  const next = () => setIndex(i => (i + 1)     % total);

  /* -------------------------------------------------- */
  /* 3. 頁面                                              */
  /* -------------------------------------------------- */
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">

        {/* 上方：圖片 + 基本資訊 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ---------- 圖片區 ---------- */}
          <div className="relative">
            {/* 主圖 */}
            <img
              src={product.images[index]}
              alt={`${product.name}-${index}`}
              className="w-full h-auto rounded-lg object-cover"
            />

            {/* ← → 箭頭 */}
            {total > 1 && (
              <>
                <button
                  className="absolute top-1/2 -translate-y-1/2 left-3 bg-white/70 hover:bg-white rounded-full p-2"
                  onClick={prev}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="absolute top-1/2 -translate-y-1/2 right-3 bg-white/70 hover:bg-white rounded-full p-2"
                  onClick={next}
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* 縮圖列 */}
            {total > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto">
                {product.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${product.name}-thumb-${i}`}
                    onClick={() => setIndex(i)}
                    className={`h-14 w-auto rounded cursor-pointer border
                      ${i === index ? "border-yayi-gold" : "border-transparent"}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ---------- 資訊區 ---------- */}
          <div>
            <h1 className="text-3xl font-bold mb-4 text-yayi-brown">
              {product.name}
            </h1>

            {/* Tag – 最多 3 個 */}
            <div className="flex flex-wrap gap-2 mb-6">
            {product.tags?.slice(0, 3).map((t, i) => (
             <span
                key={t}
                className={
                  "px-2 py-0.5 rounded-full text-xs text-white " +
                    (i === 0 ? "bg-yayi-green"
                    : i === 1 ? "bg-yayi-brown"
                    :            "bg-yayi-gold")
               }
                >
                {t}
            </span>
              ))}
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            <Separator className="my-6" />

            {/* 產品特點 */}
            {product.features.length > 0 && (
              <>
                <h2 className="text-xl font-semibold mb-3 text-yayi-brown">
                  產品特點
                </h2>
                <ul className="list-disc pl-5 space-y-1 mb-8">
                  {product.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </>
            )}

            {/* LINE 按鈕 */}
            <Button
              className="w-full bg-yayi-gold hover:bg-opacity-80 text-white"
              size="lg"
              onClick={() => window.open("https://line.me/R/ti/p/@YAYI", "_blank")}
            >
              透過 LINE 詢價
            </Button>
          </div>
        </div>

        {/* ---------- 規格區 ---------- */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-yayi-brown">
            產品規格
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg border border-yayi-beige">
            {/* 尺寸列 */}
            {product.sizes.length > 0 && (
              <div>
                <h3 className="font-medium mb-2 text-yayi-brown">尺寸</h3>
                <ul className="space-y-1">
                  {product.sizes.map(s => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 其他單一欄位 */}
            <div className="space-y-3">
              {product.material && (
                <div className="flex">
                  <span className="w-20 font-medium text-yayi-brown">材質：</span>
                  <span>{product.material}</span>
                </div>
              )}
              {product.color && (
                <div className="flex">
                  <span className="w-20 font-medium text-yayi-brown">顏色：</span>
                  <span>{product.color}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
