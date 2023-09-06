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
        whiteLow: "#F6F6F6",

        "black-25": "rgba(0, 0, 0, 0.25)",
        "black-04": "rgba(0, 0, 0, 0.04)",
        black: "#000",
        blackHigh: "#303C58",
        blackSemi: "#45526E",
        blackLow: "#707D9B",

        blueColor: "#515EDB",
        blueLight: "#F0F1FF",

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

        warningColor: "#F2C963",

        successColor: "#7FC767",
        successHigh: "#2CC672",
        successMid: "#12AA58",
        successLow: "#EDFFF5",
        successLight: "#D9FFCC",

        errorColor: "#FF6B6B",
        errorHigh: "#F93A6E",

        fadeColor: "#B8B8B8",
        fadeLight: "#F6F6F6",
      },
      backgroundImage: {
        authBg: "url('./assets/images/bg.png')",
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
