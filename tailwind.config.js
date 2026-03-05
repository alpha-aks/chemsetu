module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E3192',     // Chemsetu Blue
        secondary: '#00A651',   // Chemsetu Green
        accent: '#64ffda',      // Lighter green for accents
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(10,25,47,1) 0%, rgba(0,0,0,1) 100%)',
      },
    },
  },
  plugins: [],
}
