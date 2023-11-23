/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        shi: 'inset #424242 0px 1px 0px 12px',
        mbl: 'inset #424242 0px 1px 0px 4px',
      },
      colors:{
        'bg-blue-900':'#2C2C2C',
        '50': '#F0F0FF',
        '400':'#09AFE6',
         900:'#202533', 
         1000:'#0F0F0F'
      },
      margin:{
        ma:'auto auto 16px auto',
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'sm': {'max': '598px'},
      // => @media (max-width: 598px) { ... }

      'xsm': {'max': '568px'},
      // => @media (max-width: 568px) { ... }
    },
  },
  plugins: [],
}
