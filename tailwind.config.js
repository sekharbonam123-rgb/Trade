/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#000000',
        'dark-gray': '#0a0a0a',
        zinc: {
          900: '#121212',
          700: '#3f3f46',
        },
      },
    },
  },
  plugins: [],
}
