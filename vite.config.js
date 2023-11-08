import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/akash_Portfolio/",
  plugins: [react()],
  // server: {
  //   host: true,
  // },
});
