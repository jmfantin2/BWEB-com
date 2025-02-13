module.exports = {
  content: ['./src/**/*.{html,njk,md}', './index.njk'],
  theme: {
    extend: {
      backgroundImage: {
        thGrid: "url('/assets/images/grid.svg')",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Define "Inter" como padrão
        thBurtons: ['Burtons', 'sans-serif'],
      },
      colors: {
        thBase: '#191919',
        thAccent: '#FF7B38',
        thText: '#D1D7E0',
        thPslPink: '#C477BC',
      },
      animation: {
        flicker: 'flicker 1.5s infinite ease-in-out',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '0.8', transform: 'translateY(0px) scale(1)' },
          '50%': { opacity: '1', transform: 'translateY(-3px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
