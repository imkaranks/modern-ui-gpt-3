/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          700: '#042C54',
          800: '#031B34',
          900: '#040C18'
        },
        'content': '#81AFDD',
        'subhead': '#FF8A71'
      },
      fontFamily: {
        'primary': ['Manrope', 'sans-serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
        'gradient-accent': 'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)'
      }
    },
  },
  plugins: [],
}

