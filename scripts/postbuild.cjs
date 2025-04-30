// scripts/postbuild.cjs
/**
 * 1. 把 gptengineer.js <script> 標籤移除
 * 2. 複製 dist/index.html → dist/404.html（GitHub Pages SPA fallback）
 */
const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "..", "dist");
const indexFile = path.join(dist, "index.html");

// --- 1. 移除 gptengineer.js -------------------------------------------------
let html = fs.readFileSync(indexFile, "utf8");
html = html.replace(
  /<script[^>]*gptengineer\.js[^>]*><\/script>\s*/gi,
  ""
);
fs.writeFileSync(indexFile, html, "utf8");

// --- 2. 複製為 404.html ------------------------------------------------------
fs.copyFileSync(indexFile, path.join(dist, "404.html"));

console.log("✅ postbuild 處理完成");
