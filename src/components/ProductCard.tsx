// src/components/ProductCard.tsx
import { Link } from "react-router-dom";

export type Product = {
  id: string;
  name: string;
  image?: string;
  images?: string[];
  tags?: string[];
  // 如果還有 height、doorType、drawerCount 等欄位，可自行加回來
};

export function ProductCard({ product }: { product: Product }) {
  // 優先用 images[0]，沒有就退到單一 image
  const cover = product.images?.[0] ?? product.image ?? "";

  return (
    <Link
      to={`/products/${product.id}`}
      className="
        block
        border border-yayi-gold      /* 金色邊框 */
        rounded-lg                   /* 圓角 */
        bg-white                     /* 白底 */
        overflow-hidden              /* 內容不會超出圓角 */
        hover:shadow-lg              /* 滑鼠經過時陰影 */
        transition-shadow duration-200
      "
    >
      {/* 圖片區：保持 4:3 寬高比 (aspect-w-4 aspect-h-3) */}
      <div className="relative w-full aspect-[4/3]">
        <img
          src={cover}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* 文字區 */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-yayi-brown mb-2">
          {product.name}
        </h3>
        <div className="flex flex-wrap gap-1">
          {(product.tags ?? []).slice(0, 3).map((t, i) => (
            <span
              key={i}
              className={`
                px-2 py-0.5 rounded-full text-xs text-white
                ${i === 0 ? "bg-yayi-green" : i === 1 ? "bg-yayi-brown" : "bg-yayi-gold"}
              `}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
