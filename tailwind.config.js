const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  theme: {
    extend: {
      gridTemplateRows: {
        dashboard: "repeat(4, minmax(202px, 1fr))",
      },
      gridTemplateCols: {
        dashboard: "repeat(8, minmax(202px, 1fr))",
      },
      fontFamily: {
        sans: ["Gotham", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        Black: "#000000",
        Anthracite: "#111111",
        DarkRock: "#1A1A1A",
        Rock: "#212121",
        LightRock: "#2A2A2A",
        Stone: "#404040",
        Gravel: "#808080",
        LightGrey: "#BEBEBE",
        Cloud: "#E5E5E5",
        White: "#FFFFFF",
        Blue: "#0066FF",
        Green: "#00AE40",
        Yellow: "#FFC700",
        Orange: "#FF9331",
        Red: "#F34242",
      },
      fontSize: {
        H1: "64px",
        H2: "32px",
        H3: "24px",
        H4: "20px",
        H5: "18px",
        H6: "16px",
        Body: "16px",
        Body2: "14px",
        caption: "12px",
      },
      height: {
        input: "510px",
        imgAuthPAge: "720px",
        authPage: "1200px",
        15: "3.75rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        164: "41rem",
        328: "82rem",
        modal: "500px",
      },
      width: {
        input: "510px",
        imgAuthPAge: "720px",
        authPage: "1200px",
        15: "3.75rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        164: "41rem",
        328: "82rem",
        modal: "500px",
      },
      maxWidth: {
        authPage: "1200px",
      },
      borderRadius: {
        Large: "16px",
      },
      margin: {
        18: "72px",
      },
      padding: {
        18: "72px",
      },
      backgroundImage: {
        img1: "url('/src/core/assets/img/1073_Opera_1_A.jpg')",
        img2: "url('/src/core/assets/img/2001_BEMOCS_Space_Park_Cosmic_Canyon_03.jpg')",
        img3: "url('/src/core/assets/img/BEMOCS_Fntclr_Screen_Print_A.jpg')",
        img4: "url('/src/core/assets/img/BEMOCS_LR_04_Countryside_00.jpg')",
        img5: "url('/src/core/assets/img/BEMOCS_Merkur_05.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
