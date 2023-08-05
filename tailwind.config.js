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
    },
    screens: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      'md-lg': '850px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
