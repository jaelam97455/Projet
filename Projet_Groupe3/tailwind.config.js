/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
      colors: {
        'brown': '#664c43',
        'lightgreen': '#4aad52',
        'orange': '#ee7e2e',
        'yellow': '#ffd029',
        'darkgreen': '#14591d',
        'black': '#000000',
        'white': '#ffffff',
        'grey': '#f0f0f0',
        'darkgrey': '#818181',
      },
  },
  plugins: [],
};
