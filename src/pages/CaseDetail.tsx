import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import cases from "@/data/cases.json";

/** 允許顯示的 Google Drive 圖片：id -> 直連 */
const driveImg = (id: string) => {
  if (!id) return "";
  if (/^https?:\/\//i.test(id)) return id;
  return `https://lh3.googleusercontent.com/d/${id}=w1600`;
};

/** 很簡單的淨化，移除 <script>/<style> 及 on* 事件屬性（我們信任文件來源是自己） */
function sanitize(html: string) {
  let out = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/\son\w+="[^"]*"/gi, "")
    .replace(/\son\w+='[^']*'/gi, "");
  return out;
}

export default function CaseDetail() {
  const { id } = useParams();
  const data: any = useMemo(() => (cases as any[]).find((x) => x.id === id), [id]);

  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!data?.doc_id) {
      setHtml(null);
      return;
    }
    const url = `https://docs.google.com/document/d/${data.doc_id}/export?format=html`;
    setLoading(true);
    fetch(url)
      .then((r) => r.text())
      .then((raw) => {
        // 取 <body> 內文，避免外層多餘標籤
        const match = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        const body = match ? match[1] : raw;
        setHtml(sanitize(body));
      })
      .catch(() => setHtml(null))
      .finally(() => setLoading(false));
  }, [data?.doc_id]);

  if (!data) {
    return <div className="container mx-auto px-4 py-16">找不到此案例</div>;
  }

  const title = data.meta_title || data.id;
  const desc  = data.meta_description || "";
  const cover = driveImg(data.cover_image || "");

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* 返回列表 */}
        <div className="mb-4">
          <Link to="/cases" className="text-yayi-gold hover:underline">
            ← 回到案例分享
          </Link>
        </div>

        {/* 標題與導言 */}
        <h1 className="text-3xl font-bold mb-2 text-yayi-brown">{title}</h1>
        {desc && <p className="text-gray-600 mb-6">{desc}</p>}
        <div className="h-[1px] bg-yayi-beige mb-8" />

        {/* 封面（可選） */}
        {cover && (
          <div className="mb-8 rounded-lg overflow-hidden shadow">
            <img src={cover} alt={title} className="w-full h-auto object-cover" />
          </div>
        )}

        {/* 主要內容：優先用 HTML（自家樣式），抓不到才用 iframe */}
        {loading ? (
          <div className="text-gray-500">內容載入中…</div>
        ) : html ? (
          <article
            className={[
              // 文字與間距（模仿產品頁）
              "text-[17px] leading-8 text-gray-800",
              "space-y-5",
              // 標題色系
              "[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-yayi-brown",
              "[&_h3]:text-xl  [&_h3]:font-semibold [&_h3]:text-yayi-brown",
              // 圖片滿版、圓角陰影
              "[&_img]:w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:shadow",
              // 清單縮排
              "[&_ul]:list-disc [&_ul]:pl-6",
              "[&_ol]:list-decimal [&_ol]:pl-6",
              // 表格可橫向捲動
              "[&_table]:w-full [&_table]:block [&_table]:overflow-x-auto",
              // 連結色
              "[&_a]:text-yayi-gold hover:[&_a]:underline",
              // 小分隔線（若文件內有 <hr>）
              "[&_hr]:my-8 [&_hr]:border-yayi-beige",
            ].join(" ")}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : data.doc_id ? (
          // 抓不到 HTML（例如權限或 CORS），退回原本 iframe 做保底
          <iframe
            title="case"
            className="w-full aspect-[4/3] border rounded-lg"
            src={`https://docs.google.com/document/d/${data.doc_id}/preview`}
          />
        ) : (
          <div className="text-sm text-gray-500">尚未提供內容</div>
        )}
      </div>
    </div>
  );
}
