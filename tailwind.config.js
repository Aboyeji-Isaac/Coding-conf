module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'primary': {
          orange500:  '#f57261',
          orange700: '#e16151',
        },
        'secondary': {
          neutral0: '#ffffff',
          neutral300: '#d2d1d6',
          neutral500: '#8784a4',
          neutral700: '#4b486a',
          neutral900: '#0c082b',
        },
        'gradient-text': {
          'linear': 'linear-gradient(to right, #f37362, #ffffff)',
        }
      },
      fontFamily: {
        'Inconsolata': ['Inconsolata', 'monospace'],        
      }
    },
  },
  variants: {},
  plugins: [],
}
