/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#fff",

        black: "#000",
        blackHigh: "#303C58",
        blackSemi: "#45526E",
        blackLow: "#707D9B",

        themeMid: "#EFF7FF",
        themeSemi: "#DAEDFF",
        slateLow: "#E0E0E0",

        primaryColor: "#EF5777",

        secondaryColor: "#FFEBF0",

        coralLight: "#FF8155",

        orangeLight: "#FFE3D9",
        orangeColor: "#FF8155",

        infoColor: "#4FAAFD",
        infoHigh: "#3790FA",
        infoLight: "#E1EFFF",

        successColor: "#7FC767",
        successHigh: "#2CC672",
        successLight: "#D9FFCC",

        errorColor: "#FF6B6B",
        errorHigh: "#F93A6E",

        fadeColor: "#B8B8B8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
