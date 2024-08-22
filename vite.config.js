/* eslint-disable no-undef */
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const ReactCompilerConfig = {
  sources: (filename) => {
    return filename.indexOf("src") !== -1;
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
});
