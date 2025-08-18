
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const MeasuringGuide = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-yayi-brown">量測指南</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            正確的測量是打造完美系統櫃的第一步。透過以下詳細的量測指南，幫助您獲取精準的空間數據，為後續的設計與安裝奠定基礎。
          </p>
          
          <Separator className="my-8" />
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-yayi-brown">基本測量工具</h2>
            <p className="mb-4">在開始測量之前，請確保您有以下工具：</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yayi-gold rounded-full flex items-center justify-center">
                  <Check className="text-white h-4 w-4" />
                </div>
                捲尺（至少5米長）
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yayi-gold rounded-full flex items-center justify-center">
                  <Check className="text-white h-4 w-4" />
                </div>
                筆記本和筆
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yayi-gold rounded-full flex items-center justify-center">
                  <Check className="text-white h-4 w-4" />
                </div>
                水平儀
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yayi-gold rounded-full flex items-center justify-center">
                  <Check className="text-white h-4 w-4" />
                </div>
                輔助人員（建議）
              </li>
            </ul>
            
            <div className="bg-yayi-beige bg-opacity-20 p-4 rounded-lg mb-6">
              <p className="text-yayi-brown font-medium leading-relaxed">
               若您不確定如何測量，我們提供線上諮詢服務，
              <br className="hidden sm:block" />
               可提供預計施作空間尺寸照片詢問，確保測量數據準確無誤。
            </p>
        </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-yayi-brown">測量步驟</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3 text-yayi-brown">1. 測量房間尺寸</h3>
                <p>首先測量整個房間的尺寸，包括：</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>房間的長度和寬度</li>
                  <li>天花板高度</li>
                  <li>測量時注意記錄任何突出物或不規則處</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-yayi-brown">2. 確定系統櫃位置</h3>
                <p>確定系統櫃的具體安裝位置，測量：</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>預計安裝櫃體的牆面寬度</li>
                  <li>該位置的高度限制</li>
                  <li>可用深度（從牆面到預計的櫃體前緣）</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-yayi-brown">3. 注意障礙物</h3>
                <p>測量並記錄可能影響安裝的障礙物：</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>窗戶的位置與尺寸</li>
                  <li>電源插座和開關的位置</li>
                  <li>暖氣、冷氣出風口</li>
                  <li>門的位置及其開啟方向與範圍</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-yayi-brown">4. 檢查牆面平整度</h3>
                <p>使用水平儀檢查：</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>牆面是否平整</li>
                  <li>地板是否水平</li>
                  <li>牆角是否為直角</li>
                </ul>
              </div>
          </div>
          </section>          
          <div className="mt-12 bg-yayi-brown p-6 rounded-lg text-white">
          <p className="mb-4">歡迎加入我們的 LINE 官方帳號了解更多</p>
          <div className="flex justify-start">
          <a
          href="https://line.me/R/ti/p/@YAYI"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yayi-gold hover:bg-opacity-80 text-white px-6 py-3 rounded-md text-center font-medium"
            >
              LINE 預約
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasuringGuide;
