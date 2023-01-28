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
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
        garamond: ["var(--font-garamond)"]
      },
      height: {
        empty: "calc(100vh - 108px)"
      }
    },
    colors: {
      ...defaultColors,
      ...{
        "tmi-yellow": "#EDAF22",
        "tmi-blue": "#2C317A",
        "tmi-white": "#FFFFFF",
        "tmi-gradient-blue": "#151738",
        "tmi-hover-gray": "#C5C5C5",
        "tmi-link-blue": "#434AA6"
      }
    }
  },
  plugins: []
};
