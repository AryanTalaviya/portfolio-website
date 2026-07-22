const fs = require('fs');
const path = require('path');

const src = 'C:/Users/aryan/.gemini/antigravity/brain/d19657d6-f316-4543-9820-7469c529d9eb/';
const dest = 'C:/Users/aryan/.gemini/antigravity/scratch/portfolio-website/src/assets/';

const files = [
  ['six7_post_01_1784580759490.png', 'six7_post_01.png'],
  ['six7_post_02_1784580769723.png', 'six7_post_02.png'],
  ['six7_post_03_1784580777138.png', 'six7_post_03.png'],
  ['six7_post_04_1784580783387.png', 'six7_post_04.png'],
  ['six7_cover_grid_1784580799469.png', 'six7_cover_grid.png'],
];

files.forEach(([srcFile, destFile]) => {
  const srcPath = path.join(src, srcFile);
  const destPath = path.join(dest, destFile);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Copied: ${destFile}`);
  } catch (e) {
    console.error(`❌ Error copying ${srcFile}:`, e.message);
  }
});

console.log('Done!');
