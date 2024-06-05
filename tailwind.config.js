/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'pw-ui-',
  important: '.pw-ui',
  content: [
    './index.html',
    './lib/**/**/**/*.{css,scss}',
    './lib/**/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
