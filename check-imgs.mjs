import { chromium } from "playwright";

const urls = [
  "https://nikunjdz.github.io/bigmed2000/",
  "https://nikunjdz.github.io/bigmed2000/epistles.html",
  "https://nikunjdz.github.io/bigmed2000/bigmed2001/gospels/gospels.html",
];

const browser = await chromium.launch({ channel: "chrome" });
for (const url of urls) {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(3000);
  const info = await page.evaluate(() => {
    const imgs = Array.from(document.images);
    const broken = imgs.filter(i => i.complete && i.naturalWidth === 0).map(i => i.getAttribute("src"));
    return { total: imgs.length, broken, bodyHeight: document.body.scrollHeight };
  });
  console.log("=== " + url + " ===");
  console.log("  total imgs:", info.total, " broken:", info.broken.length ? info.broken : "none", " bodyHeight:", info.bodyHeight);
  await page.close();
}
await browser.close();