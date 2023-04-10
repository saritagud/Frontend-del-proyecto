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

        verdePrimario: 'var(--verdePrimario)',
        verdeSecundario: 'var(--verdeSecundario)',
        verdeComplementario: 'var(--verdeComplementario)',
        prymaryBg: 'var(--primaryBg)',
        neutralBg: 'var(--neutralBg)',
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
