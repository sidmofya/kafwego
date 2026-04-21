import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        copper: {
          100: "#F7E2D2",
          200: "#ECC2A4",
          300: "#D89A73",
          400: "#C2764B",
          500: "#A95A33",
          700: "#6E3A22",
        },
        stone: {
          25: "#FAF7F2",
          100: "#EEE7DD",
          300: "#CFC2B1",
        },
        charcoal: {
          700: "#303338",
          900: "#17191C",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
