module.exports = {
  mode: "jit",
  purge: ["./*.html", "./src/**/*.js"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#0B0547",
        lightBlue: "#3975F2",
        darkBlue: "#0643C3",
        darkestBlue: "#07032F",
        orange: "#EEA153"
      },
      gridTemplateColumns: {
        testimonial: "4rem 1fr 1fr 4rem",
        header: "1fr 3fr 1fr",
        footer: "3fr 1fr 1fr 1fr"
      },
      screens: {
        "xs": "320px",
        "sm": "512px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1200px"
      }
    },
  },
  plugins: [],
}
