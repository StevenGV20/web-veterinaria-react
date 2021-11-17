module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1000px',
      xl: '1440px',
    }
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  "css.validate": false,
  "editor.quickSuggestions": {
    "strings": true
  }
}