/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b3b3ff",
        textColor: "#000099",
        accentColor: "#efeafa",
        greyColor: "#F0F0F0"
      },
      fontFamily: {
      body: ["Titillium Web"]
      }
    },
  },
  plugins: [],
}

