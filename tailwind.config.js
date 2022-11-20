module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          1000: '#E27406'
        },
        gray: {
          25: '#D9D8D8',
          1000: '#292929'
        }
      },
      contrast: {
        25: '0.45'
      },
      brightness: {
        tacos: '0.4'
      },
      width: {
        95: '95%'
      },
      top: {
        97: '27rem'
      },
      screens: {
        sd: '375px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'static/**/*.html',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}'
  ]
}
