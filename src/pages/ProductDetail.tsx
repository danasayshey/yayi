
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Product } from "@/components/ProductCard";

const mockProducts: Record<string, Product & { description: string; specs: Record<string, string>; features: string[] }> = {
  "cabinet-1": {
    id: "cabinet-1",
    name: "高身收納系統櫃",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    height: "高180cm",
    doorType: "滑門式",
    drawerCount: 3,
    description: "這款高身收納系統櫃提供豐富的儲物空間，適合客廳、臥室或書房使用。採用滑門設計，節省空間同時保持美觀。三層抽屜設計方便分類收納小物品，上方置物櫃適合放置較大物品。",
    specs: {
      "尺寸": "寬120cm x 高180cm x 深60cm",
      "材質": "E1級環保板材",
      "顏色": "橡木色",
      "重量": "約95kg",
      "組裝需時": "專業安裝約2小時"
    },
    features: [
      "滑門設計，節省空間",
      "三層抽屜，方便收納",
      "多功能隔板，靈活調整",
      "防潮防蛀處理",
      "五年品質保固"
    ]
  },
  "cabinet-2": {
    id: "cabinet-2",
    name: "臥室衣櫃系統",
    image: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    height: "高210cm",
    doorType: "開門式",
    drawerCount: 2,
    description: "這款臥室衣櫃系統專為臥室設計，提供寬敞的衣物收納空間。採用開門式設計，方便取用衣物。內部配有衣架桿、隔板及兩層抽屜，滿足各類衣物收納需求。",
    specs: {
      "尺寸": "寬180cm x 高210cm x 深60cm",
      "材質": "E1級環保板材",
      "顏色": "白橡木紋",
      "重量": "約120kg",
      "組裝需時": "專業安裝約3小時"
    },
    features: [
      "開門式設計，方便取用",
      "全高度衣物空間",
      "雙層抽屜，收納小物",
      "可調節隔板",
      "特殊防潮處理"
    ]
  },
  "cabinet-3": {
    id: "cabinet-3",
    name: "多功能客廳櫃",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    height: "高120cm",
    doorType: "滑門式",
    drawerCount: 2,
    description: "這款多功能客廳櫃適合放置於客廳，同時兼具展示與收納功能。滑門設計節省空間，上方開放式層板可展示裝飾品，內部空間與抽屜提供足夠收納空間。",
    specs: {
      "尺寸": "寬150cm x 高120cm x 深45cm",
      "材質": "E1級環保板材",
      "顏色": "胡桃木色",
      "重量": "約75kg",
      "組裝需時": "專業安裝約1.5小時"
    },
    features: [
      "滑門設計，美觀實用",
      "開放式展示層板",
      "雙層抽屜設計",
      "隱藏式把手",
      "防刮耐磨表面處理"
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<(typeof mockProducts)[keyof typeof mockProducts] | null>(null);

  useEffect(() => {
    if (id && mockProducts[id]) {
      setProduct(mockProducts[id]);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16 text-center">
        <h1 className="text-2xl font-bold">產品未找到</h1>
        <p className="mt-4">很抱歉，找不到您要查看的產品</p>
        <Button asChild className="mt-6 bg-yayi-gold hover:bg-opacity-80 text-white">
          <a href="/products">返回產品列表</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-3 text-yayi-brown">{product.name}</h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-yayi-green text-yayi-brown rounded-full text-sm">
                {product.height}
              </span>
              <span className="px-3 py-1 bg-yayi-beige text-yayi-brown rounded-full text-sm">
                {product.doorType}
              </span>
              <span className="px-3 py-1 bg-yayi-gray bg-opacity-30 text-yayi-brown rounded-full text-sm">
                {product.drawerCount}層抽屜
              </span>
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <Separator className="my-6" />
            
            <div className="mb-6">
              <h2 className="text-xl font-medium mb-3 text-yayi-brown">產品特點</h2>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <Button
              className="w-full bg-yayi-gold hover:bg-opacity-80 text-white mb-4"
              size="lg"
              onClick={() => window.open("https://line.me/R/ti/p/@123abcde", "_blank")}
            >
              透過 LINE 詢價
            </Button>
            
            <p className="text-center text-sm text-gray-500">
              *最終價格將依您的具體需求和空間量測結果而定
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="specs">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="specs">規格詳情</TabsTrigger>
              <TabsTrigger value="measure">量測建議</TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="mt-6">
              <div className="bg-white p-6 rounded-lg border border-yayi-beige">
                <h3 className="text-xl font-medium mb-4 text-yayi-brown">產品規格</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex">
                      <span className="font-medium w-24 text-yayi-brown">{key}：</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="measure" className="mt-6">
              <div className="bg-white p-6 rounded-lg border border-yayi-beige">
                <h3 className="text-xl font-medium mb-4 text-yayi-brown">測量建議</h3>
                <p className="mb-4">安裝系統櫃前正確的測量至關重要，以下是幾點建議：</p>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>確保測量空間的高度、寬度和深度，並考慮到牆壁、天花板或地板的不規則性。</li>
                  <li>測量時考慮到電源插座、開關、窗戶和通風口的位置。</li>
                  <li>預留櫃門打開的空間，特別是開門式設計。</li>
                  <li>為確保準確性，建議多次測量並記錄數據。</li>
                </ol>
                <p className="mt-4">我們提供專業的上門測量服務，確保系統櫃完美安裝。</p>
                <Button
                  className="mt-6 bg-yayi-gold hover:bg-opacity-80 text-white"
                  asChild
                >
                  <a href="/measuring-guide">查看完整測量指南</a>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
