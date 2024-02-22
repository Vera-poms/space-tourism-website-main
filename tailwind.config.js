/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        24: "minmax(2rem,1fr) repeat(2, minmax(0,30rem)) minmax(2rem, 1fr)",
      },
      gridTemplateRows: {
        20: "min-content 1fr",
      },
    },
  },
  plugins: [],
};
