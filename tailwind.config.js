/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',

        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
      }),
      container: {
        padding: {
          DEFAULT: '1rem',
          lg: '3rem',
        },
      },
      fontFamily: {
        faithsig: 'Anton',
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
        primary: 'Playfair Display',
        body: 'Work Sans',
      },
      content: {
        services: 'url("/src/assets/img/outline-text/services.svg")',
      },
      zIndex: {
        '100': '100',
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}
