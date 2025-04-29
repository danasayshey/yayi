
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard, Product } from "@/components/ProductCard";

const featuredProducts: Product[] = [
  {
    id: "cabinet-1",
    name: "高身收納系統櫃",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    height: "高180cm",
    doorType: "滑門式",
    drawerCount: 3
  },
  {
    id: "cabinet-2",
    name: "臥室衣櫃系統",
    image: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    height: "高210cm",
    doorType: "開門式",
    drawerCount: 2
  },
  {
    id: "cabinet-3",
    name: "多功能客廳櫃",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    height: "高120cm",
    doorType: "滑門式",
    drawerCount: 2
  },
];

const features = [
  {
    title: "半客製化",
    description: "根據您的空間和需求，推薦完美契合的收納系統。",
    icon: "✓",
  },
  {
    title: "優質材料",
    description: "使用高品質板材，確保耐用性和美觀。",
    icon: "✓",
  },
  {
    title: "專業安裝",
    description: "由經驗豐富的團隊安裝，確保穩固與安全。",
    icon: "✓",
  },
  {
    title: "一年保固",
    description: "提供五金板材一年保固，讓您安心使用。",
    icon: "✓",
  },
];

const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('" + import.meta.env.BASE_URL + "images/hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-yayi-brown bg-opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">專業客製化系統櫃</h1>
            <p className="text-xl mb-8">
              雅藝系統櫃為您打造完美收納空間，從設計、選材到安裝，一應俱全。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-yayi-gold hover:bg-opacity-80 text-white"
                size="lg"
              >
                <Link to="/products">瀏覽產品</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-yayi-gold hover:bg-white hover:text-yayi-brown"
                size="lg"
                onClick={() =>
                  window.open("https://line.me/R/ti/p/@YAYI", "_blank")
                }
              >
                LINE下單
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-yayi-beige bg-opacity-30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-yayi-brown">
            為什麼選擇雅藝系統櫃
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-yayi-gold rounded-full flex items-center justify-center text-white text-xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-yayi-brown">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-yayi-brown">熱門產品</h2>
            <Link
              to="/products"
              className="text-yayi-gold hover:underline font-medium"
            >
              查看全部
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yayi-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            開始打造您的理想收納空間
          </h2>
          <p className="text-xl mb-8 text-yayi-beige max-w-2xl mx-auto">
            與我們聯繫，獲取專業建議和免費估價。讓雅藝系統櫃為您量身訂製完美收納方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-yayi-gold hover:bg-opacity-80 text-white"
              size="lg"
            >
              <Link to="/contact-us">聯絡我們</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-yayi-gold hover:bg-white hover:text-yayi-brown"
              size="lg"
              onClick={() =>
                window.open("https://line.me/R/ti/p/@YAYI", "_blank")
              }
            >
              LINE下單
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
