/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#B9ff66',
        'secondary': '#191A23',
        'tertiary': '#F3F3F3'
      },
      fontFamily : {
        'primary': ["Space Grotesk", 'sans-serif']
      }
    },
  },
  plugins: [],
}