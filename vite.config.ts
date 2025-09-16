import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const port = parseInt(process.env.PORT || "10000");
  
  return {
    base: "/",
    server: {
      host: "0.0.0.0", // IMPORTANTE: Siempre 0.0.0.0 para que Render pueda acceder
      port: isDev ? 8080 : port, // Puerto fijo en dev, dinámico en producción
      allowedHosts: true // Permite todos los hosts en ambos entornos
    },
    preview: {
      host: "0.0.0.0", // IMPORTANTE: 0.0.0.0 para Render
      port: port, // Usa el puerto que asigne Render
      allowedHosts: true
    },
    plugins: [react(), isDev && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
      sourcemap: false,
      minify: "esbuild",
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  };
});