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
        "black-70": "rgba(18, 18, 18, 0.70)",
        black: "#000",
        blackHigh: "#303C58",
        blackSemi: "#45526E",
        blackLow: "#707D9B",

        blueColor: "#3498DB",
        blueHigh: "#3A4DF9",
        blueSemi: "#181A17",
        blueLight: "#F2F8FD",
        blueGrey: "#CED0FF",

        themeMid: "#F2F8FD",
        themeSemi: "#E3EFFB",

        slateLow: "#E0E0E0",
        slateReg: "#CFCFCF",

        primaryColor: "#EF5777",
        primaryLight: "#faf4f4",

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
        fadeHigh: "#9E9FA7",
        fadeLight: "#F6F6F6",
        fadeLow: "#E3E3E3",

        yellowGreenHigh: "#9BBB57",
        yellowGreen: "#EAFFC7",

        purpleHigh: "#A437FA",
        purple: "#F4E1FF",

        aquaHigh: "#44ADA7",
        aqua: "#CCFFF6",
      },
      backgroundImage: {
        authBg: "url('./assets/images/bg.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
