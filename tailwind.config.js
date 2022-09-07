const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: {
          50: "#ecebfa",
          100: "#d9d6f4",
          200: "#c7c2ef",
          300: "#b4aeea",
          400: "#a19ae5",
          500: "#8e85df",
          600: "#7b71da",
          700: "#695dd5",
          800: "#5648cf",
          900: "#4334ca"
      },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
