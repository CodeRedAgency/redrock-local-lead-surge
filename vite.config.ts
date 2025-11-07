import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ssr from "vite-plugin-ssr/plugin";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { compression } from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    // Disable SSR for Vercel deployment - use client-side routing only
    // mode === "production" && ssr({ 
    //   prerender: false,
    //   includeAssetsImportedByServer: true 
    // }), 
    mode === "development" && componentTagger(),
    // Add compression for production builds
    mode === "production" && compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    mode === "production" && compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/],
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2015', // Modern browsers only, no legacy JS
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === "production",
        drop_debugger: mode === "production",
        pure_funcs: mode === "production" ? ['console.log', 'console.info', 'console.debug', 'console.trace'] : []
      }
    },
    rollupOptions: {
      output: {
        // Let Vite handle chunking automatically to ensure proper dependency order
        // This prevents issues where vendor chunks try to use React before it's loaded
        // Better chunk naming for cache optimization
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      }
    },
    // Increase chunk size warning limit (you have many routes)
    chunkSizeWarningLimit: 5000,
    cssCodeSplit: true, // Split CSS into separate files
    sourcemap: mode !== 'production' // Only generate sourcemaps in dev
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query'
    ]
  }
}));
