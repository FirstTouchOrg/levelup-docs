import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://docs.levelup.land',
  vite: {
    build: {
      rollupOptions: {
        output: {
          // 共用樣式表固定命名為 site.[hash].css，避免沿用頁面名稱（如 arena）
          assetFileNames: (asset) =>
            asset.name?.endsWith('.css') ? '_astro/site.[hash][extname]' : '_astro/[name].[hash][extname]',
        },
      },
    },
  },
});
