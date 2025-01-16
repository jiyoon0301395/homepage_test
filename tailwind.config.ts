import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#00C3FF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["DefaultFont", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
