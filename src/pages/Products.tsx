
import { useState } from "react";
import { ProductCard, Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// 模擬產品數據
const mockProducts: Product[] = [
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
  {
    id: "cabinet-4",
    name: "書房收納系統",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    height: "高150cm",
    doorType: "開門式",
    drawerCount: 3
  },
  {
    id: "cabinet-5",
    name: "玄關鞋櫃",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    height: "高90cm",
    doorType: "開門式",
    drawerCount: 1
  },
  {
    id: "cabinet-6",
    name: "客廳電視櫃",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    height: "高60cm",
    doorType: "滑門式",
    drawerCount: 2
  },
];

// 篩選選項
const heightOptions = ["高60cm", "高90cm", "高120cm", "高150cm", "高180cm", "高210cm"];
const doorTypeOptions = ["開門式", "滑門式"];
const drawerCountOptions = [1, 2, 3];

const Products = () => {
  const [products] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    heights: [] as string[],
    doorTypes: [] as string[],
    drawerCounts: [] as number[],
  });

  const toggleFilterMenu = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleHeightChange = (height: string) => {
    setFilters((prev) => {
      const updatedHeights = prev.heights.includes(height)
        ? prev.heights.filter((h) => h !== height)
        : [...prev.heights, height];
      
      return {
        ...prev,
        heights: updatedHeights,
      };
    });
  };

  const handleDoorTypeChange = (doorType: string) => {
    setFilters((prev) => {
      const updatedDoorTypes = prev.doorTypes.includes(doorType)
        ? prev.doorTypes.filter((d) => d !== doorType)
        : [...prev.doorTypes, doorType];
      
      return {
        ...prev,
        doorTypes: updatedDoorTypes,
      };
    });
  };

  const handleDrawerCountChange = (drawerCount: number) => {
    setFilters((prev) => {
      const updatedDrawerCounts = prev.drawerCounts.includes(drawerCount)
        ? prev.drawerCounts.filter((d) => d !== drawerCount)
        : [...prev.drawerCounts, drawerCount];
      
      return {
        ...prev,
        drawerCounts: updatedDrawerCounts,
      };
    });
  };

  const applyFilters = () => {
    let result = [...products];
    
    if (filters.heights.length > 0) {
      result = result.filter((product) => filters.heights.includes(product.height));
    }
    
    if (filters.doorTypes.length > 0) {
      result = result.filter((product) => filters.doorTypes.includes(product.doorType));
    }
    
    if (filters.drawerCounts.length > 0) {
      result = result.filter((product) => filters.drawerCounts.includes(product.drawerCount));
    }
    
    setFilteredProducts(result);
    setIsFilterOpen(false);
  };

  const resetFilters = () => {
    setFilters({
      heights: [],
      doorTypes: [],
      drawerCounts: [],
    });
    setFilteredProducts(products);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-yayi-brown">產品總覽</h1>
        
        {/* Filter Section */}
        <div className="mb-8">
          <Button 
            onClick={toggleFilterMenu}
            variant="outline"
            className="flex items-center gap-2 border-yayi-brown text-yayi-brown"
          >
            <Filter size={16} />
            產品篩選
          </Button>
          
          {isFilterOpen && (
            <div className="mt-4 p-4 border border-yayi-beige rounded-lg bg-white shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-3 text-yayi-brown">依尺寸</h3>
                  <div className="space-y-2">
                    {heightOptions.map((height) => (
                      <div key={height} className="flex items-center space-x-2">
                        <Checkbox 
                          id={height} 
                          checked={filters.heights.includes(height)}
                          onCheckedChange={() => handleHeightChange(height)}
                        />
                        <label htmlFor={height} className="text-sm cursor-pointer">{height}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3 text-yayi-brown">依門型</h3>
                  <div className="space-y-2">
                    {doorTypeOptions.map((doorType) => (
                      <div key={doorType} className="flex items-center space-x-2">
                        <Checkbox 
                          id={doorType} 
                          checked={filters.doorTypes.includes(doorType)}
                          onCheckedChange={() => handleDoorTypeChange(doorType)}
                        />
                        <label htmlFor={doorType} className="text-sm cursor-pointer">{doorType}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3 text-yayi-brown">依抽屜數</h3>
                  <div className="space-y-2">
                    {drawerCountOptions.map((count) => (
                      <div key={count} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`drawer-${count}`} 
                          checked={filters.drawerCounts.includes(count)}
                          onCheckedChange={() => handleDrawerCountChange(count)}
                        />
                        <label htmlFor={`drawer-${count}`} className="text-sm cursor-pointer">{count}層抽屜</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <Button
                  onClick={applyFilters}
                  className="bg-yayi-gold hover:bg-opacity-80 text-white"
                >
                  套用篩選
                </Button>
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="border-yayi-brown text-yayi-brown"
                >
                  重設
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">沒有符合條件的產品</h3>
            <p className="text-gray-600 mb-6">請調整篩選條件或重設</p>
            <Button
              onClick={resetFilters}
              className="bg-yayi-gold hover:bg-opacity-80 text-white"
            >
              重設篩選
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
