/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        foreground: '#ffffff',
        accent: '#ff3366',
        'accent-dark': '#cc0033',
        'card-bg': '#1a1a1a',
        'card-border': '#333333',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
