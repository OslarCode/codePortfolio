/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#1f2937",
          dark: "#f3f4f6",
        },
        background: {
          light: "#f9f9f9",
          dark: "#171717",
        },
        text: {
          light: "#333333",
          dark: "#e5e7eb",
        },
      },
      fontFamily: {
        Playfair: ["'Playfair Display'", "sans-serif"],
        Madefor: ["'Wix Madefor Display'", "sans-serif"],
      },
      fontWeight: {
        thin: 400, // Define el peso de la fuente como "Thin"
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
