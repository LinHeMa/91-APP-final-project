/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      md: '768px',
      productPage: '843px',
      lg: '1094px',
      // => @media (min-width: 768px) { ... }
    },
    lineHeight: {
      'extra-loose': '2.5',
      12: '25.2px',
      19: '19px',
      24: '24px',
      30: '30px',
      40: '40px',
      48: '48px',
      80: '80px',
    },
    dropShadow: {
      sm: '0 -3px 6px rgba(0, 0, 0, 0.1)',
      caro: '0 0 10px #0003',
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
