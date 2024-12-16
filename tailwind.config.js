
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        customGray: '#283033',
        halfCustomGray: 'rgba(40, 48, 51, 0.9)',
      },
      width: {
        '200': '200px',
      },
      height: {
        '460': '460px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}