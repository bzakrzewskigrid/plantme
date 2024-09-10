/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
    colors: {
      'primary-green': '#3A6150',
      'placeholder-green': '#3A6150B2',
      'background-green': '#71837B',
      black: '#000000',
      'primary-black': '#111111',
      'label-back': '#131516',
      white: '#FFFFFF',
      'primary-grey': '#00000099',
      'primary-light-grey': '#11111180',
      'footer-light-grey': '#E9E9E9',
      'background-light-grey': '#F9F9F9',
      red: '#b91c1c',
    },
  },
  plugins: [],
};
