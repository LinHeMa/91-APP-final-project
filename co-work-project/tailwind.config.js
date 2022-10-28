/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      md: '768px',
      // => @media (min-width: 768px) { ... }
    },
  },
  plugins: [],
};
