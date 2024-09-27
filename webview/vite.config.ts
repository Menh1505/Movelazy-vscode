import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../out', // Thư mục xuất file
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Tên file cho JavaScript và CSS
        entryFileNames: 'index.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'index.css';
          }
          return '[name].[ext]'; // Giữ nguyên tên cho các tài nguyên khác (nếu có)
        },
      }
    }
  }
});
