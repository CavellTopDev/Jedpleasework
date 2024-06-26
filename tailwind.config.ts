/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/Booking/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "title-text": "#25282b",
        black: "#000",
        "gray-1": "#333",
        teal: {
          "100": "#1c725d",
          "200": "#1b725d",
        },
        "inactive-states": "#a0a4a8",
        "main-color": "#14b86e",
        "secondary-text": "#52575c",
        "main-dark": "#119c59",
        silver: "#c4c4c4",
        blueviolet: "#9747ff",
        darkslateblue: "rgba(15, 37, 82, 0)",
        lightsteelblue: {
          "100": "#c8dbff",
          "200": "rgba(175, 200, 248, 0)",
          "300": "rgba(200, 219, 255, 0)",
        },
        aliceblue: "rgba(239, 244, 254, 0)",
        lavender: "rgba(223, 233, 252, 0)",
        mediumslateblue: "rgba(27, 89, 248, 0)",
        slategray: "#7e818c",
        "neutral-blue-black-40": "#e4e5e7",
        "primary-pressed": "#0f2552",
        dimgray: {
          "100": "#505050",
          "200": "#4d4d4d",
        },
        "background-and-disabled-background-dark": "#f4f3f1",
        "background-and-disabled-background-for-buttons": "#faf9f7",
        gray: {
          "100": "#111",
          "200": "#09090a",
          "300": "rgba(17, 17, 17, 0.44)",
          "400": "rgba(255, 255, 255, 0.87)",
        },
        whitesmoke: "#f7f7f7",
        gainsboro: "#d9d9d9",
        aquamarine: {
          "100": "rgba(63, 230, 189, 0.12)",
          "200": "rgba(63, 229, 189, 0.12)",
        },
        "slate-900": "#0f172a",
        "slate-200": "#e2e8f0",
        "slate-600": "#475569",
        cadetblue: "#1f95af",
        "neutral-blue-black-10": "#fdfdfd",
      },
      spacing: {},
      fontFamily: {
        "small-3": "Montserrat",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        "body-1-medium": "Inter",
        lato: "Lato",
        manrope: "Manrope",
        "sf-pro-display": "'SF Pro Display'",
      },
      borderRadius: {
        "17xl": "36px",
        "8xs": "5px",
        "3xs-3": "9.3px",
        "4xl": "23px",
        "38xl-4": "57.4px",
        "9xs-9": "3.9px",
        "8xs-8": "4.8px",
        "21xl": "40px",
      },
    },
    screens: {
      'sm': '490px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1636px',
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      sm: "14px",
      "6xl": "25px",
      "11xl": "30px",
      "2xs": "11px",
      lg: "18px",
      "lg-7": "18.7px",
      "smi-9": "12.9px",
      "xl-1": "20.1px",
      xs: "12px",
      "4xl-1": "23.1px",
      "3xs-9": "9.9px",
      "smi-4": "12.4px",
      "3xs-2": "9.2px",
      "xs-5": "11.5px",
      "smi-5": "12.5px",
      "4xs-4": "8.4px",
      "2xs-4": "10.4px",
      "21xl": "40px",
      "3xs": "10px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
