
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const OrderProcess = () => {
  const steps = [
    {
      number: 1,
      title: "初步諮詢",
      description: "透過電話、LINE或現場諮詢，了解您的需求與預算。我們的專業顧問會為您提供初步建議。",
      icon: "💬",
    },
    {
      number: 2,
      title: "專業測量",
      description: "安排專業人員上門測量空間尺寸，確保設計方案能完美契合您的空間。",
      icon: "📏",
    },
    {
      number: 3,
      title: "設計規劃",
      description: "根據您的需求和空間條件，我們的設計團隊將提供客製化設計方案與估價。",
      icon: "✏️",
    },
    {
      number: 4,
      title: "確認訂單",
      description: "確認設計方案與報價後，簽訂合約並支付訂金，開始進行生產製作。",
      icon: "📝",
    },
    {
      number: 5,
      title: "製作生產",
      description: "使用高品質材料，根據設計方案進行精密製作，確保每個細節都符合標準。",
      icon: "🔨",
    },
    {
      number: 6,
      title: "專業安裝",
      description: "由專業安裝團隊上門安裝，確保每個系統櫃都穩固安全，功能完善。",
      icon: "🛠️",
    },
    {
      number: 7,
      title: "驗收保固",
      description: "安裝完成後進行驗收，並提供5年產品保固，讓您安心使用。",
      icon: "✅",
    },
  ];

  const faqs = [
    {
      question: "從測量到安裝完成需要多長時間？",
      answer: "一般情況下，從測量到安裝完成大約需要3-4週時間。具體時間會根據訂單複雜度、當前訂單量和材料供應情況而有所調整。我們會在簽訂合約時提供較為準確的時間估計。"
    },
    {
      question: "系統櫃可以做到什麼尺寸？有標準尺寸嗎？",
      answer: "我們的系統櫃都是客製化製作，可以根據您的空間需求量身定做。高度一般從60cm到240cm不等，寬度和深度也可根據空間靈活調整。我們也有部分常用標準尺寸供參考，但可以根據實際需求調整。"
    },
    {
      question: "系統櫃的材質有哪些選擇？",
      answer: "我們使用的主要材質是E1級環保板材，甲醛釋放量符合歐洲嚴格標準。表面處理有多種選擇，包括各種木紋貼皮、烤漆、美耐板等。不同材質有不同的價格和特性，我們的顧問可以根據您的需求和預算提供建議。"
    },
    {
      question: "安裝後如果有問題，如何處理？",
      answer: "我們提供5年產品保固。安裝後如發現任何問題，可以通過電話、LINE或電子郵件聯繫我們的客服部門。我們會在24小時內回復，並視情況安排技術人員上門檢修。正常使用下的結構問題我們提供免費維修服務。"
    },
    {
      question: "系統櫃的價格是如何計算的？",
      answer: "系統櫃的價格主要根據尺寸、材料選擇、功能設計和配件來計算。我們會在測量後提供詳細的報價單，列明各項費用。一般來說，基礎款系統櫃每延長米價格從$XX,XXX起，實際價格會因您的具體需求而有所不同。"
    },
    {
      question: "可以只購買系統櫃而不需要安裝服務嗎？",
      answer: "為了確保產品質量和使用安全，我們建議由我們的專業團隊進行安裝。系統櫃需要精確安裝才能確保穩固和功能正常。如有特殊情況，請與我們的銷售顧問討論。"
    },
    {
      question: "訂金和尾款各是多少？何時支付？",
      answer: "簽訂合約時需支付總金額的30%作為訂金，開始生產製作。安裝完成並驗收合格後支付剩餘的70%尾款。我們接受現金、銀行轉帳和信用卡付款。"
    },
    {
      question: "如果空間有特殊要求或限制，能做到客製化嗎？",
      answer: "是的，客製化正是我們的專長。無論是斜頂閣樓、不規則牆面還是特殊功能需求，我們的設計團隊都能提供創新解決方案。請在初步諮詢時告知我們您的特殊需求。"
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-bold mb-2 text-yayi-brown">訂購流程</h1>
        <p className="text-lg mb-6 text-gray-600">
          從諮詢到完工，我們提供全程專業服務
        </p>
        
        <Separator className="my-8" />
        
        {/* 訂購流程圖 */}
        <section className="mb-16">
          <div className="relative">
            {/* 連接線 */}
            <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-yayi-gold bg-opacity-50 -translate-x-1/2 z-0"></div>
            
            {/* 步驟列表 */}
            <div className="space-y-12 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-16 h-16 rounded-full bg-yayi-gold flex items-center justify-center text-2xl text-white flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-yayi-gold flex-grow max-w-lg ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                    <h3 className="text-xl font-semibold mb-2 text-yayi-brown">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <div className="bg-yayi-beige bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-yayi-brown text-center">
              準備好開始您的系統櫃訂購流程了嗎？
            </h2>
            <p className="text-center mb-6">
              聯繫我們的專業團隊，獲取免費諮詢與報價
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-yayi-gold hover:bg-opacity-80 text-white"
                size="lg"
              >
                <a href="/contact-us">聯絡我們</a>
              </Button>
              <Button
                variant="outline"
                className="border-yayi-brown text-yayi-brown hover:bg-yayi-brown hover:text-white"
                size="lg"
                onClick={() =>
                  window.open("https://line.me/R/ti/p/@123abcde", "_blank")
                }
              >
                LINE 諮詢
              </Button>
            </div>
          </div>
        </section>
        
        {/* FAQ部分 */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-yayi-brown">常見問題 FAQ</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-yayi-beige">
                <AccordionTrigger className="text-yayi-brown font-medium py-4 hover:text-yayi-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 text-center">
            <p className="mb-4">還有其他問題？歡迎直接與我們聯繫</p>
            <Button asChild className="bg-yayi-gold hover:bg-opacity-80 text-white">
              <a href="/contact-us">聯絡我們</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderProcess;
