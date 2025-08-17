// scripts/fetch-products.mjs
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); // 先讀 .env.local
dotenv.config();                       // 再讀 .env（備援）

import path from "path";
import fs from "fs";
import { parse } from "csv-parse/sync";

const SHEET_ID =
  process.env.SHEET_ID || process.env.VITE_SHEET_ID || "";
const PRODUCTS_GID =
  process.env.PRODUCTS_GID || process.env.VITE_PRODUCTS_GID || "";

if (!SHEET_ID) {
  console.error("❌  缺少 SHEET_ID，請在 .env.local 或 Repo Secret 設定");
  process.exit(1);
}

const CSV_URL =
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv` +
  (PRODUCTS_GID ? `&gid=${PRODUCTS_GID}` : "") +
  `&v=${Date.now()}`;

let csvText;
try {
  const res = await fetch(CSV_URL);
  if (!res.ok) {
    console.error("❌  下載 Google Sheet 失敗", res.status, res.statusText);
    process.exit(1);
  }
  csvText = await res.text();
} catch (err) {
  console.error("❌  下載 Google Sheet 失敗", err);
  process.exit(1);
}

// 直連 Google Drive 圖片（固定拿到 image/jpeg）
const driveImg = (id, i = 0, v = Date.now()) =>
  `https://lh3.googleusercontent.com/d/${id}=w2400?v=${v}-${i}`;

const rows = parse(csvText, {
  columns: true,
  skip_empty_lines: true,
  bom: true,
  trim: true,
});

const products = rows
  .filter((raw) => raw && raw.id)
  .map((raw) => {
    const imageIds = Object.keys(raw)
      .filter((k) => k.toLowerCase().startsWith("image_") && raw[k])
      .map((k) => String(raw[k]).trim())
      .filter(Boolean);

    const images = imageIds.map((id, idx) =>
      driveImg(id, idx, raw.sheetVersion || Date.now())
    );

    const features = Object.keys(raw)
      .filter((k) => k.toLowerCase().startsWith("feature_") && raw[k])
      .map((k) => String(raw[k]).trim());

    const sizes = Object.keys(raw)
      .filter((k) => k.toLowerCase().startsWith("size_") && raw[k])
      .map((k) => String(raw[k]).trim());

    const tags =
      String(raw.tags || "")
        .split(/[,，]/)
        .map((t) => t.trim())
        .filter(Boolean)
        .slice(0, 3) || [];

    return {
      id: String(raw.id || "").trim(),
      name: String(raw.name || "").trim(),
      category: String(raw.category || "").trim(),
      tags,
      description: String(raw.description || "").trim(),
      material: String(raw.material || "").trim(),
      color: String(raw.color || "").trim(),
      images,
      features,
      sizes,
    };
  });

const outDir = path.resolve("src", "data");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, "products.json"),
  JSON.stringify(products, null, 2)
);

console.log(`✅  products.json updated  (${products.length} items)`);
