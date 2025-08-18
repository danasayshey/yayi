// src/components/FloatingButton.tsx
import { Button } from "@/components/ui/button";

export function FloatingButton() {
  // 你的檔案位置：public/images/floatingbutton.png
  const iconUrl = `${import.meta.env.BASE_URL}images/floating_button.png`;

  return (
    <Button
      size="icon"
      className="fixed bottom-8 right-8 z-50 bg-yayi-gold hover:bg-opacity-80 text-white
                 rounded-full w-14 h-14 shadow-lg flex items-center justify-center"
      onClick={() => window.open("https://line.me/R/ti/p/@YAYI", "_blank")}
      aria-label="LINE下單"
    >
      {/* 圖示鋪在金色圓底上；brightness-0 invert 讓圖示強制變白（即使原圖不是白色也可） */}
      <img
        src={iconUrl}
        alt=""
        className="w-7 h-7 md:w-8 md:h-8 object-contain pointer-events-none brightness-0 invert"
      />
      <span className="sr-only">LINE下單</span>
    </Button>
  );
}

export default FloatingButton;
