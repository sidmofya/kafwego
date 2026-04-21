import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        copper: {
          50: "#FDF5EF",
          100: "#F7E2D2",
          200: "#ECC2A4",
          300: "#D89A73",
          400: "#C2764B",
          500: "#A95A33",
          600: "#8B4628",
          700: "#6E3A22",
        },
        stone: {
          25: "#FAF7F2",
          50: "#F5F0E8",
          100: "#EEE7DD",
          200: "#DACEC4",
          300: "#CFC2B1",
          400: "#B3A496",
          500: "#947E6E",
        },
        charcoal: {
          500: "#525862",
          600: "#404650",
          700: "#303338",
          800: "#232629",
          900: "#17191C",
        },
      },
      letterSpacing: {
        widest: "0.18em",
      },
    },
  },
  plugins: [],
} satisfies Config;
