/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue" : "#072140",
        "primary-blue" : "#3070B3",
        "primary-gray" : "#E8ECEF",
        "primary-purple" : "#3070B3",
        "whitish-purple" : "#EFEDFC",
        "dark-orange" : "#EA7237",
        primary: {
          100: '#2F70B3',
          200: '#082140',
          300: '#3070B3',
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundColor:{
        "dark-blue":"#072140",
      },
      background: {
        'image-bg': 'url(../../public/images/enterprenuer.gif)',
      },
      fontSize: {
        2.1: "2rem",
        0.87: "0.875rem",
        2.625: "2.625rem",
        1.75: "1.75rem",
        8.125: "8.125rem",
        5.625: "5.625rem",
        1.375: "1.375rem",
      },

    },
  },
  plugins: [],
}