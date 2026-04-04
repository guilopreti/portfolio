import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // mantém compatível com o output do CRA
  },
  server: {
    port: 3000,
  },
});
