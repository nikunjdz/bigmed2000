import fs from 'fs';
import path from 'path';

// List of pages: [filename, componentName, routePath]
const pages = [
  ['bigmedic.html', 'Bigmedic', '/'],
  ['nanmain2.html', 'Nanmain2', '/nanmain2.html'],
  ['bigally.html', 'Bigally', '/bigally.html'],
  ['bigcraft.html', 'Bigcraft', '/bigcraft.html'],
  ['bigstudy.html', 'Bigstudy', '/bigstudy.html'],
  ['epistles.html', 'Epistles', '/epistles.html'],
  ['aidabet.html', 'Aidabet', '/aidabet.html'],
  ['bigfaq.html', 'Bigfaq', '/bigfaq.html'],
  ['av.html', 'Av', '/av.html'],
  ['nh.html', 'Nh', '/nh.html'],
  ['homesite.html', 'Homesite', '/homesite.html'],
  ['password.html', 'Password', '/password.html'],
  ['platform.html', 'Platform', '/platform.html'],
  ['strategy.html', 'Strategy', '/strategy.html'],
  ['advisors.html', 'Advisors', '/advisors.html'],
];

function fixAssetPaths(html) {
  return html
    .replace(/\.\.\/advisors\/graphics\//gi, '${BASE_URL}advisors/graphics/')
    .replace(/\.\.\/fdlap\/graph\//gi, '${BASE_URL}fdlap/graph/')
    .replace(/\.\.\/graph\//gi, '${BASE_URL}graph/')
    .replace(/\.\.\/barks\//gi, '${BASE_URL}barks/')
    .replace(/\.\.\/bulls\//gi, '${BASE_URL}bulls/')
    .replace(/\.\.\/jclu\/images\/jclulin\.gif/gi, '${BASE_URL}graph/jclulin.gif')
    .replace(/\.\.\/jclu\/images\//gi, '${BASE_URL}jclu/images/')
    .replace(/graph\/anim\/nanlogo9\.gif/gi, '${BASE_URL}graph/nanlogo9.gif')
    .replace(/graph\/advline2\.gif/gi, '${BASE_URL}graph/advline2.gif')
    .replace(/graph\/alva2\.jpg/gi, '${BASE_URL}graph/alva2.jpg')
    .replace(/graph\/earthb\.jpg/gi, '${BASE_URL}graph/earthb.jpg')
    .replace(/graph\/enlight\.jpg/gi, '${BASE_URL}graph/enlight.jpg')
    .replace(/graph\/truths2\.jpg/gi, '${BASE_URL}graph/truths2.jpg')
    .replace(/graph\/vision5\.jpg/gi, '${BASE_URL}graph/vision5.jpg')
    .replace(/http:\/\/www\.nancho\.net\/bigmed2000\/skins\/portrait\//gi, '${BASE_URL}graph/')
    .replace(/SRC="graph\//gi, 'SRC="${BASE_URL}graph/')
    .replace(/SRC="barks\//gi, 'SRC="${BASE_URL}barks/')
    .replace(/SRC="fdlap\/graph\//gi, 'SRC="${BASE_URL}fdlap/graph/')
    .replace(/BACKGROUND="barks\//gi, 'BACKGROUND="${BASE_URL}barks/');
}

function extractBody(html) {
  const bodyMatch = html.match(/<BODY[^>]*>([\s\S]*?)<\/BODY>/i);
  return bodyMatch ? bodyMatch[1] : html;
}

function getBgColor(html) {
  const m = html.match(/BGCOLOR="?#?([0-9a-fA-F]{3,6})"?/i);
  return m ? (m[1].startsWith('#') ? m[1] : '#' + m[1]) : '#FFFFFF';
}

function getBodyColor(html, attr, fallback) {
  const m = html.match(new RegExp(`${attr}="?([^"\\s>]+)"?`, 'i'));
  if (!m) return fallback;
  const value = m[1];
  if (/^[0-9a-fA-F]{3,6}$/.test(value)) {
    return '#' + value;
  }
  return value;
}

function getBgImage(html) {
  const m = html.match(/BACKGROUND="([^"]+)"/i) || html.match(/BACKGROUND=([^>\s]+)/i);
  if (!m) return '';
  let p = m[1].trim();
  if (p.includes('&#32;') || /\s/.test(p)) return '';
  p = p.replace(/\.\.\/barks\//gi, 'barks/');
  p = p.replace(/\.\.\/graph\//gi, 'graph/');
  p = p.replace(/^\//, '');
  return p;
}

// Shared style block injected into every page
const pageStyles = `
  a { color: #1a40b8; text-decoration: underline; font-weight: bold; }
  a:hover { color: #cc0000; }
  h1, h2, h3, h4, h5, h6 { font-weight: bold; margin-bottom: 0.75em; }
  strong, b { font-weight: 900; }
  ul, ol { padding-left: 2em; margin-bottom: 1em; }
  li { margin-bottom: 0.5em; }
  img { max-width: 100%; height: auto; display: inline-block; }
  blockquote {
    padding-left: 1.5em;
    margin: 1em 2em;
  }
  hr {
    border: 0;
    border-top: 2px solid #333;
    margin: 1.5em auto !important;
  }
  /* Center tag should center its children */
  center {
    display: block;
    text-align: center;
  }
  center table, table[align="center"], table[align="CENTER"], [align="center" i] table, [align="middle" i] table {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  center hr, hr[align="center"], hr[align="CENTER"], [align="center" i] hr, [align="middle" i] hr {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  hr[align="left"], hr[align="LEFT"] {
    margin-left: 0 !important;
    margin-right: auto !important;
  }
  hr[align="right"], hr[align="RIGHT"] {
    margin-left: auto !important;
    margin-right: 0 !important;
  }
  
  /* Alignment attribute mappings */
  [align="left"], [align="LEFT"] {
    text-align: left !important;
  }
  [align="right"], [align="RIGHT"] {
    text-align: right !important;
  }
  [align="center"], [align="CENTER"], [align="middle"], [align="MIDDLE"] {
    text-align: center !important;
  }
  
  td, th {
    text-align: left;
  }
  
  /* Responsive styles for screens smaller than 768px */
  @media (max-width: 767px) {
    blockquote {
      margin-left: 0.5em;
      margin-right: 0.5em;
      padding-left: 0.5em;
    }
    hr {
      width: 100% !important;
      margin: 1em auto !important;
    }
    table {
      width: 100% !important;
      display: block !important;
      overflow-x: auto !important;
    }
  }
`;

pages.forEach(([file, componentName, _route]) => {
  const filePath = path.join('temp_pages', file);
  if (!fs.existsSync(filePath)) {
    console.warn(`MISSING: ${filePath}`);
    return;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  let body = extractBody(raw);
  body = fixAssetPaths(body);

  const bgColor = 'beige';
  const textColor = '#000000';
  const linkColor = '#007339';
  const vlinkColor = '#1866C5';
  const bgImage = 'barks/paper2.gif';
  const bgStyle = bgImage
    ? `backgroundColor: '${bgColor}', backgroundImage: \`url(\${BASE_URL}${bgImage})\`, backgroundRepeat: 'repeat', color: '${textColor}'`
    : `backgroundColor: '${bgColor}', color: '${textColor}'`;

  // Escape backticks and dollars, but keep ${BASE_URL} unescaped for runtime evaluation in components
  const escapedBody = body
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$')
    .replace(/\\\$\{BASE_URL\}/g, '${BASE_URL}');

  const tsx = `import { useEffect } from "react";

const ${componentName} = () => {
  const BASE_URL = import.meta.env.BASE_URL;
  useEffect(() => {
    document.body.style.backgroundColor = "${bgColor}";
    ${bgImage ? `document.body.style.backgroundImage = \`url(\${BASE_URL}${bgImage})\`;` : ''}
    document.body.style.color = "${textColor}";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.color = "";
    };
  }, []);

  const html = \`${escapedBody}\`;

  return (
    <div
      className="min-h-screen w-full legacy-page-wrapper"
      style={{ fontFamily: "Times New Roman, Georgia, serif", ${bgStyle} }}
    >
      <style>{\`${pageStyles}
  .legacy-page-wrapper, .legacy-page-wrapper :where(p, li, td, th, dd, dt, blockquote, div, span, font) { color: inherit; }
  a { color: ${linkColor}; }
  a:visited { color: ${vlinkColor}; }
\`}</style>
      <div className="legacy-page-content">
        <div dangerouslySetInnerHTML={{ __html: html }} className="w-full" />
      </div>
    </div>
  );
};

export default ${componentName};
`;

  fs.writeFileSync(path.join('src', 'pages', `${componentName}.tsx`), tsx);
  console.log(`✓ ${componentName}`);
});

console.log('\nAll pages generated!');
