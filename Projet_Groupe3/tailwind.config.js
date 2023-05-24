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
      fontFamily: {
        serif: ['Amatic SC', 'serif'],
        sans: ['Oxygen', 'sans-serif']
      },
      fontSize: {
        'sm': '0.875rem', //14px = corps-14,Regular//
        'base': '1rem', //16px = corps-16,Regular & mobile-H5,Bold & mobile-sous-titre,Light//
        'lg': '1.125rem', //18px = mobile-corps,Regular//
        'xl': '1.25rem', //20px = corps-20,Regular & mobile-bouton,Bold//
        '2xl': '1.5rem', //24px = h-6,Bold & mobile-H4,Bold & mobile-menu-24,Light//
        '3xl': '2rem', //32px = h-5,Bold & sous-titre,Light & mobile-H3,Bold & mobile-menu-32,Regular//
        '4xl': '2.25rem', //36px = h-4,Bold & mobile-H2,Bold//
        '5xl': '2.5rem', //40px = h-3,Bold & mobile-H1,Bold//
        '6xl': '3rem', //48px = h-2,Bold//
        '7xl': '6rem', //96px = h-1,Bold//
       },
      boxShadow: {
        '1': '0px 4px 4px rgba(0, 0, 0, 0.25);',
      }
  },
  plugins: [],
};