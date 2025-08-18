import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const logoUrl =
    import.meta.env.BASE_URL +
    "lovable-uploads/bb26c18f-c1be-48df-98e3-f936217ddd03.png";
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "首頁", path: "/" },
    { name: "產品總覽", path: "/products" },
    { name: "案例分享", path: "/cases" },
    { name: "量測指南", path: "/measuring-guide" },
    { name: "訂購流程", path: "/order-process" },
    { name: "關於我們", path: "/about-us" },
  ];

  return (
    // 固定高度與樣式：不再因為捲動改變
    <header className="fixed top-0 left-0 w-full z-30 bg-white shadow-md py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img
              src={logoUrl}
              alt="雅藝系統櫃"
              className="h-12 md:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-yayi-brown hover:text-yayi-gold font-medium ${
                      location.pathname === link.path
                        ? "border-b-2 border-yayi-gold"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              variant="default"
              className="bg-yayi-gold hover:bg-opacity-80 text-white ml-4"
              onClick={() =>
                window.open("https://line.me/R/ti/p/@YAYI", "_blank")
              }
            >
              LINE下單
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              className="text-yayi-brown"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 text-yayi-brown hover:text-yayi-gold ${
                    location.pathname === link.path
                      ? "font-medium border-l-4 pl-2 border-yayi-gold"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            className="bg-yayi-gold hover:bg-opacity-80 text-white mt-4 w-full"
            onClick={() => {
              window.open("https://line.me/R/ti/p/@YAYI", "_blank");
              closeMenu();
            }}
          >
            LINE下單
          </Button>
        </nav>
      </div>
    </header>
  );
}
