/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        alex: '#FB2E86',
        Red: "#FB2448",
        Blue: "#2F1AC4",
        PantonePurple: "#E0D3F5",
        SkyBlue: "#F3F9FF",
        NavyBlue: "#151875",
        OffNavyBlue: "#3F509E"
      }
    },
  },
  plugins: [require('daisyui')],
}
