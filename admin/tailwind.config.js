
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out',
      },
    },
    screens: {
      '4xs': '270px',
      // => @media (min-width: 270px) { ... }
      
      '3xs': '360px',
      // => @media (min-width: 360px) { ... }
      
      '2xs': '414px',
      // => @media (min-width: 414px) { ... }
      
      'mxs': '480px',
      // => @media (min-width: 480px) { ... }
      
      'xs': '576px',
      // => @media (min-width: 576px) { ... }
      ...defaultTheme.screens,
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
  darkMode: "class"
}