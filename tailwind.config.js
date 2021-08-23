module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.tsx', './app/**/*.jsx', './app/**/*.js', './app/**/*.ts'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        'nav-link': '0% 3px',
        'nav-link-hover': '100% 3px',
      },
      transitionProperty: {
        background: 'background-size',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
