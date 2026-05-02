import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return {
    base: "/",       // important
    plugins: [
      react(),
      {
        name: 'snake-rewrite',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/snake') {
              req.url = '/snake/index.html';
            }
            next();
          });
        }
      }
    ],
    server: {
      port: 3000,
      host: true
    },
    define: {
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, ".")
      }
    }
  };
});
