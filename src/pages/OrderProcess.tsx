import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OrderProcess = () => {
  return (
    <div className="pt-24 pb-16">
      {/* 和量測指南一致：container + max-w-4xl + px-4 */}
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 標題 & 前言（字級/顏色與量測指南一致） */}
        <h1 className="text-3xl font-bold mb-6 text-yayi-brown">訂購流程</h1>
        <p className="text-lg mb-6">
          從諮詢到完工，我們提供全程專業服務
        </p>

        {/* 與量測指南一致的分隔線 */}
        <Separator className="my-8" />

        {/* 流程示意圖（上方整張） */}
        <section className="mb-12">
          <div className="rounded-lg overflow-hidden shadow-sm border border-yayi-beige">
            <img
              src={`${import.meta.env.BASE_URL}images/order-flow.png`}
              alt="訂購流程示意圖"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* 訂購須知（標題樣式、條列與行距都比照量測指南） */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-yayi-brown">訂購須知</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>恕不提供丈量服務，需自行確認放置空間大小。若有尺寸問題歡迎諮詢客服。</li>
            <li>因系統櫃材積較大，若電梯上樓需提供電梯尺寸；若電梯空間太小且樓層超過 5 樓，無法配合。</li>
            <li>為半客製化系統櫃，不提供量身訂製，半客製化歡迎透過 LINE 官方帳號洽詢我們。</li>
            <li>系統櫃尺寸需預留 1–2 CM 安裝空間。</li>
            <li>有客製項目恕不提供退貨，訂金為該案訂單總金額之二分之一。</li>
            <li>五金與板材皆有保固一年，以安裝完成日起算。</li>
            <li>預付訂金後需等待 3–4 週製作及運送時間。運送僅能指定日期，無法指定時間配送。</li>
            <li>下訂時無法指定送貨日期，系統櫃抵台後方能安排送貨時間。</li>
            <li>到貨後會通知物流，需預留放置板材空間。</li>
            <li>收到貨後再安排師傅上門安裝，安裝與運送無法指定同一日。</li>
            <li>運費台中以北免運，其他區域視距離加價。</li>
            <li>請於預計安裝日前至少一個月以上付訂金，恕不接急單。</li>
            <li>準備好開始您的系統櫃訂購流程了嗎？歡迎聯繫我們的專業團隊。</li>
          </ul>
        </section>

        {/* CTA 區塊：用和量測指南相近的風格（整塊背景、左對齊/小螢幕堆疊） */}
        <div className="mt-12 bg-yayi-beige bg-opacity-20 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3 text-yayi-brown">
            準備好開始您的系統櫃訂購流程了嗎？
          </h3>
          <p className="mb-6 text-gray-700">
            歡迎聯繫我們的專業團隊，或先瀏覽產品了解更多。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-yayi-gold hover:bg-opacity-80 text-white"
            >
              <Link to="/products">瀏覽產品</Link>
            </Button>

            <Button
              variant="outline"
              className="border-yayi-brown text-yayi-brown hover:bg-yayi-brown hover:text-white"
              onClick={() =>
                window.open("https://line.me/R/ti/p/@YAYI", "_blank")
              }
            >
              LINE 諮詢
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
