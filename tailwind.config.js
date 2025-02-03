// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cookie: ['Cookie', 'cursive'],
      },
      colors: {
        'custom-yellow': '#FFC80E',
      },
    },
  },
  plugins: [],
};
