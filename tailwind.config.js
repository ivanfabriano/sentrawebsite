/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-text': '#1e1e1e',
        'primary-gray': '#454545',
        'primary-white': '#d4d4d4'
      }
    },
  },
  plugins: [],
}
