// scripts/fetch-cases.mjs
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); // 先讀 .env.local
dotenv.config();                       // 再讀 .env（備援）

import path from "path";
import fs from "fs";
import { parse } from "csv-parse/sync";

const SHEET_ID =
  process.env.SHEET_ID || process.env.VITE_SHEET_ID || "";
const CASES_GID =
  process.env.CASES_GID || process.env.VITE_CASES_GID || "";

if (!SHEET_ID || !CASES_GID) {
  console.error("❌  缺少 SHEET_ID 或 CASES_GID，請填在 .env.local");
  process.exit(1);
}

const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${CASES_GID}&v=${Date.now()}`;

let csvText;
try {
  const res = await fetch(CSV_URL);
  if (!res.ok) {
    console.error("❌  下載案例 CSV 失敗", res.status, res.statusText);
    process.exit(1);
  }
  csvText = await res.text();
} catch (err) {
  console.error("❌  下載案例 CSV 失敗", err);
  process.exit(1);
}

// 預期欄位：id,doc_id,meta_title,meta_description,cover_image
const rows = parse(csvText, {
  columns: true,
  skip_empty_lines: true,
  bom: true,
  trim: true,
});

const cases = rows
  .filter((r) => r && r.id && String(r.id).trim())
  .map((r) => ({
    id: String(r.id || "").trim(),
    doc_id: String(r.doc_id || "").trim(),
    meta_title: String(r.meta_title || "").trim(),
    meta_description: String(r.meta_description || "").trim(),
    cover_image: String(r.cover_image || "").trim(), // Google Drive 檔案 id
  }));

const outDir = path.resolve("src", "data");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, "cases.json"),
  JSON.stringify(cases, null, 2)
);

console.log(`✅  cases.json updated  (${cases.length} cases)`);
