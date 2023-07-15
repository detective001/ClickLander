/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./components/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        Mahroon:'hsl(0, 100, 24)',
        brightRed:'hsl(356, 83, 41)',
        beige:'hsl(40, 91, 91)',
        navyBlue:'hsl(201, 100, 14)',
        oceanBlue:'hsl(203, 39, 57)',
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

