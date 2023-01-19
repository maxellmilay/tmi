/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "tmi-yellow": "#EDAF22",
      "tmi-blue": "#2C317A",
    },
  },
  plugins: [],
};

