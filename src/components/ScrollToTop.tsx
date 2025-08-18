// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** 切頁時自動回到頂部；如果有 #hash 則捲到對應錨點 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      // 先嘗試立刻捲到錨點
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      // DOM 可能延遲出現，補一個微延遲的嘗試
      setTimeout(() => {
        const t2 = document.getElementById(id);
        if (t2) t2.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      return;
    }

    // 沒有 hash ⇒ 直接回到頁面頂端
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
