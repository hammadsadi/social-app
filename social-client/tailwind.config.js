import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dca54c",
      },
      fontFamily: {
        fontHr: "Playwrite HR, 'cursive'",
      },
    },
  },
  plugins: [daisyui],
};
