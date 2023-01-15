/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '300px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily: {
        body: ["Inter"],
        poppins:['Poppins', 'sans-serif']
      },
      width: {
        1: "1px",
        18: "360px",
        310: "310px",
        370: "370px",
        430: "430px",
        450: "450px",
      },
      borderWidth: {
        1: "1px",
      },
      objectPosition: {
        370: "370px",
        450: "450px",
      },
      objectPosition: {},
      borderWidth: {
        1: "0.5px",
        2: "1px",
        3: "1.5px",
        4: "2px",
      },
      colors: {
        lightAsh: "#707070",
        almostBlack: "#222222",
        nameColor: "#101828",
        bgColor: "#F7F7F7",
        lightGray: "#F9F9F9",
        tableHeadBg: "#EAEAEA",
        darkAsh: "#D0D0D0",
        lighterAsh: "#F3F3F3",
        almostWhite: "#EAECF0",
        blackRussian: "#101010",
        shadeBlue: "#667085",
        success: "#027A48",
        lightPurple: "#F9F5FF",
        darkPurple: "#7F56D9",
        darkerBlue: "#344054",
        tintedAsh: "#808080",
        disabled: "#FAFAFA",
        darkGreen: "#014342",
        lightAsh: "#808080",
        inputBorder: "#D1D1D1",
        lightGreen: "#80B539",
        green: "#027A48",
        shadeGreen: "#ECFDF3",
        shadeRed: "#FEF3F2",
        shadeGray: "#F2F4F7",
        deepRed: "#B42318",
        selectLabel: "#555555",
        backText: "#707070",
        lightborder: "#E9E9E9",
        bgFafa: "#FAFAFA",
        kesAsh: "#EAEAEA",
        kesText: "#555555",
        percentAsh: "#B5B5B5",
        EAE: "#EAECF0",
        FFB: "#FFBD2E",
        mediumGreen: "#80B539",
        EFEF: "#EFEFEF",
        E5E5E5: "#E5E5E5",
        C4C4C4: "#c4c4c4",
        e6e6e6: "#E6E6E6",
        ipcolor2: "#DDDDDD",
        darkRed: "#C73C3C",
        lightYellow: "#FFFAEB",
        dashborder: "#D9D9D9",
      },
      boxShadow: {
        xmd: "0px 4px 40px 0px rgba(0, 0, 0, 0.15)",
        '3xl': "0px 0px 8px rgba(34, 34, 34, 0.07)",
      },
      gridTemplateColumns: {
        profileLayoutL: "auto 305px",
        profileLayoutM: "auto 278px",
      },
      borderRadius: {
        100: "100px",
        20: "20px",
        10: "10px",
      },
      backgroundColor: {
        lightPink: "rgba(255, 2, 2, 0.13)",
      },
      inset: {
        "135px": "-135px",
      },
      backgroundImage: {
        "percent-image": "url('../public/Ellipse 95.svg')",
      },
    },
  },
  plugins: [],
};