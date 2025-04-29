
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-yayi-brown text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4 text-yayi-beige">聯絡資訊</h3>
            <ul className="space-y-2">
              <li>電話：(03)2870572</li>
              <li>信箱：xitong778868@gmail.com</li>
              <li>地址：桃園市中壢區青心路30號</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4 text-yayi-beige">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-yayi-gold transition-colors">
                  產品
                </Link>
              </li>
              <li>
                <Link to="/measuring-guide" className="hover:text-yayi-gold transition-colors">
                  量測指南
                </Link>
              </li>
              <li>
                <Link to="/order-process" className="hover:text-yayi-gold transition-colors">
                  訂購流程 & FAQ
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-yayi-gold transition-colors">
                  關於我們
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-yayi-gold transition-colors">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4 text-yayi-beige">訂閱電子報</h3>
            <p className="mb-3">接收最新產品資訊與優惠</p>
            <div className="flex">
              <input
                type="email"
                placeholder="您的電子郵件"
                className="px-4 py-2 text-yayi-brown rounded-l-md w-full focus:outline-none"
              />
              <button className="bg-yayi-gold hover:bg-opacity-80 px-4 py-2 rounded-r-md transition-colors">
                訂閱
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-yayi-beige border-opacity-30 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} 雅藝系統櫃. 保留所有權利。</p>
        </div>
      </div>
    </footer>
  );
}
