module.exports = {
  content: ['./src/**/*.{html,njk,md}', './index.njk'],
  theme: {
    extend: {
      fontFamily: {
        thBurtons: ['Burtons', 'sans-serif'],
      },
      colors: {
        thBase: '#191919',
        thAccent: '#FF7B38',
        thText: '#D1D7E0',
      },
    },
  },
  plugins: [],
};
