/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "brand": "var(--brand)",
        "brand-light": "var(--brand-light)",
        "surface": "var(--surface)",
        "surface-light": "var(--surface-light)",
        "surface-lighter": "var(--surface-lighter)",
      },
    },
  },
  plugins: [],
};