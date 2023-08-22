/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "517px",
        md: "1017px",
        lg: "1280px",
      },
    },

    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },

      colors: {
        'tw-white': 'rgb(255, 255, 255)',
        'tw-black': 'rgb(0, 0, 0)',
        'tw-blue': 'rgb(29, 155, 240)',
        'tw-dark-grey': 'rgb(83, 100, 113)',
      },

      spacing: {
        128: '32rem',
      },

    },
  },
  plugins: [],
}