/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      zen:["Zen Dots","cursive"],
        mont:["Montserrat","sans-serif"],
      space:["Space Grotesk","sans-serif"]
    }
  },
  plugins: [],
}