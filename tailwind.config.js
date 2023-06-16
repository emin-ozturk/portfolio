/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./images/background.jpg')",
        'futuristic': "url('./images/futuristic.jpg')",
      },
      colors: {
        'bg1': '#14141e',
        'bg2': '#1a1c29',
      },
      fontSize: {
        s: '0.75rem',
      }
    },
  },
  plugins: [],
}

