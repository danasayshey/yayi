// scripts/fetch-products.mjs
import fs   from "fs";
import path from "path";

// Node ≥18 已內建 global fetch，若想相容舊版：`import fetch from 'node-fetch';`
const SHEET_ID = process.env.SHEET_ID;                       // 👉 把 <SHEET_ID> 往 .env 移
if (!SHEET_ID) {
  console.error("❌  SHEET_ID 環境變數未設定！");
  process.exit(1);
}

const CSV_URL =
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&v=${Date.now()}`;

const csv = await fetch(CSV_URL).then(r => r.text());

// --- 把 CSV 轉 JSON -----------------------------------------------------------
function parse(csvText) {
  const lines  = csvText.trim().split("\n").map(l => l.split(","));
  const header = lines.shift();
  return lines.map(row =>
    Object.fromEntries(row.map((v, i) => [header[i], v.trim()]))
  );
}

const products = parse(csv).map(p => ({
  ...p,
  images: p.images             // images 欄位：以逗號分隔的 Drive fileId 清單
    .split(",")
    .filter(Boolean)
    .map(id => `https://drive.google.com/uc?export=view&id=${id.trim()}`)
}));

// --- 輸出到 src/data ----------------------------------------------------------
const dataDir = path.resolve("src", "data");
fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(
  path.join(dataDir, "products.json"),
  JSON.stringify(products, null, 2),
  "utf8"
);

console.log(`✅  products.json updated  (${products.length} items)`);
