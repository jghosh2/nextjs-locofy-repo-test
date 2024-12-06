/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "studio-darkmode-allwhite-ffffff": "#fff",
        gray: {
          "100": "#8e8e94",
          "200": "#191919",
          "300": "rgba(0, 0, 0, 0.4)",
          "400": "rgba(0, 0, 0, 0.23)",
          "500": "rgba(0, 0, 0, 0.6)",
          "600": "rgba(255, 255, 255, 0.2)",
        },
        aliceblue: "#f3f7fb",
        whitesmoke: {
          "100": "#f8f9fb",
          "200": "#eaeaea",
        },
        darkorange: "#dc880b",
        slategray: "#576074",
        darkslategray: {
          "100": "#434343",
          "200": "#424242",
          "300": "#303030",
          "400": "rgba(48, 48, 48, 0.87)",
        },
        cornflowerblue: {
          "100": "#4dabff",
          "200": "#1262af",
          "300": "#1262ae",
          "400": "rgba(18, 98, 175, 0.05)",
        },
        gainsboro: {
          "100": "#e0e0e0",
          "200": "rgba(226, 226, 226, 0.1)",
        },
        darkgray: "#999",
        yellowgreen: "#79ca00",
        gold: "#fdbf00",
        sandybrown: "#ff9b53",
        lightgray: "#cecece",
        black: "#000",
        orange: {
          "100": "#fba403",
          "200": "#f99a0e",
        },
        chocolate: "#c76600",
        "text-primary": "rgba(0, 0, 0, 0.87)",
        silver: "#bdbdbd",
        dimgray: {
          "100": "#646468",
          "200": "#616161",
          "300": "#57575d",
        },
        royalblue: "#457eff",
        lightslategray: "#7e8a97",
        "action-hover": "rgba(0, 0, 0, 0.04)",
      },
      spacing: {},
      fontFamily: {
        "typography-body-1": "Roboto",
        "baloo-bhai": "'Baloo Bhai'",
        inter: "Inter",
      },
      borderRadius: {
        "12xl": "31px",
        "3xs": "10px",
        "45xl": "64px",
        lgi: "19px",
        "19xl": "38px",
        "8xl": "27px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      lg: "18px",
      "11xl": "30px",
      "5xl": "24px",
      "3xl": "22px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "19xl": "38px",
      "4xl": "23px",
      mini: "15px",
      smi: "13px",
      xs: "12px",
      "42xl": "61px",
      "30xl": "49px",
      "18xl": "37px",
      sm: "14px",
      "23xl": "42px",
      "6xl": "25px",
      "15xl": "34px",
      "2xl": "21px",
      mid: "17px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq560: {
        raw: "screen and (max-width: 560px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
