/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: "#DDD",
      white: "#FFF",
      black: "#000",
      primary: "#0FF8FF",
    },

    borderRadius: {
      custom: "1rem",
    },
    extend: {
      height: {
        80: "8rem",
        120: "12rem",
      },
      width: {
        120: "12rem",
      },
      boxShadow: {
        custom: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      keyframes: {
        "custom-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }, // Customize opacity values as needed
        },
      },
      animation: {
        "custom-pulse": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite", // Customize animation duration and timing function
      },
    },

    screens: {
      lg: "1275px",
      md: "768px",
    },
  },
  plugins: [],
};
