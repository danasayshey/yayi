
import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  const values = [
    {
      title: "品質優先",
      description: "我們只選用高品質的材料，並嚴格控制每一個生產流程，確保每件產品都符合最高標準。",
      icon: "✨",
    },
    {
      title: "客戶至上",
      description: "您的滿意是我們的首要任務。我們傾聽您的需求，提供最適合的解決方案，並在服務中精益求精。",
      icon: "👥",
    },
    {
      title: "精湛工藝",
      description: "擁有多年經驗的專業工匠團隊，精準的技術和細膩的手工，創造出美觀且實用的系統櫃產品。",
      icon: "🛠️",
    },
    {
      title: "永續環保",
      description: "我們重視環境保護，選用環保材料，減少生產過程中的資源浪費，為永續家居環境盡一份心力。",
      icon: "🌱",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2 text-yayi-brown">關於我們</h1>
        <p className="text-lg mb-6 text-gray-600">
          專業系統櫃製造商，為您打造完美收納空間
        </p>
        
        <Separator className="my-8" />
        
        {/* 公司介紹 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-yayi-brown">雅藝系統櫃的故事</h2>
              <p className="mb-4">
                雅藝系統櫃成立於2005年，專注於為台灣家庭提供高品質、客製化的收納解決方案。從一個小型工作室發展至今，我們秉持「質精藝純」的理念，致力於將工藝與實用性完美結合。
              </p>
              <p className="mb-4">
                十多年來，我們不斷創新技術與設計，已為超過10,000個家庭打造專屬的收納空間。我們相信，好的收納系統不僅能提升居家的美觀，更能改善生活品質，創造更舒適的居住環境。
              </p>
              <p>
                雅藝系統櫃的每一位團隊成員都擁有豐富的行業經驗，從設計、製造到安裝，我們以專業和熱情為客戶提供全方位的服務，成為您信賴的系統櫃夥伴。
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1510415277747-41afb69c67cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="雅藝系統櫃工作坊" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* 我們的價值觀 */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-yayi-brown">我們的核心價值</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yayi-gold hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-medium mb-3 text-yayi-brown">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* 製作流程 */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-yayi-brown">我們的製作流程</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-yayi-beige bg-opacity-20 p-6 rounded-lg">
              <div className="w-12 h-12 bg-yayi-brown rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
              <h3 className="text-xl font-medium mb-3 text-yayi-brown">設計階段</h3>
              <p>
                我們的設計團隊會根據您的需求和空間特點，結合專業知識，設計出最合適的解決方案。透過3D模型展示，讓您提前預覽效果。
              </p>
            </div>
            <div className="bg-yayi-green bg-opacity-20 p-6 rounded-lg">
              <div className="w-12 h-12 bg-yayi-brown rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
              <h3 className="text-xl font-medium mb-3 text-yayi-brown">製造階段</h3>
              <p>
                採用先進的生產設備和嚴格的品質控制流程，確保每個部件都符合標準。我們的工匠將精湛技術融入每個細節。
              </p>
            </div>
            <div className="bg-yayi-gold bg-opacity-20 p-6 rounded-lg">
              <div className="w-12 h-12 bg-yayi-brown rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
              <h3 className="text-xl font-medium mb-3 text-yayi-brown">安裝階段</h3>
              <p>
                專業安裝團隊會準時到府，以細心和專業的態度完成安裝工作。我們確保每個產品都安裝牢固，功能正常。
              </p>
            </div>
          </div>
        </section>
        
        {/* 品質承諾 */}
        <section className="mb-16 bg-yayi-brown text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">我們的品質承諾</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-yayi-gold text-4xl font-bold mb-2">5年</div>
              <p>產品保固期</p>
            </div>
            <div>
              <div className="text-yayi-gold text-4xl font-bold mb-2">100%</div>
              <p>環保材料</p>
            </div>
            <div>
              <div className="text-yayi-gold text-4xl font-bold mb-2">10,000+</div>
              <p>滿意客戶</p>
            </div>
          </div>
        </section>
        
        {/* 團隊介紹 */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-yayi-brown">我們的專業團隊</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="陳總經理" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-yayi-brown">陳大明</h3>
              <p className="text-yayi-gold">創辦人 / 總經理</p>
            </div>
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="林設計師" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-yayi-brown">林小華</h3>
              <p className="text-yayi-gold">首席設計師</p>
            </div>
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="王經理" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-yayi-brown">王志明</h3>
              <p className="text-yayi-gold">生產經理</p>
            </div>
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="李經理" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-yayi-brown">李美玲</h3>
              <p className="text-yayi-gold">客戶服務經理</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
