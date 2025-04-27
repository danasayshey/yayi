
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
              <p className="text-yayi-brown font-medium">注意：若您不確定如何測量，我們提供專業上門測量服務，確保數據精準無誤。</p>
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
                <p className="mt-2">這些資訊對於安裝調整非常重要，特別是在舊房子中。</p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-yayi-brown">測量圖示範</h2>
            <div className="bg-white p-6 border border-yayi-beige rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="測量圖示範" 
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center mt-3 text-sm text-gray-600">測量示意圖（請記錄所有關鍵尺寸）</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-yayi-brown">常見問題</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-yayi-brown">Q: 我需要測量多少次來確保準確性？</h3>
                <p>A: 建議測量至少兩次，以確保數據準確。如果兩次測量結果有差異，進行第三次測量。</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-yayi-brown">Q: 如果我的牆面不平或地板不水平怎麼辦？</h3>
                <p>A: 這是常見情況，請記錄最大的偏差值。我們的安裝團隊會使用專業工具和調整方法來解決這些問題。</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-yayi-brown">Q: 我應該考慮插座和開關的位置嗎？</h3>
                <p>A: 是的，這非常重要。請記錄所有電源插座、開關和其他固定裝置的位置，以便我們在設計時考慮這些因素。</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-yayi-brown">Q: 我可以直接請你們來測量嗎？</h3>
                <p>A: 當然可以。我們提供專業的上門測量服務，確保所有數據精確無誤。您可以聯繫我們預約測量時間。</p>
              </div>
            </div>
          </section>
          
          <div className="mt-12 bg-yayi-brown p-6 rounded-lg text-white">
            <h2 className="text-2xl font-semibold mb-3">預約專業測量</h2>
            <p className="mb-4">若您希望獲得更精準的測量結果，歡迎預約我們的專業測量服務。</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact-us" 
                className="bg-yayi-gold hover:bg-opacity-80 text-white px-6 py-3 rounded-md text-center font-medium"
              >
                聯絡我們
              </a>
              <a 
                href="https://line.me/R/ti/p/@123abcde" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-transparent border border-white hover:bg-white hover:text-yayi-brown px-6 py-3 rounded-md text-center font-medium transition-colors"
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
