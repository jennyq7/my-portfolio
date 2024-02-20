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
      },
      width: {
        "10w": "10vw",
				"20w": "20vw",
        "25w": "25vw",
				"30w": "30vw",
				"40w": "40vw",
				"50w": "50vw",
				"60w": "60vw",
				"70w": "70vw",
				"80w": "80vw",
				"90w": "90vw",
				"100w": "100vw"
      }
    },
  },
  plugins: [],
}

