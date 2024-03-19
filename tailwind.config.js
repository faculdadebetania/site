/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      poppins: ['var(--font-poppins)'],
      nunito: ['var(--font-nunito)'],
    },
    extend: {
      colors: {
        primary: '#080F1C',
        'primary-900': '#121E33',
        'primary-800': '#202E49',
        'primary-700': '#304160',
        secondary: '#fca311',
        'secondary-900': '#fcac29',
        'secondary-800': '#fdb541',
        'secondary-700': '#fdbf58',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
