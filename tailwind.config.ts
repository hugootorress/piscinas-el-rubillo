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
        brand: {
          DEFAULT: '#0f766e',
          light: '#34d399',
        },
        navy: {
          DEFAULT: '#1e293b',
          blue: '#0891b2'
        }
      },
      boxShadow: {
        'glow': '0 0 40px rgba(15, 118, 110, 0.4)',
        'glow-sm': '0 18px 60px rgba(15, 118, 110, 0.2)',
      }
    },
  },
  plugins: [],
} satisfies Config;