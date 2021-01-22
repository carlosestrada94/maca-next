module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#c0dddf",
          200: "#a6c8ce",
          300: "#65aeb5",
        },
      },
      fontFamily: {
        title: ["neuzeit-grotesk"],
        paragraph: ["Open Sans"],
        logo: ["Quicksand"],
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [],
};
