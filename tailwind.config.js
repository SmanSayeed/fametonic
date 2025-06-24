module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FC004E',
        secondary: '#10CBE0',
        accent: '#00E7F9',
        gray: '#777',
        lightgray: '#ABABAB',
        bg: '#010101',
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        pink: '0px 4px 4px 0px #FC004E',
        blue: '2px 2px 10px 0px #00E7F9',
      },
      screens: {
        'mobile': '390px',
        'desktop': '1024px',
      },
    },
  },
  plugins: [],
}; 