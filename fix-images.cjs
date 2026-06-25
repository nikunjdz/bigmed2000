const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Get all TSX files
function getTSXFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.includes('node_modules') && !file.includes('ui')) {
      results = results.concat(getTSXFiles(filePath));
    } else if (file.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  
  return results;
}

const files = getTSXFiles(srcDir);

let updatedCount = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix backgroundImage in useEffect and style props
  if (content.includes("url('/barks/") || content.includes("url('/graph/") || content.includes("url('/fdlap/")) {
    // Fix barks paths
    content = content.replace(/url\('\/barks\//g, "url('${import.meta.env.BASE_URL}barks/");
    // Fix graph paths  
    content = content.replace(/url\('\/graph\//g, "url('${import.meta.env.BASE_URL}graph/");
    // Fix fdlap paths
    content = content.replace(/url\('\/fdlap\//g, "url('${import.meta.env.BASE_URL}fdlap/");
    modified = true;
  }
  
  // Fix img src in JSX (not in template strings)
  if (content.match(/src="\/graph\/|src="\/barks\/|src="\/fdlap\//)) {
    content = content.replace(/src="\/graph\//g, 'src={`${import.meta.env.BASE_URL}graph/');
    content = content.replace(/src="\/barks\//g, 'src={`${import.meta.env.BASE_URL}barks/');
    content = content.replace(/src="\/fdlap\//g, 'src={`${import.meta.env.BASE_URL}fdlap/');
    modified = true;
  }
  
  // Fix HTML template strings with IMG SRC
  if (content.match(/SRC="\/graph\/|SRC="\/barks\/|SRC="\/fdlap\//)) {
    // These are in template literals, need to use BASE_URL variable
    content = content.replace(/SRC="\/graph\//g, 'SRC="${BASE_URL}graph/');
    content = content.replace(/SRC="\/barks\//g, 'SRC="${BASE_URL}barks/');
    content = content.replace(/SRC="\/fdlap\//g, 'SRC="${BASE_URL}fdlap/');
    modified = true;
  }
  
  // Add BASE_URL const at the top of component if template strings were modified
  if (content.includes('${BASE_URL}')) {
    // Find the component function declaration
    const componentName = path.basename(filePath, '.tsx');
    const componentRegex = new RegExp(`(const ${componentName} = \\(\\) => \\{)`, 'g');
    
    if (componentRegex.test(content)) {
      content = content.replace(
        componentRegex,
        `$1\n  const BASE_URL = import.meta.env.BASE_URL;`
      );
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`✓ Updated: ${path.basename(filePath)}`);
  }
});

console.log(`\nDone! Updated ${updatedCount} files.`);
