/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primaryBlue":"#00ccff",
        "blueBlack" : "#05242b",
        "blueLight" : "#04566a",
        "secondaryBlue" : "#e1fbff",
        "secondaryBlueBlack" : "#0097a7"
 
         
       }
    },
  },
  plugins: [],
}

