import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        noir: "#0a0a0a",
        card: "#141414",
        "card-elevated": "#1a1a1a",
        "card-high": "#2a2a2a",
        bordure: "#2a2a2a",
        rouge: "#dc2626",
        "rouge-light": "#ef4444",
        or: "#d97706",
        texte: "#f5f5f5",
        muted: "#e6bdb8",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        headline: ["var(--font-headline)"],
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
