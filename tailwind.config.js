/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "near-black":{
          "300":"#676767",
          "500":"#3f4246"
        },
        "dark":{
          "100":"rgb(63 66 70/1)",
          "200":"rgb(103 103 103/1)"
        }
      },
      fontFamily:{
        "primary":"Graphik,ui-sans-serif,system-ui,sans-serif"
      },
      spacing: {
        'layout': '0rem 1.016rem',
        '11': '0.688rem',
        '40': '2.5rem',
        '61': '3.813rem',
        '182': '11.375rem',
      },
      backgroundImage: {
        'gradient': 'radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)',
        'hero': 'linear-gradient(#9092fb,#86b5ef,#7bdde2)',
        'stepFourGradient':"radial-gradient(50% 50% at 50% 50%,#7bdde2 0,rgba(127,208,231,0) 100%)"
      },
      fontSize: {
        '22': '1.375rem',
        '32': '2rem',
        '36': '2.25rem',
        '72': '4.5rem',
      },
      height: {
        '18': '1.125rem',
        '30': '2.1.875rem',
        '39': '2.438rem',
        '180': '11.25rem',
        '186': '11.625rem',
        '200': '12.5rem',
        '296': '18.5rem',
        '362.2': '22.641rem',
        '480': '30rem',
        '600': '37.5rem',
        '644': '40.25rem', 
        '910': '56.875rem', 
        '940': '58.75rem',
        '1280': '80rem',      
        '71%': '71%',
      },
      width: {
        '18': '1.125rem',
        '30': '2.1.875rem',
        '39': '2.438rem',
        '180': '11.25rem',
        '186': '11.625rem',
        '200': '12.5rem',
        '296': '18.5rem',
        '362.2': '22.641rem',
        '480': '30rem',
        '600': '37.5rem',
        '644': '40.25rem',
        '910': '56.875rem',
        '940': '58.75rem',
        '1280': '80rem',  
        '71%': '71%',
      }, 
      maxWidth: {
        '18': '1.125rem',
        '30': '2.1.875rem',
        '39': '2.438rem',
        '180': '11.25rem',
        '186': '11.625rem',
        '200': '12.5rem',
        '296': '18.5rem',
        '600': '37.5rem',
        '644': '40.25rem',
        '910': '56.875rem',
        '940': '58.75rem',
        '71%': '71%',
        '1280': '80rem',  
      },  
      lineHeight: {
        '28': '1.75rem',
        '44': '2.75rem',
      },  
      letterSpacing: {
        '0.02': '0.02em',
      },
      padding: {
        '34': '2.125rem',
        '36': '2.25rem',
        '96': '6rem',
      },
      blur: {
        '159': '9.983rem'
      },
      opacity: {
        '0.4': '0.4',
        '.9': '0.9'
      }
    },
  },
  plugins: [],
}