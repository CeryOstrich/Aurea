const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\lenov\\.gemini\\antigravity-ide\\brain\\098cc96a-2580-46b2-8348-1e370263bc1b';
const publicDir = path.join(__dirname, 'public');

// Ensure directories exist
const dirs = [
  path.join(publicDir, 'images'),
  path.join(publicDir, 'images', 'gallery'),
  path.join(publicDir, 'music'),
  path.join(publicDir, 'icons'),
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created: ${dir}`);
  }
});

// Copy mapping
const copies = [
  { from: 'hero_background_1784082206491.png', to: path.join('images', 'hero-bg.webp') },
  { from: 'gallery_1_1784082226866.png', to: path.join('images', 'gallery', 'gallery-1.webp') },
  { from: 'gallery_2_1784082237164.png', to: path.join('images', 'gallery', 'gallery-2.webp') },
  { from: 'gallery_3_1784082250729.png', to: path.join('images', 'gallery', 'gallery-3.webp') },
  { from: 'gallery_4_1784082273790.png', to: path.join('images', 'gallery', 'gallery-4.webp') },
  { from: 'gallery_5_1784082286787.png', to: path.join('images', 'gallery', 'gallery-5.webp') },
  { from: 'gallery_6_1784082299470.png', to: path.join('images', 'gallery', 'gallery-6.webp') },
  { from: 'gallery_7_1784082316589.png', to: path.join('images', 'gallery', 'gallery-7.webp') },
  { from: 'gallery_8_1784082329172.png', to: path.join('images', 'gallery', 'gallery-8.webp') },
  { from: 'gallery_9_1784082341470.png', to: path.join('images', 'gallery', 'gallery-9.webp') },
  { from: 'gallery_10_1784082362430.png', to: path.join('images', 'gallery', 'gallery-10.webp') },
  { from: 'gallery_11_1784082377507.png', to: path.join('images', 'gallery', 'gallery-11.webp') },
  { from: 'gallery_12_1784082390244.png', to: path.join('images', 'gallery', 'gallery-12.webp') },
  { from: 'gallery_13_1784082407905.png', to: path.join('images', 'gallery', 'gallery-13.webp') },
  { from: 'gallery_14_1784082420752.png', to: path.join('images', 'gallery', 'gallery-14.webp') },
  { from: 'gallery_15_1784082432658.png', to: path.join('images', 'gallery', 'gallery-15.webp') },
  { from: 'gallery_16_1784082445292.png', to: path.join('images', 'gallery', 'gallery-16.webp') },
];

let copied = 0;
copies.forEach(({ from, to }) => {
  const src = path.join(sourceDir, from);
  const dest = path.join(publicDir, to);
  try {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`✓ ${from} → ${to}`);
      copied++;
    } else {
      console.log(`✗ Source not found: ${from}`);
    }
  } catch (err) {
    console.log(`✗ Error copying ${from}: ${err.message}`);
  }
});

console.log(`\nDone! ${copied}/${copies.length} files copied.`);
