import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E6",
        ivory: "#FBF8F1",
        sand: "#ECE0CB",
        blush: "#D9A78E",
        rose: "#C08552",
        clay: "#A96038",
        ink: "#26190F",
        cocoa: "#4A382A",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
