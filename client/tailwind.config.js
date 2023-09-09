/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: "#EDEDED",
      white: "#FFF",
    },
    extend: {
      height: {
        110: "110px",
      },
    },
  },
  plugins: [],
};
