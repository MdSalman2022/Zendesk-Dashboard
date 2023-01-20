/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#76A700",

          "secondary": "#76B958",

          "accent": "#D6A5FF",

          "neutral": "#F5F5F5",

          "base-100": "#FBFBFB",

          "info": "#86D5E9",

          "success": "#98CA82",

          "warning": "#F4D125",

          "error": "#EF2540",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}