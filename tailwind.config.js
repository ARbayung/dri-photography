// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6347",    // Custom primary color (Tomato color)
        secondary: "#F1F1EF",  // Custom secondary color
        offwhite: "#F1F1EF",   // Custom off-white color
      },
    },
  },
  plugins: [],
};