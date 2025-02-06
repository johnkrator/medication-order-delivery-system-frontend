import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    server: {
        proxy: {
            "/api": {
                // target: "http://localhost:3000/api",
                target: "https://pharmatradeapi.vercel.app/api",
                changeOrigin: true,
                secure: false,
                ws: true,
            },
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
