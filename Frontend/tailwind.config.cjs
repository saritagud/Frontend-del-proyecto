/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        verdeClaro: "#D0E6B5",
        verdeManzana: "#8FBF26",
        verdeOscuro: "#89A64B",
        verdeAmarillo: "#E2F2A7",
        grisClaro: "#A7A7A7",
        verdeOscuroFuerte: "#0B751C"
      },
      fontFamily: {
        signikaNegative: ["Signika Negative", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        principal: "url('./src/assets/img-principal.jpg')",
      },
    },
  },
  plugins: [],
};
