import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Recursive walk helper
function getHtmlFiles(dir, baseDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.flatMap(entry => {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      return getHtmlFiles(res, baseDir);
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.htm'))) {
      return [path.relative(baseDir, res)];
    }
    return [];
  });
  return files;
}

function getBodyTagAttrs(html) {
  const bodyTagMatch = html.match(/<BODY([^>]*)>/i);
  return bodyTagMatch ? bodyTagMatch[1] : '';
}

function extractBody(html) {
  const bodyMatch = html.match(/<BODY[^>]*>([\s\S]*?)<\/BODY>/i);
  return bodyMatch ? bodyMatch[1] : html;
}

function getBgColor(html) {
  const attrs = getBodyTagAttrs(html);
  const m = attrs.match(/BGCOLOR="?#?([0-9a-fA-F]{3,6}|[a-zA-Z]+)"?/i);
  if (!m) return '#FFFFFF';
  const color = m[1];
  if (/^[0-9a-fA-F]{3,6}$/.test(color)) {
    return '#' + color;
  }
  return color;
}

function getBodyColor(html, attr, fallback) {
  const attrs = getBodyTagAttrs(html);
  const m = attrs.match(new RegExp(`${attr}="?#?([0-9a-fA-F]{3,6}|[a-zA-Z]+)"?`, 'i'));
  if (!m) return fallback;
  const color = m[1].replace(/['"]/g, '');
  if (/^[0-9a-fA-F]{3,6}$/.test(color)) {
    return '#' + color;
  }
  return color;
}

// Resolves a relative link/asset to be absolute relative to the site root
function resolveSiteRootPath(val, pageDir) {
  // val is e.g. "../barks/paper2.gif" or "graph/foo.jpg"
  // pageDir is the directory of the current page, e.g. "advisors" or "bigmed2001/archives"
  const cleanPath = val.split('#')[0].split('?')[0].trim().replace(/['"]/g, '');
  let resolved;
  if (cleanPath.startsWith('/')) {
    resolved = cleanPath;
  } else {
    resolved = path.posix.join(pageDir.replace(/\\/g, '/'), cleanPath);
  }
  // Remove any redundant ".." or "." segments
  resolved = path.posix.normalize(resolved);
  // Strip any leading slash or relative segments going above root
  while (resolved.startsWith('/') || resolved.startsWith('../')) {
    if (resolved.startsWith('/')) {
      resolved = resolved.slice(1);
    } else {
      resolved = resolved.slice(3);
    }
  }
  if (resolved === '..' || resolved === '.') {
    resolved = '';
  }
  // Map missing jclu/images/jclulin.gif to existing graph/jclulin.gif
  if (resolved.endsWith('jclu/images/jclulin.gif')) {
    resolved = 'graph/jclulin.gif';
  }
  return resolved;
}

function getBgImage(html, pageDir) {
  const attrs = getBodyTagAttrs(html);
  const m = attrs.match(/BACKGROUND="([^"]+)"/i) || attrs.match(/BACKGROUND=([^>\s]+)/i);
  if (!m) return '';
  let p = m[1].trim().replace(/['"]/g, '');
  if (p.includes('&#32;') || /\s/.test(p)) return '';
  return resolveSiteRootPath(p, pageDir);
}

// Replaces all assets (img src, background, embed) with local root-relative paths prepended by ${BASE_URL}
function fixAssetPaths(html, pageDir) {
  return html.replace(/(src|background)=["']([^"']+)["']/gi, (match, attr, val) => {
    if (val.startsWith('http://') || val.startsWith('https://')) {
      try {
        const u = new URL(val);
        if (u.hostname === 'www.nancho.net' || u.hostname === 'nancho.net') {
          const resolved = u.pathname.replace(/^\//, '');
          return `${attr}="\${BASE_URL}${resolved}"`;
        }
      } catch (e) {}
      return match;
    }
    if (val.startsWith('#') || val.toLowerCase().startsWith('javascript:') || val.toLowerCase().startsWith('mailto:')) {
      return match;
    }
    const resolved = resolveSiteRootPath(val, pageDir);
    return `${attr}="\${BASE_URL}${resolved}"`;
  });
}

// Replaces all links on nancho.net with root-relative paths prepended by ${BASE_URL}
// Leaves other links (YouTube, Google, etc.) completely intact
function fixLinks(html, pageDir) {
  return html.replace(/href=["']([^"']+)["']/gi, (match, val) => {
    if (val.startsWith('http://') || val.startsWith('https://')) {
      try {
        const u = new URL(val);
        if (u.hostname === 'www.nancho.net' || u.hostname === 'nancho.net') {
          const resolved = u.pathname.replace(/^\//, '');
          const hashAndQuery = u.search + u.hash;
          return `href="\${BASE_URL}${resolved}${hashAndQuery}"`;
        }
      } catch (e) {}
      return match;
    }
    if (val.startsWith('#') || val.toLowerCase().startsWith('javascript:') || val.toLowerCase().startsWith('mailto:')) {
      return match;
    }
    
    // Resolve relative path
    const cleanVal = val.split('#')[0].split('?')[0];
    const resolved = resolveSiteRootPath(cleanVal, pageDir);
    
    // Extract query / hash if they exist
    const hashMatch = val.match(/([#?].*)$/);
    const suffix = hashMatch ? hashMatch[1] : '';
    
    return `href="\${BASE_URL}${resolved}${suffix}"`;
  });
}

// Shared legacy stylesheet injected into every legacy page
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

function buildComponents() {
  const htmlFiles = getHtmlFiles(path.join(__dirname, 'temp_pages'));
  console.log(`Found ${htmlFiles.length} HTML files to generate.`);
  
  const routesList = [];
  
  htmlFiles.forEach(file => {
    // Normalise path separators
    const relativePath = file.replace(/\\/g, '/');
    const pageDir = path.dirname(relativePath);
    
    const parts = relativePath.replace(/\.html?$/, '').split('/');
    // Make PascalCase component name
    const capitalizedParts = parts.map(p => {
      // Handle special characters
      const clean = p.replace(/[^a-zA-Z0-9]/g, '');
      return clean.charAt(0).toUpperCase() + clean.slice(1);
    });
    
    let componentName = capitalizedParts.join('');
    if (/^\d/.test(componentName)) {
      componentName = 'Page' + componentName;
    }
    const componentFile = capitalizedParts.join('/') + '.tsx';
    
    const raw = fs.readFileSync(path.join(__dirname, 'temp_pages', file), 'utf8');
    let body = extractBody(raw);
    
    // Apply path transformations
    body = fixAssetPaths(body, pageDir);
    body = fixLinks(body, pageDir);
    
    const bgColor = 'beige';
    const textColor = '#000000';
    const linkColor = '#007339';
    const vlinkColor = '#1866C5';
    const bgImage = 'barks/paper2.gif';
    
    const bgStyle = bgImage
      ? `backgroundColor: '${bgColor}', backgroundImage: \`url(\${BASE_URL}${bgImage})\`, backgroundRepeat: 'repeat', color: '${textColor}'`
      : `backgroundColor: '${bgColor}', color: '${textColor}'`;
      
    // Escape backticks and dollars, but keep unescaped ${BASE_URL}
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

    const outPath = path.join(__dirname, 'src', 'pages', componentFile);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, tsx, 'utf8');
    console.log(`✓ Generated: ${componentFile}`);
    
    // Add path routes
    routesList.push({
      path: `/${relativePath}`,
      componentName,
      importPath: `./pages/${capitalizedParts.join('/')}`
    });
    
    // Bridge paths under bigmed2001 to root/flat paths
    if (relativePath.startsWith('bigmed2001/')) {
      const flatName = relativePath.slice('bigmed2001/'.length);
      routesList.push({
        path: `/${flatName}`,
        componentName,
        importPath: `./pages/${capitalizedParts.join('/')}`
      });
      
      // Special home aliases
      if (flatName === 'bigmedic.html') {
        routesList.push({
          path: `/`,
          componentName,
          importPath: `./pages/${capitalizedParts.join('/')}`
        });
      }
    }
  });
  
  // Output src/routesConfig.tsx
  let importStatements = '';
  let routesMapping = '';
  const importedComponents = new Set();
  
  routesList.forEach(r => {
    if (!importedComponents.has(r.componentName)) {
      importedComponents.add(r.componentName);
      importStatements += `const ${r.componentName} = lazy(() => import('${r.importPath}'));\n`;
    }
    routesMapping += `  { path: '${r.path}', element: <${r.componentName} /> },\n`;
  });
  
  const routesConfigCode = `import { lazy } from "react";

${importStatements}
export const routes = [
${routesMapping}];
`;
  
  fs.writeFileSync(path.join(__dirname, 'src', 'routesConfig.tsx'), routesConfigCode, 'utf8');
  console.log('✓ Generated routesConfig.tsx');
}

buildComponents();
