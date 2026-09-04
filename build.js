const fs = require('fs');
const path = require('path');

const dist = './dist';
if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true, force: true });
}
fs.mkdirSync(dist, { recursive: true });

// Copy subdirectories
['assets', 'src', 'public', 'admin'].forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.cpSync(dir, path.join(dist, dir), { recursive: true });
  }
});

// Copy root files
const files = [
  'index.html', 'shop.html', 'product.html', 'checkout.html', '404.html',
  'script.js', 'style.css', 'favicon.svg', 'robots.txt', 'sitemap.xml',
  '_redirects', '_headers', 'CNAME'
];
files.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(dist, file));
  }
});

// Create clean route aliases so /shop, /product, /checkout, /dashboard work seamlessly everywhere
const routes = [
  { dir: 'shop', file: 'shop.html' },
  { dir: 'product', file: 'product.html' },
  { dir: 'checkout', file: 'checkout.html' },
  { dir: 'dashboard', file: path.join('admin', 'dashboard.html') }
];
routes.forEach(r => {
  if (fs.existsSync(r.file)) {
    const targetDir = path.join(dist, r.dir);
    fs.mkdirSync(targetDir, { recursive: true });
    fs.copyFileSync(r.file, path.join(targetDir, 'index.html'));
  }
});

console.log('✅ Build completed successfully into dist/');
