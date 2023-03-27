const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--inter-font)", ...fontFamily.sans],
        serif: ["var(--inter-font)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
