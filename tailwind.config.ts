import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        muted: "#667085",
        cloud: "#f7f9fc",
        brand: { 50: "#eef7ff", 100: "#d9edff", 500: "#2f80ed", 600: "#1665d8", 700: "#0e4daa" },
        mint: "#39d98a",
        violet: "#8b5cf6"
      },
      boxShadow: {
        glow: "0 30px 90px rgba(47,128,237,.22)",
        card: "0 18px 60px rgba(15,23,42,.10)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(15,23,42,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
export default config;
