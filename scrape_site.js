import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedUrls = [
  "https://www.nancho.net/bigmed2001/bigmedic.html",
  "https://www.nancho.net/bigmed2001/nan2002.html",
  "https://www.nancho.net/nancho/otheremp.html",
  "https://www.nancho.net/bigmed2001/archives/mbo.html",
  "https://www.nancho.net/bigmed2001/advisors.html",
  "https://www.nancho.net/advisors/fritjof.html",
  "https://www.nancho.net/advisors/chick1.html",
  "https://www.nancho.net/advisors/hazel.html",
  "https://www.nancho.net/advisors/ejcricht.html",
  "https://www.nancho.net/advisors/vcabinet.html",
  "https://www.nancho.net/cityhall/ignaz.html",
  "https://www.nancho.net/cityhall/vmasahi1.html",
  "https://www.nancho.net/cityhall/vmjt.html",
  "https://www.nancho.net/cityhall/vmjem.html",
  "https://www.nancho.net/cityhall/vmkto.html",
  "https://www.nancho.net/cityhall/vmmainic.html",
  "https://www.nancho.net/cityhall/ktodem.html",
  "https://www.nancho.net/cityhall/kyo1200.html",
  "https://www.nancho.net/bigbody/apforum1.html",
  "https://www.nancho.net/memes/orthdoc1.html",
  "https://www.nancho.net/memes/abexotic.html",
  "https://www.nancho.net/bigbody/lusions1.html",
  "https://www.nancho.net/kipower/kiarts.html",
  "https://www.nancho.net/kipower/kisoma.html",
  "https://www.nancho.net/kipower/mindbind.html",
  "https://www.nancho.net/cityhall/japanmes.html"
];

// Folders/files allowed to be crawled recursively on nancho.net
const allowedPaths = [
  '/bigmed2001/',
  '/nancho/',
  '/advisors/',
  '/cityhall/',
  '/bigbody/',
  '/memes/',
  '/kipower/',
  '/bigmed2000/',
  '/nan2000/',
  '/minshuka/',
  '/issk/',
  '/earthour/',
  '/arcmain.html',
  '/sharight.html'
];

function isTargetUrl(resolvedUrl) {
  const pathname = resolvedUrl.pathname.toLowerCase();
  
  // Seed urls are always allowed
  const cleanStr = resolvedUrl.toString().split('#')[0].split('?')[0];
  if (seedUrls.some(seed => seed.split('#')[0].split('?')[0] === cleanStr)) {
    return true;
  }
  
  return allowedPaths.some(allowed => {
    if (allowed.endsWith('/')) {
      return pathname.startsWith(allowed);
    } else {
      return pathname === allowed;
    }
  });
}

const visited = new Set();
const queue = [...seedUrls];

async function crawl() {
  while (queue.length > 0) {
    const currentUrl = queue.shift();
    
    let parsed;
    try {
      parsed = new URL(currentUrl);
    } catch (e) {
      console.warn(`Invalid URL: ${currentUrl}`);
      continue;
    }
    
    parsed.hash = '';
    parsed.search = '';
    const cleanUrl = parsed.toString();
    
    if (visited.has(cleanUrl)) continue;
    visited.add(cleanUrl);
    
    console.log(`\nFetching: ${cleanUrl} (remaining queue: ${queue.length})`);
    try {
      const response = await fetch(cleanUrl);
      if (!response.ok) {
        console.error(`Failed to fetch ${cleanUrl}: ${response.status} ${response.statusText}`);
        continue;
      }
      
      const contentType = response.headers.get('content-type') || '';
      const pathname = parsed.pathname;
      let localPath = pathname.replace(/^\//, '');
      
      // If it is an HTML page
      if (contentType.includes('html') || pathname.endsWith('.html') || pathname.endsWith('.htm') || !path.extname(localPath)) {
        if (!path.extname(localPath)) {
          if (localPath.endsWith('/')) localPath += 'index.html';
          else localPath += '/index.html';
        }
        
        const savePath = path.join(__dirname, 'temp_pages', localPath);
        fs.mkdirSync(path.dirname(savePath), { recursive: true });
        
        const text = await response.text();
        fs.writeFileSync(savePath, text, 'utf8');
        console.log(`Saved HTML to: ${savePath}`);
        
        // Extract links and assets
        const linkRegex = /<a\s+(?:[^>]*?\s+)?href=["']([^"']*)["']/gi;
        const frameRegex = /<frame\s+(?:[^>]*?\s+)?src=["']([^"']*)["']/gi;
        const imgRegex = /<img\s+(?:[^>]*?\s+)?src=["']([^"']*)["']/gi;
        const bodyBgRegex = /<body\s+(?:[^>]*?\s+)?background=["']([^"']*)["']/gi;
        
        const matches = [];
        let match;
        
        while ((match = linkRegex.exec(text)) !== null) {
          matches.push({ type: 'html', href: match[1] });
        }
        while ((match = frameRegex.exec(text)) !== null) {
          matches.push({ type: 'html', href: match[1] });
        }
        while ((match = imgRegex.exec(text)) !== null) {
          matches.push({ type: 'asset', href: match[1] });
        }
        while ((match = bodyBgRegex.exec(text)) !== null) {
          matches.push({ type: 'asset', href: match[1] });
        }
        
        for (const item of matches) {
          if (item.href.startsWith('#') || item.href.toLowerCase().startsWith('javascript:') || item.href.toLowerCase().startsWith('mailto:')) {
            continue;
          }
          
          try {
            const resolved = new URL(item.href, cleanUrl);
            
            // Only process nancho.net links
            if (resolved.hostname === 'www.nancho.net' || resolved.hostname === 'nancho.net') {
              resolved.hash = '';
              resolved.search = '';
              const resolvedClean = resolved.toString();
              
              if (item.type === 'html') {
                // Check if the HTML path matches allowed paths
                if (isTargetUrl(resolved)) {
                  if (!visited.has(resolvedClean) && !queue.includes(resolvedClean)) {
                    queue.push(resolvedClean);
                  }
                }
              } else if (item.type === 'asset') {
                const assetPath = resolved.pathname.replace(/^\//, '');
                const destPath = path.join(__dirname, 'public', assetPath);
                
                if (!fs.existsSync(destPath)) {
                  console.log(`Downloading asset: ${resolvedClean}`);
                  const assetResponse = await fetch(resolvedClean);
                  if (assetResponse.ok) {
                    fs.mkdirSync(path.dirname(destPath), { recursive: true });
                    const arrayBuffer = await assetResponse.arrayBuffer();
                    fs.writeFileSync(destPath, Buffer.from(arrayBuffer));
                    console.log(`Saved asset to: ${destPath}`);
                  }
                }
              }
            }
          } catch (e) {
            // URL error
          }
        }
      } else {
        // Non-HTML page (must be asset)
        const destPath = path.join(__dirname, 'public', localPath);
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(path.dirname(destPath), { recursive: true });
          const arrayBuffer = await response.arrayBuffer();
          fs.writeFileSync(destPath, Buffer.from(arrayBuffer));
          console.log(`Saved Asset to: ${destPath}`);
        }
      }
    } catch (err) {
      console.error(`Error fetching ${cleanUrl}:`, err);
    }
    
    await new Promise(r => setTimeout(r, 50));
  }
}

crawl().then(() => {
  console.log('\n======================================');
  console.log('Crawling and downloading finished!');
  console.log('======================================');
});
