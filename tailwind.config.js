/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            amarelo: '#E6C744',
            cinza: '#C2C8DA',

          }
      },
      screens:{
        '3x1': '1920px'
      }
    },
    plugins: [],
  } 