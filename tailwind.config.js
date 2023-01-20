const { fontFamily } = require("tailwindcss/defaultTheme");
const defaultColors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans]
      }
    },
    colors: {
      ...defaultColors,
      ...{
        "tmi-yellow": "#EDAF22",
        "tmi-blue": "#2C317A",
        "tmi-white": "#FFFFFF",
        "tmi-gradient-blue": "#151738"
      }
    }
  },
  plugins: []
};
