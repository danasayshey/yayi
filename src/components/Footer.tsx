// src/components/Footer.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const qr = import.meta.env.BASE_URL + "images/LINE-QRcode.png";

  return (
    <footer className="bg-yayi-brown text-white">
      {/* 主要 footer 區塊（已移除 CTA，不會跟首頁重複） */}
      <div className="container mx-auto px-4 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start">
          {/* 聯絡資訊 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yayi-gold">聯絡資訊</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>(03)2870572</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:yayiyaya2024@gmail.com"
                  className="hover:underline"
                >
                  yayiyaya2024@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span>桃園市桃園區民光東路257號</span>
              </li>
              <li className="flex items-center gap-3">
                <Facebook className="h-5 w-5" />
                <a
                  href="https://www.facebook.com/profile.php?id=61578339476484&locale=zh_TW"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  雅藝系統櫃
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-5 w-5" />
                <a
                  href="https://www.instagram.com/yayi_yaya2024/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  yayi_yaya2024
                </a>
              </li>
            </ul>
          </div>

          {/* 快速連結 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yayi-gold">快速連結</h3>
            <ul className="space-y-3 text-white/90">
              <li>
                <Link to="/cases" className="hover:underline">
                  案例分享
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:underline">
                  產品總覽
                </Link>
              </li>
              <li>
                <Link to="/measuring-guide" className="hover:underline">
                  量測指南
                </Link>
              </li>
              <li>
                <Link to="/order-process" className="hover:underline">
                  訂購流程
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:underline">
                  關於我們
                </Link>
              </li>
            </ul>
          </div>

          {/* LINE 區塊 */}
          <div className="space-y-4 md:justify-self-end">
            <h3 className="text-xl font-semibold text-yayi-gold">
              加入 LINE 官方帳號
            </h3>
            <p className="text-white/80">隨時掌握最新消息與優惠</p>
            <div className="flex items-center gap-4">
              <img
                src={qr}
                alt="加入 LINE 好友 QR code"
                className="w-28 h-28 rounded-md bg-white p-2"
              />
              <Button
                className="bg-yayi-gold hover:bg-opacity-80 text-white"
                onClick={() =>
                  window.open("https://line.me/R/ti/p/@YAYI", "_blank")
                }
              >
                加入 LINE
              </Button>
            </div>
          </div>
        </div>

        {/* 版權 */}
        <div className="mt-10 text-center text-white/70 text-sm">
          © 2025 雅藝系統櫃．保留所有權利。
        </div>
      </div>
    </footer>
  );
}

export default Footer;
