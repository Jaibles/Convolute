module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        'mustard': {
          '50': '#fffdf6',
          '100': '#fffbee',
          '200': '#fff6d4',
          '300': '#fff0ba',
          '400': '#fee487',
          '500': '#fed953',
          '600': '#e5c34b',
          '700': '#bfa33e',
          '800': '#988232',
          '900': '#7c6a29'
        },
        'cobalt': {
          '50': '#f5f6fa', 
          '100': '#ecedf6',
          '200': '#ced1e7',
          '300': '#b1b5d9',
          '400': '#777ebd',
          '500': '#3c46a0',
          '600': '#363f90',
          '700': '#2d3578',
          '800': '#242a60',
          '900': '#1d224e'
        }
      },
    },
  },
  variants: {},
  plugins: [],
};
