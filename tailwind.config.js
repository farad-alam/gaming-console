/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "serif"],
      },
      textStrokeWidth: {
        DEFAULT: "3px",
        sm: "0.5px",
        md: "2px",
        lg: "4px",
      },
    },
  },
  plugins: [],
};

