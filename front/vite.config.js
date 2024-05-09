import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173, 
    host: '0.0.0.0',
  },
  envPrefix: "REACT_APP_",
  plugins: [react(), envCompatible()],
});
