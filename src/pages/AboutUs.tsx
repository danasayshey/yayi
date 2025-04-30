
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      title: "品質優先",
      description: "我們選用高品質的材料，深入瞭解每一個生產流程，確保每件產品都符合最高標準。",
      icon: "✨",
    },
    {
      title: "客戶至上",
      description: "傾聽您的需求，提供最適合的解決方案，並在服務中精益求精。",
      icon: "👥",
    },
    {
      title: "精湛工藝",
      description: "親自走訪工廠、專業團隊，精準的技術和細膩的製作，創造出美觀且實用的系統櫃產品。",
      icon: "🛠️",
    },
    {
      title: "專業安裝",
      description: "到府安裝，確保安裝品質與安全性，保障客戶便利，並符合家居需求。",
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
                雅藝系統櫃成立專注於為台灣家庭提供高品質的收納解決方案。我們秉持「質精藝純」的理念，致力於將工藝與實用性完美結合。
              </p>
              <p className="mb-4">
                價美質精，我們相信，好的收納系統不僅能提升居家的美觀，更能改善生活品質，創造更舒適的居住環境。
              </p>
              <p>
                雅藝系統櫃的每一位團隊成員都擁有豐富的行業經驗，從設計、製造到安裝，我們以專業和熱情為客戶提供全方位的服務，成為您信賴的系統櫃夥伴。
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={import.meta.env.BASE_URL + "images/team-workshop.jpg"}
                alt="雅藝系統櫃" 
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
  <Card className="border-yayi-beige hover:border-yayi-gold transition-colors">
    <CardContent className="p-6 flex flex-col items-center">
      <div className="w-12 h-12 bg-yayi-gold rounded-full flex items-center justify-center text-white mb-4">
        <Phone className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-medium mb-2 text-yayi-brown">電話</h3>
      <p className="text-center text-gray-600">
       (03)2870572<br />
        週一至週日 10:00 - 18:00
      </p>
    </CardContent>
  </Card>

  <Card className="border-yayi-beige hover:border-yayi-gold transition-colors">
    <CardContent className="p-6 flex flex-col items-center">
      <div className="w-12 h-12 bg-yayi-gold rounded-full flex items-center justify-center text-white mb-4">
        <Mail className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-medium mb-2 text-yayi-brown">電子郵件</h3>
      <p className="text-center text-gray-600">
        xitong778868@gmail.com<br />
      </p>
    </CardContent>
  </Card>

  <Card className="border-yayi-beige hover:border-yayi-gold transition-colors">
    <CardContent className="p-6 flex flex-col items-center">
      <div className="w-12 h-12 bg-yayi-gold rounded-full flex items-center justify-center text-white mb-4">
        <MapPin className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-medium mb-2 text-yayi-brown">門市地址</h3>
      <p className="text-center text-gray-600">
        桃園市中壢區青心路30號<br />
      </p>
    </CardContent>
  </Card>
</div>

<div className="mt-16 bg-yayi-green bg-opacity-20 p-8 rounded-lg text-center">
  <h2 className="text-2xl font-semibold mb-3 text-yayi-brown">使用LINE聯繫更便捷</h2>
  <p className="mb-6">
    掃描QR碼或點擊下方按鈕，透過LINE與我們的客服人員直接對話
  </p>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="w-40 h-40 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-600">LINE QR碼</span>
      </div>
    </div>
    <Button
      className="bg-yayi-gold hover:bg-opacity-80 text-white px-8"
      onClick={() => window.open("https://line.me/R/ti/p/@YAYI", "_blank")}
    >
      加入LINE好友
    </Button>
  </div>
  </div>
  </div>
  </div>
  );
};

export default AboutUs;
