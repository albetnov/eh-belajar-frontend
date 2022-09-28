/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8a70d6",
        shadow__primary: "#a386fc",
        secondary: "#e9e3ff",
        text: "#424040",
        background: "#fbfbfb",
        light__primary: "#8f74db",
        light__shadow__primary: "#b49dfa",
      },
      fontFamily: {
        lato: "Lato",
        dancing__script: "Dancing Script",
      },
    },
  },
  plugins: [],
};
