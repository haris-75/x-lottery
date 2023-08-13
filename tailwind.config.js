/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
    },
    extend: {
      colors: {
        dark: '#34343c',
        black: '#000000',
        primary: '#ec500d',
        white: '#FFFFFF',
        'white-secondary': '#fef4f1',
      },
      boxShadow: {
        card: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
        btn: '0px 8px 24px 0px rgba(286, 80, 13, 0.5)',
      },
    },
    screens: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      'md-lg': '850px',
      lg: '1024px',
      'lg-xl': '1150px',
      xl: '1280px',
    },
  },
  plugins: [],
};
