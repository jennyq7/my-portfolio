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
      },
      height: {
        "10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh"
      }
    },
  },
  plugins: [],
}

