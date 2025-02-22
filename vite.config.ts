import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
        context: resolve(__dirname, "src", "context"),
        pages: resolve(__dirname, "src", "pages"),
        api: resolve(__dirname, "src", "api"),
        utils: resolve(__dirname, "src", "utils"),
        types: resolve(__dirname, "src", "types")
      },
    },
  };
});
