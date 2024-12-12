/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'table': '1fr, 2fr, 4fr, 2fr, 2fr, 2fr, 2fr'
      },
      borderWidth: {
        'table': '3px'
      }
    },
  },
  plugins: [],
}

