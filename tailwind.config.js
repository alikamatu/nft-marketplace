/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          orbitron: ['Orbitron', 'sans-serif'],
        },
        colors: {
          neonBlue: '#00f0ff',
          neonPurple: '#d400ff',
        },
      },
    },
    plugins: [],
  }