const fs = require("fs");

const baseUrl = "https://nadeemsiyam.com";
const pages = ["", "/projects"];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
  )
  .join("")}
</urlset>
`;

fs.writeFileSync("public/sitemap.xml", sitemap);
console.log("✅ Sitemap generated.");
