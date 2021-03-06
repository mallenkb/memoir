module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        bounce : 'bounce 4s linear infinite',
      },

      fontFamily: {
        body: ["Inter", "sans-serif"],
      },

      colors: {
        "cod-gray": {
          DEFAULT: "#000000",
          50: "#6E6E6E",
          100: "#646464",
          200: "#4F4F4F",
          300: "#3B3B3B",
          400: "#262626",
          500: "#0A0A0A",
          600: "#080707",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
