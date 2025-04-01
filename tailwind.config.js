/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "primary": "#26C6DA",
        "t-color": "e3f1f1",
        "blue": "#0068ff",
      }
    },
  },
  plugins: [],
}

