/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: "'Inter', sans-serif",
        secondary: "'Marcellus', serif",
        inter: "'Inter', sans-serif",
        morcellus: "'Marcellus', serif",
      },
      colors: {
        primary: "#000000",
        secondary: "#E4C1B1",
        text: "#848484",
        grayBg: "#f1f1f1",
        overlay: "rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
