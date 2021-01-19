const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: "#fff",
      black: "#000",
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      primary: "#e0454a",
    },
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
