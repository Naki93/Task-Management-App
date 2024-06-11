//This file will watch anything that has js, ts, jsx and tsx extension and look for tailwind classes in the source code of the files
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}
