import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- Auto-copy Six7 Studio campaign images at startup ---
function copySix7Images() {
  return {
    name: 'copy-six7-images',
    buildStart() {
      const brainDir = 'C:/Users/aryan/.gemini/antigravity/brain/d19657d6-f316-4543-9820-7469c529d9eb/';
      const destDir = path.resolve(__dirname || '.', 'public/six7/');

      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }

      const files = [
        ['six7_post_01_1784580759490.png', 'six7_post_01.png'],
        ['six7_post_02_1784580769723.png', 'six7_post_02.png'],
        ['six7_post_03_1784580777138.png', 'six7_post_03.png'],
        ['six7_post_04_1784580783387.png', 'six7_post_04.png'],
        ['six7_cover_grid_1784580799469.png', 'six7_cover_grid.png'],
      ];

      for (const [src, dest] of files) {
        const srcPath = path.join(brainDir, src);
        const destPath = path.join(destDir, dest);
        if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-website/',
  plugins: [react(), copySix7Images()],
});
