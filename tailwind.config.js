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
      boxShadow: {
        'default': '0 0 10px 0 rgba(0,0,0,0.1)',
        'lg': '0 0 20px 0 rgba(0,0,0,0.1)',
        'xl': '0 0 30px 0 rgba(0,0,0,0.1)',
        '2xl': '0 0 40px 0 rgba(0,0,0,0.1)',
        '3xl': '0 0 50px 0 rgba(0,0,0,0.1)',
        '4xl': '0 0 60px 0 rgba(0,0,0,0.1)',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128':'32rem',
        '-5': '-5px',
        '-10': '-10px',
        '-20': '-20px',
      },
      fontFamily: {
        'Inconsolata': ['Inconsolata', 'monospace'],        
      }
    },
  },
  variants: {},
  plugins: [require("daisyui"),],
}
