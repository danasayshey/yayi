
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export interface Product {
  id: string;
  name: string;
  image: string;
  height: string;
  doorType: string;
  drawerCount: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border border-yayi-beige hover:border-yayi-gold">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-lg mb-2 text-yayi-brown">{product.name}</h3>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-yayi-green text-yayi-brown rounded-full">
              {product.height}
            </span>
            <span className="text-xs px-2 py-1 bg-yayi-beige text-yayi-brown rounded-full">
              {product.doorType}
            </span>
            <span className="text-xs px-2 py-1 bg-yayi-gray bg-opacity-30 text-yayi-brown rounded-full">
              {product.drawerCount}層抽屜
            </span>
          </div>
        </CardContent>
        <CardFooter className="bg-yayi-brown bg-opacity-5 px-4 py-2">
          <span className="text-sm text-yayi-gold font-medium">查看詳情</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
