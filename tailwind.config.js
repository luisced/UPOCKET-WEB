/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#d1e0ff',
          200: '#a3c1ff',
          300: '#75a3ff',
          400: '#4784f5',
          500: '#1965e6',
          600: '#1451b8',
          700: '#0f3d8a',
          800: '#0a285c',
          900: '#05142e',
        },
        secondary: {
          100: '#ffd5e1',
          200: '#ffabc3',
          300: '#ff80a5',
          400: '#ff5687',
          500: '#ff2c69',
          600: '#cc2354',
          700: '#991a3f',
          800: '#66122a',
          900: '#330915',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};