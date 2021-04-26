const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        yellow: colors.yellow
      },
      boxShadow: {
        lg: 'rgba(0, 0, 0, 0.1) 0px 1px 18px 0px, rgba(0, 0, 0, 0.05) 0px 3px 5px -1px'
      }
    },
    aspectRatio: { // defaults to {}
      none: 0,
      square: [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9], // or 16 / 9
      '4/3': [4, 3], // or 4 / 3
      '21/9': [21, 9] // or 21 / 9
    }
  },
  variants: {
    aspectRatio: ['responsive'] // defaults to ['responsive']
  },
  plugins: [
    require('tailwind-heropatterns')({
      variants: [],
      patterns: []
    }),
    require('tailwindcss-rtl'),
    require('tailwindcss-aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
