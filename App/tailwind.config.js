/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headingColor:"#120845",
        subheadingColor:"#7562e0",
        textColor:"#4a4468",
        iconsColor:"#cbcad8",
        whiteSmoke:"#F5F5F5"
      },
      boxShadow:{

      }
    },
  },
  plugins: [],
}

