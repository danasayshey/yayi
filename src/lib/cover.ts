// src/lib/cover.ts
/**
 * 萃取 Google Drive 檔案 id（支援 /file/d/{id}/view、open?id=、uc?id= 等）
 */
function extractDriveId(input?: string): string | null {
  if (!input) return null;

  // 純 ID（常見 25~60 位英數含 - _）
  if (/^[a-zA-Z0-9_-]{20,}$/.test(input)) return input;

  try {
    const url = new URL(input);
    if (!/google\.com$/i.test(url.hostname) && !/googleusercontent\.com$/i.test(url.hostname)) {
      return null;
    }

    // /file/d/{id}/...
    const m1 = url.pathname.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (m1?.[1]) return m1[1];

    // ?id=xxxxx
    const idParam = url.searchParams.get("id");
    if (idParam) return idParam;

    // /uc?export=view&id=xxxxx 或其他 query 形式
    for (const [k, v] of url.searchParams.entries()) {
      if (k.toLowerCase() === "id" && v) return v;
    }
  } catch {
    /* not a URL */
  }
  return null;
}

/**
 * 轉為可直接顯示的封面圖 URL
 * - 沒有就回傳 placeholder
 * - Drive：統一輸出高畫質可快取的 lh3 直鏈
 */
export function toCoverUrl(src?: string) {
  const placeholder = import.meta.env.BASE_URL + "placeholder.svg";
  if (!src) return placeholder;

  const driveId = extractDriveId(src);
  if (driveId) {
    // 視窗寬度自適應。若要更省流量可調 w800 / w1024
    return `https://lh3.googleusercontent.com/d/${driveId}=w1200`;
  }

  // 其他 http(s) 圖片網址
  if (/^https?:\/\//i.test(src)) return src;

  // 其他未知字串 -> placeholder
  return placeholder;
}

/** 產生 cover 的背景樣式（若你想用 bg div） */
export function coverBgStyle(src?: string): React.CSSProperties {
  const url = toCoverUrl(src);
  return {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}
