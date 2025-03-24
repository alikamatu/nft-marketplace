const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00f0ff',
        neonPurple: '#d400ff',
        lightBlue: '#40c4ff',
        "common-rarity": "#cccccc", // Gray for Common
        "rare-rarity": "#00ff99",   // Green for Rare
        "epic-rarity": "#ff00cc",   // Pink for Epic
        "legendary-rarity": "#ffd700", // Gold for Legendary
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
