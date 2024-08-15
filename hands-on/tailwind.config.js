/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{jsx,tsx,js,html}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
