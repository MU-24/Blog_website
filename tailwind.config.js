/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgray: "#242424",
        textBG: "rgba(255, 255, 255, 0.2)",
        columnGap: "20px",
      },
    },
  },
  plugins: [],
};
