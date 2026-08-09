import { chromium } from "playwright";

const url = "https://nikunjdz.github.io/bigmed2000/";
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage();
const failed = [];
page.on("response", (r) => { if (r.status() >= 400) failed.push(r.status() + " " + r.url()); });
page.on("requestfailed", (r) => failed.push("FAIL " + r.url() + " -> " + r.failure()?.errorText));
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2000);
console.log("Failed/bad responses:");
failed.forEach(f => console.log("  " + f));
if (!failed.length) console.log("  none");
await browser.close();