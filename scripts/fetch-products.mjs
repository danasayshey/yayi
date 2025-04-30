// scripts/fetch-products.mjs
import fs   from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import 'dotenv/config';

const SHEET_ID = process.env.SHEET_ID;
if (!SHEET_ID) {
  console.error('❌  缺少 SHEET_ID，請在 .env.local 或 Repo Secret 設定');
  process.exit(1);
}

/* -------------------------------------------------------------------------- */
/* 1. 下載試算表 CSV                                                            */
/* -------------------------------------------------------------------------- */
const CSV_URL =
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&v=${Date.now()}`;

const csvText = await fetch(CSV_URL).then(r => r.text()).catch(err => {
  console.error('❌  下載 Google Sheet 失敗', err);
  process.exit(1);
});

/* -------------------------------------------------------------------------- */
/* 2. CSV → JS 物件                                                             */
/* -------------------------------------------------------------------------- */
const rows = parse(csvText, { columns: true, skip_empty_lines: true });

const products = rows.map(raw => {
  /* ---------- 動態抓欄位：image_ / feature_ / size_ ----------------------- */
  const images   = Object.keys(raw)
    .filter(k => k.toLowerCase().startsWith('image_')   && raw[k])
    .map(id => `https://drive.google.com/uc?export=view&id=${id.trim()}`);

  const features = Object.keys(raw)
    .filter(k => k.toLowerCase().startsWith('feature_') && raw[k])
    .map(k => raw[k]);

  const sizes    = Object.keys(raw)
    .filter(k => k.toLowerCase().startsWith('size_')    && raw[k])
    .map(k => raw[k]);

  return {
    id:          raw.id.trim(),
    name:        raw.name?.trim()        || '',
    tags:        raw.tags?.split(',').map(t => t.trim()).slice(0, 3) || [],
    description: raw.description?.trim() || '',
    material:    raw.material?.trim()    || '',
    color:       raw.color?.trim()       || '',
    images,
    features,
    sizes
  };
});

/* -------------------------------------------------------------------------- */
/* 3. 輸出到 src/data/products.json                                            */
/* -------------------------------------------------------------------------- */
const outDir = path.resolve('src', 'data');
fs.mkdirSync(outDir, { recursive: true });

const outfile = path.join(outDir, 'products.json');
fs.writeFileSync(outfile, JSON.stringify(products, null, 2));
console.log(`✅  products.json updated  (${products.length} items)`);
