/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      md: '768px',
      // => @media (min-width: 768px) { ... }
    },
    dropShadow: {
      sm: '0 -3px 6px rgba(0, 0, 0, 0.1)',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
