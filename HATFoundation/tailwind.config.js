module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#F5F5F5",
        accent: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
