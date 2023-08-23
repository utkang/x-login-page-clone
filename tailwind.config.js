/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'tablet': '517px',
      'laptop': '999px',
      'desktop': '1920px',
    },

    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },

      colors: {
        'tw-white': 'rgb(231, 233, 234)',
        'tw-white-hover': 'rgba(231, 233, 234, 0.95)',
        'tw-black': 'rgba(0, 0, 0, 1)',
        'tw-black': 'rgba(0, 0, 0, 0.)',
        'tw-blue': 'rgba(29, 155, 240, 1)',
        'tw-blue-hover': 'rgba(29, 155, 240, 0.95)',
        'tw-blue-hover-2': 'rgba(29, 155, 240, 0.08)',
        'tw-dark-grey': 'rgb(83, 100, 113)',
        'google': '#3c4043',
        'hr': 'rgb(47, 51, 54)',
      },

      spacing: {
        logo: '23.75rem',
        82: '20.5rem',
        120: '28rem',
        128: '32rem',
      },

      height: {
        '400': '1px',
        'xlaptop': '88vh',
        'xdesktop': '92vh',
      },
      width: {
        '400': '1px',
      },

      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '72': '18rem',
        '80': '320px',
      },

      fontSize: {
        policy: '11px',
        '4xl': '2rem',
        '6xl': '4rem',
      },

    },
  },
  plugins: [],
}