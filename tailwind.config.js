// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // fontWeight:{
    //   'xxl':'1000px',
    // },
    extend: {
      fontFamily:{
        'Caveat': ['Caveat', 'cursive'],
      },
      fontWeight: {
        // thin: '100',
        // hairline: '100',
        // extralight: '200',
        // light: '300',
        // normal: '400',
        // medium: '500',
        // semibold: '600',
        // bold: '700',
        // extrabold: '800',
        'ebold': '800',
        // black: '900',
      },
    },
  },
  plugins: [],
}