/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        me: {
          100: "#E6EED6",
          200: "#DDE2C6",
          300: "#BBC5AA",
          400: "#A72608",
          500: "#090C02",
        },
      },
    },
  },
  plugins: [],
};