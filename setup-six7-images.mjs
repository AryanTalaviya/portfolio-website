/**
 * Run this once with: node setup-six7-images.mjs
 * It copies Six7 Studio images from the brain folder to public/six7/
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const brainDir = 'C:/Users/aryan/.gemini/antigravity/brain/d19657d6-f316-4543-9820-7469c529d9eb/';
const destDir = path.join(__dirname, 'public/six7/');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log('✅ Created directory: public/six7/');
}

const fileMappings = [
  ['six7_post_01_1784580759490.png', 'six7_post_01.png'],
  ['six7_post_02_1784580769723.png', 'six7_post_02.png'],
  ['six7_post_03_1784580777138.png', 'six7_post_03.png'],
  ['six7_post_04_1784580783387.png', 'six7_post_04.png'],
  ['six7_cover_grid_1784580799469.png', 'six7_cover_grid.png'],
];

let success = 0;
for (const [srcFile, destFile] of fileMappings) {
  const srcPath = path.join(brainDir, srcFile);
  const destPath = path.join(destDir, destFile);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Copied: ${destFile}`);
    success++;
  } catch (e) {
    console.error(`❌ Error copying ${srcFile}: ${e.message}`);
  }
}

console.log(`\n🎉 Done! ${success}/${fileMappings.length} images copied to public/six7/`);
console.log('Now run: npm run dev');
