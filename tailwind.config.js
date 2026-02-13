/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c46a2d',
        black: '#000000',
        white: '#ffffff',
        secondaryGrey: '#b9b9b7',
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#2b2b2b',
          900: '#1a1a1a',
          950: '#0f0f0f',
        },
      },
      fontFamily: {
        heading: ['\"Abril Display\"', 'serif'],
        body: ['Kanit', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
      },
    },
  },
  plugins: [],
}
