/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundColor: {
        default: '#ffffff',
      },
      screens: {
        'xsm-max': { 'max': '378px' },
        'sm-max': { 'max': '768px' },
        'md-max': { 'max': '968px' },
      },
      scale: {
        '0': '0',
        '100': '1',
        '110': '1.1',
        '120': '1.2',  // Custom scale factor of 120%
        '150': '1.8',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

