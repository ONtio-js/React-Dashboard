/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
          secondaryColor: " #f9f7f6"
      },
      textColor:{
        primaryColor:" #272727",
        secondaryColor: " #ce620d"
      }
    },
  },
  plugins: [],
}

