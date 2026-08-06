import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from "fs";
import { dirname, join } from "path";

const root = process.cwd();
const dist = join(root, "dist");
const shell = readFileSync(join(dist, "index.html"), "utf8");

copyFileSync(join(dist, "index.html"), join(dist, "404.html"));

const routesConfig = readFileSync(join(root, "src", "routesConfig.tsx"), "utf8");
const paths = [...routesConfig.matchAll(/path:\s*'([^']+)'/g)]
  .map((m) => m[1])
  .filter((p) => p && p !== "/");

let count = 0;
for (const p of [...new Set(paths)]) {
  const rel = p.startsWith("/") ? p.slice(1) : p;
  const out = join(dist, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, shell);
  count++;
}

console.log(`Wrote SPA shell to ${count} route html files.`);
