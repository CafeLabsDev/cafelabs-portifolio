import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--bg-principal)",
        foreground: "var(--texto-principal)",
        accent: "var(--marca-accent)",
        sandbox: "var(--verde-sandbox)",
        borderUI: "var(--borda-sutil)",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)'],
        fira: ['var(--font-fira-code)'],
      },
    },
  },
  plugins: [],
};

export default config;