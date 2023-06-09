/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      sky: "#59B4D1",
      cider: "#D0935A",
      fern: "#54c689",
      white: "#ffff",
      black: "#000",
      cold: "#e1e8ed",
      purple: "#6278F7",
      green: "#57C278",
      blue: "#82CFFA",
      lime: "#A6D157",
      red: "#E06B69",
      pink: "#DB6EBF",
      yellow: "#FFBA05",
      orange: "#FF8A29",
      turquoise: "#95FFD4",
      transparent: "transparent",
    },
    textColor: {
      sky: "#59B4D1",
      cider: "#D0935A",
      fern: "#54c689",
      white: "#ffff",
      black: "#000",
      gray: "#F7F7F7",
      purple: "#6278F7",
      green: "#57C278",
      blue: "#82CFFA",
      lime: "#A6D157",
      red: "#E06B69",
      pink: "#DB6EBF",
      yellow: "#FFBA05",
      orange: "#FF8A29",
      turquoise: "#95FFD4",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      bebas: ["Bebas Neue", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
