// import konstaConfig config
const konstaConfig = require("konsta/config");

// wrap config with konstaConfig config
module.exports = konstaConfig({
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      // colors: {
      //   'page-ios-light': '#fff';
      //   'primary': {
      //     light: '#ff5676',
      //     DEFAULT: '#ff2d55',
      //     dark: '#ff0434',
      //   }
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
