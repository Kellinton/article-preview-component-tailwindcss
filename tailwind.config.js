/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        'cor01': ['hsl(217, 19%, 35%)'],
        'cor02': ['hsl(214, 17%, 51%)'],
        'cor03': ['hsl(212, 23%, 69%)'],
        'cor04': ['hsl(210, 46%, 95%)'],
      }
    },
  },
  plugins: [],
}

