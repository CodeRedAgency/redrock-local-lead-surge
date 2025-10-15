import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ssr from "vite-plugin-ssr/plugin";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
