// scripts/postbuild.cjs
const fs   = require("fs");
const path = require("path");

const distDir   = path.resolve(__dirname, "..", "dist");
const indexPath = path.join(distDir, "index.html");
const notFound  = path.join(distDir, "404.html");

// --- 1. 移除 gptengineer.js --------------------------------------------------
let html = fs.readFileSync(indexPath, "utf8");

html = html.replace(
  /<script[^>]*?gptengineer\.js[^>]*?><\/script>\s*/gi, // 非貪婪 *? 以防萬一
  ""
);

fs.writeFileSync(indexPath, html, "utf8");

// --- 2. 複製為 404.html -------------------------------------------------------
fs.copyFileSync(indexPath, notFound);

console.log("✅ postbuild 完成：清除 gptengineer.js & 生成 404.html");
