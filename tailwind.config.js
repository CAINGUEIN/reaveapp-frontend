const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gotham", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        Black: "#000000",
        Anthracite: "#111111",
        DarkRock: "#1A1A1A",
        Rock: "#2A2A2A",
        LightRock: "#373737",
        Stone: "#444444",
        Gravel: "#808080",
        LightGrey: "#BEBEBE",
        Cloud: "#E5E5E5",
        White: "#FFFFFF",
        Blue: "#0066FF",
        Red: "#F34242",
        Green: "#00AE40"
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
      width: {
        input: "510px",
        imgAuthPAge: "720px",
        authPage: "1200px",
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "164": "41rem",
      },
      maxWidth: {
        authPage: "1200px",
      },
      borderRadius: {
        Large: '16px',
      },
      margin: {
        '18': '72px',
      },
      padding: {
        '18': '72px',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
