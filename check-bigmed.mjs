import { chromium } from "playwright";

const urls = [
  "https://nikunjdz.github.io/bigmed2000/",
  "https://nikunjdz.github.io/bigmed2000/epistles.html",
  "https://nikunjdz.github.io/bigmed2000/bigmed2001/gospels/gospels.html",
];

const browser = await chromium.launch({ channel: "chrome" });
for (const url of urls) {
  const page = await browser.newPage();
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push("CONSOLE: " + m.text()); });
  page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));
  page.on("requestfailed", (r) => errors.push("REQFAILED: " + r.url() + " -> " + r.failure()?.errorText));
  const resp = await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(3000);
  const title = await page.title();
  const bodyText = await page.evaluate(() => document.body.innerText.slice(0, 500));
  const h1s = await page.evaluate(() => Array.from(document.querySelectorAll("h1,h2,h3,h4")).slice(0, 8).map(h => h.innerText.trim().slice(0, 60)));
  const rootHtml = await page.evaluate(() => document.getElementById("root")?.innerHTML.length || 0);
  console.log("=== " + url + " ===");
  console.log("  status:", resp?.status());
  console.log("  title:", title);
  console.log("  rootHtmlLen:", rootHtml);
  console.log("  h1-h4:", JSON.stringify(h1s));
  console.log("  bodyText[:500]:", bodyText.replace(/\s+/g, " ").slice(0, 500));
  console.log("  errors:", errors.length ? errors : "none");
  await page.close();
}
await browser.close();