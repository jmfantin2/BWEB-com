module.exports = {
  content: ['./src/**/*.{html,njk,md}', './index.html'], // Ensure these match your file locations
  theme: {
    extend: {
      colors: {
        thBase: '#212830',
        thAccent: '#FF7B38',
        thText: '#D1D7E0',
      },
    },
  },
  plugins: [],
};
