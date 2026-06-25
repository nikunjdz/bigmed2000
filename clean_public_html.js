import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

function cleanHtmlFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      cleanHtmlFiles(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.htm'))) {
      console.log(`Deleting static HTML file: ${fullPath}`);
      fs.unlinkSync(fullPath);
    }
  });
}

console.log('Cleaning static HTML files from public directory...');
cleanHtmlFiles(publicDir);
console.log('Finished cleaning public HTML files!');
