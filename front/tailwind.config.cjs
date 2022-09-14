/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/bg.png')",
        'nlw-gradient': 'linear-gradient(84.86deg, #9572FC 29.08%, #43E7AD 70.94%, #E1D55D 90.57%)',
        'game-shadow': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);'
      }
    },
  },
  plugins: [],
}
