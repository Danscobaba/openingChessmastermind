/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#ADD8E6",
        pink: "#FF69B4",
        "pink-dark": "#FF1493",
        black: "#000000",
      },
    },
  },
  plugins: [],
}