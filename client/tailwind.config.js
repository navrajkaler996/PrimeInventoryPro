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
      primary: "#8383EE",
      "primary-1": "#DCDCFA",
      btnPrimary: "#7FFE3C",
      success: "#AAFF00",
      error: "#FF0000",
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
        // custom: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        custom:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
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
