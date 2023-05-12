/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: 
  {
    screens: {
      'mob' : { 'min' : '320px' , 'max': '479px' },
      'xsm' : { 'min' : '480px' , 'max': '639px' },
      'sm'  : {'min': '640px', 'max': '767px'},
      'md'  : {'min': '768px', 'max': '1023px'},
      'lg'  : {'min': '1024px', 'max': '1279px'},
      'xl'  : {'min': '1280px', 'max': '1535px'},
      '2xl' : {'min': '1536px'},
    },
    extend: {  
      fontFamily: {
      'sans': [ 'Roboto', 'sans-serif'],
    },},
  },
  plugins: [],
}

