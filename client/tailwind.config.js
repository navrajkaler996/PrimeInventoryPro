/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: "#EDEDED",
      white: "#FFF",
      black: "#000",
      primary: "#0FF8FF",
    },

    borderRadius: {
      primary: "10px",
    },
    extend: {
      height: {
        80: "80px",
        120: "120px",
      },
      width: {
        120: "120px",
      },
      boxShadow: {
        custom: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
    },
  },
  plugins: [],
};
